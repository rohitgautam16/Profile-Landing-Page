import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { siteConfig } from "@/config/site";
import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";
import XIcon from "@/components/icons/XIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  x: XIcon,
  instagram: InstagramIcon,
  mail: Mail,
  whatsapp: WhatsAppIcon,
  globe: Globe,
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.4
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Scroll effect for overlay
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Calculate opacity based on scroll position (0 to 1 max)
      const opacity = Math.min(scrollY / 400, 1);
      setOverlayOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const enabledLinks = siteConfig.socialLinks.filter((link) => link.enabled);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center overflow-hidden"
    >

      {/* Large Hero Image - Fixed on scroll */}
      <div
        ref={imageRef}
        className="fixed top-0 left-1/2 -translate-x-1/2 z-1 w-full max-w-xl aspect-[4/5] max-h-[70vh] overflow-clip"
      >
        <img
          src={siteConfig.profileImage}
          alt={siteConfig.name}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Black overlay that appears on scroll */}
        <div
          className="absolute inset-0 bg-black transition-opacity duration-200"
          style={{ opacity: overlayOpacity }}
        />
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 via-background/30 to-transparent" />
      </div>

      {/* Spacer to maintain layout */}
      <div className="w-full max-w-xl mx-auto aspect-[4/5] max-h-[70vh]" />

      {/* Content overlay */}
      <div ref={contentRef} className="relative z-10 -mt-24 flex flex-col items-center text-center px-6 pb-6">
        {/* Name with badge */}
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            {siteConfig.name}
          </h1>
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
            <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm text-muted-foreground mb-3">
          {siteConfig.tagline}
        </p>

        {/* Social Icons Row */}
        <div className="flex items-center gap-2 mb-4">
          {enabledLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary/80 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                {Icon && (
                  <Icon className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
                )}
              </a>
            );
          })}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <span className="font-semibold text-primary">{siteConfig.stats?.followers || "1.5+"}</span>
          <span>{siteConfig.stats?.label || "Years Experience"}</span>
        </div>

        {/* Bio */}
        <p className="text-xs text-muted-foreground leading-relaxed ">
          {siteConfig.bio}
        </p>
      </div>
    </section>
  );
};

export default Hero;
