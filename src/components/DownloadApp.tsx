import { Check, Apple, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadApp = () => {
  return (
    <section
      id="download"
      className="section bg-gradient-to-br from-bricoleur-primary to-bricoleur-secondary text-white"
    >
      <div className="bricoleur-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Booking repairs just got easier
            </h2>
            <p className="text-lg opacity-90">
              Download the Le Bricoleur app to find trusted technicians
              anywhere, anytime. Your home repairs are just a few taps away.
            </p>

            <div className="space-y-4">
              {[
                "Instant booking with real-time availability",
                "Secure payment and transparent pricing",
                "Verified reviews from real customers",
                "Direct messaging with your technician",
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
                className="bg-white/20 text-white hover:bg-white/30 border border-white/40 transition-all duration-200"
                size="lg"
              >
                <Apple className="mr-2 h-5 w-5" />
                App Store (Coming soon)
              </Button>
              <a
                href="https://saassimplex.blob.core.windows.net/disk/lebricoleur.apk"
                download={"lebricolleur.apk"}
              >
                <Button
                  className="bg-white w-full text-gray-800 hover:bg-opacity-90 transition-all duration-200"
                  size="lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </Button>
              </a>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-center">
            <img
              src="https://res.cloudinary.com/ddqkpyo5u/image/upload/c_crop,ar_9:16/v1745312120/iphone-x-mockup_1_jou6ci.png"
              alt="App mockup"
              className="object-contain max-h-[60vh]    rounded-3xl"
            />
            <img
              src="https://res.cloudinary.com/ddqkpyo5u/image/upload/c_crop,ar_9:16/v1745313400/iphone-x-mockup_2_o5xboo.png"
              alt="App mockup"
              className="object-contain max-h-[60vh]   rounded-3xl"
            />
                        <img
              src="https://res.cloudinary.com/ddqkpyo5u/image/upload/c_crop,ar_9:16/v1745314564/iphone-x-mockup_3_khquxs.png"
              alt="App mockup"
              className="object-contain max-h-[60vh] md:hidden   rounded-3xl"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
