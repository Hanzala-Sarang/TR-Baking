import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Check, ChevronRight, X } from 'lucide-react';
import Button from '../components/common/Button'; // Assuming this Button component is styled according to BakePro
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

    // Find all products in the same category and with the same "base" name for variants
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
      document.title = `${baseProduct.name} | TR BAKING EQUIPMENTS`; // Updated brand name
    } else {
      // Product not found, redirect to products page
      navigate('/equipment', { replace: true });
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
    // This assumes `product.model` already contains the desired variant name
    // If not, you might need more complex logic based on your data structure
    return product.model;
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
      // In a real application, you would send this to your backend service.
      // For this example, we'll simulate an API call.
      // Replace this with your actual fetch call to the backend
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



      setFormSubmitted(true);

      // Reset form after success
      setTimeout(() => {
        setShowQuoteForm(false);
        setFormSubmitted(false);
        setFormData({ name: '', email: '', phone: '' });
      }, 3000);

    } catch (error) {
      console.error('Error sending quote request:', error);
      // alert('Failed to send quote request. Please try again.'); // Consider a more styled error message
    } finally {
      setFormSubmitting(false);
    }
    console.log("Customer Info:", formData);
    console.log("Product Details:", productDetails);
  };

  if (loading || !selectedVariant) {
    return (
      <div className="pt-40 pb-16 min-h-screen flex items-center justify-center bg-[#F5F0E6]"> {/* Warm cream background */}
        <div className="animate-pulse text-[#CB6843] font-['Montserrat'] text-xl">Loading product information...</div> {/* Terracotta text, sturdy font */}
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
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="flex items-center text-sm font-['Roboto']"> {/* Clear body text font */}
              <Link to="/" className="text-[#8D8D8D] hover:text-[#CB6843] transition-colors"> {/* Muted gray, terracotta hover */}
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-[#C0C0C0]" /> {/* Lighter gray for chevron */}
              <Link to="/equipment" className="text-[#8D8D8D] hover:text-[#CB6843] transition-colors">
                Products
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-[#C0C0C0]" />
              <Link
                to={`/equipment?category=${categoryName.toLowerCase()}`}
                className="text-[#8D8D8D] hover:text-[#CB6843] transition-colors"
              >
                {categoryName}
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-[#C0C0C0]" />
              <span className="text-[#3C3C3C] font-medium">{baseProduct?.name}</span> {/* Dark gray, medium weight */}
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> {/* Increased gap for more breathing room */}
            {/* Product Images */}
            <div>
              <div className="bg-[#F5F0E6] rounded-lg overflow-hidden mb-4 aspect-square border border-[#EAEAEA] shadow-sm"> {/* Warm cream background, subtle border and shadow */}
                <img
                  src={selectedImage}
                  alt={selectedVariant.name}
                  className="w-full h-full object-contain p-4" // Added padding to image to ensure it doesn't touch edges
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {selectedVariant.images.map((image, index) => (
                  <button
                    key={index}
                    className={`bg-[#F5F0E6] rounded-md overflow-hidden aspect-square border ${ /* Warm cream background, slightly smaller border radius */
                      selectedImage === image ? 'ring-2 ring-[#CB6843] border-[#CB6843]' : 'border-[#EAEAEA]'
                    } hover:border-[#CB6843] transition-all duration-200`} // Terracotta ring/border on active/hover
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${selectedVariant.name} view ${index + 1}`}
                      className="w-full h-full object-cover p-2" // Added padding to thumbnails
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-[#8D8D8D] font-['Roboto']">{categoryName}</span> {/* Muted gray, clear body text */}
                  {selectedVariant.badge && (
                    <span className="ml-2 bg-[#F5F0E6] text-[#CB6843] text-xs px-3 py-1 rounded-full font-['Roboto'] font-medium"> {/* Warm cream badge, terracotta text */}
                      {selectedVariant.badge}
                    </span>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-['Montserrat'] font-bold mb-4 text-[#593D2B]"> {/* Sturdy font, rich brown */}
                  {selectedVariant.name}
                </h1>

                {/* Variant Selection */}
                {productVariants.length > 1 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-['Montserrat'] font-medium mb-3 text-[#593D2B]">Select Model:</h3> {/* Sturdy font, rich brown */}
                    <div className="flex flex-wrap gap-3"> {/* Slightly increased gap */}
                      {productVariants.map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => handleVariantChange(variant)}
                          className={`px-5 py-2 rounded-md border text-sm font-['Roboto'] transition-colors shadow-sm ${ /* Wider padding, subtle shadow */
                            selectedVariant.id === variant.id
                              ? 'border-[#CB6843] bg-[#CB6843] text-white font-semibold' // Terracotta primary, white text, semi-bold
                              : 'border-[#EAEAEA] hover:border-[#CB6843] text-[#3C3C3C] hover:text-[#CB6843] bg-white' // Light gray border, terracotta hover, dark gray text
                          }`}
                        >
                          {getVariantName(variant)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-[#3C3C3C] font-['Roboto'] mb-8 text-justify leading-relaxed"> {/* Dark gray, clear body text, improved readability */}
                  {selectedVariant.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Button
                    onClick={() => setShowQuoteForm(true)}
                    className="w-full md:w-auto px-8 py-3 text-lg" // Larger button, more padding, larger text
                  >
                    GET BEST QUOTE
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8 p-6 bg-[#F5F0E6] rounded-md border border-[#EAEAEA]"> {/* Warm cream background, subtle border */}
                <h2 className="text-xl font-['Montserrat'] font-bold mb-4 text-[#593D2B]">Key Features</h2> {/* Sturdy font, rich brown */}
                <ul className="space-y-3"> {/* Increased space between list items */}
                  {selectedVariant.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-[#3C3C3C] font-['Roboto']"> {/* Dark gray, clear body text */}
                      <Check className="h-5 w-5 text-[#5B8C5A] mr-3 mt-0.5 flex-shrink-0" /> {/* Muted green checkmark */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="p-6 bg-[#F5F0E6] rounded-md border border-[#EAEAEA]"> {/* Warm cream background, subtle border */}
                <h2 className="text-xl font-['Montserrat'] font-bold mb-4 text-[#593D2B]">Specifications</h2> {/* Sturdy font, rich brown */}
                <div className="border border-[#EAEAEA] rounded-md overflow-hidden"> {/* Lighter border for table */}
                  {Object.entries(selectedVariant.specifications).map(([key, value], index) => (
                    <div
                      key={key}
                      className={`flex flex-col sm:flex-row ${
                        index % 2 === 0 ? 'bg-white' : 'bg-[#FDFBF7]' // Alternating light backgrounds for rows
                      }`}
                    >
                      <div className="p-3 sm:w-1/3 font-['Roboto'] font-medium text-[#593D2B] capitalize"> {/* Rich brown, medium weight */}
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="p-3 sm:w-2/3 border-t sm:border-t-0 sm:border-l border-[#EAEAEA] text-[#3C3C3C] font-['Roboto']"> {/* Lighter border, dark gray text */}
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
          <div className="mt-16 text-center"> {/* Centered back button */}
            <Link
              to="/equipment"
              className="inline-flex items-center text-[#CB6843] hover:text-[#A85735] font-['Roboto'] font-medium transition-colors text-lg" // Terracotta, darker hover, larger text
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              BACK TO ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-[#F5F0E6]"> {/* Warm cream background */}
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-['Montserrat'] font-bold mb-8 text-[#593D2B] text-center">RELATED PRODUCTS</h2> {/* Centered heading, sturdy font, rich brown */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/equipment/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-md overflow-hidden border border-[#EAEAEA] shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"> {/* Consistent card styling */}
                    <div className="relative pt-[75%] bg-[#FDFBF7] overflow-hidden"> {/* Lighter cream background for related product images */}
                      <img
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-2" // Padding for image
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-['Montserrat'] font-bold text-[#593D2B] group-hover:text-[#CB6843] transition-colors"> {/* Sturdy font, rich brown, terracotta on hover */}
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
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"> {/* Darker overlay, subtle blur */}
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto transform scale-100 opacity-100 transition-all duration-300 ease-out"> {/* Modal styling */}
            <div className="p-6 md:p-8"> {/* Increased padding */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-['Montserrat'] font-bold text-[#593D2B]">REQUEST QUOTE</h3> {/* Sturdy font, rich brown, uppercase */}
                <button
                  onClick={() => {
                    if (!formSubmitting) {
                      setShowQuoteForm(false);
                      setFormSubmitted(false);
                    }
                  }}
                  className="text-[#8D8D8D] hover:text-[#3C3C3C] transition-colors"
                  disabled={formSubmitting}
                >
                  <X className="h-7 w-7" /> {/* Larger icon */}
                </button>
              </div>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center bg-[#D4EDDA] rounded-full p-3 mb-4"> {/* Muted green background for icon */}
                    <Check className="h-10 w-10 text-[#5B8C5A]" /> {/* Larger green checkmark */}
                  </div>
                  <h4 className="text-xl font-['Montserrat'] font-bold mb-2 text-[#593D2B]">QUOTE REQUEST SENT!</h4> {/* Sturdy font, rich brown, uppercase */}
                  <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed"> {/* Dark gray, clear body text */}
                    Thank you for your interest. We'll get back to you shortly with pricing information.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6 bg-[#FDFBF7] p-4 rounded-md border border-[#EAEAEA]"> {/* Lighter cream background, subtle border */}
                    <h4 className="font-['Montserrat'] font-medium text-[#593D2B] mb-2">Product Details</h4> {/* Sturdy font, rich brown */}
                    <p className="text-[#3C3C3C] font-['Roboto'] font-bold">{selectedVariant.name}</p> {/* Dark gray, bold, clear body text */}
                    <p className="text-[#3C3C3C] font-['Roboto']">Model: {selectedVariant.model}</p>
                    <p className="text-[#3C3C3C] font-['Roboto']">Category: {selectedVariant.category}</p>
                  </div>

                  <form onSubmit={handleSubmitQuoteRequest}>
                    <div className="space-y-5"> {/* Increased space between form fields */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-['Roboto'] font-medium text-[#3C3C3C] mb-1"> {/* Dark gray, clear body text */}
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-[#EAEAEA] rounded-md focus:ring-2 focus:ring-[#CB6843] focus:border-[#CB6843] outline-none text-[#3C3C3C] font-['Roboto']" // Lighter border, terracotta focus, dark gray text
                          disabled={formSubmitting}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-['Roboto'] font-medium text-[#3C3C3C] mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-[#EAEAEA] rounded-md focus:ring-2 focus:ring-[#CB6843] focus:border-[#CB6843] outline-none text-[#3C3C3C] font-['Roboto']"
                          disabled={formSubmitting}
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-['Roboto'] font-medium text-[#3C3C3C] mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-[#EAEAEA] rounded-md focus:ring-2 focus:ring-[#CB6843] focus:border-[#CB6843] outline-none text-[#3C3C3C] font-['Roboto']"
                          disabled={formSubmitting}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full mt-8 px-6 py-3 text-lg" // Larger button, increased top margin
                      disabled={formSubmitting}
                    >
                      {formSubmitting ? 'SENDING...' : 'SUBMIT QUOTE REQUEST'}
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