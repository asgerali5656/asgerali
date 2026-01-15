import { motion } from "framer-motion";
import { Terminal, Shield, Globe, Server } from "lucide-react";

const NetworkFlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 hidden sm:block">
      {/* Data packets flowing */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
          style={{
            top: `${15 + i * 10}%`,
            width: "100px",
          }}
          initial={{ x: "-100px", opacity: 0 }}
          animate={{ x: "100vw", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Network nodes */}
      <motion.div
        className="absolute left-[10%] top-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Globe className="w-6 h-6 md:w-8 md:h-8 text-primary" />
        <span className="text-xs text-primary font-mono block mt-1">DNS</span>
      </motion.div>
      
      <motion.div
        className="absolute left-[30%] top-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        <Server className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
        <span className="text-xs text-secondary font-mono block mt-1">ISP</span>
      </motion.div>
      
      <motion.div
        className="absolute left-[50%] top-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <Server className="w-6 h-6 md:w-8 md:h-8 text-accent" />
        <span className="text-xs text-accent font-mono block mt-1">SERVER</span>
      </motion.div>
      
      <motion.div
        className="absolute left-[70%] top-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      >
        <Terminal className="w-6 h-6 md:w-8 md:h-8 text-primary" />
        <span className="text-xs text-primary font-mono block mt-1">CLIENT</span>
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted" />
      
      {/* Network animation */}
      <NetworkFlow />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal-style prefix */}
          <motion.div 
            className="flex items-center justify-center gap-1 sm:gap-2 mb-4 sm:mb-6 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-secondary font-mono text-xs sm:text-sm">root@portfolio</span>
            <span className="text-muted-foreground font-mono text-xs sm:text-sm">:~$</span>
            <span className="text-foreground font-mono text-xs sm:text-sm">whoami</span>
            <span className="w-2 h-4 sm:h-5 bg-primary animate-blink" />
          </motion.div>

          {/* Name */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold font-mono mb-4 text-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="text-foreground">ASGER</span>
            <span className="text-primary"> ALI</span>
          </motion.h1>

          {/* Role badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {["Entry-Level IT", "Linux", "Networking", "Web", "Security Foundations"].map((role, i) => (
              <motion.span
                key={role}
                className="px-2 sm:px-4 py-1.5 sm:py-2 border border-primary/50 rounded font-mono text-xs sm:text-sm text-primary bg-primary/5 hover:bg-primary/10 hover:border-primary transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(180 100% 50% / 0.3)" }}
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          {/* Intro statement */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Computer Science student building practical skills in{" "}
            <span className="text-primary">networking</span>,{" "}
            <span className="text-secondary">Linux systems</span>, and{" "}
            <span className="text-accent">cyber security</span>.
            Full-time learner, job-ready, and seeking my first role in tech.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <a
              href="#projects"
              className="group px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded border border-primary hover:bg-primary/90 transition-all box-glow-primary"
            >
              <span className="flex items-center justify-center gap-2">
                <Terminal className="w-4 h-4" />
                View Projects
              </span>
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 border border-secondary text-secondary font-mono font-semibold rounded hover:bg-secondary/10 transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                Contact Me
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;