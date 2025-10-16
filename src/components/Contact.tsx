import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tharanishwaran.ta@gmail.com",
      href: "mailto:tharanishwaran.ta@gmail.com",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9943688252",
      href: "tel:+919943688252",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      href: "#",
      gradient: "bg-gradient-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/tharanishwaran",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/tharanishwaran",
      gradient: "bg-gradient-secondary"
    }
  ];

  const quickTopics = [
    "Open Source Contributions",
    "Cloud Native Development", 
    "AI/ML Projects",
    "DevOps Consulting",
    "Full-Stack Development"
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gradient-cosmic animate-slide-up">
            Let's Build Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animate-delay-100">
            Whether you have an innovative project idea, want to collaborate on open source, 
            or just want to chat about the latest in tech - I'd love to hear from you.
          </p>
        </div>

        {/* Contact Info - Centered with wider cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {/* Contact Information */}
          <Card className="bg-card/90 backdrop-blur-xl p-6 rounded-2xl border border-glass-border shadow-soft animate-slide-up">
            <h3 className="text-lg font-semibold mb-4">Get in Touch:</h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.href}
                  className="flex items-center gap-3 p-3 bg-card/70 backdrop-blur-sm rounded-xl border border-glass-border hover:bg-card/90 transition-all"
                >
                  <div className={`p-2 rounded-lg ${info.gradient}`}>
                    <info.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">{info.label}</div>
                    <div className="text-sm font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Card>

          {/* Quick Topics */}
          <Card className="bg-card/90 backdrop-blur-xl p-6 rounded-2xl border border-glass-border shadow-soft animate-slide-up animate-delay-100">
            <h3 className="text-lg font-semibold mb-4">Areas of Interest:</h3>
            <div className="space-y-2">
              {quickTopics.map((topic, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary glow-primary" />
                  <span className="text-sm text-muted-foreground">{topic}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Social Links */}
          <Card className="bg-card/90 backdrop-blur-xl p-6 rounded-2xl border border-glass-border shadow-soft animate-slide-up animate-delay-200">
            <h3 className="text-lg font-semibold mb-4">Connect on Social:</h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="bg-card/70 backdrop-blur-sm justify-start h-auto p-3 hover:bg-card/90 border border-glass-border rounded-xl w-full"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <div className={`p-2 rounded-lg mr-3 ${social.gradient}`}>
                      <social.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm">{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-slide-up animate-delay-300">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Let's Build Something Great Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether it's contributing to open source, building cloud-native solutions, or exploring new technologies - 
              I'm always excited to collaborate and create innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-cosmic hover:opacity-90 text-white font-semibold px-8 glow-cosmic rounded-xl border-0"
                onClick={() => window.open('https://github.com/tharanishwaran', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub Profile
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-card/80 backdrop-blur-sm border border-glass-border text-foreground hover:bg-card/90 px-8 rounded-xl"
                onClick={() => window.open('mailto:tharanishwaran.ta@gmail.com', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
