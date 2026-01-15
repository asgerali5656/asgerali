import { motion } from "framer-motion";
import { useState } from "react";
import { Globe, Server, Monitor, ArrowRight, Lock, Wifi } from "lucide-react";

const concepts = [
  {
    id: "dns",
    title: "DNS Resolution",
    description: "Domain Name System translates human-readable domain names to IP addresses",
    steps: [
      { label: "User", icon: Monitor, color: "text-primary" },
      { label: "DNS Query", icon: ArrowRight, color: "text-muted-foreground" },
      { label: "DNS Server", icon: Globe, color: "text-secondary" },
      { label: "IP Response", icon: ArrowRight, color: "text-muted-foreground" },
      { label: "Connection", icon: Server, color: "text-accent" },
    ],
  },
  {
    id: "http",
    title: "HTTP Request/Response",
    description: "Hypertext Transfer Protocol enables communication between clients and servers",
    steps: [
      { label: "Client", icon: Monitor, color: "text-primary" },
      { label: "GET /page", icon: ArrowRight, color: "text-muted-foreground" },
      { label: "Server", icon: Server, color: "text-secondary" },
      { label: "200 OK", icon: ArrowRight, color: "text-muted-foreground" },
      { label: "Render", icon: Monitor, color: "text-accent" },
    ],
  },
  {
    id: "encryption",
    title: "TLS Encryption",
    description: "Transport Layer Security encrypts data between client and server",
    steps: [
      { label: "Plain Text", icon: Monitor, color: "text-primary" },
      { label: "Encrypt", icon: Lock, color: "text-muted-foreground" },
      { label: "Secure Channel", icon: Wifi, color: "text-secondary" },
      { label: "Decrypt", icon: Lock, color: "text-muted-foreground" },
      { label: "Plain Text", icon: Server, color: "text-accent" },
    ],
  },
];

const CyberVisualization = () => {
  const [activeConcept, setActiveConcept] = useState(concepts[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = (concept: typeof concepts[0]) => {
    setActiveConcept(concept);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <section id="concepts" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
            <span className="text-secondary font-mono text-sm">04.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-foreground">
              ./cyber<span className="text-primary">_concepts</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent hidden sm:block" />
          </div>

          {/* Concept selector */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
            {concepts.map((concept) => (
              <button
                key={concept.id}
                onClick={() => triggerAnimation(concept)}
                className={`px-3 sm:px-6 py-2 sm:py-3 font-mono text-xs sm:text-sm rounded border transition-all ${
                  activeConcept.id === concept.id
                    ? "border-primary bg-primary/10 text-primary box-glow-primary"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {concept.title}
              </button>
            ))}
          </div>

          {/* Visualization area */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="terminal-bg border border-border rounded-lg p-4 sm:p-8"
              key={activeConcept.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-destructive" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary" />
                <span className="ml-2 sm:ml-4 text-muted-foreground font-mono text-xs sm:text-sm truncate">
                  {activeConcept.id}_visualization.exe
                </span>
              </div>

              {/* Title */}
              <h3 className="font-mono text-lg sm:text-2xl text-primary mb-2">{activeConcept.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">{activeConcept.description}</p>

              {/* Flow visualization - horizontal scroll on mobile */}
              <div className="overflow-x-auto pb-4">
                <div className="flex items-center justify-start sm:justify-center gap-1 sm:gap-2 md:gap-4 min-w-max px-2">
                  {activeConcept.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-1 sm:gap-2 md:gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: isAnimating ? index * 0.3 : 0 }}
                    >
                      {step.icon === ArrowRight ? (
                        <motion.div
                          animate={
                            isAnimating
                              ? {
                                  x: [0, 10, 0],
                                  opacity: [0.5, 1, 0.5],
                                }
                              : {}
                          }
                          transition={{
                            duration: 0.5,
                            delay: index * 0.3,
                            repeat: isAnimating ? 2 : 0,
                          }}
                        >
                          <step.icon className={`w-4 h-4 sm:w-6 sm:h-6 ${step.color}`} />
                        </motion.div>
                      ) : (
                        <motion.div
                          className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 rounded-lg border border-border bg-card"
                          animate={
                            isAnimating
                              ? {
                                  scale: [1, 1.1, 1],
                                  borderColor: ["hsl(var(--border))", "hsl(var(--primary))", "hsl(var(--border))"],
                                }
                              : {}
                          }
                          transition={{
                            duration: 0.5,
                            delay: index * 0.3,
                          }}
                        >
                          <step.icon className={`w-5 h-5 sm:w-8 sm:h-8 ${step.color}`} />
                          <span className="font-mono text-[10px] sm:text-xs text-foreground whitespace-nowrap">{step.label}</span>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Data packet animation */}
              {isAnimating && (
                <motion.div
                  className="mt-8 h-2 bg-muted rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberVisualization;