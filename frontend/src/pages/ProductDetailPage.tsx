import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Check, ChevronRight, X } from 'lucide-react';
import Button from '../components/common/Button';
import { products } from '../data/products';
import { Product } from '../types';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedVariant, setSelectedVariant] = useState<Product | null>(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  // Group products by category and find base product
  const { baseProduct, productVariants, categoryName } = useMemo(() => {
    const productId = parseInt(id || '0');
    const foundProduct = products.find(p => p.id === productId);
    
    if (!foundProduct) {
      return { baseProduct: null, productVariants: [], categoryName: '' };
    }
    
    // Find all products in the same category
    const categoryProducts = products.filter(p => 
      p.category === foundProduct.category &&
      p.name.includes(foundProduct.name.split(' ')[0]) // Simple name-based grouping
    );
    
    return { 
      baseProduct: foundProduct, 
      productVariants: categoryProducts,
      categoryName: foundProduct.category 
    };
  }, [id]);
  
  useEffect(() => {
    if (baseProduct) {
      setSelectedVariant(baseProduct);
      setSelectedImage(baseProduct.images[0]);
      
      // Update page title
      document.title = `${baseProduct.name} | TR Baking Equipments`;
    } else {
      // Product not found, redirect to products page
      navigate('/products', { replace: true });
    }
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [baseProduct, navigate]);
  
  // Get variant name without category prefix
  const getVariantName = (product: Product) => {
    const nameParts = product.model;
    return nameParts;
  };
  
  // Handle variant selection
  const handleVariantChange = (product: Product) => {
    setSelectedVariant(product);
    if (product.images.length > 0) {
      setSelectedImage(product.images[0]);
    }
  };
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmitQuoteRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedVariant) return;
    
    setFormSubmitting(true);
    
    // Prepare product details to send with the form
    const productDetails = {
      id: selectedVariant.id,
      name: selectedVariant.name,
      model: selectedVariant.model,
      category: selectedVariant.category,
      specifications: selectedVariant.specifications
    };
    
    try {
      // This is where you'd implement your backend email sending logic

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-quote-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerInfo: formData,
          productDetails
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send quote request');
      }
      
      // // For now, simulate a successful API call
      // await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setShowQuoteForm(false);
        setFormSubmitted(false);
        setFormData({ name: '', email: '', phone: '' });
      }, 3000);
      
    } catch (error) {
      console.error('Error sending quote request:', error);
      alert('Failed to send quote request. Please try again.');
    } finally {
      setFormSubmitting(false);
    }
    console.log(productDetails)
  };
  
  if (loading || !selectedVariant) {
    return (
      <div className="pt-40 pb-16 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-amber-600">Loading product information...</div>
      </div>
    );
  }
  
  // Find related products (same category, excluding current variants)
  const variantIds = productVariants.map(p => p.id);
  const relatedProducts = products
    .filter(p => p.category === categoryName && !variantIds.includes(p.id))
    .slice(0, 4);
  
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="flex items-center text-sm">
              <Link to="/" className="text-neutral-500 hover:text-amber-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-neutral-400" />
              <Link to="/products" className="text-neutral-500 hover:text-amber-600 transition-colors">
                Products
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-neutral-400" />
              <Link 
                to={`/products?category=${categoryName.toLowerCase()}`} 
                className="text-neutral-500 hover:text-amber-600 transition-colors"
              >
                {categoryName}
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-neutral-400" />
              <span className="text-neutral-800 font-medium">{baseProduct?.name}</span>
            </nav>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="bg-neutral-50 rounded-lg overflow-hidden mb-4 aspect-square">
                <img 
                  src={selectedImage} 
                  alt={selectedVariant.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {selectedVariant.images.map((image, index) => (
                  <button
                    key={index}
                    className={`bg-neutral-50 rounded-lg overflow-hidden aspect-square ${
                      selectedImage === image ? 'ring-2 ring-amber-500' : ''
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${selectedVariant.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Details */}
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-neutral-500">{categoryName}</span>
                  {selectedVariant.badge && (
                    <span className="ml-2 bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                      {selectedVariant.badge}
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {selectedVariant.name}
                </h1>
                
                {/* Variant Selection */}
                {productVariants.length > 1 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Select Model:</h3>
                    <div className="flex flex-wrap gap-2">
                      {productVariants.map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => handleVariantChange(variant)}
                          className={`px-4 py-2 rounded-md border ${
                            selectedVariant.id === variant.id
                              ? 'border-amber-600 bg-amber-50 text-amber-700 font-medium'
                              : 'border-neutral-200 hover:border-amber-300 text-neutral-700'
                          } transition-colors`}
                        >
                          {getVariantName(variant)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                <p className="text-neutral-700 mb-8 text-justify">{selectedVariant.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button 
                    onClick={() => setShowQuoteForm(true)}
                    className="w-full md:w-auto"
                  >
                    Get Best Quote
                  </Button>
                </div>
              </div>
              
              {/* Features */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {selectedVariant.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Specifications */}
              <div>
                <h2 className="text-xl font-bold mb-4">Specifications</h2>
                <div className="border rounded-lg overflow-hidden">
                  {Object.entries(selectedVariant.specifications).map(([key, value], index) => (
                    <div 
                      key={key}
                      className={`flex flex-col sm:flex-row ${
                        index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
                      }`}
                    >
                      <div className="p-3 sm:w-1/3 font-medium text-neutral-800 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="p-3 sm:w-2/3 border-t sm:border-t-0 sm:border-l border-neutral-200 text-neutral-700">
                        {Array.isArray(value) ? (
                          <ul className="space-y-1">
                            {value.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          value
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Back to Products */}
          <div className="mt-16">
            <Link 
              to="/products" 
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden border border-neutral-100 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                    <div className="relative pt-[75%] bg-neutral-50 overflow-hidden">
                      <img 
                        src={relatedProduct.images[0]} 
                        alt={relatedProduct.name}
                        className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-bold group-hover:text-amber-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Quote Request Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Request Quote</h3>
                <button 
                  onClick={() => {
                    if (!formSubmitting) {
                      setShowQuoteForm(false);
                      setFormSubmitted(false);
                    }
                  }}
                  className="text-neutral-500 hover:text-neutral-700"
                  disabled={formSubmitting}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-2 mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Quote Request Sent!</h4>
                  <p className="text-neutral-600">
                    Thank you for your interest. We'll get back to you shortly with pricing information.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6 bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-medium text-amber-800 mb-2">Product Details</h4>
                    <p className="text-amber-700 font-bold">{selectedVariant.name}</p>
                    <p className="text-amber-700">Model: {selectedVariant.model}</p>
                    <p className="text-amber-700">Category: {selectedVariant.category}</p>
                  </div>
                  
                  <form onSubmit={handleSubmitQuoteRequest}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                          disabled={formSubmitting}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                          disabled={formSubmitting}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                          disabled={formSubmitting}
                        />
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full mt-6"
                      disabled={formSubmitting}
                    >
                      {formSubmitting ? 'Sending...' : 'Submit Quote Request'}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;