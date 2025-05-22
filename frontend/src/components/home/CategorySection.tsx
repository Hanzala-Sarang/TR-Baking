import { Link } from 'react-router-dom';
import { Utensils, BoxIcon, Scissors,  ChevronRight} from 'lucide-react'; // Renamed Candy to Soup for a more general 'baking tools' feel, or you can use another icon like 'Cake' or 'Cookie' if available
import SectionHeading from '../common/SectionHeading'; // Assuming this component exists and its styling can be overridden or adjusted

const categories = [
  {
    id: 'mixers',
    name: 'MIXERS', // Uppercase for consistency with other sections
    description: 'Professional-grade mixers for all your baking needs, ensuring consistent dough and batter every time.',
    icon: Utensils,
    // Adjusted colors to match the BakePro Solutions palette
    iconBgColor: '#F5F0E6', // Warm cream background for icon
    iconColor: '#593D2B', // Rich brown icon color
    link: '/products?category=spiral+mixer', // Keep original link for functionality
  },
  {
    id: 'ovens',
    name: 'OVENS', // Uppercase for consistency
    description: 'High-performance ovens designed for even heat distribution and perfect baking results, from artisan bread to delicate pastries.',
    icon: BoxIcon, // Using Pen as Oven from your original code, which is fine
    // Adjusted colors to match the BakePro Solutions palette
    iconBgColor: '#F5F0E6',
    iconColor: '#593D2B',
    link: '/products?category=convection+oven', // Keep original link
  },
  {
    id: 'baking-tools',
    name: 'BAKING TOOLS', // Uppercase for consistency
    description: 'Essential tools and accessories for precision, efficiency, and creativity in every step of your baking process.',
    icon: Scissors, // Keeping Scissors as it was in your example, or you could use 'Cookie' if available
    // Adjusted colors to match the BakePro Solutions palette
    iconBgColor: '#F5F0E6',
    iconColor: '#593D2B',
    link: '/products?category=baking+tools', // Adjusted link for baking tools
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#F5F0E6' }}> {/* Warm cream background */}
      <div className="container mx-auto px-4"> {/* Adjusted container for consistency */}
        <SectionHeading
          title="EQUIPMENT CATEGORIES" // Changed title to match other sections
          subtitle="Browse through our comprehensive range of high-quality bakery equipment"
          centered
          className="text-[#593D2B]" // Rich brown text for heading
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group block" // Added 'block' to make the whole card clickable
            >
              <div
                className="bg-white rounded-md shadow-sm border border-gray-100 transition-transform hover:translate-y-[-4px] hover:shadow-md h-full flex flex-col" // Card styling
              >
                <div className="p-8 flex flex-col items-start h-full"> {/* Padding and flex for content alignment */}
                  <div
                    className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6`}
                    style={{ backgroundColor: category.iconBgColor }} // Dynamic background color for icon circle
                  >
                    <category.icon className="h-8 w-8" style={{ color: category.iconColor }} /> {/* Dynamic icon color */}
                  </div>
                  <h3 className="text-xl font-['Montserrat'] font-bold mb-2 tracking-normal" style={{ color: '#3C3C3C' }}>{category.name}</h3> {/* Updated font and color */}
                  <p className="text-sm font-['Roboto'] leading-relaxed mb-4 flex-grow" style={{ color: '#3C3C3C' }}>{category.description}</p> {/* Updated font, size, and color */}
                  <div
                    className="flex items-center text-sm font-['Montserrat'] font-bold tracking-normal group-hover:text-[#A85735] transition-colors" // Terracotta color, bold font
                    style={{ color: '#CB6843' }}
                  >
                    EXPLORE <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="mt-12 text-center">
          <Link
            to="/equipment"
            className="inline-block px-8 py-3 text-sm uppercase tracking-wider font-bold transition-all"
            style={{
              border: '2px solid #593D2B', // Thicker border for button
              color: '#593D2B', // Rich brown text
              borderRadius: '4px',
              backgroundColor: 'transparent',
              fontFamily: "'Montserrat', sans-serif" // Sturdy font
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#593D2B';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#593D2B';
            }}
          >
            VIEW ALL CATEGORIES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;