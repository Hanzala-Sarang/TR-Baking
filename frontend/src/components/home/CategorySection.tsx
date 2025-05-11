import { Link } from 'react-router-dom';
import { Utensils, Pen as Oven, Scissors, Candy, ChevronRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const categories = [
  {
    id: 'mixers',
    name: 'Mixers',
    description: 'Professional-grade mixers for all your baking needs',
    icon: Utensils,
    color: 'bg-blue-50 text-blue-600',
    link: '/products?category=spiral+mixer',
  },
  {
    id: 'ovens',
    name: 'Ovens',
    description: 'High-performance ovens for perfect baking results',
    icon: Oven,
    color: 'bg-amber-50 text-amber-600',
    link: '/products?category=convection+oven',
  },
  {
    id: 'baking-tools',
    name: 'Baking Tools',
    description: 'Essential tools for precision and efficiency',
    icon: Scissors,
    color: 'bg-green-50 text-green-600',
    link: '/products?category=rotary+rack+oven',
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <SectionHeading
          title="Explore Our Categories"
          subtitle="Browse through our comprehensive range of high-quality bakery equipment"
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.link}
              className="group"
            >
              <div className="bg-white rounded-lg p-8 border border-neutral-100 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                <div className={`${category.color} p-4 rounded-full w-14 h-14 flex items-center justify-center mb-6`}>
                  <category.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-neutral-600 mb-4 flex-grow">{category.description}</p>
                <div className="flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors">
                  Explore <ChevronRight className="ml-1 h-4 w-4 group-hover:ml-2 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;