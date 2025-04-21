
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the available languages
export type Language = 'en' | 'fr';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define the props for the provider component
interface LanguageProviderProps {
  children: ReactNode;
}

// Create translations object
const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.howItWorks': 'How It Works',
    'nav.forTechnicians': 'For Technicians',
    'nav.faq': 'FAQ',
    'nav.downloadApp': 'Download App',
    
    // Hero
    'hero.title': 'Your trusted handyman is just one tap away.',
    'hero.subtitle': 'Book reliable help instantly — no filters, no stress.',
    'hero.findTechnician': 'Find a Technician',
    'hero.becomeBricoleur': 'Become a Bricoleur',
    'hero.downloadApp': 'Download our app',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Finding and booking a reliable handyman has never been easier',
    'howItWorks.search': 'Search',
    'howItWorks.searchDesc': 'Tell us what you need help with in a few simple steps.',
    'howItWorks.location': 'Auto-detect location',
    'howItWorks.locationDesc': 'We\'ll find your current location or you can enter a different address.',
    'howItWorks.map': 'See results on a map',
    'howItWorks.mapDesc': 'View available technicians near you with live availability.',
    'howItWorks.profiles': 'Compare profiles',
    'howItWorks.profilesDesc': 'Review ratings, specialties, and previous work to find your match.',
    'howItWorks.book': 'Book instantly',
    'howItWorks.bookDesc': 'Schedule now or for a future date, and get confirmation right away.',
    'howItWorks.mapTitle': 'See technicians around you — instantly',
    'howItWorks.mapText': 'Our interactive map shows you qualified technicians in your area, with real-time availability and transparent pricing. No more waiting for quotes or playing phone tag.',
    
    // Testimonials
    'testimonials.title': 'Trusted by Thousands',
    'testimonials.subtitle': 'Join over 10,000 satisfied customers who found their perfect technician',
    'testimonials.fromReviews': 'from 1,000+ reviews',
    'testimonials.networkDesc': 'Our network includes only verified, background-checked technicians with proven track records of excellence.',
    
    // For Technicians
    'forTech.title': 'Become a Bricoleur Technician',
    'forTech.description': 'Join our network of trusted professionals and take your service business to the next level. We connect you with clients looking for your exact skills.',
    'forTech.benefit1': 'Smart Scheduling',
    'forTech.benefit1Desc': 'Manage your bookings and availability in one place. No more double-bookings or scheduling conflicts.',
    'forTech.benefit2': 'Local Visibility',
    'forTech.benefit2Desc': 'Get discovered by clients in your service area looking for your specific skills.',
    'forTech.benefit3': 'Grow Your Business',
    'forTech.benefit3Desc': 'Build your reputation with verified reviews and expand your client base.',
    'forTech.benefit4': 'Transparent Earnings',
    'forTech.benefit4Desc': 'Set your own rates and receive secure, on-time payments through our platform.',
    'forTech.cta': 'Join as Technician',
    
    // Download App
    'downloadApp.title': 'Booking repairs just got easier',
    'downloadApp.subtitle': 'Download the Le Bricoleur app to find trusted technicians anywhere, anytime. Your home repairs are just a few taps away.',
    'downloadApp.feature1': 'Instant booking with real-time availability',
    'downloadApp.feature2': 'Secure payment and transparent pricing',
    'downloadApp.feature3': 'Verified reviews from real customers',
    'downloadApp.feature4': 'Direct messaging with your technician',
    'downloadApp.appStore': 'App Store',
    'downloadApp.googlePlay': 'Google Play',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.contactUs': 'Didn\'t find what you\'re looking for?',
    'faq.contact': 'Contact us for more information',
    
    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contactUs': 'Contact Us',
    'footer.rights': 'All rights reserved.',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookies',
    'footer.accessibility': 'Accessibility',
  },
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.howItWorks': 'Comment ça marche',
    'nav.forTechnicians': 'Pour les Techniciens',
    'nav.faq': 'FAQ',
    'nav.downloadApp': 'Télécharger l\'App',
    
    // Hero
    'hero.title': 'Votre bricoleur de confiance est à portée de clic.',
    'hero.subtitle': 'Réservez une aide fiable instantanément — sans filtres, sans stress.',
    'hero.findTechnician': 'Trouver un Technicien',
    'hero.becomeBricoleur': 'Devenir Bricoleur',
    'hero.downloadApp': 'Télécharger notre application',
    
    // How It Works
    'howItWorks.title': 'Comment ça marche',
    'howItWorks.subtitle': 'Trouver et réserver un bricoleur fiable n\'a jamais été aussi facile',
    'howItWorks.search': 'Recherche',
    'howItWorks.searchDesc': 'Dites-nous ce dont vous avez besoin en quelques étapes simples.',
    'howItWorks.location': 'Localisation automatique',
    'howItWorks.locationDesc': 'Nous détectons votre position ou vous pouvez entrer une adresse différente.',
    'howItWorks.map': 'Voir les résultats sur la carte',
    'howItWorks.mapDesc': 'Consultez les techniciens disponibles près de chez vous avec leur disponibilité en temps réel.',
    'howItWorks.profiles': 'Comparer les profils',
    'howItWorks.profilesDesc': 'Examinez les évaluations, les spécialités et les travaux précédents pour trouver votre match.',
    'howItWorks.book': 'Réservez instantanément',
    'howItWorks.bookDesc': 'Planifiez maintenant ou pour une date future, et obtenez une confirmation immédiate.',
    'howItWorks.mapTitle': 'Découvrez les techniciens autour de vous — instantanément',
    'howItWorks.mapText': 'Notre carte interactive vous montre les techniciens qualifiés dans votre région, avec leur disponibilité en temps réel et des prix transparents. Plus besoin d\'attendre des devis ou de jouer au téléphone.',
    
    // Testimonials
    'testimonials.title': 'Approuvé par des Milliers',
    'testimonials.subtitle': 'Rejoignez plus de 10 000 clients satisfaits qui ont trouvé leur technicien parfait',
    'testimonials.fromReviews': 'sur plus de 1 000 avis',
    'testimonials.networkDesc': 'Notre réseau comprend uniquement des techniciens vérifiés, avec contrôle des antécédents et des résultats prouvés d\'excellence.',
    
    // For Technicians
    'forTech.title': 'Devenez Technicien Bricoleur',
    'forTech.description': 'Rejoignez notre réseau de professionnels de confiance et faites passer votre entreprise de services au niveau supérieur. Nous vous connectons avec des clients recherchant exactement vos compétences.',
    'forTech.benefit1': 'Planification Intelligente',
    'forTech.benefit1Desc': 'Gérez vos réservations et votre disponibilité en un seul endroit. Plus de double réservation ou de conflits d\'horaire.',
    'forTech.benefit2': 'Visibilité Locale',
    'forTech.benefit2Desc': 'Soyez découvert par des clients dans votre zone de service qui recherchent vos compétences spécifiques.',
    'forTech.benefit3': 'Développez Votre Activité',
    'forTech.benefit3Desc': 'Bâtissez votre réputation avec des avis vérifiés et élargissez votre clientèle.',
    'forTech.benefit4': 'Revenus Transparents',
    'forTech.benefit4Desc': 'Fixez vos propres tarifs et recevez des paiements sécurisés et ponctuels via notre plateforme.',
    'forTech.cta': 'Rejoindre comme Technicien',
    
    // Download App
    'downloadApp.title': 'Réserver des réparations n\'a jamais été aussi facile',
    'downloadApp.subtitle': 'Téléchargez l\'application Le Bricoleur pour trouver des techniciens de confiance n\'importe où, n\'importe quand. Vos réparations domestiques sont à quelques clics.',
    'downloadApp.feature1': 'Réservation instantanée avec disponibilité en temps réel',
    'downloadApp.feature2': 'Paiement sécurisé et prix transparents',
    'downloadApp.feature3': 'Avis vérifiés de clients réels',
    'downloadApp.feature4': 'Messagerie directe avec votre technicien',
    'downloadApp.appStore': 'App Store',
    'downloadApp.googlePlay': 'Google Play',
    
    // FAQ
    'faq.title': 'Questions Fréquemment Posées',
    'faq.contactUs': 'Vous n\'avez pas trouvé ce que vous cherchiez ?',
    'faq.contact': 'Contactez-nous pour plus d\'informations',
    
    // Footer
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.contactUs': 'Contactez-nous',
    'footer.rights': 'Tous droits réservés.',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.privacy': 'Politique de confidentialité',
    'footer.cookies': 'Cookies',
    'footer.accessibility': 'Accessibilité',
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Get initial language from localStorage if available, default to 'en'
  const initialLanguage: Language = (localStorage.getItem('language') as Language) || 'en';
  const [language, setLanguage] = useState<Language>(initialLanguage);

  // Function to set the language and save it to localStorage
  const handleSetLanguage = (newLanguage: Language) => {
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
