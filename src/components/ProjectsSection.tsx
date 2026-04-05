import { motion } from "framer-motion";
import { ExternalLink, Github, TestTube, Bug, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E2E Test Automation Framework",
    description:
      "Built a scalable end-to-end testing framework using Selenium and Playwright with custom commands, fixtures, and CI/CD integration. Reduced regression testing time by 70%.",
    tags: ["Selenium", "Playwright", "CI/CD", "Page Object Model", "TestNG", "JUnit"],
    icon: TestTube,
    github: "#",
    live: "#",
  },
  {
    title: "API Testing Suite",
    description:
      "Developed a comprehensive REST API testing suite with Postman/Newman and REST-Assured using Java with custom assertion libraries. Automated 300+ API test cases with data-driven testing patterns.",
    tags: ["Postman", "REST-Assured", "JUnit", "Newman", "REST API", "Java"],
    icon: Zap,
    github: "#",
    live: "#",
  },
  {
    title: "Performance Testing Dashboard",
    description:
      "Created a real-time performance monitoring dashboard integrating JMeter test results with Grafana. Identified and resolved critical bottlenecks improving response times by 40%.",
    tags: ["JMeter", "Performance", "Docker"],
    icon: Shield,
    github: "#",
  },
  {
    title: "Bug Tracking Automation Bot",
    description:
      "Engineered a Slack-integrated bot that auto-creates JIRA tickets from failed test runs, attaches logs and screenshots, and notifies the team in real time.",
    tags: ["Python", "Slack API", "JIRA", "Automation"],
    icon: Bug,
    github: "#",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6 bg-muted/30">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of testing frameworks, tools, and automation projects I've built or contributed to.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item}>
            <Card className="h-full bg-card/60 backdrop-blur border-border hover:border-primary/40 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <project.icon size={20} />
                    </div>
                    <CardTitle className="text-lg font-heading text-foreground">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-body">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
