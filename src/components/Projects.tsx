import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "CrimeGuard AI Prediction & Identification",
      description: "AI-powered crime prediction system using machine learning to analyze patterns and hotspots. Features facial recognition with 92% accuracy and real-time criminal database queries.",
      tech: ["Python", "TensorFlow", "Flask", "React", "SQLite"],
      category: "AI/ML Platform",
      stars: 0,
      forks: 0,
      github: "https://github.com/tharanishwaran",
      demo: "#",
      featured: true
    },
    {
      title: "ShopHub E-Commerce Platform",
      description: "Full-stack e-commerce platform with product catalog, shopping cart, and order management. Integrated secure payment processing with Stripe API and real-time inventory tracking.",
      tech: ["Django", "React", "MongoDB", "Redis", "Docker"],
      category: "E-Commerce",
      stars: 0,
      forks: 0,
      github: "https://github.com/tharanishwaran",
      demo: "#"
    },
    {
      title: "AutoParts E-Commerce Platform",
      description: "Full-featured e-commerce platform for automobile spare parts with advanced search, inventory management, and secure checkout. Real-time stock updates and order tracking.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      category: "E-Commerce",
      stars: 0,
      forks: 0,
      github: "https://github.com/tharanishwaran",
      demo: "#"
    },
    {
      title: "Open Source Contributions",
      description: "Active contributor to VMware Spring Framework, Layer5 cloud native platform, and CNCF projects including Meshery and OpenTelemetry.",
      tech: ["Go", "React", "Kubernetes", "Spring Boot", "Cloud Native"],
      category: "Open Source",
      stars: 0,
      forks: 0,
      github: "https://github.com/tharanishwaran",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gradient-cosmic animate-slide-up">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animate-delay-100">
            A showcase of my recent work in open source development, innovative tools, and experimental projects 
            that push the boundaries of what's possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-card/90 backdrop-blur-xl p-6 hover-lift animate-slide-up relative overflow-hidden rounded-2xl border shadow-soft ${
                project.featured ? 'border-primary/50 shadow-glow' : 'border-glass-border'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-primary text-primary-foreground">Featured</Badge>
                </div>
              )}
              
              <div className="space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <Badge variant="outline" className="glass border-glass-border text-muted-foreground text-xs">
                    {project.category}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs bg-muted/50 text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* GitHub link */}
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">{project.category}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    className="bg-gradient-primary hover:opacity-90 text-primary-foreground flex-1 rounded-lg shadow-soft border-0"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="glass border-glass-border/50 text-foreground hover:bg-glass/50 px-8 py-4 hover-lift rounded-xl backdrop-blur-xl"
            onClick={() => window.open('https://github.com/tharanishwaran', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};