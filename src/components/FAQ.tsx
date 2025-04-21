
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I expect to find a technician?",
    answer: "Most users find available technicians within minutes. For standard services like plumbing or electrical work, technicians are often available same-day. For more specialized services, it may take up to 24 hours to find the right match."
  },
  {
    question: "How are technicians vetted?",
    answer: "All technicians go through a comprehensive vetting process including identity verification, professional certification checks, and background screening. We also maintain a rating system where only technicians with consistent positive reviews remain on the platform."
  },
  {
    question: "What happens if I'm not satisfied with the service?",
    answer: "Customer satisfaction is our priority. If you're not satisfied with the service, you can report the issue through the app. Our team will investigate and work to resolve the situation, which may include arranging for another technician to fix the problem or providing a refund according to our satisfaction guarantee."
  },
  {
    question: "How much does it cost to use Le Bricoleur?",
    answer: "The app is free to download and search for technicians. You only pay for the services you book, with transparent pricing shown upfront. There are no hidden fees or subscription costs for customers."
  },
  {
    question: "How do I become a technician on the platform?",
    answer: "To become a technician, download the app and select 'Join as Technician'. You'll need to provide proof of your qualifications, insurance, and complete a background check. Once approved, you can set your service area, rates, and availability."
  },
  {
    question: "What areas do you currently service?",
    answer: "We currently operate in major cities across France, including Paris, Lyon, Marseille, Bordeaux, and Lille. We're expanding rapidly, so check the app for the most up-to-date coverage information."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-bricoleur-light">
      <div className="bricoleur-container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto mt-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-bricoleur-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-bricoleur-primary" />
                  )}
                </button>
                <div 
                  className={`px-5 transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'pb-5 max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Didn't find what you're looking for?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-bricoleur-primary hover:text-bricoleur-secondary font-medium"
          >
            Contact us for more information
            <ChevronDown className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
