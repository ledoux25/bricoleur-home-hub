
import { Search, MapPin, Map, User, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LocationMap from "./LocationMap";

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

        <div className="mt-12 bg-bricoleur-light rounded-xl p-2 md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 md:pr-2">
              <h3 className="text-2xl md:text-3xl font-bold text-bricoleur-primary">
                {t('howItWorks.mapTitle')}
              </h3>
              <p className="text-lg text-gray-700">
                {t('howItWorks.mapText')}
              </p>
              <ul className="space-y-2 text-base">
                {[
                  'Verified profiles with reviews', 
                  'Live availability status', 
                  'Upfront pricing', 
                  'Direct messaging'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-bricoleur-primary/20 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-bricoleur-primary"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
