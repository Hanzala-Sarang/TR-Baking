import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import { Filter } from 'lucide-react';
import { productGroups } from '../data/products';
import { ProductGroup } from '../types';

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
    document.title = 'Products | TR Baking Equipments';
    
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
      <section className="bg-amber-50 pt-40 pb-16 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900">Our Products</h1>
            <p className="text-lg text-neutral-700">
              Browse our selection of premium bakery equipment
            </p>
          </div>
        </div>
      </section>
      
      {/* Products */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <SectionHeading
              title={selectedCategory ? `${selectedCategory}` : 'All Products'}
              subtitle={`${filteredGroups.length} product categories available`}
              className="mb-0"
            />
            
            <div className="mt-4 md:mt-0">
              <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                <div className="flex items-center">
                  <Filter className="h-5 w-5 text-neutral-500 mr-2" />
                  <span className="text-neutral-700 font-medium">Filter:</span>
                </div>
                <button
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedCategory === null
                      ? 'bg-amber-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  onClick={() => handleCategoryChange(null)}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedCategory?.toLowerCase() === category.toLowerCase()
                        ? 'bg-amber-600 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredGroups.map((group) => (
                <Link
                  key={group.id}
                  to={`/products/${group.variants[0].id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden border border-neutral-100 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                    <div className="relative pt-[75%] bg-neutral-50 overflow-hidden">
                      <img 
                        src={group.primaryImage} 
                        alt={group.name}
                        className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-bold group-hover:text-amber-600 transition-colors">
                        {group.name}
                      </h3>
                      <p className="text-neutral-600 text-sm mt-2 line-clamp-2">
                        {group.description}
                      </p>
                      <div className="text-sm text-amber-600 mt-4">
                        {group.variants.length} {group.variants.length === 1 ? 'model' : 'models'} available
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;