import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Component1920WLight from './imports/1920WLight';
import { AnimatedNavbar } from './components/AnimatedNavbar';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY, scrollYProgress } = useScroll();
  
  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, -50]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#08070e]">
      {/* Progress bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-[#00ffb2] to-[#abffe6]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Animated Navbar */}
      <AnimatedNavbar />

      {/* Animated background gradient orbs */}
      <motion.div
        className="pointer-events-none fixed left-[-20%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[#00ffb2] opacity-5 blur-[120px]"
        animate={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
          scale: [1, 1.1, 1],
        }}
        transition={{
          x: { type: "spring", stiffness: 50, damping: 30 },
          y: { type: "spring", stiffness: 50, damping: 30 },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div
        className="pointer-events-none fixed right-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#abffe6] opacity-5 blur-[100px]"
        animate={{
          x: -mousePosition.x * 0.3,
          y: -mousePosition.y * 0.3,
          scale: [1, 1.2, 1],
        }}
        transition={{
          x: { type: "spring", stiffness: 30, damping: 30 },
          y: { type: "spring", stiffness: 30, damping: 30 },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      />

      {/* Additional ambient light at bottom */}
      <motion.div
        className="pointer-events-none fixed bottom-[-20%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[#00ffb2] opacity-[0.03] blur-[150px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Main content wrapper with entrance animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <Component1920WLight />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="pointer-events-none fixed bottom-8 left-1/2 z-40 -translate-x-1/2"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ 
            y: [0, 10, 0] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <div className="h-8 w-5 rounded-full border-2 border-white/20">
            <motion.div
              className="mx-auto mt-1.5 h-2 w-1 rounded-full bg-white/40"
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </div>
          <span className="font-['DM_Sans',sans-serif] text-xs text-white/40">Scroll</span>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed rounded-full bg-white/10"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ambient grid lines (subtle) */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#00ffb2 1px, transparent 1px), linear-gradient(90deg, #00ffb2 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>
    </div>
  );
}