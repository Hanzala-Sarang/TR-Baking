import { useEffect } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import TeamSection from '../components/about/TeamSection';

const AboutPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'About Us | TR Baking Equipments';
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header */}
      <section className="bg-amber-50 pt-40 pb-16 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900">About TR Baking Equipments</h1>
            <p className="text-lg text-neutral-700">
              Providing premium bakery equipment for over 15 years
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
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="From humble beginnings to industry leaders"
              />
              <p className="mb-6 text-neutral-700">
                TR Baking Equipments was founded in 2017 by Tanveer Khan, a passionate business person. After struggling to find high-quality, reliable equipment for the bakery, he decided to create a company that would provide premium bakery equipment along with expert consultation and support.
              </p>
              <p className="mb-6 text-neutral-700">
                What started as a small operation has grown into a trusted supplier of bakery equipment for professional bakers, restaurants, hotels, and home baking enthusiasts across the country. Our commitment to quality, innovation, and customer service has remained unchanged throughout our journey.
              </p>
              <p className="text-neutral-700">
                Today, TR Baking Equipments is proud to serve customers from all over the world, from small artisan bakeries to large commercial operations. We've expanded our product line to include the latest innovations in baking technology while maintaining our focus on durability, performance, and value.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/6287301/pexels-photo-6287301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="TR Baking Equipments workshop" 
                className="rounded-lg object-cover h-64 w-full"
              />
              <img 
                src="https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional bakery equipment" 
                className="rounded-lg object-cover h-64 w-full"
              />
              <img 
                src="https://images.pexels.com/photos/6287301/pexels-photo-6287301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Bakery oven" 
                className="rounded-lg object-cover h-64 w-full"
              />
              <img 
                src="https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  
                alt="Bakery mixer" 
                className="rounded-lg object-cover h-64 w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <SectionHeading
            title="Our Mission & Values"
            subtitle="What drives us every day"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-card h-full">
              <h3 className="text-xl font-bold mb-4 text-amber-800">Our Mission</h3>
              <p className="text-neutral-700">
                To provide high-quality bakery equipment that enables bakers to create exceptional products efficiently and consistently, supported by expert consultation and reliable customer service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card h-full">
              <h3 className="text-xl font-bold mb-4 text-amber-800">Our Vision</h3>
              <p className="text-neutral-700">
                To be the leading supplier of premium bakery equipment, recognized for our product quality, innovation, and commitment to customer success in the baking industry.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card h-full">
              <h3 className="text-xl font-bold mb-4 text-amber-800">Our Values</h3>
              <ul className="text-neutral-700 space-y-2">
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
      
      {/* Team Section
      <TeamSection /> */}
      
      {/* Services */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <SectionHeading
            title="Our Services"
            subtitle="Beyond just selling equipment, we provide complete solutions"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-4">Equipment Consultation</h3>
              <p className="text-neutral-700 mb-4">
                Our team of experts will help you select the right equipment for your specific needs, considering factors like production volume, space constraints, and budget.
              </p>
              <ul className="text-neutral-700 space-y-2">
                <li>• Equipment needs assessment</li>
                <li>• Space planning and layout design</li>
                <li>• Budget optimization</li>
                <li>• Future growth considerations</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-4">Installation & Training</h3>
              <p className="text-neutral-700 mb-4">
                We provide professional installation services and thorough training to ensure you get the most out of your equipment from day one.
              </p>
              <ul className="text-neutral-700 space-y-2">
                <li>• Professional equipment installation</li>
                <li>• Staff training on equipment operation</li>
                <li>• Maintenance best practices</li>
                <li>• Troubleshooting guidance</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-4">Maintenance & Support</h3>
              <p className="text-neutral-700 mb-4">
                Our commitment doesn't end with the sale. We offer ongoing maintenance and support to keep your equipment running smoothly.
              </p>
              <ul className="text-neutral-700 space-y-2">
                <li>• Preventive maintenance programs</li>
                <li>• Quick response repair services</li>
                <li>• Genuine replacement parts</li>
                <li>• Extended warranty options</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-4">Bakery Solutions</h3>
              <p className="text-neutral-700 mb-4">
                For new bakeries or major renovations, we offer comprehensive planning and implementation services.
              </p>
              <ul className="text-neutral-700 space-y-2">
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