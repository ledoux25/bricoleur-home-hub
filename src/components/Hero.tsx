
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
// Removed Map import

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      id="home" 
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-bricoleur-light overflow-hidden"
    >
      <div className="bricoleur-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="btn-primary group"
                size="lg"
              >
                {t('hero.findTechnician')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                className="btn-secondary group"
                size="lg"
              >
                {t('hero.becomeBricoleur')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="pt-4">
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-bricoleur-primary group"
              >
                <Download className="mr-2 h-5 w-5" />
                {t('hero.downloadApp')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-bricoleur-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-bricoleur-primary/20 rounded-full filter blur-3xl"></div>
            {/* Map removed here */}
            <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl">
              {/* You may add an illustration or leave empty */}
              <div className="aspect-video w-full rounded-xl bg-gray-100 flex items-center justify-center">
                {/* Optional: placeholder illustration */}
              </div>
              <div className="absolute inset-x-0 -bottom-8 flex justify-center pointer-events-none">
                {/* Subtle map shadow or decoration could go here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
