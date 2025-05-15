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
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 pt-40 pb-20 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900">Get in Touch</h1>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Have questions about our baking equipment or need a custom solution? Our team is ready to assist you with expert advice and support.
            </p>
          </div>
        </div>
        
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {/* Left Column - Contact Information */}
            <div>
              <div className="bg-amber-50 p-8 rounded-xl shadow-md mb-12">
                <h2 className="text-2xl font-bold text-amber-900 mb-6">Contact Information</h2>
                
                <div className="space-y-8">
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
                      <a href="mailto:trbakingequipments@gmail.com" className="text-amber-600 hover:text-amber-700 transition-colors">
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
                      <a href="tel:+917021356127" className="text-amber-600 hover:text-amber-700 transition-colors">
                        +91 70213 56127
                      </a>
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
              </div>
              
              {/* Google Map */}
              <div className="rounded-xl overflow-hidden shadow-md">
                <div className="w-full h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5699246143324!2d72.88551027570747!3d19.088576682101928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8866a456c9f%3A0x8d1745d3d249f137!2sKhairani%20Rd%2C%20Sakinaka%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1715840142025!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-amber-50">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about our products and services"
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-amber-900">Do you offer installation services?</h3>
              <p className="text-neutral-700">
                Yes, we provide professional installation services for all our commercial equipment. Our team of trained technicians will ensure that your equipment is properly installed and functioning correctly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-amber-900">What is your warranty policy?</h3>
              <p className="text-neutral-700">
                Most of our equipment comes with a 1-2 year warranty against manufacturing defects. Extended warranty options are also available for purchase. Please check the product specifications or contact our sales team for specific warranty information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-amber-900">Do you ship internationally?</h3>
              <p className="text-neutral-700">
                Yes, we ship to select international locations. Shipping costs and delivery times vary depending on the destination. Please contact our sales team for more information about international shipping options.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-amber-900">Can I get a custom quote for my bakery?</h3>
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
