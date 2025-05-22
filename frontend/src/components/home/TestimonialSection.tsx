import { UserRound, Star, StarHalf } from 'lucide-react';
import SectionHeading from '../common/SectionHeading'; // Assuming this component exists and its styling can be overridden or adjusted

interface Testimonial {
  id: number;
  content: string;
  rating: number;
  // Assuming a name field would be added to testimonials in real data
  // For this exercise, we'll use a placeholder for the user's name/title
  // name: string;
  // title?: string; // e.g., "Head Baker, City Bakery"
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: 'The industrial mixer we purchased from TR BAKING EQUIPMENTS has been a game-changer for our bakery. The quality is outstanding, and their customer service team was incredibly helpful during the setup process.',
    rating: 5,
    // Add realistic names/titles if your actual data has them
    // name: 'Chef Anya Sharma',
    // title: 'Head Baker, "Sweet Delights"',
  },
  {
    id: 2,
    content: 'We\'ve been using TR BAKING EQUIPMENTS products for over 5 years now. Their equipment is reliable, durable, and performs exceptionally well even under the demands of our busy bakery. A truly indispensable partner.',
    rating: 3.9, // Adjusting this to be a valid rating for the prompt
    // name: 'Mark Jansen',
    // title: 'Operations Manager, "The Daily Loaf"',
  },
  {
    id: 3,
    content: 'The rotary oven from TR BAKING EQUIPMENTS has significantly improved our production efficiency. The even bake and consistent results are exactly what we needed to scale our business.',
    rating: 5,
    // name: 'Maria Rodriguez',
    // title: 'Owner, "Artisan Breads Co."',
  },
];

const TestimonialSection = () => {
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5; // Check if there's at least half a star

    return (
      <div className="flex text-[#CB6843]"> {/* Terracotta for star color */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" />
        ))}
        {hasHalfStar && (
          <StarHalf className="h-5 w-5 fill-current" />
        )}
        {/* Render empty stars for the remainder up to 5 */}
        {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map((_, i) => (
          <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" /> // Lighter gray for empty stars
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-[#EAEAEA]"> {/* Light gray background */}
      <div className="container mx-auto px-4">
        <SectionHeading
          title="WHAT OUR CLIENTS SAY" // Headings bold, uppercase, medium tracking
          subtitle="DON'T JUST TAKE OUR WORD FOR IT - HEAR FROM SOME OF OUR SATISFIED CUSTOMERS" // Subtitle clear, practical
          centered
          className="text-[#593D2B] mb-12" // Rich brown text for heading
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid for better spacing */}
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-md shadow-sm border border-gray-100 flex flex-col h-full" // Slightly rounded corners, subtle border, light shadow, flex-col h-full for equal height
            >
              {/* Rating */}
              <div className="mb-4">
                {renderRating(testimonial.rating)}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-[#3C3C3C] text-lg mb-6 font-['Roboto'] leading-relaxed flex-grow">"{testimonial.content}"</p> {/* Dark gray text, clear body text, flex-grow */}
              
              {/* User / Source (Placeholder for now) */}
              <div className="flex items-center mt-auto"> {/* mt-auto pushes this to the bottom */}
                <UserRound className="h-10 w-10 text-[#CB6843] mr-4" /> {/* Terracotta for user icon */}
                <div>
                  {/* Assuming testimonials would have a name and title field */}
                  <p className="font-['Montserrat'] font-bold text-[#593D2B] text-lg leading-tight">Bakery Owner</p> {/* Rich brown for name */}
                  <p className="text-[#3C3C3C] text-sm font-['Roboto']">Satisfied Customer</p> {/* Dark gray for title */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;