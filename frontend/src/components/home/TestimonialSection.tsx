import { UserRound, Star, StarHalf } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

interface Testimonial {
  id: number;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: 'The industrial mixer we purchased from TR Baking Equipments has been a game-changer for our bakery. The quality is outstanding, and their customer service team was incredibly helpful during the setup process.',
    rating: 5,

  },
  {
    id: 2,
    content: 'We\'ve been using TR Baking Equipments products for over 5 years now. Their equipment is reliable, durable, and performs exceptionally well even under the demands of our busy bakery.',
    rating: 3.9,
  },
  {
    id: 3,
    content: 'The decorating tools I purchased are of excellent quality. The precision they offer has elevated my cake designs to a whole new level. Highly recommend!',
    rating: 5,
  },
];

const TestimonialSection = () => {
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex text-amber-500">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" />
        ))}
        {hasHalfStar && (
          <StarHalf className="h-5 w-5 fill-current" />
        )}
      </div>
    );
  };

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from some of our satisfied customers"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-card"
            >
              <div className="mb-4">
                {renderRating(testimonial.rating)}
              </div>
              <p className="text-neutral-700 mb-6">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;