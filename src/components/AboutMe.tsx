import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
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

      // Animate tech stack items
      gsap.fromTo(
        ".tech-item",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".tech-stack",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!siteConfig.about.enabled) return null;

  // Parse markdown-style bold text
  const parseContent = (text: string) => {
    return text.split("\n\n").map((paragraph, i) => {
      const parts = paragraph.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} className="text-muted-foreground leading-relaxed">
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <strong key={j} className="text-foreground font-semibold">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 px-6 border-t border-border/50"
    >
      <div ref={contentRef} className="max-w-2xl mx-auto">
        {/* Section Title */}
        {/* <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 flex items-center gap-3">
          <span className="w-12 h-[2px] bg-primary" />
          {siteConfig.about.title}
        </h2> */}

        {/* Content */}
        {/* <div className="space-y-4 text-base md:text-lg">
          {parseContent(siteConfig.about.content)}
        </div> */}

        {/* Tech Stack */}
        {siteConfig.about.techStack.length > 0 && (
          <div className="tech-stack mt-10">
            <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              Tech Stack
            </p>
            <div className="w-full mx-auto">
              <div className="relative overflow-hidden">
                <div className="flex gap-6 animate-scroll-loop">
                  {[...siteConfig.about.techStack, ...siteConfig.about.techStack].map((tech, index) => (
                    <div
                      key={`${typeof tech === 'string' ? tech : tech.name}-${index}`}
                      className="tech-item flex flex-col items-center gap-3 group cursor-default flex-shrink-0 w-20"
                    >
                      {/* Icon Container */}
                      <div className="w-16 h-16 flex items-center justify-center rounded-xl transition-all duration-300 p-3">
                        {typeof tech === 'object' && tech.icon && (
                          <img
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            className="w-full h-full object-contain opacity-90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu group-hover:opacity-100 group-hover:scale-110"
                          />
                        )}
                      </div>
                      {/* Name */}
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                        {typeof tech === 'string' ? tech : tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutMe;
