import { motion } from 'motion/react';
import { useState } from 'react';
import Component1920WLight from '../imports/1920WLight';

export function EnhancedCryptixWebsite() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full">
      {/* Animated overlay for the entire component */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Component1920WLight />
      </motion.div>

      {/* Hero section animations overlay */}
      <div className="pointer-events-none absolute left-0 right-0 top-0">
        {/* Animated headline words */}
        <motion.div
          className="relative mx-auto mt-[200px] text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-[82px] leading-[90px] text-[#f5f5f5]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Individual word animations would go here */}
          </motion.h1>
        </motion.div>

        {/* CTA Button with enhanced hover */}
        <motion.div
          className="pointer-events-auto absolute left-1/2 top-[480px] -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.button
            className="relative overflow-hidden rounded-[48px] bg-[#00ffb2] px-8 py-3 shadow-[0px_0px_34px_0px_rgba(42,240,124,0.3)]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0px 0px 50px 0px rgba(42,240,124,0.5)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              initial={{ x: '-100%' }}
              animate={isHovered ? { x: '100%' } : { x: '-100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 font-['DM_Sans:Medium',sans-serif] text-[16px] text-black">
              Get started now
            </span>
          </motion.button>
        </motion.div>

        {/* Dashboard preview with subtle float animation */}
        <motion.div
          className="pointer-events-none absolute left-[368px] right-[368px] top-[850px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1, 
            y: 0,
          }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            {/* Dashboard container - the actual dashboard is rendered by Component1920WLight */}
          </motion.div>
        </motion.div>
      </div>

      {/* Feature cards with stagger animation */}
      <div className="absolute left-0 right-0 top-[1800px]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-8 md:grid-cols-4">
          {[
            { title: 'Instant Setup', delay: 0 },
            { title: 'Global Access', delay: 0.1 },
            { title: 'Optimized Fees', delay: 0.2 },
            { title: 'Premium Design', delay: 0.3 },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Feature card content rendered by Component1920WLight */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Accordion with animations */}
      <motion.div
        className="absolute left-0 right-0 top-[3200px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* FAQ content rendered by Component1920WLight */}
      </motion.div>

      {/* Scroll-triggered animations for various sections */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Animated glow effects */}
        <motion.div
          className="absolute left-1/2 top-[800px] h-[400px] w-[1000px] -translate-x-1/2 rounded-full bg-[#00ffb2] opacity-5 blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}
