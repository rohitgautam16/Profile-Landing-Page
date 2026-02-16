import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Github, Linkedin, Twitter, Mail, MessageCircle, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";
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

const SocialLinks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".social-link",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const enabledLinks = siteConfig.socialLinks.filter((link) => link.enabled);

  return (
    <section ref={containerRef} className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {enabledLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link group relative flex items-center gap-3 p-4 md:p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 neon-glow" />

                {/* Icon */}
                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors duration-300">
                  {Icon && (
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                  )}
                </div>

                {/* Label */}
                <span className="relative z-10 font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {link.name}
                </span>

                {/* Arrow indicator */}
                <svg
                  className="relative z-10 w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
