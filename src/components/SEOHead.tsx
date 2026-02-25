import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  publishedTime?: string;
  author?: string;
}

/**
 * Dynamic SEO component that updates document head meta tags per page.
 * This ensures each route gets unique title + description for search engines.
 */
const SEOHead = ({
  title,
  description,
  canonicalPath = "/",
  ogImage = "https://connect.rohitgautam.site/assets/Profile-img.jpg",
  ogType = "website",
  publishedTime,
  author,
}: SEOHeadProps) => {
  useEffect(() => {
    const baseUrl = "https://connect.rohitgautam.site";
    const fullUrl = `${baseUrl}${canonicalPath}`;

    // Update title
    document.title = title;

    // Helper to update or create meta tags
    const setMeta = (attribute: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
      if (el) {
        el.setAttribute("content", content);
      } else {
        el = document.createElement("meta");
        el.setAttribute(attribute, key);
        el.setAttribute("content", content);
        document.head.appendChild(el);
      }
    };

    // Primary meta
    setMeta("name", "title", title);
    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:image", ogImage);
    if (publishedTime) {
      setMeta("property", "article:published_time", publishedTime);
    }
    if (author) {
      setMeta("property", "article:author", author);
    }

    // Twitter
    setMeta("property", "twitter:title", title);
    setMeta("property", "twitter:description", description);
    setMeta("property", "twitter:url", fullUrl);
    setMeta("property", "twitter:image", ogImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = fullUrl;
    } else {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = fullUrl;
      document.head.appendChild(canonical);
    }
  }, [title, description, canonicalPath, ogImage, ogType, publishedTime, author]);

  return null; // This component only modifies <head>, renders nothing
};

export default SEOHead;
