import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Partners } from '@/components/sections/Partners';
import { Features } from '@/components/sections/Features';
import { Showcase } from '@/components/sections/Showcase';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MergerFlow.ai — Automate M&A workflows with multi-agent AI</title>
        <meta 
          name="description" 
          content="MergerFlow.ai automates investment banking and M&A workflows — scheduling, due diligence, secure data rooms, and analytics — for faster, lower-risk deals. Start free or book a demo." 
        />
        <meta property="og:title" content="MergerFlow.ai — Automate M&A workflows with multi-agent AI" />
        <meta property="og:description" content="End-to-end deal orchestration powered by multi-agent AI. Automate scheduling, due diligence, and pipeline analytics." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mergerflow.ai" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Partners />
          <Features />
          <Showcase />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
