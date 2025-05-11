import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

const NotFoundPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Page Not Found | TR Baking Equipments';
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-6xl font-bold text-amber-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-neutral-600 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="w-full sm:w-auto">
                <Home className="mr-2 h-5 w-5" /> Back to Home
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="secondary" className="w-full sm:w-auto">
                View Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;