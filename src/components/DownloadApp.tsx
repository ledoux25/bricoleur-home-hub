import { Check, Apple, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadApp = () => {
  return (
    <section className="section bg-gradient-to-br from-bricoleur-primary to-bricoleur-secondary text-white">
      <div className="bricoleur-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Booking repairs just got easier
            </h2>
            <p className="text-lg opacity-90">
              Download the Le Bricoleur app to find trusted technicians anywhere, anytime. 
              Your home repairs are just a few taps away.
            </p>
            
            <div className="space-y-4">
              {[
                "Instant booking with real-time availability",
                "Secure payment and transparent pricing",
                "Verified reviews from real customers",
                "Direct messaging with your technician"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-bricoleur-primary" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-white text-bricoleur-primary hover:bg-opacity-90 transition-all duration-200"
                size="lg"
              >
                <Apple className="mr-2 h-5 w-5" />
                App Store
              </Button>
              <Button 
                className="bg-white/20 text-white hover:bg-white/30 border border-white/40 transition-all duration-200"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Google Play
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-64 h-[500px] bg-gradient-to-b from-white/10 to-white/5 rounded-[40px] border-4 border-white/20 p-3 shadow-2xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-white/10 rounded-b-xl"></div>
              <div className="w-full h-full bg-bricoleur-primary/30 rounded-[30px] overflow-hidden flex items-center justify-center">
                <div className="h-full w-full flex items-center justify-center">
                  <img
                    src="/lovable-uploads/8f57403f-dfa6-4837-8605-0b90291f30c4.png"
                    alt="Le Bricoleur App Mockup"
                    className="h-full w-full object-contain rounded-[25px] shadow-md border border-white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
