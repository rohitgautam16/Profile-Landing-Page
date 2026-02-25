import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ArrowLeft, Clock, Bookmark } from "lucide-react";
import { blogPosts } from "@/config/blogs";
import { siteConfig } from "@/config/site";
import SEOHead from "@/components/SEOHead";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const BlogList = () => {
    useSmoothScroll();
    const pageRef = useRef<HTMLDivElement>(null);
    const [activeTag, setActiveTag] = useState<string>("All");

    // Collect all unique tags
    const allTags = ["All", ...Array.from(new Set(blogPosts.flatMap((p) => p.tags)))];

    const filteredPosts = activeTag === "All"
        ? blogPosts
        : blogPosts.filter((p) => p.tags.includes(activeTag));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Inject Blog + ItemList JSON-LD for the listing page
    useEffect(() => {
        const schemaId = "blog-list-schema";
        const existing = document.getElementById(schemaId);
        if (existing) existing.remove();

        const baseUrl = "https://connect.rohitgautam.site";
        const script = document.createElement("script");
        script.id = schemaId;
        script.type = "application/ld+json";
        script.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Rohit Gautam's Blog",
            description: "Web development insights, platform comparisons, and business tips.",
            url: `${baseUrl}/blog`,
            author: {
                "@type": "Person",
                name: siteConfig.name,
                url: baseUrl,
            },
            blogPost: blogPosts.map((p) => ({
                "@type": "BlogPosting",
                headline: p.title,
                description: p.excerpt,
                url: `${baseUrl}/blog/${p.slug}`,
                datePublished: p.date,
                image: p.coverImage,
            })),
        });
        document.head.appendChild(script);

        return () => {
            const el = document.getElementById(schemaId);
            if (el) el.remove();
        };
    }, []);

    useEffect(() => {
        if (!pageRef.current) return;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".blog-card",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.15,
                }
            );
        }, pageRef);

        return () => ctx.revert();
    }, [activeTag]);

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <div className="min-h-screen bg-background relative">
            <SEOHead
                title="Blog — Rohit Gautam | Web Development Insights"
                description="Practical web development tips, platform comparisons, and business advice from a full-stack developer."
                canonicalPath="/blog"
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
                {/* Sticky Header */}
                <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-border/20">
                    <div className="px-4 pt-4 pb-3">
                        <div className="flex items-center justify-between mb-4">
                            <Link
                                to="/"
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back
                            </Link>
                            <h1 className="text-base font-display font-bold text-foreground">Blogs</h1>
                            <div className="w-12" /> {/* Spacer for centering */}
                        </div>
                    </div>

                    {/* Horizontal Tag Chips */}
                    <div className="px-4 pb-3 -mt-1">
                        <div className="flex gap-2 overflow-x-auto no-scrollbar">
                            {allTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => setActiveTag(tag)}
                                    className={`
                    shrink-0 px-4 py-1.5 rounded-full text-xs font-medium
                    transition-all duration-300
                    ${activeTag === tag
                                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                            : "bg-card/60 text-muted-foreground border border-border/40 hover:border-primary/40 hover:text-foreground"
                                        }
                  `}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Blog Cards — Image-overlay style */}
                <div className="px-4 py-4 space-y-4">
                    {filteredPosts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="blog-card block group"
                        >
                            <article className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                                {/* Background Image */}
                                <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                                {/* Bookmark Icon */}
                                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10">
                                    <Bookmark className="w-4 h-4 text-white/80" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                                    {/* Tags */}
                                    <div className="flex gap-1.5 flex-wrap">
                                        {post.tags.slice(0, 2).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-sm text-[10px] font-medium text-white/90 border border-white/10"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-base font-bold text-white leading-snug line-clamp-2">
                                        {post.title}
                                    </h2>

                                    {/* Meta */}
                                    <div className="flex items-center gap-3 text-[11px] text-white/60">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M12 6v6l4 2" />
                                            </svg>
                                            {formatDate(post.date)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-sm text-muted-foreground">No posts found for "{activeTag}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
