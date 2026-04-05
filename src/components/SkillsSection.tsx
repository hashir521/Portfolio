import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Automation",
    skills: ["Selenium", "Cypress", "Playwright", "Appium", "Robot Framework"],
  },
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    title: "API Testing",
    skills: ["Postman", "REST Assured", "GraphQL", "SoapUI", "k6"],
  },
  {
    title: "CI/CD & Tools",
    skills: ["Jenkins", "GitHub Actions", "Docker", "Jira", "Git"],
  },
  {
    title: "Testing Types",
    skills: ["Functional", "Regression", "Performance", "Security", "E2E"],
  },
  {
    title: "Methodologies",
    skills: ["Agile/Scrum", "BDD/TDD", "Risk-Based", "Exploratory", "Shift-Left"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            <span className="text-primary mr-2">02.</span>Skills & Tools
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-300"
              >
                <h3 className="font-heading text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-secondary text-secondary-foreground text-xs font-body px-3 py-1.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
