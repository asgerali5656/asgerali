import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Instagram, Send, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/asger-ali-6b7b2521a",
    icon: Linkedin,
    color: "hover:text-[#0077b5] hover:border-[#0077b5]",
  },
  {
    name: "GitHub",
    url: "https://github.com/asgerali5656",
    icon: Github,
    color: "hover:text-foreground hover:border-foreground",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/AsgerAli1958201",
    icon: Twitter,
    color: "hover:text-foreground hover:border-foreground",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/asgerali5656",
    icon: Instagram,
    color: "hover:text-[#e4405f] hover:border-[#e4405f]",
  },
  {
    name: "Telegram",
    url: "https://t.me/AsgerAli5656",
    icon: Send,
    color: "hover:text-[#0088cc] hover:border-[#0088cc]",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section header */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 flex-wrap px-2">
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent to-primary/50 max-w-[100px]" />
            <span className="text-secondary font-mono text-sm">06.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-foreground text-center">
              ./establish<span className="text-primary">_connection</span>
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-l from-transparent to-primary/50 max-w-[100px]" />
          </div>

          {/* Message */}
          <motion.div
            className="terminal-bg border border-border rounded-lg p-6 mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span className="ml-4 text-muted-foreground font-mono text-sm">contact.txt</span>
            </div>
            <div className="text-left font-mono text-sm space-y-2">
              <p className="text-secondary">$ echo "Available for opportunities"</p>
              <p className="text-muted-foreground pl-4">
                Currently seeking entry-level IT, Technical Support, or Junior Web Developer roles.
                Open to remote positions and willing to relocate.
              </p>
              <p className="text-primary">$ ping recruiter</p>
              <p className="text-muted-foreground pl-4">
                Response time: &lt; 24 hours
              </p>
            </div>
          </motion.div>

          {/* Social links */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 border border-border rounded-lg bg-card text-muted-foreground transition-all duration-300 ${social.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <social.icon className="w-5 h-5" />
                <span className="font-mono text-xs sm:text-sm">{social.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="mailto:asgeralimtc@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono font-semibold rounded border border-primary hover:bg-primary/90 transition-all box-glow-primary"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;