import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up">
          Creative Developer & Designer
        </p>
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.9] mb-8 animate-fade-up [animation-delay:200ms] opacity-0">
          Crafting Digital
          <br />
          <span className="text-gradient">Experiences</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto animate-fade-up [animation-delay:400ms] opacity-0">
          I build beautiful, performant web applications that blend design
          thinking with technical excellence.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:1s] opacity-0">
        <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
