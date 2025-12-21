import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dashboardImage from '@/assets/dashboard-hero.png';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="hero-glow top-1/4 left-1/2 -translate-x-1/2" />
      <div className="hero-glow bottom-0 left-1/4 opacity-50" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
              <span className="text-sm font-medium text-foreground/80">
                Trusted by 50+ Investment Banks
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] mb-6">
              Automating{' '}
              <span className="text-gold">Investment Banking</span>
              {' '}&amp; M&A workflows
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              End-to-end deal orchestration — automate scheduling, due diligence, 
              pipeline analytics, and collaboration so your team moves faster with less risk.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-cta group">
                Start for free
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="btn-outline group">
                <Play className="mr-2 w-4 h-4" />
                Request a demo
              </Button>
            </div>

            {/* Social Proof Quick Stats */}
            <div className="flex items-center gap-8 justify-center lg:justify-start mt-12 pt-8 border-t border-border/50">
              <div>
                <p className="text-2xl font-serif font-semibold text-foreground">35%</p>
                <p className="text-sm text-muted-foreground">Faster Deal Cycles</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-serif font-semibold text-foreground">$2.4B+</p>
                <p className="text-sm text-muted-foreground">Deals Managed</p>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-2xl font-serif font-semibold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">M&A Teams</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/10 rounded-2xl blur-3xl transform scale-110" />
            
            <div className="relative">
              <img
                src={dashboardImage}
                alt="MergerFlow.ai Dashboard - Investment Banking and M&A workflow automation platform"
                className="rounded-xl shadow-2xl border border-border/20 w-full animate-float"
                loading="eager"
              />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-sm">+47%</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Deal Velocity</p>
                    <p className="text-xs text-muted-foreground">vs. last quarter</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
