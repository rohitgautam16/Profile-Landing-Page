export const ASSET_URL = "https://cdn.connect.rohitgautam.site";

// ============================================
// SITE CONFIGURATION
// Edit this file to customize your landing page
// ============================================

export const siteConfig = {
  // Personal Info
  name: "Rohit Gautam",

  tagline: "Full-Stack Developer",
  bio: `Full-stack developer currently working at RedHoney Consulting with 1.5+ years of production experience.

I specialize in the MERN stack (MongoDB, Express, React, Node.js) along with MySQL for robust database solutions. I have hands-on experience with production deployments on Cloud.

Beyond web apps, I create complete Shopify e-commerce stores and deliver ready-to-go WordPress websites for clients who need quick, professional solutions.`,

  // Profile Image (replace with your own)
  profileImage: `${ASSET_URL}/assets/Profile-img.avif`,

  // Stats
  stats: {
    followers: "1.5+ Years",
    label: "Experience",
  },

  // Social Links (compact icons in header)
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/rohitgautam16",
      icon: "github",
      enabled: true,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rohitgautam24",
      icon: "linkedin",
      enabled: true,
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/I_amrohitgautam",
      icon: "x",
      enabled: true,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/dusk_guy_07/",
      icon: "instagram",
      enabled: true,
    },
    {
      name: "Portfolio",
      url: "https://rohitgautam.site",
      icon: "globe",
      enabled: true,
    },
    {
      name: "Email",
      url: "mailto:connect@rohitgautam.site",
      icon: "mail",
      enabled: true,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/7905697407",
      icon: "whatsapp",
      enabled: true,
    },
  ],

  // Quick Links (text-based links with emoji)
  quickLinks: {
    enabled: true,
    items: [
      { label: "View My Portfolio", emoji: "🚀", url: "https://rohitgautam.site" },
      { label: "Hire Me - Freelance", emoji: "💼", url: "mailto:connect@rohitgautam.site" },
      { label: "Read My Blog", emoji: "✍️", url: "/blog" },
      // { label: "Shopify Stores", emoji: "🛒", url: "/service/shopify" },
      // { label: "WordPress Sites", emoji: "📝", url: "/service/wordpress" },
    ],
  },

  // Platform Links (Services offered)
  platforms: {
    enabled: true,
    featured: {
      name: "Full-Stack Development",
      description: "MERN Stack | MySQL | Digital Ocean",
      image: `${ASSET_URL}/assets/Services/fullstack-img.avif`,
      gif: `${ASSET_URL}/assets/Services/gifs/fullstack-gif.gif`,
      url: "/service/fullstack",
      slug: "fullstack",
      detail: {
        headline: "End-to-End Web Applications",
        subheading: "From architecture to deployment — I build production-ready full-stack apps that scale with your business.",
        whoIsFor: ["Startups needing a complete web application", "Businesses replacing outdated systems", "Founders building their MVP", "Teams that need a reliable full-stack developer"],
        deliverables: ["Full-stack MERN application (MongoDB, Express, React, Node.js)", "MySQL database design & integration", "Custom REST API development", "Production deployment on Digital Ocean", "Performance optimization & security hardening", "Documentation & knowledge transfer"],
        benefits: ["Ship your product faster with an experienced full-stack dev", "One developer handles frontend + backend — less coordination overhead", "Production-tested code from real client projects", "Scalable architecture that won't need a rewrite in 6 months"],
        process: ["Discovery — We define scope, tech stack, and milestones", "Architecture — I design the system, database, and API structure", "Build — Iterative development with regular demos and feedback", "Launch — Production deployment, testing, and handoff"],
        standout: ["1.5+ years of production experience at RedHoney Consulting", "End-to-end ownership — I don't just code, I ship", "Real deployment experience on Digital Ocean", "Clean, maintainable code that your future team will thank you for"],
        projects: [
          { title: "Maverick Nexa", description: "Maverick Nexa is a modern digital agency website showcasing custom web development, AI automation, CRM integrations, and scalable business solutions with a premium, conversion-focused user experience.", image: `${ASSET_URL}/assets/Projects/Maverick Nexa.avif`, redHoneyProject: false, liveUrl: "https://agency.rohitgautam.site/" },
          { title: "Align Alternative Therapy", description: "A personalized music-driven wellness platform featuring secure payment integration and a robust admin dashboard to manage content, users, and therapy experiences at scale.", image: `${ASSET_URL}/assets/Projects/align.avif`, redHoneyProject: true, liveUrl: "https://align-alternativetherapy.com/" },
          { title: "AM Hotel Collection", description: "A centralized hospitality platform showcasing multi-location hotels with rich room catalogs, immersive galleries, curated content, and conversion-focused offers", image: `${ASSET_URL}/assets/Projects/amhotelcollection.avif`, redHoneyProject: true, liveUrl: "https://www.amhotelkollection.com/" },
        ],
        cta: "Let's Build Your App",
        faq: [
          { question: "What is the MERN stack?", answer: "MERN stands for MongoDB, Express.js, React, and Node.js — a full JavaScript stack for building modern web applications. It allows one developer to handle both frontend and backend, reducing coordination overhead." },
          { question: "How long does it take to build a full-stack web app?", answer: "A typical MERN application takes 4-8 weeks depending on complexity. This includes discovery, architecture, iterative development with demos, and production deployment." },
          { question: "Do you deploy to cloud platforms?", answer: "Yes, I have hands-on experience deploying production applications on Digital Ocean, including server setup, SSL certificates, CI/CD pipelines, and monitoring." },
        ],
      },
    },
    items: [
      {
        name: "Shopify E-commerce",
        description: "Complete Store Setup",
        image: `${ASSET_URL}/assets/Services/shopify-img.avif`,
        gif: `${ASSET_URL}/assets/Services/gifs/shopify-gif.gif`,
        url: "/service/shopify",
        slug: "shopify",
        detail: {
          headline: "Launch Your Online Store",
          subheading: "From zero to a fully functional Shopify store — designed to sell, built to scale.",
          whoIsFor: ["Small business owners ready to sell online", "Brands migrating from another platform", "Entrepreneurs launching their first product line", "Anyone who needs a store that works, not just looks good"],
          deliverables: ["Fully customized Shopify store with your branding", "Product catalog setup with variants, pricing & inventory", "Payment gateway & shipping configuration", "Mobile-responsive theme (custom or premium)", "SEO setup for product pages & collections", "Launch-ready testing & QA"],
          benefits: ["Start selling faster with a store built right the first time", "Reduce abandoned carts with optimized checkout flow", "Rank higher on Google with built-in SEO best practices", "Manage your own store easily — I'll train you"],
          process: ["Discovery — We discuss your products, brand, and goals", "Build — I design and develop your store from scratch", "Review — You test everything and request changes", "Launch — We go live and I hand over the keys"],
          standout: ["I don't use cookie-cutter templates — every store is tailored to your brand", "I focus on conversion, not just aesthetics", "Post-launch support included — I don't disappear after delivery", "Real production experience, not just tutorials"],
          projects: [
            { title: "SteamPRO", description: "A premium bath-tech platform delivering end-to-end at-home steam therapy solutions, combining product discovery, wellness education, and conversion-driven user experience.", image: `${ASSET_URL}/assets/Projects/steampro.avif`, redHoneyProject: true, liveUrl: "https://steampro.in/" },
            { title: "Aseem Kapoor", description: "A curated designer fashion platform championing artisanal Indian craft and contemporary apparel with rich product showcases and seamless browsing experience.", image: `${ASSET_URL}/assets/Projects/aseemkapoor.avif`, redHoneyProject: true, liveUrl: "https://aseemkapoor.com/" },
            { title: "Smii Senses", description: "An e-commerce brand delivering premium natural soy candles with curated collections, sustainable wellness storytelling, and engaging product discovery flows.  ", image: `${ASSET_URL}/assets/Projects/smisenses.avif`, redHoneyProject: true, liveUrl: "https://smiisenses.com/" },
          ],
          cta: "Let's Build Your Store",
          faq: [
            { question: "How much does a Shopify store cost?", answer: "Costs vary based on complexity. A complete store with custom theme, product setup, payment integration, and SEO optimization is priced competitively. Contact me for a detailed quote based on your specific needs." },
            { question: "Can you migrate my store from another platform?", answer: "Yes, I handle migrations from WooCommerce, Magento, and other platforms to Shopify, including product data, customer info, and SEO redirects to preserve your rankings." },
            { question: "Will I be able to manage the store myself?", answer: "Absolutely. Shopify is designed to be user-friendly. I also provide training and documentation so you can manage products, orders, and content independently." },
          ],
        },
      },
      {
        name: "WordPress Sites",
        description: "Ready-to-Go Websites",
        image: `${ASSET_URL}/assets/Services/wordpress-img.avif`,
        gif: `${ASSET_URL}/assets/Services/gifs/wordpress-gif.gif`,
        url: "/service/wordpress",
        slug: "wordpress",
        detail: {
          headline: "Professional WordPress Solutions",
          subheading: "Get a polished, fast, and manageable website — without the headache of doing it yourself.",
          whoIsFor: ["Businesses that need a professional web presence fast", "Bloggers & content creators who want a custom look", "Agencies needing reliable WordPress development", "Anyone tired of slow, broken WordPress sites"],
          deliverables: ["Custom WordPress theme setup (or premium theme customization)", "Essential plugins configured & optimized", "Mobile-responsive, fast-loading design", "Contact forms, analytics & SEO basics", "Content management training so you're self-sufficient", "Security hardening & backup setup"],
          benefits: ["Go live in days, not months", "Easy to update yourself — no developer needed for content changes", "Fast-loading site that won't frustrate visitors", "Built with security best practices from day one"],
          process: ["Kickoff — We align on your goals, content, and design preferences", "Development — I build your site with your brand guidelines", "Content & Review — You review, I refine until it's perfect", "Handoff — I deliver, train you, and provide documentation"],
          standout: ["I optimize for speed — not just aesthetics", "Clean code, no bloated plugins", "I train you to manage your own site confidently", "Ongoing support available if you need it"],
          projects: [
            { title: "Elgiva", description: "A strategic HR solutions site focused on executive search and recruitment excellence that connects top-tier talent with organizations to catalyze growth and leadership impact.", image: `${ASSET_URL}/assets/Projects/elgiva.avif`, redHoneyProject: true, liveUrl: "https://elgiva.in/" },
            { title: "Accurate Associates", description: "An integrated architecture and infrastructure consultancy delivering sustainable, high-impact residential and institutional projects through 30+ years of design, construction, and advisory excellence across NCR.", image: `${ASSET_URL}/assets/Projects/accurate.avif`, redHoneyProject: true, liveUrl: "https://accurateassociates.in/" },
          ],
          cta: "Get Your Site Built",
          faq: [
            { question: "Why choose WordPress for my website?", answer: "WordPress powers over 40% of the web. It's flexible, SEO-friendly, and easy to manage. You can update content, add blog posts, and make changes without needing a developer." },
            { question: "Will my WordPress site be fast?", answer: "Yes. I optimize for speed from day one — clean code, minimal plugins, image optimization, and caching. No bloated themes that slow your site down." },
            { question: "Do you provide ongoing WordPress maintenance?", answer: "Yes, I offer post-launch support including security updates, plugin management, backups, and performance monitoring to keep your site running smoothly." },
          ],
        },
      },
      {
        name: "React SPA Websites / Portfolios",
        description: "Modern Web Apps",
        image: `${ASSET_URL}/assets/Services/react-spa-img.avif`,
        gif: `${ASSET_URL}/assets/Services/gifs/react-spa-gif.gif`,
        url: "/service/react",
        slug: "react",
        detail: {
          headline: "Modern React Applications",
          subheading: "Fast, interactive, and scalable single-page applications — built with the tech that powers the modern web.",
          whoIsFor: ["Startups that need a performant web app MVP", "Businesses replacing legacy frontends", "SaaS companies building dashboards or tools", "Anyone who needs more than a static website"],
          deliverables: ["Custom React SPA with TypeScript", "Responsive UI with modern component library", "API integration with your backend or third-party services", "State management & routing setup", "Performance optimization & lazy loading", "Deployment setup & CI/CD pipeline"],
          benefits: ["Lightning-fast user experience — no page reloads", "Scalable architecture that grows with your product", "Type-safe code that's easier to maintain long-term", "Modern tech stack that attracts top talent"],
          process: ["Architecture — We plan the app structure, routes, and data flow", "Sprint Build — I develop in focused sprints with regular demos", "Integration — We connect APIs, test edge cases, and polish", "Deploy — Production deployment with monitoring setup"],
          standout: ["I write production-grade code, not prototype-quality", "TypeScript-first approach for reliability", "Battle-tested patterns from real production apps", "I care about performance, accessibility, and DX equally"],
          projects: [
            { title: "Maverick Nexa", description: "Maverick Nexa is a modern digital agency website showcasing custom web development, AI automation, CRM integrations, and scalable business solutions with a premium, conversion-focused user experience.", image: `${ASSET_URL}/assets/Projects/Maverick Nexa.avif`, redHoneyProject: false, liveUrl: "https://agency.rohitgautam.site/" },
            { title: "Astro Charts", description: "A high-conversion React SPA designed to showcase astrology services through a performance-optimized layout, modern UI patterns, and engagement-driven content flow.", image: `${ASSET_URL}/assets/Projects/astrotalks.avif`, redHoneyProject: false, liveUrl: "https://astro-talks-homepage.vercel.app/" },
            { title: "By the Degree", description: "A React-based predictive calculation platform that processes user-provided personal data to deliver dynamic insights through a clean, logic-driven interface.", image: `${ASSET_URL}/assets/Projects/bythedegree.avif`, redHoneyProject: false, liveUrl: "https://by-the-degree-lo8x.vercel.app/" },
            { title: "My Tshirt", description: "An interactive React SPA featuring a real-time 3D T-shirt model that enables color customization, logo uploads, and image-based print personalization.", image: `${ASSET_URL}/assets/Projects/mytshirt.avif`, redHoneyProject: false, liveUrl: "https://my-tshirt.vercel.app/" },
          ],
          cta: "Build Your React App",
          faq: [
            { question: "What is a React SPA?", answer: "A Single Page Application (SPA) built with React loads once and updates dynamically — no page reloads. This creates a fast, app-like experience that keeps users engaged." },
            { question: "Can you build dashboards and admin panels?", answer: "Yes, I build custom React dashboards, admin panels, and SaaS tools with data visualization, real-time updates, and role-based access control." },
            { question: "Do you use TypeScript?", answer: "Yes, I use TypeScript by default for all React projects. It catches bugs early, improves code quality, and makes the codebase easier to maintain long-term." },
          ],
        },
      },
      // {
      //   name: "Backend/APIs",
      //   description: "Node.js & Express",
      //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop",
      //   url: "/service/backend",
      //   slug: "backend",
      //   detail: {
      //     headline: "Robust Backend Architecture",
      //     subheading: "Secure, scalable APIs and server-side systems — the invisible engine behind every great app.",
      //     whoIsFor: ["Teams that need a reliable API for their frontend", "Startups building their first backend from scratch", "Businesses integrating multiple third-party services", "Anyone whose current backend is slow or unreliable"],
      //     deliverables: ["RESTful API with Node.js & Express", "Database design & implementation (MongoDB or MySQL)", "Authentication & authorization system", "Third-party API integrations", "API documentation", "Production deployment on Digital Ocean"],
      //     benefits: ["Your frontend team can move faster with a clean API", "Secure data handling that protects your users", "Scalable architecture that handles growth", "Well-documented APIs that any developer can work with"],
      //     process: ["Discovery — We map out your data model and API requirements", "Build — I develop endpoints with tests and documentation", "Integrate — We connect your frontend and third-party services", "Deploy — Production setup with monitoring and backups"],
      //     standout: ["Production deployment experience on Digital Ocean", "I write APIs that are easy for other developers to use", "Security-first approach — auth, validation, rate limiting", "Clean, documented code you can maintain without me"],
      //     projects: [
      //       { title: "E-commerce API", description: "Complete REST API for an online store with payment integration", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop" },
      //       { title: "Auth System", description: "JWT-based authentication with role management", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop" },
      //     ],
      //     cta: "Build Your Backend",
      //   },
      // },
    ],
  },

  // About Section
  about: {
    enabled: true,
    title: "About Me",
    content: `Full-stack developer currently working at **RedHoney Consulting** with 1.5+ years of production experience.

I specialize in the **MERN stack** (MongoDB, Express, React, Node.js) along with **MySQL** for robust database solutions. I have hands-on experience with **production deployments on Cloud**.

Beyond web apps, I create complete **Shopify e-commerce stores** and deliver **ready-to-go WordPress websites** for clients who need quick, professional solutions.`,
    techStack: [
      { name: "React", icon: `${ASSET_URL}/assets/tech-logos/icons8-react-100.avif` },
      { name: "Node.js", icon: `${ASSET_URL}/assets/tech-logos/icons8-node-js-96.avif` },
      { name: "Express", icon: `${ASSET_URL}/assets/tech-logos/icons8-express-js-50.avif` },
      { name: "MongoDB", icon: `${ASSET_URL}/assets/tech-logos/icons8-mongodb-96.avif` },
      { name: "MySQL", icon: `${ASSET_URL}/assets/tech-logos/icons8-my-sql-96.avif` },
      { name: "JavaScript", icon: `${ASSET_URL}/assets/tech-logos/icons8-javascript-96.avif` },
      { name: "Shopify", icon: `${ASSET_URL}/assets/tech-logos/icons8-shopify-96.avif` },
      { name: "WordPress", icon: `${ASSET_URL}/assets/tech-logos/icons8-wordpress-96.avif` },
      { name: "Deployment", icon: `${ASSET_URL}/assets/tech-logos/icons8-digitalocean-logo-100.avif` },
    ],
  },

  // Featured Products/Services
  featured: {
    enabled: true,
    title: "Services",
    items: [],
  },

  // Contact Form (Web3Forms — get your free key at https://web3forms.com)
  contactForm: {
    web3formsKey: "204cc050-02c5-45ff-a400-8400cb67f586",
  },

  // Footer
  footer: {
    tagline: "Let's build something amazing together.",
    email: "connect@rohitgautam.site",
  },

  // Section visibility toggles
  sections: {
    hero: true,
    socialLinks: false,
    quickLinks: true,
    platforms: true,
    about: true,
    featured: false,
    footer: true,
  },

  // SEO & Meta
  seo: {
    title: "Rohit Gautam | Full-Stack Developer — MERN, Shopify, WordPress",
    description: "Full-stack developer with 1.5+ years production experience. I build MERN stack apps, Shopify stores, WordPress websites, and React SPAs. Available for freelance.",
    ogImage: `${ASSET_URL}/assets/Profile-img.avif`,
    faq: [
      {
        question: "What services do I offer?",
        answer: "I offer full-stack MERN development, Shopify e-commerce store setup, WordPress website development, and React SPA development. All services include production deployment and post-launch support.",
      },
      {
        question: "How long does it take to build a website?",
        answer: "Timeline depends on the project. A Shopify store takes 1-2 weeks, a WordPress site takes 1-3 weeks, and a full-stack MERN app takes 4-8 weeks. I provide a detailed timeline after understanding your requirements.",
      },
      {
        question: "Do I work with international clients?",
        answer: "Yes, I work with clients worldwide. I've delivered projects for businesses across India and beyond, with clear communication and regular progress updates throughout the project.",
      },
      {
        question: "What happens after the project is delivered?",
        answer: "I provide post-launch support, documentation, and training so you can manage your site independently. I'm also available for ongoing maintenance and future enhancements.",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
