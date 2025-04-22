import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

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
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary group" size="lg">
                {t("hero.findTechnician")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-secondary group" size="lg">
                {t("hero.becomeBricoleur")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="pt-4">
              <Button
                onClick={() =>{
                  const element = document.getElementById("download");
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: "smooth",
                    });
                }}}
                variant="ghost"
                className="text-gray-600 hover:text-bricoleur-primary group"
              >
                <Download className="mr-2 h-5 w-5" />
                {t("hero.downloadApp")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-bricoleur-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-bricoleur-primary/20 rounded-full filter blur-3xl"></div>

            <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl">
              <div className="w-full h-[400px] rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <div className=" bg-bricoleur-gray  translate-y-[-33%] flex items-center justify-center">
                    <img src="https://res.cloudinary.com/ddqkpyo5u/image/upload/v1745235883/ChatGPT_Image_Apr_21_2025_10_12_31_AM_aafp4m.png" alt="sscs" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-t-xl shadow-lg">
                    <h3 className="font-medium mb-2">
                      Available Technicians Near You
                    </h3>
                    <div className="space-y-3">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50"
                        >
                          <div className="w-10 h-10 rounded-full bg-bricoleur-primary/30"></div>
                          <div>
                            <p className="font-medium">Technician #{item}</p>
                            <p className="text-sm text-gray-500">
                              1.{item} km away • Available now
                            </p>
                          </div>
                          <div className="ml-auto">
                            <span className="text-sm font-medium bg-green-100 text-green-800 py-1 px-2 rounded-full">
                              4.{8 + item}/5
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
