import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';

const FeaturedProducts = () => {
  // Get first 4 products as featured
// Extract 1 product per category (based on name prefix)
// Updated function to extract only the category name (first 2 words)
const getCategoryName = (productName) => {
  return productName.split(" ").slice(0, 2).join(" ");
};

const uniqueCategoryMap = new Map();

for (const product of products) {
  const category = getCategoryName(product.name);
  if (!uniqueCategoryMap.has(category)) {
    uniqueCategoryMap.set(category, product);
  }
}

const featuredProducts = Array.from(uniqueCategoryMap.values()).slice(0, 4);

console.log(featuredProducts);



  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            title="Featured Products"
            subtitle="Our most popular equipment chosen by professional bakers"
            className="mb-0"
          />
          <Link 
            to="/products" 
            className="mt-4 md:mt-0 text-amber-600 hover:text-amber-700 font-medium transition-colors"
          >
            View All Products
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;