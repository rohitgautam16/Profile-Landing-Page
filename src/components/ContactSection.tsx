import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Copy, Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useState } from "react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.footer.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div ref={sectionRef} className="px-4 py-4">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Mail className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground">Contact</p>
            <p className="text-sm font-medium text-foreground truncate">
              {siteConfig.footer.email}
            </p>
          </div>
          <button
            onClick={handleCopy}
            className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-primary" />
            ) : (
              <Copy className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
