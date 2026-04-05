import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior QA Engineer",
    company: "Zenveus",
    period: "2024 — Present",
    bullets: [
      "Led automation framework migration to Playwright, reducing test execution time by 60%",
      "Built CI/CD testing pipelines with GitHub Actions serving 15+ microservices",
      "Mentored a team of 2 junior QA engineers",
    ],
  },
  {
    role: "Associate QA Engineer",
    company: "MMC",
    period: "2023 — 2024",
    bullets: [
      "Developed automated regression test suites using Selenium WebDriver",
      "Performed manual testing across web and mobile platforms",
      "Documented test cases and contributed to QA process improvements",
      "Designed and executed test cases for web and mobile applications to ensure functionality, usability, and quality",
      "Reported defects with clear reproduction steps, collaborating with developers to resolve issues efficiently",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            <span className="text-primary mr-2">03.</span>Experience
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
                className="relative bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2.5 rounded-lg shrink-0 mt-0.5">
                    <Briefcase className="text-primary" size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-body text-sm mt-0.5">{exp.company}</p>
                    <p className="text-muted-foreground font-body text-xs mt-1">{exp.period}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                          <span className="text-primary mt-1.5 shrink-0">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
