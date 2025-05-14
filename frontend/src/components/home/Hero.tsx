import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-amber-50 pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-[120px] opacity-60 -z-10"></div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-amber-900">
              Empowering Bakers with <br />
              <span className="bg-gradient-to-r from-amber-600 to-yellow-400 text-transparent bg-clip-text">
                Premium Equipment
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-neutral-700 mb-8 max-w-lg">
              We provide high-quality bakery equipment for professional bakers and enthusiasts. 
              From industrial mixers to precision tools, everything you need to create perfect baked goods.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button className="px-6 py-3 flex items-center gap-2">
                  Explore Products <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" className="px-6 py-3">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <img 
              src="https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Professional bakery equipment" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-28 overflow-hidden">
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
