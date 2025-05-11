import { Link } from 'react-router-dom';
import {
  ChefHat,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold text-white">TR Baking Equipments</span>
            </div>
            <p className="text-neutral-400 mb-4">
              Empowering bakers with premium equipment since 2010. Quality products, expert consultation, and reliable support.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-amber-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=mixers" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Mixers
                </Link>
              </li>
              <li>
                <Link to="/products?category=ovens" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Ovens
                </Link>
              </li>
              <li>
                <Link to="/products?category=baking tools" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Baking Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-neutral-400">
                  GALA NO 91, BADRUDDIN COMPOUND, KHAIRANI ROAD, SAKINAKA, MUMBAI - 400072
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <a
                  href="tel:+917021356127"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  +91 70213 56127
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <a
                  href="mailto:trbakingequipments@gmail.com"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  trbakingequipments@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-800 text-center text-white space-y-2">
          <p>&copy; {currentYear} TR Baking Equipments. All rights reserved.</p>
          <p>
            Developed with <span className="text-red-500">❤️</span> by{' '}
            <a
              href="https://nextgrid.solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-500 transition-colors"
            >
              nextgrid.solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
