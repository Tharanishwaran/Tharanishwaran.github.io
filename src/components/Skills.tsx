import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Cloud, Zap, Cpu, Globe } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Go", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
      gradient: "bg-gradient-primary"
    },
    {
      icon: Database,
      title: "Web Development",
      skills: ["React", "Django", "Flask", "FastAPI", "HTML/CSS", "RESTful APIs"],
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: ["Jenkins", "Terraform", "Ansible", "Docker", "Kubernetes", "AWS", "CI/CD"],
      gradient: "bg-gradient-accent"
    },
    {
      icon: Zap,
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "OpenCV", "Machine Learning", "Computer Vision"],
      gradient: "bg-gradient-cosmic"
    },
    {
      icon: Cpu,
      title: "System & Tools",
      skills: ["Linux", "Bash Scripting", "Git", "PostgreSQL", "Redis", "Prometheus", "Grafana"],
      gradient: "bg-gradient-primary"
    },
    {
      icon: Globe,
      title: "Data Structures & Algorithms",
      skills: ["Arrays", "Linked Lists", "Trees", "Graphs", "Sorting", "Dynamic Programming"],
      gradient: "bg-gradient-secondary"
    }
  ];

  const achievements = [
    {
      title: "VMware",
      description: "Spring Framework Contributor",
      metric: "Sep 2025"
    },
    {
      title: "Layer5",
      description: "Organization Member",
      metric: "Oct 2024"
    },
    {
      title: "CNCF",
      description: "Meshery & OpenTelemetry",
      metric: "Dec 2023"
    },
    {
      title: "Projects",
      description: "AI, Cloud & DevOps",
      metric: "3+ Built"
    }
  ];

  return (
    <section id="skills" className="py-20 cosmic-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gradient-cosmic animate-slide-up">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animate-delay-100">
            A diverse toolkit built through years of exploration, contribution, and continuous learning 
            in the ever-evolving world of technology.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/90 backdrop-blur-xl p-6 hover-lift animate-slide-up rounded-2xl border border-glass-border shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${category.gradient}`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs bg-muted/30 text-muted-foreground hover:bg-muted/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 animate-slide-up">
            Community Impact
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-card/90 backdrop-blur-xl p-6 text-center hover-lift animate-slide-up rounded-2xl border border-glass-border shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl font-black text-gradient-cosmic mb-2">
                {achievement.metric}
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                {achievement.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <Card className="bg-card/95 backdrop-blur-xl p-8 max-w-4xl mx-auto animate-slide-up rounded-2xl border border-glass-border shadow-soft">
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
              Learning Philosophy
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Contributing to open source projects and building innovative solutions drives my passion 
              for technology. From cloud native infrastructure to AI-powered applications, I believe in 
              continuous learning and giving back to the community that has given me so much."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};