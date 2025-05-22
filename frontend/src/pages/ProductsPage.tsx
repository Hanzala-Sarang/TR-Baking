import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import { Filter } from 'lucide-react';
import { productGroups } from '../data/products'; // Ensure this data structure matches ProductGroup type
import { ProductGroup } from '../types'; // Ensure this type definition is correct

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredGroups, setFilteredGroups] = useState<ProductGroup[]>(productGroups);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );

  // Get unique categories from product groups
  const categories = Array.from(
    new Set(productGroups.map(group => group.category))
  );

  useEffect(() => {
    // Update page title
    document.title = 'Products | TR BAKING EQUIPMENTS';

    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Filter products based on category parameter
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      filterProductsByCategory(categoryParam);
    } else {
      setFilteredGroups(productGroups);
      setSelectedCategory(null);
    }
  }, [searchParams]);

  const filterProductsByCategory = (category: string | null) => {
    if (!category) {
      setFilteredGroups(productGroups);
      return;
    }

    const filtered = productGroups.filter(
      group => group.category.toLowerCase() === category.toLowerCase()
    );
    setFilteredGroups(filtered);
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);

    if (category) {
      setSearchParams({ category: category.toLowerCase() });
    } else {
      setSearchParams({});
    }

    filterProductsByCategory(category);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[#F5F0E6] pt-40 pb-16 relative"> {/* Warm cream background */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-bold mb-6 text-[#593D2B] tracking-normal"> {/* Sturdy font, rich brown, medium tracking */}
              OUR PRODUCTS
            </h1>
            <p className="text-lg text-[#3C3C3C] font-['Roboto'] leading-relaxed"> {/* Dark gray text, clear and practical body text */}
              Browse our selection of premium bakery equipment
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24 bg-[#EBEAEB]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <SectionHeading
              title={selectedCategory ? `${selectedCategory.toUpperCase()}` : 'ALL PRODUCTS'} 
              subtitle={`${filteredGroups.length} PRODUCT CATEGORIES AVAILABLE`} 
              className="mb-0 text-[#593D2B]" // Rich brown for heading
            />

            <div className="mt-4 md:mt-0">
              <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                <div className="flex items-center">
                  <Filter className="h-5 w-5 text-[#8D8D8D] mr-2" /> {/* Muted gray icon */}
                  <span className="text-[#3C3C3C] font-['Roboto'] font-medium">FILTER:</span> {/* Dark gray, clear body text */}
                </div>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-['Roboto'] transition-colors shadow-sm border border-gray-100 ${ /* Rounded, subtle shadow, border */
                    selectedCategory === null
                      ? 'bg-[#CB6843] text-white hover:bg-[#A85735]' // Terracotta primary, darker hover
                      : 'bg-white text-[#3C3C3C] hover:bg-[#F5F0E6]' // White background, dark gray text, warm cream hover
                  }`}
                  onClick={() => handleCategoryChange(null)}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-['Roboto'] transition-colors shadow-sm border border-gray-100 ${ /* Rounded, subtle shadow, border */
                      selectedCategory?.toLowerCase() === category.toLowerCase()
                        ? 'bg-[#CB6843] text-white hover:bg-[#A85735]' // Terracotta primary, darker hover
                        : 'bg-white text-[#3C3C3C] hover:bg-[#F5F0E6]' // White background, dark gray text, warm cream hover
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredGroups.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> {/* Consistent gap */}
              {filteredGroups.map((group) => (
                <Link
                  key={group.id}
                  to={`/equipment/${group.variants[0].id}`}
                  className="group"
                >
                  <div className="bg-white rounded-md overflow-hidden border border-[#EAEAEA] shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"> {/* Rounded, subtle border, light shadow, subtle hover shadow */}
                    <div className="relative pt-[75%] bg-[#F5F0E6] overflow-hidden"> {/* Warm cream background for image container */}
                      <img
                        src={group.primaryImage}
                        alt={group.name}
                        className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-['Montserrat'] font-bold text-[#593D2B] group-hover:text-[#CB6843] transition-colors mb-2"> {/* Sturdy font, rich brown, terracotta on hover */}
                        {group.name}
                      </h3>
                      <p className="text-[#3C3C3C] font-['Roboto'] text-sm leading-relaxed mt-1 line-clamp-2"> {/* Dark gray, clear body text */}
                        {group.description}
                      </p>
                      <div className="text-sm text-[#CB6843] font-['Roboto'] mt-4"> {/* Terracotta for model count, clear body text */}
                        {group.variants.length} {group.variants.length === 1 ? 'model' : 'models'} available
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#3C3C3C] font-['Roboto'] text-lg">No products found in this category.</p> {/* Dark gray, clear body text */}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;