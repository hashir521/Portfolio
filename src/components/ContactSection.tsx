import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            <span className="text-primary mr-2">04.</span>Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto mb-8" />

          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-10">
            I'm currently open to new opportunities and collaborations. Whether you have a question about testing strategies or just want to connect — my inbox is always open.
          </p>

          <a
            href="mailto:hashirmuhammad538@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            <Mail size={16} />
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-6 mt-10 text-muted-foreground">
            <a href="https://github.com/hashir521" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/muhammad-hashir-29574321a/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <div className="flex items-center gap-1.5 text-sm font-body">
              <MapPin size={14} />
              <span>Available Worldwide</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
