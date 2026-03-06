import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CheckCircle, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const PROJECT_TYPES = [
  "Full-Stack Web App",
  "Shopify Store",
  "WordPress Website",
  "React SPA / Portfolio",
  "Other",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.contactForm.web3formsKey,
          name,
          email,
          project_type: projectType,
          budget: budget || "Not specified",
          message,
          from_name: "Contact Form — " + siteConfig.name,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setProjectType("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div ref={sectionRef} className="px-4 py-4">
      <div className="max-w-lg mx-auto space-y-3">

        {/* Mail Me CTA Card with Avatar */}
        <a
          href={`mailto:${siteConfig.footer.email}`}
          className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
        >
          <img
            src={siteConfig.profileImage}
            alt={siteConfig.name}
            className="w-10 h-10 rounded-full object-cover object-top ring-2 ring-border group-hover:ring-primary/50 transition-all"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground">Contact</p>
            <p className="text-sm font-medium text-foreground truncate">
              {siteConfig.footer.email}
            </p>
          </div>
          <span className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium group-hover:opacity-90 transition-opacity">
            Mail Me
          </span>
        </a>

        {/* Quick Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="pt-2 space-y-0"
        >
          {/* Honeypot spam protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          {/* Row 1: Name | Project Type */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full py-4 bg-transparent border-b border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              required
              className="w-full py-4 bg-transparent border-b border-border text-sm text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer [&>option]:bg-card [&>option]:text-foreground"
            >
              <option value="" disabled>Project Type</option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Row 2: Email | Budget (optional) */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full py-4 bg-transparent border-b border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
            <input
              type="text"
              placeholder="Budget (optional)"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full py-4 bg-transparent border-b border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </div>

          {/* Row 3: Message — full width */}
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full py-4 bg-transparent border-b border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
          />

          {/* Submit */}
          <div className="pt-5">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <ArrowUpRight className="w-4 h-4" />
                  Submit
                </>
              )}
            </button>
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <div className="flex items-center gap-2 pt-3 text-sm text-green-500">
              <CheckCircle className="w-4 h-4" />
              Message sent! I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 pt-3 text-sm text-red-500">
              <AlertCircle className="w-4 h-4" />
              Something went wrong. Try mailing directly.
            </div>
          )}
        </form>

      </div>
    </div>
  );
};

export default ContactSection;
