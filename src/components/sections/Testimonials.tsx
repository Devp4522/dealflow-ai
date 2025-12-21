import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "MergerFlow cut our deal cycle by 35% and eliminated scheduling headaches. It's become indispensable for our M&A practice.",
    author: 'Priya Raghavan',
    title: 'Director, M&A',
    company: 'Global Investment Bank',
    avatar: 'PR',
  },
  {
    quote: "AI summaries reduced our due-diligence time by weeks. The document analysis is incredibly accurate and comprehensive.",
    author: 'Mark Lindstrom',
    title: 'Partner',
    company: 'Private Equity Firm',
    avatar: 'ML',
  },
  {
    quote: "Secure, auditable, and easy to integrate with our existing systems. The onboarding was seamless and support is excellent.",
    author: 'Sarah Kim',
    title: 'Head of Corporate Development',
    company: 'Fortune 500',
    avatar: 'SK',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
  },
};

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent uppercase tracking-widest mb-4 block"
          >
            Client Success
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mx-auto"
          >
            Trusted by deal-makers worldwide
          </motion.h2>
        </div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              className="testimonial-card relative"
            >
              <Quote className="w-8 h-8 text-accent/40 mb-4" />
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
