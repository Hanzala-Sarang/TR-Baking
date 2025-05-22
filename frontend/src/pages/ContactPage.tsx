import { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import ContactForm from '../components/contact/ContactForm'; // Assuming this component exists and its styling can be overridden or adjusted

const ContactPage = () => {
  useEffect(() => {
    // Update page title with the new brand name
    document.title = 'Contact Us | TR BAKING EQUIPMENTS';

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header */}
      <section className="bg-[#F5F0E6] pt-40 pb-20 relative"> {/* Warm cream background */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-bold mb-6 text-[#593D2B] tracking-normal"> {/* Sturdy font, rich brown, medium tracking */}
              GET IN TOUCH
            </h1>
            <p className="text-lg text-[#3C3C3C] font-['Roboto'] leading-relaxed max-w-2xl mx-auto"> {/* Dark gray text, clear and practical body text */}
              Have questions about our baking equipment or need a custom solution? Our team is ready to assist you with expert advice and support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {/* Left Column - Contact Information */}
            <div>
              <div className="bg-[#EAEAEA] p-8 rounded-md shadow-sm border border-gray-100 mb-12"> {/* Light gray background, rounded, subtle border, light shadow */}
                <h2 className="text-2xl font-['Montserrat'] font-bold text-[#593D2B] mb-6 tracking-normal">CONTACT INFORMATION</h2> {/* Sturdy font, rich brown */}

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-md mr-4 shadow-sm"> {/* White background, rounded, light shadow */}
                      <MapPin className="h-6 w-6 text-[#CB6843]" /> {/* Terracotta icon */}
                    </div>
                    <div>
                      <h3 className="text-lg font-['Montserrat'] font-medium mb-1 text-[#593D2B]">OUR LOCATION</h3> {/* Sturdy font, rich brown */}
                      <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed">GALA NO 91, BADRUDDIN COMPOUND, KHAIRANI ROAD, SAKINAKA, MUMBAI - 400072</p> {/* Dark gray, clear body text */}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-md mr-4 shadow-sm">
                      <Mail className="h-6 w-6 text-[#CB6843]" /> {/* Terracotta icon */}
                    </div>
                    <div>
                      <h3 className="text-lg font-['Montserrat'] font-medium mb-1 text-[#593D2B]">EMAIL US</h3> {/* Sturdy font, rich brown */}
                      <a href="mailto:trbakingequipments@gmail.com" className="text-[#CB6843] hover:text-[#A85735] transition-colors font-['Roboto']"> {/* Terracotta links, clear body text */}
                        trbakingequipments@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-md mr-4 shadow-sm">
                      <Phone className="h-6 w-6 text-[#CB6843]" /> {/* Terracotta icon */}
                    </div>
                    <div>
                      <h3 className="text-lg font-['Montserrat'] font-medium mb-1 text-[#593D2B]">CALL US</h3> {/* Sturdy font, rich brown */}
                      <a href="tel:+917021356127" className="text-[#CB6843] hover:text-[#A85735] transition-colors font-['Roboto']"> {/* Terracotta links, clear body text */}
                        +91 70213 56127
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-md mr-4 shadow-sm">
                      <Clock className="h-6 w-6 text-[#CB6843]" /> {/* Terracotta icon */}
                    </div>
                    <div>
                      <h3 className="text-lg font-['Montserrat'] font-medium mb-1 text-[#593D2B]">BUSINESS HOURS</h3> {/* Sturdy font, rich brown */}
                      <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed">Monday - Saturday: 9:00 AM - 6:00 PM</p> {/* Dark gray, clear body text */}
                      <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              {/* Ensure this iframe source is valid. If it's a placeholder, you'll need to replace it with a real Google Maps embed code. */}
              <div className="rounded-md overflow-hidden shadow-sm border border-gray-100"> {/* Rounded, subtle border, light shadow */}
                <div className="w-full h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8687258414966!2d72.8941913753383!3d19.155799782054653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93a0b5a3177%3A0xcb1d7d2c3e1a0b3!2sGALA%20NO%2091%2C%20BADRUDDIN%20COMPOUND%2C%20KHAIRANI%20ROAD%2C%20SAKINAKA%2C%20MUMBAI%20-%20400072!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TR BAKING EQUIPMENTS Location on Google Maps"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            {/* The ContactForm component itself will need to be styled according to the prompt as well. */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#EAEAEA]"> {/* Light gray background */}
        <div className="container mx-auto px-4">
          <SectionHeading
            title="FREQUENTLY ASKED QUESTIONS" 
            subtitle="FIND QUICK ANSWERS TO COMMON QUESTIONS ABOUT OUR PRODUCTS AND SERVICES" 
            centered
            className="text-[#593D2B]" // Rich brown for heading
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow border border-gray-100"> {/* Rounded, light shadow, subtle border */}
              <h3 className="text-lg font-['Montserrat'] font-bold mb-2 text-[#593D2B]">DO YOU OFFER INSTALLATION SERVICES?</h3> {/* Sturdy font, rich brown */}
              <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed"> {/* Dark gray, clear body text */}
                Yes, we provide professional installation services for all our commercial equipment. Our team of trained technicians will ensure that your equipment is properly installed and functioning correctly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow border border-gray-100"> {/* Rounded, light shadow, subtle border */}
              <h3 className="text-lg font-['Montserrat'] font-bold mb-2 text-[#593D2B]">WHAT IS YOUR WARRANTY POLICY?</h3> {/* Sturdy font, rich brown */}
              <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed"> {/* Dark gray, clear body text */}
                Most of our equipment comes with a 1-2 year warranty against manufacturing defects. Extended warranty options are also available for purchase. Please check the product specifications or contact our sales team for specific warranty information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow border border-gray-100"> {/* Rounded, light shadow, subtle border */}
              <h3 className="text-lg font-['Montserrat'] font-bold mb-2 text-[#593D2B]">DO YOU SHIP INTERNATIONALLY?</h3> {/* Sturdy font, rich brown */}
              <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed"> {/* Dark gray, clear body text */}
                Yes, we ship to select international locations. Shipping costs and delivery times vary depending on the destination. Please contact our sales team for more information about international shipping options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow border border-gray-100"> {/* Rounded, light shadow, subtle border */}
              <h3 className="text-lg font-['Montserrat'] font-bold mb-2 text-[#593D2B]">CAN I GET A CUSTOM QUOTE FOR MY BAKERY?</h3> {/* Sturdy font, rich brown */}
              <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed"> {/* Dark gray, clear body text */}
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