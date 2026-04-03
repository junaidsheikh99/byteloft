import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/ui/loader";
import { useEffect, Suspense, lazy } from "react";
import Lenis from "lenis";
import ContactForm from  "@/components/contact";
import TeamSection from "@/components/TeamSection";
import TeamGrid from "@/components/TeamGrid";
import StatsSection from "@/components/state";


// Lazy load components for better performance
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ClientLogos = lazy(() => import("@/components/ClientLogos"));
const YouTubeSection = lazy(() => import("@/components/YouTubeSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));


// Fallback component for lazy loading
const SectionFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader />
  </div>
);

const Index = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };

  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
      <StatsSection />
      </Suspense>
     
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <PortfolioSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection />
      </Suspense>
       <Suspense fallback={<SectionFallback />}>
      <TeamSection/>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
      <TeamGrid/>
      </Suspense>


      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>
      <ContactForm/>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      
    </div>
  );
};

export default Index;