import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative bg-amber-50 pt-32 pb-16 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-amber-900">
              Empowering Bakers with <span className="text-amber-600">Premium Equipment</span>
            </h1>
            <p className="text-lg text-neutral-700 mb-8 max-w-lg">
              We provide high-quality bakery equipment for professional bakers and enthusiasts. 
              From industrial mixers to precision baking tools, we have everything you need to create perfect baked goods.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button className="px-8">
                  Explore Products <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Professional bakery equipment" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;