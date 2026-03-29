import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientLogos from "@/components/ClientLogos";
import YouTubeSection from "@/components/YouTubeSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Lenis from "lenis";

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
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      
      <TestimonialsSection />
      <ClientLogos />
      <YouTubeSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;