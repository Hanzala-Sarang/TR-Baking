import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link 
      to={`/products/${product.id}`}
      className="group"
    >
      <div className="bg-white rounded-lg overflow-hidden border border-neutral-100 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
        <div className="relative pt-[75%] bg-neutral-50 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-amber-600 text-white text-sm py-1 px-3 rounded-full">
              {product.badge}
            </span>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-auto">
            <p className="text-sm text-neutral-500 mb-1">{product.category}</p>
            <h3 className="text-lg font-bold mb-2 group-hover:text-amber-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-neutral-600 line-clamp-2 mb-4">{product.shortDescription}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;