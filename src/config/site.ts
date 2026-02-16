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
  profileImage: "/assets/Profile-img.jpg",

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
      url: "mailto:rohit.gautam2403@gmail.com",
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
      { label: "Hire Me - Freelance", emoji: "💼", url: "mailto:rohit.gautam2403@gmail.com" },
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
      image: "/assets/Services/fullstack-img.webp",
      gif: "/assets/Services/gifs/fullstack-gif.gif",
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
          { title: "Align Alternative Therapy", description: "A personalized music-driven wellness platform featuring secure payment integration and a robust admin dashboard to manage content, users, and therapy experiences at scale.", image: "/assets/Projects/align.png", redHoneyProject: true, liveUrl: "https://align-alternativetherapy.com/" },
          { title: "AM Hotel Collection", description: "A centralized hospitality platform showcasing multi-location hotels with rich room catalogs, immersive galleries, curated content, and conversion-focused offers", image: "/assets/Projects/amhotelcollection.png", redHoneyProject: true, liveUrl: "https://www.amhotelkollection.com/" },
        ],
        cta: "Let's Build Your App",
      },
    },
    items: [
      {
        name: "Shopify E-commerce",
        description: "Complete Store Setup",
        image: "/assets/Services/shopify-img.png",
        gif: "/assets/Services/gifs/shopify-gif.gif",
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
            { title: "SteamPRO", description: "A premium bath-tech platform delivering end-to-end at-home steam therapy solutions, combining product discovery, wellness education, and conversion-driven user experience.", image: "/assets/Projects/steampro.png", redHoneyProject: true, liveUrl: "https://steampro.in/" },
            { title: "Aseem Kapoor", description: "A curated designer fashion platform championing artisanal Indian craft and contemporary apparel with rich product showcases and seamless browsing experience.", image: "/assets/Projects/aseemkapoor.png", redHoneyProject: true, liveUrl: "https://aseemkapoor.com/" },
            { title: "Smi Senses", description: "An e-commerce brand delivering premium natural soy candles with curated collections, sustainable wellness storytelling, and engaging product discovery flows.  ", image: "/assets/Projects/smisenses.png", redHoneyProject: true, liveUrl: "https://smisenses.com/" },
          ],
          cta: "Let's Build Your Store",
        },
      },
      {
        name: "WordPress Sites",
        description: "Ready-to-Go Websites",
        image: "/assets/Services/wordpress-img.png",
        gif: "/assets/Services/gifs/wordpress-gif.gif",
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
            { title: "Elgiva", description: "A strategic HR solutions site focused on executive search and recruitment excellence that connects top-tier talent with organizations to catalyze growth and leadership impact.", image: "/assets/Projects/elgiva.png", redHoneyProject: true, liveUrl: "https://elgiva.in/" },
            { title: "Accurate Associates", description: "An integrated architecture and infrastructure consultancy delivering sustainable, high-impact residential and institutional projects through 30+ years of design, construction, and advisory excellence across NCR.", image: "/assets/Projects/accurate.png", redHoneyProject: true, liveUrl: "https://accurateassociates.in/" },
          ],
          cta: "Get Your Site Built",
        },
      },
      {
        name: "React SPA Websites",
        description: "Modern Web Apps",
        image: "/assets/Services/react-spa-img.png",
        gif: "/assets/Services/gifs/react-spa-gif.gif",
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
            { title: "Astro Charts", description: "A high-conversion React SPA designed to showcase astrology services through a performance-optimized layout, modern UI patterns, and engagement-driven content flow.", image: "/assets/Projects/astrotalks.png", redHoneyProject: false, liveUrl: "https://astro-talks-homepage.vercel.app/" },
            { title: "By the Degree", description: "A React-based predictive calculation platform that processes user-provided personal data to deliver dynamic insights through a clean, logic-driven interface.", image: "/assets/Projects/bythedegree.png", redHoneyProject: false, liveUrl: "https://by-the-degree-lo8x.vercel.app/" },
            { title: "My Tshirt", description: "An interactive React SPA featuring a real-time 3D T-shirt model that enables color customization, logo uploads, and image-based print personalization.", image: "/assets/Projects/mytshirt.png", redHoneyProject: false, liveUrl: "https://my-tshirt.vercel.app/" },
          ],
          cta: "Build Your React App",
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
      { name: "React", icon: "/assets/tech-logos/icons8-react-100.png" },
      { name: "Node.js", icon: "/assets/tech-logos/icons8-node-js-96.png" },
      { name: "Express", icon: "/assets/tech-logos/icons8-express-js-50.png" },
      { name: "MongoDB", icon: "/assets/tech-logos/icons8-mongodb-96.png" },
      { name: "MySQL", icon: "/assets/tech-logos/icons8-my-sql-96.png" },
      { name: "JavaScript", icon: "/assets/tech-logos/icons8-javascript-96.png" },
      { name: "Shopify", icon: "/assets/tech-logos/icons8-shopify-96.png" },
      { name: "WordPress", icon: "/assets/tech-logos/icons8-wordpress-96.png" },
      { name: "Deployment", icon: "/assets/tech-logos/icons8-digitalocean-logo-100.png" },
    ],
  },

  // Featured Products/Services
  featured: {
    enabled: true,
    title: "Services",
    items: [],
  },

  // Footer
  footer: {
    tagline: "Let's build something amazing together.",
    email: "rohit.gautam2403@gmail.com",
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
    title: "Rohit Gautam | Full-Stack Developer",
    description: "Full-stack developer specializing in MERN stack, Shopify e-commerce, and WordPress. 1.5+ years of production experience. Available for freelance projects.",
    ogImage: "/assets/Profile-img.jpg",
  },
};

export type SiteConfig = typeof siteConfig;
