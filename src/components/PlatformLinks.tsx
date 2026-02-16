import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

// Check if device is mobile/tablet
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1024;
};

interface PlatformCardProps {
  platform: any;
  isLastOdd?: boolean;
  onClick: () => void;
}

const PlatformCard = ({ platform, isLastOdd, onClick }: PlatformCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);
  const isMobile = isMobileDevice();
  const gifRef = useRef<HTMLImageElement>(null);

  const shouldShowGif = isMobile || isHovered;

  // Preload GIF on first hover (desktop only)
  useEffect(() => {
    if (!isMobile && isHovered && platform.gif && !gifLoaded) {
      const img = new Image();
      img.src = platform.gif;
      img.onload = () => setGifLoaded(true);
    }
  }, [isHovered, platform.gif, gifLoaded, isMobile]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        platform-card relative rounded-xl overflow-hidden group
        text-left w-full
        ${isLastOdd ? "col-span-2 aspect-video" : "aspect-square"}
      `}
    >
      {/* Static Image (hidden when GIF is shown) */}
      <img
        src={platform.image}
        alt={platform.name}
        className={`
          w-full h-full object-cover 
          transition-all duration-500
          ${shouldShowGif && platform.gif ? 'opacity-0 scale-110' : 'opacity-100 group-hover:scale-110'}
        `}
      />

      {/* GIF Overlay - shown on mobile (lazy loaded) or on hover for desktop */}
      {platform.gif && (
        <img
          ref={gifRef}
          src={platform.gif}
          alt={`${platform.name} preview`}
          loading="lazy"
          decoding="async"
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-500
            ${shouldShowGif ? 'opacity-100 scale-110' : 'opacity-0 scale-100 pointer-events-none'}
          `}
          style={{
            willChange: shouldShowGif ? 'transform, opacity' : 'auto'
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3">
        <span className="text-sm font-semibold text-white">{platform.name}</span>
        <p className="text-[10px] text-white/60 mt-0.5">Tap to learn more</p>
      </div>
    </button>
  );
};

const PlatformLinks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".platform-card",
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 125%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!siteConfig.platforms?.enabled) return null;

  const handleCardClick = (item: any) => {
    if (item.slug) {
      navigate(`/service/${item.slug}`);
    } else if (item.url) {
      window.open(item.url, "_blank");
    }
  };

  return (
    <section ref={sectionRef} className="px-4 py-6 overflow-hidden">
      <h2 className="section-title relative text-3xl md:text-4xl font-display font-bold text-foreground mb-12 flex items-center gap-3">
        <span className="w-12 h-[2px] bg-primary" />
        Services
      </h2>

      <div className="max-w-lg mx-auto">
        {siteConfig.platforms.featured && (
          <PlatformCard
            platform={siteConfig.platforms.featured}
            onClick={() => handleCardClick(siteConfig.platforms.featured)}
          />
        )}

        <div ref={cardsRef} className="grid grid-cols-2 gap-3 mt-4 w-full">
          {siteConfig.platforms.items.map((platform, index) => {
            const isLastOdd =
              siteConfig.platforms.items.length % 2 !== 0 &&
              index === siteConfig.platforms.items.length - 1;

            return (
              <PlatformCard
                key={index}
                platform={platform}
                isLastOdd={isLastOdd}
                onClick={() => handleCardClick(platform)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformLinks;
