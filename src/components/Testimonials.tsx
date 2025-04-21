
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Homeowner",
    image: "",
    quote: "Found a plumber on the same day when my sink was leaking. The app made it incredibly easy to see his ratings and previous work. Great experience!",
    rating: 5
  },
  {
    name: "Thomas Dubois",
    role: "Apartment Renter",
    image: "",
    quote: "I was able to compare different electricians and chose based on reviews and pricing. The booking process was seamless and the job was completed perfectly.",
    rating: 5
  },
  {
    name: "Marc Lefèvre",
    role: "Property Manager",
    image: "",
    quote: "As someone who manages multiple properties, this app has saved me countless hours. I can quickly find reliable technicians for any issue that arises.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-white">
      <div className="bricoleur-container">
        <h2 className="section-title">Trusted by Thousands</h2>
        <p className="section-subtitle">
          Join over 10,000 satisfied customers who found their perfect technician
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-bricoleur-primary/20 flex items-center justify-center text-bricoleur-primary font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <span className="text-xl font-bold text-yellow-500">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-gray-600">from 1,000+ reviews</span>
          </div>
          <p className="max-w-2xl text-gray-700">
            Our network includes only verified, background-checked technicians with proven track records of excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
