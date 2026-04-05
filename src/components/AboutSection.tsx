import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const highlights = [
  "5+ years of experience in software testing",
  "Expert in test automation frameworks",
  "CI/CD pipeline integration specialist",
  "API & performance testing proficiency",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            <span className="text-primary mr-2">01.</span>About Me
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
              <p>
                I'm a detail-oriented Software Test Engineer passionate about delivering high-quality software. I specialize in designing comprehensive test strategies and building automation frameworks that catch bugs before they reach users.
              </p>
              <p>
                My approach combines deep technical expertise with a keen understanding of user behavior, ensuring that every feature works not just correctly, but <span className="text-foreground">delightfully</span>.
              </p>
              <p>
                When I'm not breaking software (professionally), you'll find me contributing to open-source testing tools, writing about QA best practices, or exploring new testing methodologies.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 glow-box"
                >
                  <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                  <span className="text-foreground font-body text-sm">{item}</span>
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
