import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="https://images.unsplash.com/photo-1579500341289-b11986f2efd1?q=80&w=2070&auto=format&fit=crop"
          alt="Jewelry crafting process" 
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-foreground/70"></div>
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-black">
            <h2 className="text-sm tracking-[0.3em] uppercase text-primary-light mb-4">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-playfair mb-6">Crafted with Passion Since 2020</h3>
            
            <div className="space-y-4 mb-8">
              <p className="leading-relaxed">
                Founded on a passion for beauty and precision, Lumière was born from a simple belief: that jewelry should be as unique as the person wearing it.
              </p>
              <p className="leading-relaxed">
                Our master artisans combine generations of traditional craftsmanship with modern design sensibilities, creating pieces that transcend fleeting trends.
              </p>
              <p className="leading-relaxed">
                Each piece in our collection is handcrafted using ethically sourced materials and gemstones, ensuring that beauty never comes at the expense of our values.
              </p>
            </div>
            
            <Link href="/" className="btn-outline text-black border-white hover:bg-white/10 inline-block">
              Discover Our Craftsmanship
            </Link>
          </div>
          
          <div className="relative">
            <div className="aspect-square relative z-10 rounded-lg overflow-hidden shadow-elegant">
              <Image 
                src="https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?q=80&w=1887&auto=format&fit=crop"
                alt="Jewelry craftsmanship detail" 
                fill
                className="object-cover object-center"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-[-30px] right-[-30px] md:top-[-50px] md:right-[-50px] h-40 w-40 md:h-64 md:w-64 border border-primary-light/20 rounded-full"></div>
            <div className="absolute bottom-[-20px] left-[-20px] md:bottom-[-30px] md:left-[-30px] h-32 w-32 md:h-48 md:w-48 border border-primary-light/30 rounded-full"></div>
            
            {/* Stats */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm text-foreground p-4 rounded-lg shadow-soft">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div>
                  <p className="text-3xl font-playfair text-primary">12</p>
                  <p className="text-xs uppercase tracking-wider mt-1">Years</p>
                </div>
                <div>
                  <p className="text-3xl font-playfair text-primary">100+</p>
                  <p className="text-xs uppercase tracking-wider mt-1">Designs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;