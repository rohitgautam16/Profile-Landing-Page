import { useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, CheckCircle, Zap, Users, Package, TrendingUp, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import SEOHead from "@/components/SEOHead";
import FAQ from "@/components/FAQ";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

gsap.registerPlugin(ScrollTrigger);

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);

  const service = [
    ...(siteConfig.platforms.featured ? [siteConfig.platforms.featured] : []),
    ...siteConfig.platforms.items,
  ].find((s: any) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!service || !pageRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-section",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.2 }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [service]);

  if (!service || !(service as any).detail) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Service not found</p>
          <Link to="/" className="text-primary hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const d = (service as any).detail;

  return (
    <div className="min-h-screen bg-background relative">
      {/* Blurred background */}
      <div className="fixed inset-0 z-0">
        <img
          src={siteConfig.profileImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover blur-[60px] opacity-90 scale-110"
        />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div ref={pageRef} className="relative z-10 max-w-xl mx-auto px-4 py-6 space-y-8 bg-black">
        <SEOHead
          title={`${service.name} — Rohit Gautam | Developer`}
          description={d.subheading}
          canonicalPath={`/service/${slug}`}
        />
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="service-section flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        {/* Hero */}
        <div className="service-section space-y-4 featured-card transition-all duration-500">
          <div className="group relative rounded-2xl overflow-hidden aspect-video">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover cursor-pointer scale-115 group-hover:scale-125 transition-transform duration-700"
            />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              {d.headline}
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              {d.subheading}
            </p>
            <a
              href={`mailto:${siteConfig.footer.email}?subject=${encodeURIComponent(d.cta + " - " + service.name)}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              {d.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Who This Is For */}
        <div className="service-section space-y-3">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-display font-bold text-foreground">Who This Is For</h2>
          </div>
          <ul className="space-y-2">
            {d.whoIsFor.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What You'll Get */}
        <div className="service-section space-y-3">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-display font-bold text-foreground">What You'll Get</h2>
          </div>
          <div className="grid gap-2">
            {d.deliverables.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-card/50 border border-border/50">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="service-section space-y-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-display font-bold text-foreground">Why It Matters</h2>
          </div>
          <div className="grid gap-2">
            {d.benefits.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                <Zap className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="service-section space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-display font-bold text-foreground">How It Works</h2>
          </div>
          <div className="space-y-3">
            {d.process.map((step: string, i: number) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <p className="text-sm text-foreground">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Stands Out */}
        <div className="service-section space-y-3">
          <h2 className="text-lg font-display font-bold text-foreground">Why Me?</h2>
          <div className="grid gap-2">
            {d.standout.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Work Carousel */}
        {d.projects && d.projects.length > 0 && (
          <div className="service-section space-y-3">
            <h2 className="text-lg font-display font-bold text-foreground">Relevant Work</h2>
            {d.projects.some((p: any) => p.redHoneyProject) && (
              <p className="text-xs text-muted-foreground/80 italic">
                Note: Some projects were built during my employment at RedHoney. All intellectual property rights belong to the respective clients and company.
              </p>
            )}
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {d.projects.map((project: any, i: number) => (
                  <CarouselItem key={i} className="basis-4/5">
                    <div className="overflow-hidden">
                      <div className="aspect-auto group overflow-hidden rounded-xl relative">
                        <a
                          href={project.liveUrl ?? project.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover scale-115 group-hover:scale-125 transition-transform duration-700"
                          />
                        </a>
                        {project.redHoneyProject && (
                          <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-primary/90 backdrop-blur-sm text-primary-foreground text-[10px] font-semibold">
                            RedHoney Project
                          </div>
                        )}
                      </div>
                      <div className="p-3 space-y-2">
                        <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{project.description}</p>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                          >
                            <span>View Live Site</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        )}

        {/* Final CTA */}
        <div className="service-section text-center py-8 space-y-4">
          <h2 className="text-xl font-display font-bold text-foreground">Ready to get started?</h2>
          <p className="text-sm text-muted-foreground">Let's discuss your project and make it happen.</p>
          <a
            href={`mailto:${siteConfig.footer.email}?subject=${encodeURIComponent(d.cta + " - " + service.name)}`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            {d.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Service FAQ (AEO + GEO) */}
        {d.faq && d.faq.length > 0 && (
          <FAQ items={d.faq} serviceName={service.name} />
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
