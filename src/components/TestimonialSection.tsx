import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Anderson',
    title: 'Designer',
    quote: "The craftsmanship of my Lumière necklace is exquisite. It's become my signature piece for both special occasions and everyday elegance.",
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 2,
    name: 'James Wilson',
    title: 'Architect',
    quote: "I was looking for the perfect engagement ring, and Lumière's custom design service exceeded all of my expectations. She said yes!",
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 3,
    name: 'Olivia Thompson',
    title: 'Art Director',
    quote: 'The attention to detail in each piece is remarkable. My earrings from the Celestial collection receive compliments wherever I go.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    rating: 5
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, []);
  
  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="section bg-foreground text-background py-20 md:py-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-[0.3em] uppercase text-primary-light mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-playfair text-black mb-6">Our Clients' Experience</h3>
          <div className="w-20 h-px bg-primary-light mx-auto"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Quote icon */}
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
            </svg>
          </div>
          
          {/* Testimonial slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="text-center">
                    <div className="relative h-20 w-20 mx-auto mb-6">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        fill
                        className="object-cover rounded-full border-2 border-primary"
                      />
                    </div>
                    
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-light" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl font-light text-black mb-6 italic max-w-2xl mx-auto">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div>
                      <p className="font-playfair text-lg text-black">{testimonial.name}</p>
                      <p className="text-black/70 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? 'w-8 bg-primary' : 'w-2 bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full md:-translate-x-12 text-black/70 hover:text-black transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full md:translate-x-12 text-black/70 hover:text-black transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 