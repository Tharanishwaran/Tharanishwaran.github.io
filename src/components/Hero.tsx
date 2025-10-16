import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail, Code2 } from 'lucide-react';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-bg">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 transform-3d">
          <div 
            className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/10 backdrop-blur-xl rounded-2xl float animate-delay-100 border border-primary/20 shadow-elegant"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotateX(45deg) rotateY(45deg)`,
            }}
          />
          <div 
            className="absolute top-3/4 right-1/4 w-16 h-16 bg-secondary/10 backdrop-blur-xl rounded-full float-delayed border border-secondary/20 shadow-elegant"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px) rotateZ(45deg)`,
            }}
          />
          <div 
            className="absolute top-1/2 right-1/3 w-12 h-12 bg-accent/10 backdrop-blur-xl rounded-xl float animate-delay-200 border border-accent/20 shadow-elegant"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotateX(-30deg)`,
            }}
          />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated greeting */}
          <div className="mb-6 animate-slide-up">
            <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
              Hello World, I'm
            </span>
          </div>
          
          {/* Main title with gradient */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-slide-up animate-delay-100">
            <span className="text-gradient-cosmic">Tharanishwaran</span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up animate-delay-200">
            <span className="font-mono text-primary">{"<"}</span>
            <span>Open Source Contributor & Cloud Native Developer</span>
            <span className="font-mono text-primary">{" />"}</span>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up animate-delay-300">
            Contributing to VMware Spring Framework, Layer5, and CNCF projects. 
            Building cloud-native solutions and exploring cutting-edge technologies in AI, DevOps, and beyond.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-300">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 rounded-xl hover-lift shadow-soft border-0"
              onClick={() => window.open('https://github.com/tharanishwaran', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass border-glass-border/50 text-foreground hover:bg-glass/50 font-semibold px-8 py-4 rounded-xl hover-lift backdrop-blur-xl"
              onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </div>
          
          {/* Tech stack indicators */}
          <div className="flex justify-center items-center gap-6 mt-12 animate-slide-up animate-delay-300">
            <div className="bg-card/90 backdrop-blur-xl rounded-xl py-4 px-6 hover-lift border border-glass-border shadow-elegant">
              <Code2 className="h-6 w-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-mono text-muted-foreground">Go</span>
            </div>
            <div className="bg-card/90 backdrop-blur-xl rounded-xl py-4 px-6 hover-lift border border-glass-border shadow-elegant">
              <Code2 className="h-6 w-6 text-secondary mx-auto mb-2" />
              <span className="text-sm font-mono text-muted-foreground">Python</span>
            </div>
            <div className="bg-card/90 backdrop-blur-xl rounded-xl py-4 px-6 hover-lift border border-glass-border shadow-elegant">
              <Code2 className="h-6 w-6 text-accent mx-auto mb-2" />
              <span className="text-sm font-mono text-muted-foreground">Kubernetes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-glow-pulse">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};