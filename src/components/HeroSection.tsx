import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-primary text-sm md:text-base tracking-widest uppercase mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight"
        >
          Muhammad Hashir
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-heading text-2xl sm:text-3xl md:text-5xl font-semibold text-gradient mt-2"
        >
          Software Test Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-6 max-w-xl text-muted-foreground font-body text-base md:text-lg leading-relaxed"
        >
          I craft robust testing strategies, build scalable automation frameworks, and ensure software quality from unit tests to production monitoring.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mt-10 flex items-center gap-5"
        >
          <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm">
            Get In Touch
          </a>
          <a href="https://github.com/hashir521" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/muhammad-hashir-29574321a/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:hashirmuhammad538@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={20} /></a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20"
        >
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
