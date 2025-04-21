
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ForTechnicians from "@/components/ForTechnicians";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Testimonials />
        <ForTechnicians />
        <DownloadApp />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
