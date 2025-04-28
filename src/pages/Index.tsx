
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ForTechnicians from "@/components/ForTechnicians";
import FAQ from "@/components/FAQ";
import DownloadApp from "@/components/DownloadApp";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <ForTechnicians />
      <Testimonials />
      <FAQ />
      <DownloadApp />
    </Layout>
  );
};

export default Index;
