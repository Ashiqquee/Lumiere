import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80 z-10"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-full md:pt-20">
          {/* Text Content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-4">
              Timeless Elegance
            </h2>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light leading-tight mb-6">
              Discover Our Exquisite Collection
            </h1>
            
            <p className="text-lg md:text-xl font-light mb-8 text-foreground/80 max-w-lg">
              Handcrafted with passion and precision, our fine jewelry pieces embody luxury and sophistication for life's most precious moments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link 
                href="/" 
                className="btn-primary"
              >
                Explore Collection
              </Link>
              <Link 
                href="/" 
                className="btn-outline"
              >
                Our Story
              </Link>
            </div>
          </motion.div>

          {/* Featured Jewelry Image */}
          <motion.div 
            className="relative hidden md:block h-[500px] w-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-elegant">
              <Image 
                src="https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?q=80&w=1974&auto=format&fit=crop"
                alt="Featured luxury jewelry" 
                fill
                priority
                className="object-cover object-center"
              />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-50"></div>
            </div>

            {/* Floating circle decorations */}
            <div className="absolute -top-12 -right-12 w-40 h-40 border border-primary/20 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 border border-primary/30 rounded-full"></div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span className="text-foreground/70 text-sm mb-2">Discover More</span>
          <div className="w-px h-8 bg-primary/50"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 