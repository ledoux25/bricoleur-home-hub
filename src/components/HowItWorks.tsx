import LocationMap from "./LocationMap";
import { Calendar, MapPin, Rocket, Search, ShieldCheck, User, Users2 } from "lucide-react";


  const steps = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Search",
      description: "Tell us what you need help with in a few simple steps."
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: "Auto-detect location",
      description: "We'll find your current location or you can enter a different address."
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: "See results on a map",
      description: "View available technicians near you with live availability."
    },
    {
      icon: <User className="h-8 w-8 text-white" />,
      title: "Compare profiles",
      description: "Review ratings, specialties, and previous work to find your match."
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Book instantly",
      description: "Schedule now or for a future date, and get confirmation right away."
    }
  ];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="bricoleur-container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Finding and booking a reliable handyman has never been easier
        </p>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-bricoleur-primary/20"></div>
            
            {steps.map((step, index) => (
              <div 
                key={index} 
                
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'forwards',
                  opacity: 0 
                }}
                className="flex flex-col items-center text-center space-y-4 opacity-0 animate-fade-in"
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-bricoleur-primary flex items-center justify-center shadow-lg mb-4">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center text-bricoleur-primary font-bold border-2 border-bricoleur-primary">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-24 bg-bricoleur-light rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-bricoleur-primary">
                See technicians around you — instantly
              </h3>
              <p className="text-lg text-gray-700">
                Our interactive map shows you qualified technicians in your area, with real-time availability and transparent pricing. No more waiting for quotes or playing phone tag.
              </p>
              <ul className="space-y-3">
                {['Verified profiles with reviews', 'Live availability status', 'Upfront pricing', 'Direct messaging'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-bricoleur-primary/20 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-bricoleur-primary"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="aspect-square w-full bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bricoleur-primary/20 flex items-center justify-center">
                  <div className="mt-8 mb-4 flex justify-center">
          <LocationMap />
          </div>
                  </div>
                  <p className="text-gray-500">Interactive map visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
