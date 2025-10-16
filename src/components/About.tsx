import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Lightbulb, Users, Rocket } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Open Source Passion",
      description: "Contributing to the community and building tools that make developers' lives easier."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Always exploring new technologies and pushing the boundaries of what's possible."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Believing in the power of teamwork and knowledge sharing to create amazing things."
    },
    {
      icon: Rocket,
      title: "Continuous Growth",
      description: "Never stop learning, always evolving with the latest trends and best practices."
    }
  ];

  const stats = [
    { number: "3+", label: "Organizations Contributing" },
    { number: "8.4", label: "CGPA" },
    { number: "2025", label: "Graduation Year" },
    { number: "∞", label: "Open Source Passion" }
  ];

  return (
    <section id="about" className="py-20 cosmic-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gradient-cosmic animate-slide-up">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animate-delay-100">
            I'm a developer who believes technology should be open, accessible, and transformative. 
            My journey is driven by curiosity and a desire to contribute meaningfully to the open source ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story */}
          <div className="space-y-6 animate-slide-up animate-delay-200">
            <div className="glass-card space-y-4 bg-card/90 backdrop-blur-xl border border-glass-border shadow-soft rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gradient-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing Bachelor of Computer Applications at Park's College with an 8.4 CGPA, 
                I've actively contributed to major open source organizations including VMware, Layer5, and 
                Cloud Native Computing Foundation (CNCF).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As an official organization member at Layer5 and contributor to Spring Framework projects, 
                I focus on cloud native infrastructure, DevOps automation, and building AI-powered solutions 
                that solve real-world problems.
              </p>
            </div>

            {/* Skills badges */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Currently Exploring</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                  Spring Framework
                </Badge>
                <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground">
                  Kubernetes
                </Badge>
                <Badge variant="secondary" className="bg-gradient-secondary text-secondary-foreground">
                  Cloud Native
                </Badge>
                <Badge variant="outline" className="glass border-glass-border text-foreground">
                  TensorFlow
                </Badge>
                <Badge variant="outline" className="glass border-glass-border text-foreground">
                  DevOps
                </Badge>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up animate-delay-300">
            {stats.map((stat, index) => (
            <Card key={index} className="bg-card/90 backdrop-blur-xl p-6 hover-lift animate-slide-up rounded-2xl border border-glass-border shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-black text-gradient-cosmic mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-card/90 backdrop-blur-xl p-6 hover-lift animate-slide-up rounded-2xl border border-glass-border shadow-soft" style={{ animationDelay: `${index * 0.1}s` }}>
              <value.icon className="h-8 w-8 text-primary mb-4 glow-primary" />
              <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};