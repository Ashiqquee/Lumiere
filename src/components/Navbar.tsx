import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-3' : 'bg-background/80 backdrop-blur-sm py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-10">
            <h1 className="text-2xl md:text-3xl font-playfair tracking-widest text-foreground">
              LUMIÈRE
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link font-light">Home</Link>
            <Link href="/" className="nav-link font-light">Collections</Link>
            <Link href="/" className="nav-link font-light">Necklaces</Link>
            <Link href="/" className="nav-link font-light">Earrings</Link>
            <Link href="/" className="nav-link font-light">Our Story</Link>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button aria-label="Search" className="nav-link">
              <FiSearch className="w-5 h-5" />
            </button>
            <button aria-label="Shopping Bag" className="nav-link relative">
              <FiShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center text-foreground p-2 rounded-md bg-primary/10 hover:bg-primary/20 transition z-50" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Using AnimatePresence for better animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white backdrop-blur-lg fixed top-[60px] left-0 right-0 shadow-lg border-t border-primary/10 z-40 overflow-hidden"
          >
            <div className="container-custom py-6">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="nav-link py-3 px-4 border-b border-foreground/10 hover:bg-primary/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/" 
                  className="nav-link py-3 px-4 border-b border-foreground/10 hover:bg-primary/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Collections
                </Link>
                <Link 
                  href="/" 
                  className="nav-link py-3 px-4 border-b border-foreground/10 hover:bg-primary/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Necklaces
                </Link>
                <Link 
                  href="/" 
                  className="nav-link py-3 px-4 border-b border-foreground/10 hover:bg-primary/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Earrings
                </Link>
                <Link 
                  href="/" 
                  className="nav-link py-3 px-4 border-b border-foreground/10 hover:bg-primary/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Story
                </Link>
                <div className="flex items-center space-x-6 pt-4 px-4">
                  <button aria-label="Search" className="nav-link text-primary flex items-center gap-2">
                    <FiSearch className="w-5 h-5" />
                    <span>Search</span>
                  </button>
                  <button aria-label="Shopping Bag" className="nav-link relative flex items-center gap-2 text-primary">
                    <FiShoppingBag className="w-5 h-5" />
                    <span>Cart</span>
                    <span className="ml-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 