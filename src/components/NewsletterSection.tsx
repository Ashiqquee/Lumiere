import { motion } from 'framer-motion';

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-elegant overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Content */}
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Join Our Community</h3>
                <h2 className="text-2xl md:text-3xl font-playfair mb-4">Subscribe to Our Newsletter</h2>
                
                <p className="text-foreground/80 mb-6">
                  Be the first to know about new collections, exclusive offers, and jewelry care tips.
                </p>
                
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-sm text-foreground/70">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Your email address"
                      className="px-4 py-3 border border-foreground/20 focus:border-primary focus:outline-none bg-transparent"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2 mt-2">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1.5"
                    />
                    <label htmlFor="consent" className="text-sm text-foreground/70">
                      I agree to receive emails about Lumière's products, services, and offers.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </div>
            
            {/* Right side - Decorative */}
            <div className="relative bg-primary/20 hidden md:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block p-6 rounded-full bg-primary/10 mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-10 w-10 text-primary" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                  <div className="text-primary font-playfair text-lg max-w-xs px-6">
                    Join our exclusive circle for private events and early access to new collections
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-12 left-12 h-24 w-24 border border-primary/30 rounded-full"></div>
              <div className="absolute bottom-12 right-12 h-40 w-40 border border-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;