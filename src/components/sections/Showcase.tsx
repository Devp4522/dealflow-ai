import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import dashboardImage from '@/assets/dashboard-hero.png';

const highlights = [
  'Multi-agent AI orchestrates complex deal workflows',
  'Real-time collaboration with version control',
  'Automated document analysis and risk flagging',
  'Customizable M&A playbooks and templates',
  'Enterprise-grade security with SOC2 compliance',
  'Seamless integration with your existing tools',
];

export function Showcase() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/10 rounded-2xl blur-2xl" />
            <img
              src={dashboardImage}
              alt="MergerFlow.ai platform analytics dashboard"
              className="relative rounded-xl shadow-xl border border-border/30 w-full"
              loading="lazy"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-widest mb-4 block">
              Why MergerFlow
            </span>
            <h2 className="section-title">
              Built for the way modern deal teams work
            </h2>
            <p className="section-subtitle mb-8">
              From first pitch to close, MergerFlow.ai streamlines every stage of the M&A lifecycle with intelligent automation.
            </p>

            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-foreground/90">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
