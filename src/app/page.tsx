'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CollectionSection from '@/components/CollectionSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import StorySection from '@/components/StorySection';
import TestimonialSection from '@/components/TestimonialSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} onLoadingComplete={handleLoadingComplete} />
      
      {showContent && (
        <main className="min-h-screen">
          <Navbar />
          <HeroSection />
          <CollectionSection />
          <FeaturedProducts />
          <StorySection />
          <TestimonialSection />
          <NewsletterSection />
          <Footer />
          <BackToTop />
        </main>
      )}
    </>
  );
}
