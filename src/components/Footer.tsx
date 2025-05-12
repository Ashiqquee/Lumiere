import Link from 'next/link';
import Image from 'next/image';
import { FiInstagram, FiTwitter, FiFacebook, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-playfair tracking-widest text-black">
                LUMIÈRE
              </h2>
            </Link>
            <p className="text-black/70">
              Handcrafted fine jewelry that celebrates life's most precious moments with timeless elegance.
            </p>
            <div className="flex space-x-4">
              <a  target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-primary-light transition-colors" aria-label="Instagram">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a  target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-primary-light transition-colors" aria-label="Twitter">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a  target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-primary-light transition-colors" aria-label="Facebook">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a  target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-primary-light transition-colors" aria-label="Pinterest">
                <FiGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-playfair text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-black/70 hover:text-primary-light transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black/70 hover:text-primary-light transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black/70 hover:text-primary-light transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black/70 hover:text-primary-light transition-colors">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black/70 hover:text-primary-light transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black/70 hover:text-primary-light transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-black font-playfair text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-black/70">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Fifth Avenue,Kannur, Kerala 670141</span>
              </li>
              <li className="flex items-start space-x-3 text-black/70">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@lumiere-jewelry.com</span>
              </li>
              <li className="flex items-start space-x-3 text-black/70">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 (111) 555-222</span>
              </li>
              <li className="flex items-start space-x-3 text-black/70">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon - Sat: 10am - 7pm</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-black font-playfair text-lg mb-4">Newsletter</h3>
            <p className="text-black/70 mb-4">
              Subscribe to receive updates on new collections and exclusive offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 focus:border-primary-light outline-none text-black placeholder:text-black/50"
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-primary text-black hover:bg-primary/90 transition-colors uppercase tracking-wider text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black/60 text-sm mb-4 md:mb-0">
              © 2023 Lumière. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/" className="text-black/60 hover:text-black text-sm">
                Privacy Policy
              </Link>
              <Link href="/" className="text-black/60 hover:text-black text-sm">
                Terms of Service
              </Link>
              <Link href="/" className="text-black/60 hover:text-black text-sm">
                Shipping & Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 