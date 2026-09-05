import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ImpactBanner from "@/components/ImpactBanner";
import Showcase from "@/components/Showcase";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <ImpactBanner />
      <Showcase />
      <CtaSection />
      <Footer />
    </main>
  );
}