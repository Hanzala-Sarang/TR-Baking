import { useEffect } from 'react';
import SectionHeading from '../components/common/SectionHeading';

const AboutPage = () => {
  useEffect(() => {
    // Update page title with the new brand name
    document.title = 'About Us | TR BAKING EQUIPMENTS';

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header */}
      <section className="bg-[#F5F0E6] pt-40 pb-16 relative"> {/* Warm cream background */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-bold mb-6 text-[#593D2B] tracking-normal"> {/* Sturdy font, rich brown, medium tracking */}
              ABOUT TR BAKING EQUIPMENTS
            </h1>
            <p className="text-lg text-[#3C3C3C] font-['Roboto'] leading-relaxed"> {/* Dark gray text, clear and practical body text */}
              Providing premium bakery equipment for over 8 years
            </p>
          </div>
        </div>
        {/* Wave Decoration (commented out as per original) */}
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="OUR STORY"
                subtitle="FROM HUMBLE BEGINNINGS TO INDUSTRY LEADERS" 
                className="text-[#593D2B]" // Rich brown for heading
              />
              <p className="mb-6 text-[#3C3C3C] font-['Roboto'] leading-relaxed"> {/* Dark gray text, clear and practical body text */}
                TR Baking Equipments was founded in 2017 by Tanveer Khan, a passionate business person. After struggling to find high-quality, reliable equipment for the bakery, he decided to create a company that would provide premium bakery equipment along with expert consultation and support.
              </p>
              <p className="mb-6 text-[#3C3C3C] font-['Roboto'] leading-relaxed">
                What started as a small operation has grown into a trusted supplier of bakery equipment for professional bakers, restaurants, hotels, and home baking enthusiasts across the country. Our commitment to quality, innovation, and customer service has remained unchanged throughout our journey.
              </p>
              <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed">
                Today, TR Baking Equipments is proud to serve customers from all over the world, from small artisan bakeries to large commercial operations. We've expanded our product line to include the latest innovations in baking technology while maintaining our focus on durability, performance, and value.
              </p>
            </div>
            {/* Image Grid - Apply slightly rounded corners and light shadows */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/6287301/pexels-photo-6287301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="TR Baking Equipments workshop"
                className="rounded-md object-cover h-64 w-full shadow-sm" // Rounded corners, light shadow
              />
              <img
                src="https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional bakery equipment"
                className="rounded-md object-cover h-64 w-full shadow-sm" // Rounded corners, light shadow
              />
              <img
                src="https://images.pexels.com/photos/6287301/pexels-photo-6287301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bakery oven"
                className="rounded-md object-cover h-64 w-full shadow-sm" // Rounded corners, light shadow
              />
              <img
                src="https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bakery mixer"
                className="rounded-md object-cover h-64 w-full shadow-sm" // Rounded corners, light shadow
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-[#EAEAEA]"> {/* Light gray background */}
        <div className="container mx-auto px-4">
          <SectionHeading
            title="OUR MISSION & VALUES" 
            subtitle="WHAT DRIVES US EVERY DAY" 
            centered
            className="text-[#593D2B]" // Rich brown for heading
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 h-full"> {/* Slightly rounded, subtle border, light shadow, equal height */}
              <h3 className="text-xl font-['Montserrat'] font-bold mb-4 text-[#593D2B]">OUR MISSION</h3> {/* Sturdy font, rich brown */}
              <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed"> {/* Dark gray text, clear and practical body text */}
                To provide high-quality bakery equipment that enables bakers to create exceptional products efficiently and consistently, supported by expert consultation and reliable customer service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 h-full"> {/* Slightly rounded, subtle border, light shadow, equal height */}
              <h3 className="text-xl font-['Montserrat'] font-bold mb-4 text-[#593D2B]">OUR VISION</h3> {/* Sturdy font, rich brown */}
              <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed"> {/* Dark gray text, clear and practical body text */}
                To be the leading supplier of premium bakery equipment, recognized for our product quality, innovation, and commitment to customer success in the baking industry.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 h-full"> {/* Slightly rounded, subtle border, light shadow, equal height */}
              <h3 className="text-xl font-['Montserrat'] font-bold mb-4 text-[#593D2B]">OUR VALUES</h3> {/* Sturdy font, rich brown */}
              <ul className="text-[#3C3C3C] font-['Roboto'] leading-relaxed space-y-2"> {/* Dark gray text, clear and practical body text */}
                <li>• Quality in everything we do</li>
                <li>• Customer-centric approach</li>
                <li>• Innovation and continuous improvement</li>
                <li>• Integrity and transparency</li>
                <li>• Supporting the baking community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Uncomment if you have this component and want to style it) */}
      {/* <TeamSection /> */}

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="OUR SERVICES" 
            subtitle="BEYOND JUST SELLING EQUIPMENT, WE PROVIDE COMPLETE SOLUTIONS" 
            centered
            className="text-[#593D2B]" // Rich brown for heading
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 h-full"> {/* Slightly rounded, subtle border, light shadow, equal height */}
              <h3 className="text-xl font-['Montserrat'] font-bold mb-4 text-[#CB6843]">EQUIPMENT CONSULTATION</h3> {/* Terracotta for service heading */}
              <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed mb-4"> {/* Dark gray text, clear and practical body text */}
                Our team of experts will help you select the right equipment for your specific needs, considering factors like production volume, space constraints, and budget.
              </p>
              <ul className="text-[#3C3C3C] font-['Roboto'] leading-relaxed space-y-2"> {/* Dark gray text, clear and practical body text */}
                <li>• Equipment needs assessment</li>
                <li>• Space planning and layout design</li>
                <li>• Budget optimization</li>
                <li>• Future growth considerations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 h-full"> {/* Slightly rounded, subtle border, light shadow, equal height */}
              <h3 className="text-xl font-['Montserrat'] font-bold mb-4 text-[#CB6843]">INSTALLATION & TRAINING</h3> {/* Terracotta for service heading */}
              <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed mb-4"> {/* Dark gray text, clear and practical body text */}
                We provide professional installation services and thorough training to ensure you get the most out of your equipment from day one.
              </p>
              <ul className="text-[#3C3C3C] font-['Roboto'] leading-relaxed space-y-2"> {/* Dark gray text, clear and practical body text */}
                <li>• Professional equipment installation</li>
                <li>• Staff training on equipment operation</li>
                <li>• Maintenance best practices</li>
                <li>• Troubleshooting guidance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 h-full"> {/* Slightly rounded, subtle border, light shadow, equal height */}
              <h3 className="text-xl font-['Montserrat'] font-bold mb-4 text-[#CB6843]">MAINTENANCE & SUPPORT</h3> {/* Terracotta for service heading */}
              <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed mb-4"> {/* Dark gray text, clear and practical body text */}
                Our commitment doesn't end with the sale. We offer ongoing maintenance and support to keep your equipment running smoothly.
              </p>
              <ul className="text-[#3C3C3C] font-['Roboto'] leading-relaxed space-y-2"> {/* Dark gray text, clear and practical body text */}
                <li>• Preventive maintenance programs</li>
                <li>• Quick response repair services</li>
                <li>• Genuine replacement parts</li>
                <li>• Extended warranty options</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 h-full"> {/* Slightly rounded, subtle border, light shadow, equal height */}
              <h3 className="text-xl font-['Montserrat'] font-bold mb-4 text-[#CB6843]">BAKERY SOLUTIONS</h3> {/* Terracotta for service heading */}
              <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed mb-4"> {/* Dark gray text, clear and practical body text */}
                For new bakeries or major renovations, we offer comprehensive planning and implementation services.
              </p>
              <ul className="text-[#3C3C3C] font-['Roboto'] leading-relaxed space-y-2"> {/* Dark gray text, clear and practical body text */}
                <li>• Complete bakery setup planning</li>
                <li>• Workflow optimization</li>
                <li>• Energy efficiency consultation</li>
                <li>• Scaling and expansion planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;