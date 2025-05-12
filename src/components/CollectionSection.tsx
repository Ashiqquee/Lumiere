import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 1,
    name: 'Necklaces',
    description: 'Elegant statement pieces for any occasion',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1887&auto=format&fit=crop',
    link: '/'
  },
  {
    id: 2,
    name: 'Earrings',
    description: 'Delicate designs that frame your face perfectly',
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=1887&auto=format&fit=crop',
    link: '/'
  },
  {
    id: 3,
    name: 'Bracelets',
    description: 'Sophisticated accents for your wrist',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJhY2VsZXR8ZW58MHx8MHx8fDA%3D',
    link: '/'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CollectionSection = () => {
  return (
    <section className="section bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Our Collections</h2>
          <h3 className="text-3xl md:text-4xl font-playfair mb-6">Handcrafted with Precision</h3>
          <div className="w-20 h-px bg-primary mx-auto"></div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={item} className="group">
              <Link href={"/"} className="block">
                <div className="relative overflow-hidden h-[400px] mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-70"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-black">
                    <h4 className="text-xl md:text-2xl font-playfair mb-2">{category.name}</h4>
                    <p className="text-sm text-black/80 font-bold">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/" className="btn-outline inline-block">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection; 