import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    serviceName?: string;
}

/**
 * FAQ section with FAQPage JSON-LD schema injection.
 * Compact accordion with GSAP-powered smooth expand/collapse.
 * Optimized for AEO (Featured Snippets) and GEO (AI citation).
 */
const FAQ = ({ items, serviceName }: FAQProps) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);

    // Inject per-page FAQPage schema
    useEffect(() => {
        const schemaId = "faq-schema-dynamic";
        const existing = document.getElementById(schemaId);
        if (existing) existing.remove();

        const script = document.createElement("script");
        script.id = schemaId;
        script.type = "application/ld+json";
        script.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                },
            })),
        });
        document.head.appendChild(script);

        return () => {
            const el = document.getElementById(schemaId);
            if (el) el.remove();
        };
    }, [items]);

    // Animate FAQ items on scroll
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".faq-item",
                { y: 30, opacity: 0, scale: 0.97 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // GSAP-powered expand/collapse
    const toggle = useCallback((index: number) => {
        const prevIndex = openIndex;
        const nextIndex = prevIndex === index ? null : index;

        // Collapse the previously open item
        if (prevIndex !== null && prevIndex !== index) {
            const prevAnswer = answerRefs.current[prevIndex];
            const prevIcon = iconRefs.current[prevIndex];
            if (prevAnswer) {
                gsap.to(prevAnswer, {
                    height: 0,
                    opacity: 0,
                    duration: 0.35,
                    ease: "power2.inOut",
                });
            }
            if (prevIcon) {
                gsap.to(prevIcon, { rotation: 0, duration: 0.3, ease: "back.out(1.7)" });
            }
        }

        const currentAnswer = answerRefs.current[index];
        const currentIcon = iconRefs.current[index];

        if (nextIndex === null) {
            // Collapsing current item
            if (currentAnswer) {
                gsap.to(currentAnswer, {
                    height: 0,
                    opacity: 0,
                    duration: 0.35,
                    ease: "power2.inOut",
                });
            }
            if (currentIcon) {
                gsap.to(currentIcon, { rotation: 0, duration: 0.3, ease: "back.out(1.7)" });
            }
        } else {
            // Expanding new item
            if (currentAnswer) {
                // Set to auto to measure, then animate from 0
                gsap.set(currentAnswer, { height: "auto", opacity: 1 });
                const fullHeight = currentAnswer.scrollHeight;
                gsap.fromTo(
                    currentAnswer,
                    { height: 0, opacity: 0 },
                    {
                        height: fullHeight,
                        opacity: 1,
                        duration: 0.45,
                        ease: "power3.out",
                    }
                );
            }
            if (currentIcon) {
                gsap.to(currentIcon, { rotation: 135, duration: 0.4, ease: "back.out(2)" });
            }
        }

        setOpenIndex(nextIndex);
    }, [openIndex]);

    if (!items || items.length === 0) return null;

    return (
        <section ref={sectionRef} className="px-4 py-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-primary" />
                {serviceName ? `${serviceName} — FAQ` : "FAQ"}
            </h2>

            <div className="max-w-2xl">
                {items.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className="faq-item"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className={`
                                    w-full text-left
                                    border-b border-border/30
                                    transition-all duration-300
                                    ${isOpen ? "bg-primary/5" : "hover:bg-secondary/10"}
                                `}
                            >
                                {/* Question Row */}
                                <div className="flex items-center justify-between gap-3 py-3.5 px-4">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <span
                                            className={`
                                                text-[10px] font-bold tabular-nums shrink-0
                                                transition-colors duration-300
                                                ${isOpen ? "text-primary" : "text-primary/40"}
                                            `}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h3
                                            className={`
                                                text-sm font-medium transition-colors duration-300
                                                ${isOpen ? "text-primary" : "text-foreground"}
                                            `}
                                        >
                                            {item.question}
                                        </h3>
                                    </div>
                                    <span
                                        ref={(el) => { iconRefs.current[index] = el; }}
                                        className={`
                                            shrink-0 w-5 h-5 flex items-center justify-center
                                            rounded-full text-xs
                                            transition-colors duration-300
                                            ${isOpen
                                                ? "bg-primary/15 text-primary border border-primary/30"
                                                : "border border-border/40 text-muted-foreground"
                                            }
                                        `}
                                    >
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                            <line x1="5" y1="1" x2="5" y2="9" />
                                            <line x1="1" y1="5" x2="9" y2="5" />
                                        </svg>
                                    </span>
                                </div>
                            </button>

                            {/* Answer (GSAP-animated) */}
                            <div
                                ref={(el) => { answerRefs.current[index] = el; }}
                                className="overflow-hidden"
                                style={{ height: 0, opacity: 0 }}
                            >
                                <p className="text-xs text-muted-foreground leading-relaxed px-4 py-3 pl-[52px]">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQ;
