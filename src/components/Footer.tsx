const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© 2026 Portfolio. All rights reserved.</span>
        <div className="flex gap-6">
          {["GitHub", "LinkedIn", "Twitter"].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
