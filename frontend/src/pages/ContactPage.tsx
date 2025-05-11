import { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Contact Us | TR Baking Equipments';
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header */}
      <section className="bg-amber-50 pt-40 pb-16 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900">Contact Us</h1>
            <p className="text-lg text-neutral-700">
              Have questions about our products or services? We're here to help!
            </p>
          </div>
        </div>
        
        {/* Wave Decoration */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z" 
              className="fill-white"
            ></path>
          </svg>
        </div> */}
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="We're always ready to help with any questions you might have about our products or services."
              />
              
              <div className="space-y-8 mt-8">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Our Location</h3>
                    <p className="text-neutral-700">GALA NO 91, BADRUDDIN COMPOUND, KHAIRANI ROAD, SAKINAKA, MUMBAI - 400072</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <a href="mailto:info@trbakingequipments@gmail.comm" className="text-amber-600 hover:text-amber-700 transition-colors">
                      trbakingequipments@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <p className="text-neutral-700">Main:+91 70213 56127</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Business Hours</h3>
                    <p className="text-neutral-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-neutral-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Map (Placeholder) */}
              <div className="mt-12 bg-neutral-100 rounded-lg overflow-hidden h-64">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-neutral-500">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about our products and services"
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Do you offer installation services?</h3>
              <p className="text-neutral-700">
                Yes, we provide professional installation services for all our commercial equipment. Our team of trained technicians will ensure that your equipment is properly installed and functioning correctly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">What is your warranty policy?</h3>
              <p className="text-neutral-700">
                Most of our equipment comes with a 1-2 year warranty against manufacturing defects. Extended warranty options are also available for purchase. Please check the product specifications or contact our sales team for specific warranty information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Do you ship internationally?</h3>
              <p className="text-neutral-700">
                Yes, we ship to select international locations. Shipping costs and delivery times vary depending on the destination. Please contact our sales team for more information about international shipping options.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Can I get a custom quote for my bakery?</h3>
              <p className="text-neutral-700">
                Absolutely! We offer customized quotes based on your specific needs. Please contact our sales team through the form on this page or call us directly, and we'll be happy to provide a tailored quote for your bakery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;