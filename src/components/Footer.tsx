import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          {siteConfig.footer.tagline}
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
