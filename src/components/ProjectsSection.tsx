import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  problem: string;
  technologies: string[];
  learned: string;
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Network Packet Analyzer",
    problem: "Needed to understand how data flows through networks at the packet level",
    technologies: ["Python", "Scapy", "Linux", "Wireshark"],
    learned: "Deep understanding of TCP/IP, packet headers, and network troubleshooting",
    github: "https://github.com/asgerali5656",
    demo: "https://github.com/asgerali5656",
  },
  {
    title: "Linux System Monitor",
    problem: "Wanted real-time visibility into system resources and processes",
    technologies: ["Bash", "Linux", "Shell Scripting"],
    learned: "Process management, system calls, and bash automation",
    github: "https://github.com/asgerali5656",
  },
  {
    title: "Portfolio Website",
    problem: "Needed a professional platform to showcase skills to recruiters",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    learned: "Modern web development, responsive design, and deployment workflows",
    github: "https://github.com/asgerali5656",
    demo: "#",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      className="group relative border border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -5 }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Folder className="w-6 h-6 text-primary" />
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-mono font-bold text-xl text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <div className="space-y-3 text-sm">
          <div>
            <span className="text-primary font-mono text-xs">// PROBLEM</span>
            <p className="text-muted-foreground mt-1">{project.problem}</p>
          </div>

          <div>
            <span className="text-secondary font-mono text-xs">// LEARNED</span>
            <p className="text-muted-foreground mt-1">{project.learned}</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
            <span className="text-secondary font-mono text-sm">03.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-foreground">
              ./project<span className="text-primary">_portfolio</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent hidden sm:block" />
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* View more link */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://github.com/asgerali5656"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-mono hover:gap-4 transition-all"
            >
              View more on GitHub
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;