import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
          Get In Touch
        </p>
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
          Let's work <span className="text-gradient">together</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          Have a project in mind? I'd love to hear about it. Drop me a line and
          let's create something amazing.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-medium hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4" />
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
