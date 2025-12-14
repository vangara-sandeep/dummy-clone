import { motion } from 'motion/react';

interface AnimatedLogoProps {
  size?: number;
  className?: string;
}

export function AnimatedLogo({ size = 40, className = '' }: AnimatedLogoProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Outer ring */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          strokeDasharray="10 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffb2" />
            <stop offset="100%" stopColor="#abffe6" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Inner circle with glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#00ffb2] to-[#abffe6]"
        style={{ width: size * 0.6, height: size * 0.6 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(0, 255, 178, 0.5)',
            '0 0 40px rgba(0, 255, 178, 0.8)',
            '0 0 20px rgba(0, 255, 178, 0.5)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Center icon */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-black"
            style={{ width: size * 0.35, height: size * 0.35 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Orbiting particles */}
      {[0, 120, 240].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#00ffb2]"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-2px',
            marginTop: '-2px',
          }}
          animate={{
            x: Math.cos((angle * Math.PI) / 180) * (size * 0.5),
            y: Math.sin((angle * Math.PI) / 180) * (size * 0.5),
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.div>
  );
}
