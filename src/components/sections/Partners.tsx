import { motion } from 'framer-motion';

const partners = [
  { name: 'Goldman Sachs', initials: 'GS' },
  { name: 'Morgan Stanley', initials: 'MS' },
  { name: 'Blackstone', initials: 'BX' },
  { name: 'McKinsey', initials: 'Mc' },
  { name: 'KKR', initials: 'KKR' },
  { name: 'Bain Capital', initials: 'BC' },
];

export function Partners() {
  return (
    <section className="py-16 border-y border-border/50 bg-secondary/30">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest"
        >
          Trusted by leading financial institutions
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <span className="font-serif font-semibold text-sm">{partner.initials}</span>
              </div>
              <span className="font-medium text-sm hidden sm:inline">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
