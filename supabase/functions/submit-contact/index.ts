import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitCache = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 submissions per minute per IP

function checkRateLimit(ip: string): { allowed: boolean; retryAfterMs?: number } {
  const now = Date.now();
  const record = rateLimitCache.get(ip);
  
  if (!record || now >= record.resetAt) {
    // Start new window
    rateLimitCache.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, retryAfterMs: record.resetAt - now };
  }
  
  // Increment count
  record.count++;
  return { allowed: true };
}

function getClientIP(req: Request): string {
  // Check common headers for client IP
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIP = req.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  return "unknown";
}

// Validation functions
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .substring(0, 5000); // Hard limit
}

interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  message?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = getClientIP(req);
    const rateCheck = checkRateLimit(clientIP);
    
    if (!rateCheck.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            "Content-Type": "application/json",
            "Retry-After": String(Math.ceil((rateCheck.retryAfterMs || 60000) / 1000))
          } 
        }
      );
    }
    const body: ContactSubmission = await req.json();
    
    // Sanitize all inputs
    const name = sanitizeInput(body.name || '');
    const email = sanitizeInput(body.email || '');
    const company = sanitizeInput(body.company || '');
    const message = body.message ? sanitizeInput(body.message) : null;

    // Validation
    const errors: string[] = [];

    if (!name || name.length < 1) {
      errors.push("Name is required");
    } else if (name.length > 100) {
      errors.push("Name must be less than 100 characters");
    }

    if (!email || email.length < 1) {
      errors.push("Email is required");
    } else if (!isValidEmail(email)) {
      errors.push("Invalid email format");
    } else if (email.length > 255) {
      errors.push("Email must be less than 255 characters");
    }

    if (!company || company.length < 1) {
      errors.push("Company is required");
    } else if (company.length > 200) {
      errors.push("Company must be less than 200 characters");
    }

    if (message && message.length > 2000) {
      errors.push("Message must be less than 2000 characters");
    }

    if (errors.length > 0) {
      return new Response(
        JSON.stringify({ error: errors.join(", ") }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert validated data
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        company,
        message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "Invalid request" }),
      { 
        status: 400, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
