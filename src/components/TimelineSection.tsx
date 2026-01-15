import { motion } from "framer-motion";
import { History, Zap, Rocket } from "lucide-react";

const timelineData = [
  {
    period: "Past",
    icon: History,
    color: "text-muted-foreground",
    borderColor: "border-muted-foreground",
    bgColor: "bg-muted-foreground/10",
    items: [
      "Computer Science academic foundation",
      "Early technical curiosity and exploration",
      "Self-taught programming basics",
      "Understanding of fundamental concepts",
    ],
  },
  {
    period: "Present",
    icon: Zap,
    color: "text-primary",
    borderColor: "border-primary",
    bgColor: "bg-primary/10",
    items: [
      "6-8 hours daily hands-on learning",
      "Building practical projects",
      "Linux, networking, and web development",
      "Documenting progress and skills",
    ],
  },
  {
    period: "Future",
    icon: Rocket,
    color: "text-secondary",
    borderColor: "border-secondary",
    bgColor: "bg-secondary/10",
    items: [
      "Entry-level IT / Technical Support role",
      "Gain real-world professional experience",
      "Transition to Cyber Security / Full-Stack",
      "Continuous learning and certifications",
    ],
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
            <span className="text-secondary font-mono text-sm">05.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-foreground">
              ./career<span className="text-primary">_trajectory</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent hidden sm:block" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-muted-foreground via-primary to-secondary hidden lg:block" />

            <div className="grid lg:grid-cols-3 gap-8">
              {timelineData.map((section, sectionIndex) => (
                <motion.div
                  key={section.period}
                  className={`relative ${section.bgColor} border ${section.borderColor} rounded-lg p-6`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sectionIndex * 0.2 }}
                >
                  {/* Icon */}
                  <div className={`flex items-center gap-3 mb-6`}>
                    <div className={`p-3 rounded-lg ${section.bgColor} border ${section.borderColor}`}>
                      <section.icon className={`w-6 h-6 ${section.color}`} />
                    </div>
                    <h3 className={`font-mono font-bold text-2xl ${section.color}`}>
                      {section.period}
                    </h3>
                  </div>

                  {/* Items */}
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: sectionIndex * 0.2 + itemIndex * 0.1 }}
                      >
                        <span className={`${section.color} font-mono text-sm mt-1`}>▸</span>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Connection dot for desktop */}
                  <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${section.borderColor} border-2 bg-background hidden lg:block`} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Goal statement */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <p className="font-mono text-lg">
              <span className="text-primary">Goal:</span>{" "}
              <span className="text-muted-foreground">
                Secure an entry-level position → Build expertise → Transition to Cyber Security
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;