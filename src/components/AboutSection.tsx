import { motion } from "framer-motion";
import { BookOpen, Clock, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "CS Foundation",
      description: "Computer Science student with strong theoretical grounding",
    },
    {
      icon: Clock,
      title: "6-8 Hours Daily",
      description: "Full-time dedicated learning and project building",
    },
    {
      icon: Target,
      title: "Hands-On Focus",
      description: "Real projects over tutorials, practical skills over theory alone",
    },
    {
      icon: Zap,
      title: "Job Ready",
      description: "Available immediately for entry-level IT positions",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
            <span className="text-secondary font-mono text-sm">01.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-foreground">
              ./about<span className="text-primary">_me</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent hidden sm:block" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <motion.div
                className="terminal-bg border border-border rounded-lg p-4 sm:p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-destructive" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary" />
                  <span className="ml-2 sm:ml-4 text-muted-foreground font-mono text-xs sm:text-sm">about.txt</span>
                </div>
                
                <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                  <p>
                    <span className="text-primary font-mono">{">"}</span> I'm a 23-year-old Computer Science student focused on building 
                    real-world IT skills. No fluff—just hands-on learning with Linux systems, 
                    networking fundamentals, and web technologies.
                  </p>
                  <p>
                    <span className="text-secondary font-mono">{">"}</span> Currently dedicating 6-8 hours daily to practical projects, 
                    lab environments, and skill development. My approach: learn by doing, 
                    document everything, and build a portfolio that speaks for itself.
                  </p>
                  <p>
                    <span className="text-accent font-mono">{">"}</span> Short-term goal: Secure an entry-level IT, Technical Support, 
                    or Junior Web Developer role. Long-term: transition into Cyber Security 
                    or Full-Stack Development.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group p-4 sm:p-6 border border-border rounded-lg cyber-gradient hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-4 group-hover:text-glow transition-all" />
                  <h3 className="font-mono font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;