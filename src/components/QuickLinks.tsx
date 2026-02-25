import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { siteConfig } from "@/config/site";

const QuickLinks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".quick-link",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!siteConfig.quickLinks?.enabled) return null;

  const isInternal = (url: string) => url.startsWith("/");

  const linkClasses = "quick-link flex items-center justify-between p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group";

  const linkContent = (link: { emoji?: string; label: string }) => (
    <>
      <div className="flex items-center gap-3">
        {link.emoji && (
          <span className="text-lg">{link.emoji}</span>
        )}
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {link.label}
        </span>
      </div>
      <svg
        className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </>
  );

  return (
    <div ref={containerRef} className="px-4 py-4">
      <div className="max-w-lg mx-auto space-y-2">
        {siteConfig.quickLinks.items.map((link, index) =>
          isInternal(link.url) ? (
            <Link key={index} to={link.url} className={linkClasses}>
              {linkContent(link)}
            </Link>
          ) : (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              {linkContent(link)}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default QuickLinks;

