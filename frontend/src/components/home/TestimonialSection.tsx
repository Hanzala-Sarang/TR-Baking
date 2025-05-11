import { UserRound, Star, StarHalf } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Head Baker',
    company: 'Sweet Delights Bakery',
    content: 'The industrial mixer we purchased from TR Baking Equipments has been a game-changer for our bakery. The quality is outstanding, and their customer service team was incredibly helpful during the setup process.',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Michael Patel',
    position: 'Owner',
    company: 'Patel\'s Pastries',
    content: 'We\'ve been using TR Baking Equipments products for over 5 years now. Their equipment is reliable, durable, and performs exceptionally well even under the demands of our busy bakery.',
    rating: 3.9,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    position: 'Pastry Chef',
    company: 'Artisan Bake House',
    content: 'The decorating tools I purchased are of excellent quality. The precision they offer has elevated my cake designs to a whole new level. Highly recommend!',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
              <div className="flex items-center">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <UserRound className="h-6 w-6 text-amber-600" />
                  </div>
                )}
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.position}, {testimonial.company}</p>
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