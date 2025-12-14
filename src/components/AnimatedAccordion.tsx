import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AnimatedAccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function AnimatedAccordion({ items, className = '' }: AnimatedAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        
        return (
          <motion.div
            key={index}
            className="overflow-hidden rounded-[24px] border border-[rgba(95,95,113,0.22)] bg-[#08070e]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              borderColor: 'rgba(0, 255, 178, 0.2)',
            }}
          >
            <motion.button
              className="flex w-full items-center justify-between p-6 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-['DM_Sans:Medium',sans-serif] pr-4 text-[18px] text-[#f5f5f5]">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="h-5 w-5 text-[#00ffb2]" />
              </motion.div>
            </motion.button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[rgba(95,95,113,0.22)] px-6 pb-6 pt-4">
                    <motion.p
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-['DM_Sans',sans-serif] text-[16px] leading-[24px] text-[#d5d5d5]"
                    >
                      {item.answer}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
