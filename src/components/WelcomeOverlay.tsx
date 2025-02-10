import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface WelcomeOverlayProps {
  show: boolean;
  onComplete: () => void;
}

export function WelcomeOverlay({ show, onComplete }: WelcomeOverlayProps) {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onAnimationComplete={onComplete}
          style={{
            backgroundImage: 'url("https://i.postimg.cc/90B7cZKz/map-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay gradient */}
          <div className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-black/90 to-black/80' 
              : 'bg-gradient-to-r from-white/90 to-white/80'
          }`} />

          <motion.div
            className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className={`inline-block mb-4 sm:mb-6 p-3 sm:p-4 rounded-2xl ${
                theme === 'dark' 
                  ? 'bg-golden-900/30 backdrop-blur-sm' 
                  : 'bg-primary-500/30 backdrop-blur-sm'
              }`}
            >
              <motion.div
                className={`p-4 sm:p-6 rounded-xl ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-golden-900/80 to-golden-800/80' 
                    : 'bg-gradient-to-r from-primary-600/90 to-primary-500/90'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.h1
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${
                    theme === 'dark' ? 'text-golden-400' : 'text-white'
                  }`}
                >
                  TruckerBid
                </motion.h1>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-2 sm:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.p
                className={`text-xl sm:text-2xl md:text-3xl font-medium ${
                  theme === 'dark' 
                    ? 'text-golden-200' 
                    : 'text-gray-800'
                } text-shadow-lg max-w-2xl mx-auto`}
              >
                Your Trusted Logistics Partner in India
              </motion.p>
              <motion.p
                className={`text-base sm:text-lg md:text-xl ${
                  theme === 'dark' 
                    ? 'text-golden-300' 
                    : 'text-gray-700'
                } max-w-2xl mx-auto`}
              >
                Connecting businesses with reliable carriers across the nation
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}