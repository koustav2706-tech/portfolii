const skills = [
  "React", "TypeScript", "Tailwind CSS", "Node.js", "Figma", "UI/UX Design",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            About
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">
            Passion meets
            <br />
            <span className="text-gradient">precision</span>
          </h2>
        </div>
        <div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm a developer and designer who thrives at the intersection of
            creativity and technology. With years of experience building for the
            web, I focus on creating interfaces that are not only visually
            striking but also intuitive and accessible.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-border text-sm text-secondary-foreground bg-secondary/50 hover:border-primary/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
