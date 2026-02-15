const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display font-bold text-xl text-foreground tracking-tight">
          Portfolio<span className="text-primary">.</span>
        </span>
        <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
          {["about", "work", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="hover:text-primary transition-colors capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
