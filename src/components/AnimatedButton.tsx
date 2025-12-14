import { motion } from 'motion/react';
import { useState, ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function AnimatedButton({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isPrimary = variant === 'primary';

  return (
    <motion.button
      className={`relative overflow-hidden rounded-[48px] px-8 py-3 font-['DM_Sans:Medium',sans-serif] text-[16px] transition-all ${
        isPrimary 
          ? 'bg-[#00ffb2] text-black shadow-[0px_0px_34px_0px_rgba(42,240,124,0.3)]' 
          : 'border border-[rgba(95,95,113,0.22)] bg-transparent text-[#f5f5f5]'
      } ${className}`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: isPrimary 
          ? '0px 0px 50px 0px rgba(42,240,124,0.5)' 
          : '0px 0px 30px 0px rgba(255,255,255,0.1)'
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
        style={{ opacity: isPrimary ? 0.3 : 0.1 }}
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Glow pulse on hover */}
      {isPrimary && (
        <motion.div
          className="absolute inset-0 rounded-[48px] bg-[#00ffb2]"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: [0, 0.2, 0] } : { opacity: 0 }}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
        />
      )}
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
