import { motion } from "framer-motion";
import { Terminal, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 text-primary font-mono">
            <Terminal className="w-4 h-4" />
            <span className="text-sm">asger.dev © {new Date().getFullYear()}</span>
          </div>

          {/* Message */}
          <p className="text-muted-foreground font-mono text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-destructive" /> and lots of
            <span className="text-secondary">{"</code>"}</span>
          </p>

          {/* Status */}
          <div className="flex items-center gap-2 text-sm font-mono">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-muted-foreground">Available for hire</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;