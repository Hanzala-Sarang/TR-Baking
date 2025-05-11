import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TestimonialSection from '../components/home/TestimonialSection';

const HomePage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'TR Baking Equipments - Premium Bakery Equipment';
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <TestimonialSection />
    </>
  );
};

export default HomePage;