import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Loader from './components/common/Loader';
import usePageTracking from './hooks/usePageTracking';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  usePageTracking();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/equipment" element={<ProductsPage />} />
            <Route path="/equipment/:slug" element={<ProductDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      )}

      {/* WhatsApp Sticky Button */}
      <a
        href="https://wa.me/+917021356127" // Replace YOUR_PHONE_NUMBER with your WhatsApp number including country code (e.g., +919321581121)
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
        style={{ width: '60px', height: '60px' }} // Fixed size for consistency
      >
<FaWhatsapp size={36} /> 
      </a>
    </>
  );
}

export default App;
