import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PlaceholderNotice = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeNotice = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-4 right-4 z-40 max-w-sm bg-foreground text-background rounded-lg shadow-elegant overflow-hidden"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-playfair text-lg text-black">Image Notice</h3>
              <button 
                onClick={closeNotice}
                className="text-black/70 hover:text-black"
                aria-label="Close notice"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <p className="text-black/80 text-sm mb-3">
              This site uses placeholder images for demonstration purposes. In a production environment, these would be replaced with high-quality product photos.
            </p>
            <div className="flex justify-end">
              <button 
                onClick={closeNotice} 
                className="text-xs uppercase tracking-wider text-primary-light hover:text-primary-light/80 transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlaceholderNotice; 