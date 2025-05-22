import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // ChefHatIcon removed as it's replaced by the image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'EQUIPMENT', path: '/equipment' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const categoryLinks = [
    { name: 'OVENS', category: 'rotary+rack+oven' },
    { name: 'MIXERS', category: 'spiral+mixer' },
    { name: 'SLICERS', category: 'toast+bread+slicer' },
    { name: 'SHEETERS', category: 'dough+sheeter' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-2' : 'bg-cream-100 py-4'
      }`}
      style={{ backgroundColor: isScrolled ? '#FFFFFF' : '#F5F0E6' }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section - Adjusted for better sizing */}
        <Link to="/" className="flex items-center gap-3 h-20"> {/* Set a fixed height for the link container */}
          <img
            src="/assets/tr-logo-1.png" // Ensure this path is correct for your TR logo image
            alt="TR Baking Equipments Logo"
            height={90}
            width={90}
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/80x80/EAEAEA/3C3C3C?text=TR+Logo'; }} // Fallback image
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight" style={{ color: '#593D2B' }}>
              BAKING EQUIPMENTS {/* Updated brand name to include TR */}
            </span>
            <span className="text-xs uppercase tracking-widest" style={{ color: '#3C3C3C' }}>
              The Perfect Baking Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium text-sm tracking-wider py-2 px-1 border-b-2 transition-colors duration-200 ${
                  isActive
                    ? 'border-terracotta text-dark-brown'
                    : 'border-transparent hover:border-terracotta'
                }`
              }
              style={{
                color: ({ isActive }) => (isActive ? '#593D2B' : '#3C3C3C'),
                borderBottomColor: ({ isActive }) => (isActive ? '#CB6843' : 'transparent'),
              }}
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex items-center gap-4 ml-6">
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium tracking-wider transition-all"
              style={{
                backgroundColor: '#CB6843',
                color: 'white',
                borderRadius: '4px',
              }}
            >
              REQUEST QUOTE
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X size={35} style={{ color: '#593D2B' }} />
            ) : (
              <Menu size={35} style={{ color: '#593D2B' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden shadow-md">
          <div className="container mx-auto py-4 px-4" style={{ backgroundColor: 'white' }}>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium py-3 px-4 border-l-4 tracking-wider transition-colors duration-200 ${
                      isActive
                        ? 'border-terracotta bg-cream-50'
                        : 'border-transparent'
                    }`
                  }
                  style={{
                    color: '#3C3C3C',
                    backgroundColor: ({ isActive }) => (isActive ? '#F5F0E6' : 'white'),
                    borderLeftColor: ({ isActive }) => (isActive ? '#CB6843' : 'transparent'),
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-4 py-3 text-center font-medium tracking-wider"
                style={{
                  backgroundColor: '#CB6843',
                  color: 'white',
                  borderRadius: '4px',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                REQUEST QUOTE
              </Link>
            </div>
          </div>
        </nav>
      )}

      {/* Category Navigation - Appears after scrolling */}
      {isScrolled && (
        <div
          className="hidden md:block w-full shadow-sm py-2"
          style={{ backgroundColor: '#F5F0E6' }}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-6">
                {categoryLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={`/equipment?category=${link.category}`}
                    className="text-sm font-medium hover:text-terracotta"
                    style={{ color: '#593D2B' }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link to="/equipment" className="text-sm font-medium tracking-wider" style={{ color: '#CB6843' }}>
                VIEW ALL EQUIPMENT →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;