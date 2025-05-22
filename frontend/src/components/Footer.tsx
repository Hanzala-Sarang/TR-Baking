import { Link } from 'react-router-dom';
import {
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
    <footer className="bg-[#593D2B] text-white pt-16 pb-8"> {/* Rich brown background */}
      <div className="container mx-auto px-4">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12"> {/* Increased gap-y for more vertical separation */}

          {/* Company Info Section */}
          <div>
            <div className="flex items-center gap-3 mb-5"> {/* Slightly increased gap and bottom margin */}
             <img src="/assets/tr-logo-1.png" alt="" height={80} width={80}/> {/* Larger icon, Terracotta color */}
              <span className="text-3xl font-['Montserrat'] font-bold text-white tracking-wide"> {/* Larger font, sturdy font for brand name, wider tracking */}
              BAKING EQUIPMENTS {/* Used "BakePro Solutions" for consistency */}
              </span>
            </div>
            <p className="text-white text-base font-['Roboto'] leading-relaxed mb-6"> {/* Slightly larger text, clear, practical body text */}
              Empowering bakers with premium equipment since 2017. We offer quality products, expert consultation, and reliable support for all your baking needs.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-5"> {/* Increased space between icons */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#CB6843] transition-colors" // White icons, terracotta hover
                aria-label="LinkedIn"
              >
                <Linkedin size={24} /> {/* Larger social icons */}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#CB6843] transition-colors" // White icons, terracotta hover
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#CB6843] transition-colors" // White icons, terracotta hover
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-xl font-['Montserrat'] font-bold uppercase tracking-normal mb-5">QUICK LINKS</h3> {/* Larger heading, uppercase, sturdy font */}
            <ul className="space-y-4"> {/* Increased space-y for comfortable line spacing */}
              <li>
                <Link to="/" className="text-white text-base hover:text-[#CB6843] transition-colors font-['Roboto']"> {/* Clear, practical font, slightly larger text */}
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-base hover:text-[#CB6843] transition-colors font-['Roboto']">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-white text-base hover:text-[#CB6843] transition-colors font-['Roboto']">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-base hover:text-[#CB6843] transition-colors font-['Roboto']">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-white text-xl font-['Montserrat'] font-bold uppercase tracking-normal mb-5">PRODUCTS</h3> {/* Larger heading, uppercase, sturdy font */}
            <ul className="space-y-4"> {/* Increased space-y for comfortable line spacing */}
              <li>
                <Link to="/equipment?category=spiral+mixer" className="text-white text-base hover:text-[#CB6843] transition-colors font-['Roboto']">
                  Mixers
                </Link>
              </li>
              <li>
                <Link to="/equipment?category=rotary+rack+oven" className="text-white text-base hover:text-[#CB6843] transition-colors font-['Roboto']">
                  Ovens
                </Link>
              </li>
              <li>
                <Link to="/equipment?category=toast+bread+slicer" className="text-white text-base hover:text-[#CB6843] transition-colors font-['Roboto']">
                  Baking Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-white text-xl font-['Montserrat'] font-bold uppercase tracking-normal mb-5">CONTACT US</h3> {/* Larger heading, uppercase, sturdy font */}
            <ul className="space-y-5"> {/* Increased space-y for comfortable line spacing */}
              <li className="flex items-start gap-4"> {/* Increased gap */}
                <MapPin className="h-6 w-6 text-[#CB6843]" /> {/* Larger icon, Terracotta icon */}
                <address className="not-italic text-white text-base font-['Roboto'] leading-relaxed"> {/* Clear, practical body text */}
                  GALA NO 91, BADRUDDIN COMPOUND, KHAIRANI ROAD, SAKINAKA, MUMBAI - 400072
                </address>
              </li>
              <li className="flex items-center gap-4"> {/* Increased gap */}
                <Phone className="h-6 w-6 text-[#CB6843]" /> {/* Larger icon, Terracotta icon */}
                <a
                  href="tel:+917021356127"
                  className="text-white text-base hover:text-[#CB6843] transition-colors font-['Roboto']"
                >
                  +91 70213 56127
                </a>
              </li>
              <li className="flex items-center gap-4"> {/* Increased gap */}
                <Mail className="h-6 w-6 text-[#CB6843]" /> {/* Larger icon, Terracotta icon */}
                <a
                  href="mailto:trbakingequipments@gmail.com"
                  className="text-white text-base hover:text-[#CB6843] transition-colors font-['Roboto']"
                >
                  trbakingequipments@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Developer Info */}
        <div className="pt-8 border-t border-[#707070] text-center text-xl text-white space-y-2 font-['Roboto']"> {/* Subtle border with better contrast, clear body text */}
          <p>&copy; {currentYear} TR BAKING EQUIPMENTS. All rights reserved.</p> {/* Updated company name */}
          <p>
            Developed with <span style={{ color: '#CB6843' }}>❤️</span> by{' '} {/* Heart in terracotta for brand consistency */}
            <a
              href="https://nextgrid.solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#CB6843] transition-colors" // Terracotta hover
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