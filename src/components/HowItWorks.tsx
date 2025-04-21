import { Search, MapPin, Map, User, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import OpenStreetMapDouala from "./OpenStreetMapDouala";

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: t('howItWorks.search'),
      description: t('howItWorks.searchDesc')
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: t('howItWorks.location'),
      description: t('howItWorks.locationDesc')
    },
    {
      icon: <Map className="h-8 w-8 text-white" />,
      title: t('howItWorks.map'),
      description: t('howItWorks.mapDesc')
    },
    {
      icon: <User className="h-8 w-8 text-white" />,
      title: t('howItWorks.profiles'),
      description: t('howItWorks.profilesDesc')
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: t('howItWorks.book'),
      description: t('howItWorks.bookDesc')
    }
  ];

  return (
    <section id="how-it-works" className="section bg-white">
      <div className="bricoleur-container">
        <h2 className="section-title">{t('howItWorks.title')}</h2>
        <p className="section-subtitle">
          {t('howItWorks.subtitle')}
        </p>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-bricoleur-primary/20"></div>
            
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center space-y-4 opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'forwards',
                }}
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
        {/* >>> MAP SECTION - minimal padding, only essential elements <<< */}
        <div className="mt-12">
          <OpenStreetMapDouala />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
