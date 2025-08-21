import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button'; // Assuming Button component is correctly imported
import { motion } from 'framer-motion';
import { useRef, useState } from 'react'; // Import useState
import BrochureDownloadForm from '../contact/BrochureDownloadForm'; // Import the BrochureDownloadForm component

const Hero = () => {
  const buttonRef = useRef(null);
  const [showBrochureForm, setShowBrochureForm] = useState(false); // New state for brochure form visibility

  return (
    <>
      <section
        className="relative pt-24 sm:pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/hero-img.webp')`, // Ensure this path is correct
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for readability, matching cream color with transparency */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: 'rgba(245, 240, 230, 0.85)', // F5F0E6 with 85% opacity
          }}
        ></div>

        {/* Background Decorative Element with Animation - keep it subtle under the overlay */}
        <motion.div
          initial={{ x: '20%', y: '-20%', opacity: 0 }}
          animate={{ x: '0%', y: '0%', opacity: 0.4 }}
          transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
          className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full blur-[120px] -z-10"
          style={{ backgroundColor: '#593D2B' }}
        ></motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Content wrapper, now max-width to left align it within the container */}
          <div className="max-w-4xl lg:max-w-3xl text-left">
            {/* Text Section with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 lg:mt-0"
            >
              {/* Heading with improved responsive design */}
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 uppercase tracking-wider"
                style={{ color: '#3C3C3C' }}
              >
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: 30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    PROFESSIONAL
                  </motion.div>
                </div>
                <span className="block mt-1" style={{ color: '#593D2B' }}>
                  BAKERY EQUIPMENT
                </span>
              </motion.h1>

              {/* Description with Fade In */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-2xl text-justify"
                style={{ color: '#3C3C3C', lineHeight: '1.8' }}
              >
                We provide high-quality bakery equipment for professional bakers and enthusiasts.
                From industrial mixers to precision tools, everything you need to create perfect baked goods.
              </motion.p>

              {/* Buttons with Animation */}
              <div className="flex flex-wrap gap-6">
                <Link to="/equipment">
                  <motion.button
                    ref={buttonRef}
                    className="px-8 py-4 flex items-center gap-2 text-base uppercase font-semibold tracking-wider"
                    style={{
                      backgroundColor: '#CB6843',
                      color: 'white',
                      borderRadius: '4px'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">EXPLORE EQUIPMENT</span>
                    <motion.div
                      className="relative z-10 ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        duration: 1,
                        ease: 'easeInOut',
                      }}
                    >
                      <ArrowRight className="h-6 w-6" />
                    </motion.div>
                  </motion.button>
                </Link>

                {/* New "DOWNLOAD BROCHURE" button */}
                <Button
                  onClick={() => setShowBrochureForm(true)} // Open the brochure form
                  className="px-8 py-4 text-base uppercase font-semibold tracking-wider border transition-colors duration-300"
                  style={{
                    color: '#593d2b',
                    backgroundColor: 'transparent',
                    border: '2px solid #593D2B', // Thicker border
                    borderRadius: '4px'
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#593D2B'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  DOWNLOAD BROCHURE
                </Button>
                
                <Link to="/contact">
                  <Button
                    variant="secondary"
                    className="px-8 py-4 text-base uppercase font-semibold tracking-wider border transition-colors duration-300"
                    style={{
                      color: '#593D2B',
                      backgroundColor: 'transparent',
                      border: '2px solid #593D2B', // Thicker border
                      borderRadius: '4px'
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#593D2B'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    CONTACT US
                  </Button>
                </Link>
              </div>

              {/* Quick Facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-16"
              >
                <div className="flex flex-col">
                  <span className="text-3xl font-bold mb-1" style={{ color: '#593D2B' }}>8+</span>
                  <span className="text-sm uppercase tracking-wider" style={{ color: '#3C3C3C' }}>Years Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold mb-1" style={{ color: '#593D2B' }}>50+</span>
                  <span className="text-sm uppercase tracking-wider" style={{ color: '#3C3C3C' }}>Clients Worldwide</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold mb-1" style={{ color: '#593D2B' }}>100%</span>
                  <span className="text-sm uppercase tracking-wider" style={{ color: '#3C3C3C' }}>Quality Assured</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Border Line - Keep it in front of the background image but behind content */}
        <div className="absolute bottom-0 left-0 right-0 h-1 z-10" style={{ backgroundColor: '#EAEAEA' }}></div>
      </section>

      {/* Brochure Download Form Modal - Conditionally rendered */}
      {showBrochureForm && (
        <BrochureDownloadForm
          onClose={() => setShowBrochureForm(false)}
          brochureUrl="/assets/TR-Baking-Equipments-Brochure.pdf" // Make sure this path is correct
        />
      )}
    </>
  );
};

export default Hero;
