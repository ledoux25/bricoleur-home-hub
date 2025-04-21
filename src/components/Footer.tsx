
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-bricoleur-secondary text-white pt-16 pb-8">
      <div className="bricoleur-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/78361499-7955-49d6-94ce-ad099b91929e.png" 
                alt="Le Bricoleur Logo" 
                className="h-10 w-auto mr-2 bg-white p-1 rounded"
              />
              <span className="text-xl font-semibold">Le Bricoleur</span>
            </div>
            <p className="text-white/80 mb-6">
              Connecting people with trusted, nearby technicians for home repair services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {['Plumbing', 'Electrical', 'Carpentry', 'Painting', 'General Repairs', 'For Business'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'How It Works', 'Careers', 'Press', 'Blog', 'Partner Program'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-white/80" />
                <span className="text-white/80">contact@lebricoleur.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-white/80" />
                <span className="text-white/80">+33 (0)1 23 45 67 89</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-white/80" />
                <span className="text-white/80">
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Le Bricoleur. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Cookies
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
