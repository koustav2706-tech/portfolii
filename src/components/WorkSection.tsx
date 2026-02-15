import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Nova Dashboard",
    category: "Web Application",
    image: project1,
  },
  {
    title: "Flux Brand Identity",
    category: "Design System",
    image: project2,
  },
  {
    title: "Arch Studio",
    category: "Creative Direction",
    image: project3,
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
          Selected Work
        </p>
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-16">
          Recent projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 border-glow cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {project.category}
                </p>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
