{/* MARKER-MAKE-KIT-INVOKED */}
import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { TrustBar } from "./components/trust-bar";
import { AboutSection } from "./components/about-section";
import { WhyTrainSection } from "./components/why-train-section";
import { ServicesSection } from "./components/services-section";
import { OffersSection } from "./components/offers-section";
import { CredentialsSection } from "./components/credentials-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { InstagramSection } from "./components/instagram-section";
import { FinalCtaSection } from "./components/final-cta-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <WhyTrainSection />
      <ServicesSection />
      <OffersSection />
      <CredentialsSection />
      <TestimonialsSection />
      <InstagramSection />
      <FinalCtaSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
