import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedCard({ children, delay = 0, className = '' }: AnimatedCardProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-[40px] border border-[rgba(95,95,113,0.22)] bg-[#08070e] p-6 shadow-[inset_0px_0px_16px_0px_rgba(255,255,255,0.08)] transition-all ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -8,
        borderColor: 'rgba(0, 255, 178, 0.3)',
        transition: { duration: 0.3 }
      }}
    >
      {/* Hover glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[40px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 255, 178, 0.1) 0%, transparent 70%)',
        }}
      />
      
      {/* Animated border glow on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[40px]"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: '0 0 20px rgba(0, 255, 178, 0.2), inset 0 0 20px rgba(0, 255, 178, 0.1)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Floating particle on hover */}
      <motion.div
        className="pointer-events-none absolute right-4 top-4 h-1 w-1 rounded-full bg-[#00ffb2]"
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ 
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
          y: [-10, -30],
        }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.div>
  );
}
