import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How does the free trial work?',
    answer: 'All plans include a 14-day free trial with full access to features. No credit card required to start. At the end of your trial, you can choose to upgrade to a paid plan or your account will be downgraded to limited access.',
  },
  {
    question: 'What security standards do you follow?',
    answer: 'MergerFlow is SOC2 Type II certified and uses enterprise-grade encryption (AES-256 at rest, TLS 1.3 in transit). We maintain strict access controls, regular security audits, and comply with GDPR and CCPA regulations.',
  },
  {
    question: 'Can I integrate with our CRM and calendar?',
    answer: 'Yes! We offer native integrations with Salesforce, HubSpot, Google Calendar, Microsoft Outlook, Slack, DocuSign, and major financial data providers. Our API also allows custom integrations with your existing tech stack.',
  },
  {
    question: 'Is there onboarding and training for enterprise?',
    answer: 'Absolutely. Enterprise customers receive dedicated onboarding with a success manager, custom training sessions for your team, and 24/7 priority support. We also provide documentation, video tutorials, and best practices guides.',
  },
  {
    question: 'Do you provide custom playbooks for complex deals?',
    answer: 'Yes, we offer pre-built M&A playbooks for various deal types (tech acquisitions, carve-outs, cross-border deals), and Enterprise customers can work with our team to create custom playbooks tailored to their specific workflows.',
  },
  {
    question: 'How does the AI due diligence feature work?',
    answer: 'Our multi-agent AI system analyzes documents uploaded to your data room, extracting key terms, identifying risks, and generating summary reports. It cross-references findings against industry benchmarks and regulatory requirements to highlight potential issues.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'You own your data. Upon cancellation, you can export all deal information, documents, and reports. We retain data for 30 days post-cancellation before permanent deletion, unless you request immediate removal.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-custom max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent uppercase tracking-widest mb-4 block"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mx-auto"
          >
            Frequently asked questions
          </motion.h2>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-muted-foreground"
        >
          Still have questions?{' '}
          <a href="#contact" className="text-primary underline underline-offset-2 hover:no-underline">
            Contact our team
          </a>
        </motion.p>
      </div>
    </section>
  );
}
