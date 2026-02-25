import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Clock, Calendar, Bookmark, Share2 } from "lucide-react";
import { blogPosts, BlogSection } from "@/config/blogs";
import { siteConfig } from "@/config/site";
import SEOHead from "@/components/SEOHead";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

gsap.registerPlugin(ScrollTrigger);

const BlogPost = () => {
    useSmoothScroll();
    const { slug } = useParams();
    const pageRef = useRef<HTMLDivElement>(null);

    const post = blogPosts.find((p) => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Inject BlogPosting JSON-LD schema for SEO/AEO/GEO
    useEffect(() => {
        if (!post) return;
        const schemaId = "blogpost-schema";
        const existing = document.getElementById(schemaId);
        if (existing) existing.remove();

        const baseUrl = "https://connect.rohitgautam.site";
        const script = document.createElement("script");
        script.id = schemaId;
        script.type = "application/ld+json";
        script.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage,
            datePublished: post.date,
            dateModified: post.date,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
                "@type": "Person",
                name: siteConfig.name,
                url: baseUrl,
                jobTitle: siteConfig.tagline,
            },
            publisher: {
                "@type": "Person",
                name: siteConfig.name,
                url: baseUrl,
            },
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${baseUrl}/blog/${post.slug}`,
            },
            keywords: post.tags.join(", "),
            wordCount: post.content
                .filter((s) => s.type === "text")
                .reduce((acc, s) => acc + (s.content?.split(" ").length || 0), 0),
            articleSection: post.tags[0],
        });
        document.head.appendChild(script);

        return () => {
            const el = document.getElementById(schemaId);
            if (el) el.remove();
        };
    }, [post]);

    useEffect(() => {
        if (!post || !pageRef.current) return;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".blog-hero",
                { opacity: 0 },
                { opacity: 1, duration: 0.6, ease: "power2.out" }
            );
            gsap.fromTo(
                ".blog-body",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.2 }
            );
            gsap.fromTo(
                ".blog-section",
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.45,
                    stagger: 0.06,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".blog-content", start: "top 92%" },
                }
            );
        }, pageRef);

        return () => ctx.revert();
    }, [post]);

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const handleShare = async () => {
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({ title: post?.title, url });
            } catch { }
        } else {
            navigator.clipboard.writeText(url);
        }
    };

    if (!post) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <p className="text-muted-foreground mb-4">Post not found</p>
                    <Link to="/blog" className="text-primary hover:underline">Back to blog</Link>
                </div>
            </div>
        );
    }

    const renderSection = (section: BlogSection, index: number) => {
        switch (section.type) {
            case "heading":
                return (
                    <h2
                        key={index}
                        className="blog-section text-base font-display font-bold text-foreground mt-7 mb-2"
                    >
                        {section.content}
                    </h2>
                );
            case "text":
                return (
                    <p key={index} className="blog-section text-[13px] text-muted-foreground leading-relaxed">
                        {section.content}
                    </p>
                );
            case "image":
                return (
                    <figure key={index} className="blog-section my-5">
                        <div className="rounded-xl overflow-hidden">
                            <img
                                src={section.src}
                                alt={section.alt || ""}
                                loading="lazy"
                                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                        {section.caption && (
                            <figcaption className="text-[10px] text-muted-foreground/50 mt-1.5 italic text-center">
                                {section.caption}
                            </figcaption>
                        )}
                    </figure>
                );
            case "quote":
                return (
                    <blockquote
                        key={index}
                        className="blog-section my-6 border-l-2 border-primary/40 pl-4 py-1"
                    >
                        <p className="text-sm text-foreground/70 italic leading-relaxed">
                            {section.content}
                        </p>
                    </blockquote>
                );
            case "list":
                return (
                    <ul key={index} className="blog-section space-y-1.5 my-3">
                        {section.items?.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-[13px] text-muted-foreground">
                                <span className="text-primary mt-0.5 shrink-0">→</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                );
            default:
                return null;
        }
    };

    // All other posts (for the slider)
    const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

    return (
        <div className="min-h-screen bg-background relative">
            <SEOHead
                title={`${post.title} — Rohit Gautam`}
                description={post.excerpt}
                canonicalPath={`/blog/${post.slug}`}
                ogType="article"
                publishedTime={post.date}
                author={siteConfig.name}
                ogImage={post.coverImage}
            />

            {/* Blurred background */}
            <div className="fixed inset-0 z-0">
                <img
                    src={siteConfig.profileImage}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover blur-[60px] opacity-90 scale-110"
                />
                <div className="absolute inset-0 bg-background/40" />
            </div>

            <div ref={pageRef} className="relative z-10 max-w-xl mx-auto bg-black min-h-screen">
                {/* Hero Image — edge-to-edge like the reference */}
                <div className="blog-hero relative">
                    <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 via-40% to-black/20" />

                        {/* Top nav overlaid on image */}
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
                            <Link
                                to="/blog"
                                className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:bg-black/60 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 text-white" />
                            </Link>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleShare}
                                    className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:bg-black/60 transition-colors"
                                >
                                    <Share2 className="w-4 h-4 text-white" />
                                </button>
                                <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10">
                                    <Bookmark className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Tags overlaid at bottom of image */}
                        <div className="absolute bottom-3 left-4 flex gap-1.5 flex-wrap">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur-sm text-[10px] font-medium text-white/90 border border-white/10"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Body content */}
                <div className="blog-body px-4 py-5">
                    {/* Author Row */}
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                            <img
                                src={siteConfig.profileImage}
                                alt={siteConfig.name}
                                className="w-10 h-10 rounded-full object-cover border-2 border-primary/30"
                            />
                            <div>
                                <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
                                <p className="text-[10px] text-muted-foreground">{siteConfig.tagline}</p>
                            </div>
                        </div>
                        <a
                            href={`mailto:${siteConfig.footer.email}`}
                            className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold hover:opacity-90 transition-opacity"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Title */}
                    <h1 className="text-xl font-display font-bold text-foreground leading-tight mb-3">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-[11px] text-muted-foreground/60 mb-6 pb-5 border-b border-border/20">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                        </span>
                    </div>

                    {/* Article Content */}
                    <div className="blog-content space-y-3">
                        {post.content.map((section, index) => renderSection(section, index))}
                    </div>

                    {/* Author CTA */}
                    <div className="mt-10 p-5 rounded-xl bg-card/30 border border-border/30 text-center space-y-3">
                        <img
                            src={siteConfig.profileImage}
                            alt={siteConfig.name}
                            className="w-12 h-12 rounded-full mx-auto object-cover border-2 border-primary/30"
                        />
                        <div>
                            <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
                            <p className="text-xs text-muted-foreground">{siteConfig.tagline}</p>
                        </div>
                        <a
                            href={`mailto:${siteConfig.footer.email}`}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                        >
                            Let's Work Together
                        </a>
                    </div>

                    {/* More Posts — Horizontal Slider */}
                    {otherPosts.length > 0 && (
                        <div className="mt-8 pb-6">
                            <h3 className="text-sm font-semibold text-foreground mb-3">More Posts</h3>
                            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                                {otherPosts.map((other) => (
                                    <Link
                                        key={other.slug}
                                        to={`/blog/${other.slug}`}
                                        className="block group shrink-0 w-[70%]"
                                    >
                                        <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                                            <img
                                                src={other.coverImage}
                                                alt={other.title}
                                                loading="lazy"
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                                            <div className="absolute bottom-0 left-0 right-0 p-3">
                                                <h4 className="text-xs font-semibold text-white line-clamp-2">{other.title}</h4>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-[10px] text-white/50">{other.readTime}</span>
                                                    <span className="text-[10px] text-white/50">·</span>
                                                    <span className="text-[10px] text-white/50">{other.tags[0]}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
