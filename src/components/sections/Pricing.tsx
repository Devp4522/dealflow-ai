import { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Award, Building, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const plans = [
  {
    name: 'Startup',
    icon: Rocket,
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: 'For small teams running occasional deals. Includes core scheduling & analytics.',
    features: [
      'Up to 5 team members',
      '10 active deals',
      'Basic scheduling automation',
      'Standard analytics dashboard',
      'Email support',
    ],
    cta: 'Upgrade',
    popular: false,
  },
  {
    name: 'Pro',
    icon: Award,
    monthlyPrice: 699,
    yearlyPrice: 559,
    description: 'For teams managing recurring deal flow & advanced analytics.',
    features: [
      'Up to 25 team members',
      'Unlimited deals',
      'AI due diligence assist',
      'Advanced pipeline analytics',
      'Custom M&A playbooks',
      'Priority support',
    ],
    cta: 'Upgrade',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Building,
    monthlyPrice: 9999,
    yearlyPrice: 7999,
    description: 'Custom SLAs, advanced integrations, dedicated onboarding.',
    features: [
      'Unlimited team members',
      'Unlimited deals',
      'Full AI agent suite',
      'Custom integrations',
      'SOC2 & compliance reports',
      'Dedicated success manager',
      '24/7 phone support',
    ],
    cta: 'Book a Demo',
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }
  },
};

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent uppercase tracking-widest mb-4 block"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mx-auto"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            Choose the plan that fits your deal flow.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <span className={`text-sm ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              aria-label="Toggle annual billing"
            />
            <span className={`text-sm ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
            </span>
            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
              Save 20%
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`pricing-card relative flex flex-col h-full ${plan.popular ? 'ring-2 ring-accent' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <plan.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-medium text-primary-foreground">
                  {plan.name}
                </h3>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-serif font-semibold text-primary-foreground">
                  ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-primary-foreground/60 text-sm"> / month</span>
              </div>

              <p className="text-primary-foreground/70 text-sm mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-primary-foreground/80">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full mt-auto ${
                  plan.popular
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                    : 'bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border border-primary-foreground/20'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-muted-foreground"
        >
          Not sure which plan?{' '}
          <a href="#contact" className="text-primary underline underline-offset-2 hover:no-underline">
            Request a personalized demo
          </a>
        </motion.p>
      </div>
    </section>
  );
}
