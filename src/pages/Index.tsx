import Hero from "@/components/aurora/Hero";
import Positioning from "@/components/aurora/Positioning";
import HowItWorks from "@/components/aurora/HowItWorks";
import Differentials from "@/components/aurora/Differentials";
import Deliverables from "@/components/aurora/Deliverables";
import Investment from "@/components/aurora/Investment";
import FinalCTA from "@/components/aurora/FinalCTA";
import Footer from "@/components/aurora/Footer";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Método Aurora — Direção & Estratégia em Saúde",
    description:
      "Consultoria estratégica em marketing para profissionais da saúde, com foco em direção, autonomia e posicionamento digital.",
    provider: {
      "@type": "Person",
      name: "Maria Vila",
      url: "https://www.instagram.com/mariavila.marketingmedico",
    },
    areaServed: "BR",
    offers: {
      "@type": "Offer",
      price: "3000.00",
      priceCurrency: "BRL",
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Positioning />
      <HowItWorks />
      <Differentials />
      <Deliverables />
      <Investment />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
