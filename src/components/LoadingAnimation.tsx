import { motion } from 'motion/react';

export function LoadingAnimation() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#08070e]">
      <div className="relative">
        {/* Rotating rings */}
        <motion.div
          className="h-24 w-24 rounded-full border-4 border-transparent border-t-[#00ffb2]"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 h-24 w-24 rounded-full border-4 border-transparent border-b-[#abffe6]"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center logo/icon */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#00ffb2] to-[#abffe6]" />
        </motion.div>

        {/* Pulsing glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ffb2] blur-3xl"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Loading text */}
        <motion.p
          className="mt-8 font-['DM_Sans:Medium',sans-serif] text-center text-[16px] text-[#f5f5f5]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
