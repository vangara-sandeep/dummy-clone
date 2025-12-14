import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface CryptoData {
  name: string;
  symbol: string;
  price: string;
  change: number;
  icon: string;
}

const cryptoData: CryptoData[] = [
  { name: 'Bitcoin', symbol: 'BTC', price: '25,806', change: 2.45, icon: '₿' },
  { name: 'Ethereum', symbol: 'ETH', price: '1,645', change: -0.32, icon: 'Ξ' },
  { name: 'Solana', symbol: 'SOL', price: '131.8', change: -0.65, icon: 'S' },
  { name: 'Dash', symbol: 'DASH', price: '44.15', change: 1.71, icon: 'D' },
];

export function CryptoTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cryptoData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {cryptoData.map((crypto, index) => {
          if (index !== currentIndex) return null;
          
          return (
            <motion.div
              key={crypto.symbol}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#00ffb2] to-[#abffe6] font-bold text-black"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {crypto.icon}
              </motion.div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-['DM_Sans:Medium',sans-serif] text-[16px] text-[#f5f5f5]">
                    {crypto.name}
                  </span>
                  <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#d5d5d5]">
                    {crypto.symbol}
                  </span>
                </div>
                
                <div className="mt-1 flex items-center gap-3">
                  <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#d5d5d5]">
                    ${crypto.price}
                  </span>
                  <motion.span
                    className={`font-['DM_Sans',sans-serif] text-[14px] ${
                      crypto.change > 0 ? 'text-[#00ffb2]' : 'text-[#ff0066]'
                    }`}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    {crypto.change > 0 ? '+' : ''}{crypto.change}%
                  </motion.span>
                </div>
              </div>

              <motion.div
                className="h-8 w-16 overflow-hidden rounded"
                whileHover={{ scale: 1.05 }}
              >
                {/* Mini chart placeholder */}
                <svg viewBox="0 0 60 30" className="h-full w-full">
                  <motion.path
                    d={crypto.change > 0 
                      ? "M0,20 L15,15 L30,10 L45,12 L60,5"
                      : "M0,10 L15,12 L30,18 L45,15 L60,22"
                    }
                    stroke={crypto.change > 0 ? '#00ffb2' : '#ff0066'}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Indicator dots */}
      <div className="mt-4 flex justify-center gap-2">
        {cryptoData.map((_, index) => (
          <motion.button
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-[#00ffb2]'
                : 'w-1.5 bg-[rgba(95,95,113,0.4)]'
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
