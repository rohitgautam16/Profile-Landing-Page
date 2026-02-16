import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

const FeaturedServices = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".section-title",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Cards animation with stagger
      gsap.fromTo(
        ".featured-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );

      // Parallax effect on card images
      const cards = cardsRef.current?.querySelectorAll(".featured-card");
      cards?.forEach((card) => {
        const image = card.querySelector(".card-image");
        if (image) {
          gsap.to(image, {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!siteConfig.featured.enabled) return null;

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 border-t border-border/50"
    >
      <div className="max-w-4xl mx-auto bg-black">
        {/* Section Title */}
        <h2 className="section-title text-3xl md:text-4xl font-display font-bold text-foreground mb-12 flex items-center gap-3">
          <span className="w-12 h-[2px] bg-primary" />
          {siteConfig.featured.title}
        </h2>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.featured.items.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="featured-card group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-image w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-12">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  <span>{item.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none neon-glow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
