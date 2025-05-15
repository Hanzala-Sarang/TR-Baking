import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const buttonRef = useRef(null);

  return (
    <section className="relative bg-amber-50 pt-20 sm:pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* Background Decorative Blob with Animation */}
      <motion.div
        initial={{ x: '20%', y: '-20%', opacity: 0 }}
        animate={{ x: '0%', y: '0%', opacity: 0.6 }}
        transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
        className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-amber-100 rounded-full blur-[120px] -z-10"
      ></motion.div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Section with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1 mt-6 lg:mt-0"
          >
            {/* Heading with improved responsive design */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-amber-900"
            >
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Empowering Bakers with
                </motion.div>
              </div>
              <span className="bg-gradient-to-r from-amber-600 to-yellow-400 text-transparent bg-clip-text block mt-1">
                Premium Equipment
              </span>
            </motion.h1>

            {/* Description with Fade In */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-base md:text-lg text-neutral-700 mb-6 md:mb-8 max-w-lg"
            >
              We provide high-quality bakery equipment for professional bakers and enthusiasts.
              From industrial mixers to precision tools, everything you need to create perfect baked goods.
            </motion.p>

            {/* Buttons with Animation */}
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <motion.button
                  ref={buttonRef}
                  className="px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 bg-amber-500 text-white rounded-md shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition-colors duration-300 relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 1.5, 0],
                    x: [0, 2, 0],
                    y: [0, -1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }}
                >
                  <span className="relative z-10 text-sm sm:text-base">Explore Products</span>

                  {/* Continuous glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-amber-500 rounded-md opacity-30 blur-md -z-10"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                  />
                  <motion.div
                    className="relative z-10 ml-1 sm:ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'mirror',
                      duration: 1,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      style={{
                        filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))',
                      }}
                    />
                  </motion.div>
                </motion.button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="secondary" 
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 transition-colors duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image Section with Zoom and Hover Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 overflow-hidden rounded-xl shadow-2xl h-48 sm:h-64 md:h-80 lg:h-96"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/assets/hero-img.webp"
              alt="Professional bakery equipment"
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>

      {/* Wave Decoration with Subtle Vertical Movement */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -5 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'mirror', ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-28 overflow-hidden"
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z"
            className="fill-white"
          ></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;