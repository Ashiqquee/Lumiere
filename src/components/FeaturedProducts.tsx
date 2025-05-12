import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Aurora Diamond Necklace',
    description: 'Delicate 18K gold chain with suspended diamond pendant',
    price: 1295,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1887&auto=format&fit=crop',
    category: 'Necklaces'
  },
  {
    id: 2,
    name: 'Celestial Pearl Earrings',
    description: 'South sea pearls in a minimalist gold setting',
    price: 850,
    image: 'https://images.unsplash.com/photo-1682822749969-61a63203c501?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlYXJsJTIwZWFycmluZ3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Earrings'
  },
  {
    id: 3,
    name: 'Serenity Sapphire Necklace',
    description: 'Ethically sourced blue sapphire on white gold chain',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1844&auto=format&fit=crop',
    category: 'Necklaces'
  },
  {
    id: 4,
    name: 'Infinity Emerald Bracelet',
    description: 'Delicate bracelet with emerald accent in infinity design',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1887&auto=format&fit=crop',
    category: 'Bracelets'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FeaturedProducts = () => {
  return (
    <section className="section bg-background/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Featured Pieces</h2>
            <h3 className="text-3xl md:text-4xl font-playfair">Timeless Elegance</h3>
          </div>
          <Link href="/collections" className="mt-4 md:mt-0 text-primary hover:text-primary/70 transition-colors flex items-center">
            <span className="mr-2 text-sm uppercase tracking-wider">View All</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item}>
              <div className="group relative">
                <div className="aspect-[3/4] overflow-hidden bg-foreground/5 mb-4">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-xs px-3 py-1 rounded-full text-foreground/80">
                  {product.category}
                </div>
                
                <div className="px-1">
                  <h4 className="font-playfair text-lg mt-2 mb-1 transition-colors group-hover:text-primary">
                    {product.name}
                  </h4>
                  <p className="text-foreground/70 text-sm mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-lg">${product.price.toLocaleString()}</span>
                    <button className="text-primary hover:text-primary/80 transition-colors text-xs uppercase tracking-wider flex items-center">
                      <span>Shop Now</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 