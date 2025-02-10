import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500); // Give time for final animation
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
        theme === 'dark' ? 'bg-dark' : 'bg-white'
      }`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-64 relative">
        {/* Road */}
        <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary-600"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Truck */}
        <motion.div
          className="absolute -top-8"
          initial={{ x: '-20%' }}
          animate={{ x: `${progress - 20}%` }}
          transition={{ duration: 0.3 }}
        >
          <Truck className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-primary-600'}`} />
        </motion.div>
      </div>

      {/* Progress Text */}
      <motion.p
        className={`mt-8 text-lg font-medium ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
      >
        Loading... {progress}%
      </motion.p>
    </motion.div>
  );
}