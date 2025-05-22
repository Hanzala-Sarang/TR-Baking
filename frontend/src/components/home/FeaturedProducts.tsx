import { Link } from 'react-router-dom';
import {  ChevronRight } from 'lucide-react'; // Import icons if you want to use them in the featured products cards
import SectionHeading from '../common/SectionHeading'; // Assuming this component exists and its styling can be overridden or adjusted
import { products } from '../../data/products'; // Path to your products data

const FeaturedProducts = () => {
  // Extract 1 product per category (based on name prefix)
  // This logic assumes product names consistently start with a category prefix
  const getCategoryName = (productName) => {
    // Example: "Rotary Rack Oven A" -> "Rotary Rack", "Planetary Mixer B" -> "Planetary Mixer"
    const words = productName.split(" ");
    if (words.length >= 2) {
      return words.slice(0, 2).join(" ");
    }
    return productName; // Fallback if name is too short
  };

  const uniqueCategoryMap = new Map();

  for (const product of products) {
    const category = getCategoryName(product.name);
    // Prioritize products with images if multiple fall into the same category
    if (!uniqueCategoryMap.has(category) || (product.images && product.images.length > 0)) {
      uniqueCategoryMap.set(category, {
        ...product,
        // Example: Add a badge for featured products, or based on other logic
        badge: product.inStock ? 'In Stock' : 'Pre-Order', // Example badge based on stock status
        // You might want to define a default icon here if needed, or remove the icon usage from the JSX

      });
    }
  }

  // Ensure we only take up to 4 unique featured products
  const featuredProducts = Array.from(uniqueCategoryMap.values()).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-[#EBEAEB]"> {/* Warm cream background */}
      <div className="container mx-auto px-4">
        {/* Section Header and 'Explore All' Link */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <SectionHeading
            title="FEATURED EQUIPMENT" // Headings bold, uppercase, medium tracking
            subtitle="PROFESSIONAL-GRADE TOOLS SELECTED BY MASTER BAKERS" // Subtitle clear, practical
            className="mb-0 text-[#593D2B]" // Rich brown text for heading
          />
          <Link
            to="/equipment"
            className="mt-6 md:mt-0 text-[#CB6843] hover:text-[#A85735] font-['Montserrat'] font-bold text-lg tracking-normal transition-colors flex items-center group" // Terracotta accent, sturdy font
          >
            <span>EXPLORE ALL EQUIPMENT</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"> {/* Changed gap to 6 and added mt-12 for consistency */}
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/equipment/${product.id}`}
              className="group block"
            >
              <div
                className="flex flex-col h-full"
                style={{
                  backgroundColor: 'white',
                  borderBottom: '4px solid #CB6843'
                }}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-48"> {/* Fixed height for image container */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      // Fallback image if product.images[0] is not available
                      backgroundImage: `url(${product.images && product.images.length > 0 && product.images[0] ? product.images[0] : '/assets/no-image.png'})`, // Ensure you have a default image at this path or remove it
                      backgroundSize: 'contain', // Changed to contain to ensure full image visibility
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundColor: '#FDFBF7' // Light cream background for images
                    }}
                  ></div>
                  {/* Stock Status as a badge */}
                  {product.inStock ? (
                    <div
                      className="absolute top-0 left-0 py-2 px-4"
                      style={{
                        backgroundColor: '#5B8C5A', // Muted green
                        color: 'white'
                      }}
                    >
                      <span className="text-sm font-medium tracking-wider uppercase">IN STOCK</span>
                    </div>
                  ) : (
                    <div
                      className="absolute top-0 left-0 py-2 px-4"
                      style={{
                        backgroundColor: '#3C3C3C', // Dark gray
                        color: 'white'
                      }}
                    >
                      <span className="text-sm font-medium tracking-wider uppercase">PRE-ORDER</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow" style={{ backgroundColor: 'white' }}>
                  <div className="flex items-center mb-4">
                    {/* Using a placeholder icon for consistency with CategorySection */}
                    <h3 className="text-lg font-bold tracking-wide" style={{ color: '#3C3C3C' }}>{product.name}</h3>
                  </div>

                  <p className="mb-4 text-base line-clamp-2" style={{ color: '#3C3C3C' }}>{product.description}</p>

                  <div className="mt-auto">

                    {/* Explore Link */}
                    <div
                      className="flex items-center justify-between pt-4 mt-auto border-t text-sm font-medium tracking-wider group-hover:font-bold transition-all"
                      style={{
                        borderColor: '#EAEAEA',
                        color: '#CB6843'
                      }}
                    >
                      <span className="uppercase">VIEW DETAILS</span>
                      <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;