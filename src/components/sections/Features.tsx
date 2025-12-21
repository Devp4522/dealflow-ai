import { motion } from 'framer-motion';
import { 
  Calendar, 
  Brain, 
  BarChart3, 
  Shield, 
  Users, 
  Plug,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Automated Deal Scheduling',
    description: 'Auto-schedule meetings, reminders, and review cycles across stakeholders and time zones.',
    link: 'See screenshot',
  },
  {
    icon: Brain,
    title: 'AI Due Diligence Assist',
    description: 'Multi-agent AI summarizes data-room documents, flags risk signals, and auto-creates diligence checklists.',
    link: 'See screenshot',
  },
  {
    icon: BarChart3,
    title: 'Live Pipeline Analytics',
    description: 'Real-time dashboards and forecasts to prioritize deals and track KPIs across your portfolio.',
    link: 'See screenshot',
  },
  {
    icon: Shield,
    title: 'Secure Data Rooms',
    description: 'Enterprise-grade encryption, granular permissions, and immutable audit trails for complete compliance.',
    link: 'See screenshot',
  },
  {
    icon: Users,
    title: 'Collaboration & Templates',
    description: 'Pre-built M&A playbooks, comment threads, and versioned documents for seamless team coordination.',
    link: 'See screenshot',
  },
  {
    icon: Plug,
    title: 'Powerful Integrations',
    description: 'Connect Slack, Google Calendar, Salesforce, DocuSign, and major financial data providers.',
    link: 'See screenshot',
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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }
  },
};

export function Features() {
  return (
    <section id="products" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent uppercase tracking-widest mb-4 block"
          >
            Platform Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mx-auto"
          >
            Everything you need to close deals faster
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            Our multi-agent AI platform handles the tedious work so your team can focus on high-value advisory.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="feature-card group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
              >
                {feature.link}
                <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
