import { motion } from "framer-motion";
import { Check, BookOpen, Target, Terminal, Globe, Shield, Server, Code, Github, Lock } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
}

interface SkillCategory {
  title: string;
  status: "comfortable" | "learning" | "planned";
  color: string;
  icon: React.ElementType;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Comfortable",
    status: "comfortable",
    color: "text-secondary",
    icon: Check,
    skills: [
      { name: "HTML & CSS", icon: Code },
      { name: "JavaScript Basics", icon: Code },
      { name: "Linux Basics", icon: Terminal },
      { name: "Fedora & Kali", icon: Terminal },
      { name: "GitHub Basics", icon: Github },
      { name: "Networking (IP, DNS, HTTP)", icon: Globe },
    ],
  },
  {
    title: "Learning",
    status: "learning",
    color: "text-primary",
    icon: BookOpen,
    skills: [
      { name: "Bash Scripting", icon: Terminal },
      { name: "Web Deployment (Vercel)", icon: Server },
      { name: "Basic Security Tools", icon: Shield },
    ],
  },
  {
    title: "Planned",
    status: "planned",
    color: "text-accent",
    icon: Target,
    skills: [
      { name: "Backend (Node.js)", icon: Server },
      { name: "Web App Security", icon: Lock },
      { name: "SOC Fundamentals", icon: Shield },
    ],
  },
];

const SkillCard = ({ skill, index, status }: { skill: Skill; index: number; status: string }) => {
  const statusColors = {
    comfortable: "border-secondary/30 hover:border-secondary bg-secondary/5",
    learning: "border-primary/30 hover:border-primary bg-primary/5",
    planned: "border-accent/30 hover:border-accent bg-accent/5",
  };

  const iconColors = {
    comfortable: "text-secondary",
    learning: "text-primary",
    planned: "text-accent",
  };

  return (
    <motion.div
      className={`flex items-center gap-3 p-4 rounded-lg border ${statusColors[status as keyof typeof statusColors]} transition-all duration-300`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, x: 5 }}
    >
      <skill.icon className={`w-5 h-5 ${iconColors[status as keyof typeof iconColors]}`} />
      <span className="font-mono text-sm text-foreground">{skill.name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
            <span className="text-secondary font-mono text-sm">02.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-foreground">
              ./skill<span className="text-primary">_set</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent hidden sm:block" />
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.2 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <category.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${category.color}`} />
                  <h3 className={`font-mono font-bold text-lg sm:text-xl ${category.color}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={index}
                      status={category.status}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal animation */}
          <motion.div
            className="mt-16 terminal-bg border border-border rounded-lg p-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span className="ml-4 text-muted-foreground font-mono text-sm">skills.sh</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-secondary">$</span>{" "}
                <span className="text-foreground">cat /etc/learning_philosophy</span>
              </motion.p>
              <motion.p
                className="text-muted-foreground pl-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                "Learn by doing. Break things. Fix them. Document everything."
              </motion.p>
              <motion.div
                className="flex items-center gap-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                <span className="text-secondary">$</span>
                <span className="w-2 h-4 bg-primary animate-blink" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;