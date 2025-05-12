import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ isLoading, onLoadingComplete }: LoadingScreenProps) => {
  const [showLoader, setShowLoader] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      // Small delay before hiding loader completely
      const timer = setTimeout(() => {
        setShowLoader(false);
        onLoadingComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <motion.h1
                className="text-3xl md:text-4xl font-playfair tracking-widest text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                LUMIÈRE
              </motion.h1>
            </div>
            
            <motion.div 
              className="relative h-0.5 w-48 bg-foreground/10 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="absolute top-0 left-0 h-full bg-primary"
                initial={{ width: '0%' }}
                animate={isLoading ? { width: ['0%', '100%'] } : { width: '100%' }}
                transition={{ 
                  duration: isLoading ? 3 : 0.5, 
                  ease: 'easeInOut',
                  times: isLoading ? [0, 1] : [0],
                }}
              />
            </motion.div>
            
            <motion.p
              className="mt-4 text-foreground/60 text-sm uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Fine Jewelry Collection
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 