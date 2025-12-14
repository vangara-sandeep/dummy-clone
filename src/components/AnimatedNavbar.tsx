import { motion, useScroll, useTransform } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatedLogo } from './AnimatedLogo';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Supported', href: '#supported' },
  { label: 'FAQ', href: '#faq' },
];

export function AnimatedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(8, 7, 14, 0)', 'rgba(8, 7, 14, 0.95)']
  );
  
  const navBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-transparent"
      style={{ 
        backgroundColor: navBackground,
        backdropFilter: navBlur,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <AnimatedLogo size={32} />
          <span className="font-['DM_Sans:Medium',sans-serif] text-[24px] text-[#f5f5f5]">
            Cryptix
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative font-['DM_Sans',sans-serif] text-[16px] text-[#d5d5d5] transition-colors hover:text-[#f5f5f5]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-[#00ffb2] to-[#abffe6]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="hidden rounded-[48px] bg-[#00ffb2] px-6 py-2.5 font-['DM_Sans:Medium',sans-serif] text-[16px] text-black shadow-[0px_0px_34px_0px_rgba(42,240,124,0.3)] md:block"
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0px 0px 50px 0px rgba(42,240,124,0.5)'
          }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-[#f5f5f5]" />
          ) : (
            <Menu className="h-6 w-6 text-[#f5f5f5]" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 }
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="border-t border-[rgba(95,95,113,0.22)] bg-[rgba(8,7,14,0.98)] px-6 pb-6 pt-4 backdrop-blur-xl">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="block py-3 font-['DM_Sans',sans-serif] text-[16px] text-[#d5d5d5] transition-colors hover:text-[#f5f5f5]"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            className="mt-4 w-full rounded-[48px] bg-[#00ffb2] py-3 font-['DM_Sans:Medium',sans-serif] text-[16px] text-black"
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
