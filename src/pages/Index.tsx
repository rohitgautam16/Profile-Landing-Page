import { useEffect } from "react";
import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import PlatformLinks from "@/components/PlatformLinks";
import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQ from "@/components/FAQ";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { siteConfig } from "@/config/site";

const Index = () => {
  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background relative">
      <SEOHead
        title={siteConfig.seo.title}
        description={siteConfig.seo.description}
        canonicalPath="/"
      />
      {/* Global blurred profile background */}
      <div className="fixed inset-0 z-0">
        <img
          src={siteConfig.profileImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover blur-[60px] opacity-90 scale-110"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>
      {/* Main Content */}
      <main className="relative z-10 max-w-xl mx-auto bg-black overflow-hidden">
        {siteConfig.sections.hero && <Hero />}
        {siteConfig.sections.quickLinks && <QuickLinks />}
        {siteConfig.sections.about && <AboutMe />}
        {siteConfig.sections.platforms && <PlatformLinks />}
        {siteConfig.seo.faq && <FAQ items={siteConfig.seo.faq} />}
        <ContactSection />
        {siteConfig.sections.footer && <Footer />}
      </main>
    </div>
  );
};

export default Index;

