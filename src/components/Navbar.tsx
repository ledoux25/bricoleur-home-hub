import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";



const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="bricoleur-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/78361499-7955-49d6-94ce-ad099b91929e.png"
              alt="Le Bricoleur Logo"
              className="h-10 w-auto"
            />
            <span className="ml-2 text-xl font-semibold text-bricoleur-primary">
              Le Bricoleur
            </span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-800 hover:text-bricoleur-primary font-medium"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-800 hover:text-bricoleur-primary font-medium"
            >
              {t("nav.howItWorks")}
            </button>
            <button
              onClick={() => scrollToSection("for-technicians")}
              className="text-gray-800 hover:text-bricoleur-primary font-medium"
            >
              {t("nav.forTechnicians")}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-800 hover:text-bricoleur-primary font-medium"
            >
              {t("nav.faq")}
            </button>
              <a href="https://saassimplex.blob.core.windows.net/disk/lebricoleur.apk" download={"lebricolleur.apk"}>
              <Button className="bg-bricoleur-primary hover:bg-bricoleur-primary/90 text-white rounded-full">
              {t("nav.downloadApp")}
            </Button>
              </a>
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button
              className="ml-2 text-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-800 hover:text-bricoleur-primary font-medium py-2"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-800 hover:text-bricoleur-primary font-medium py-2"
              >
                {t("nav.howItWorks")}
              </button>
              <button
                onClick={() => scrollToSection("for-technicians")}
                className="text-gray-800 hover:text-bricoleur-primary font-medium py-2"
              >
                {t("nav.forTechnicians")}
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-800 hover:text-bricoleur-primary font-medium py-2"
              >
                {t("nav.faq")}
              </button>
              <a
                href="https://saassimplex.blob.core.windows.net/disk/lebricoleur.apk"
                download="lebricoleur.apk"
              >
                <Button className="bg-bricoleur-primary hover:bg-bricoleur-primary/90 text-white rounded-full">
                  {t("nav.downloadApp")}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
