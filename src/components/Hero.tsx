import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 text-sm">
                Available for Opportunities
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="block">Samson</span>
                <span className="block accent-gradient bg-clip-text text-transparent">
                  Dandin
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                AI/ML Enthusiast | Problem Solver | Aspiring Developer
              </p>
            </div>

            <div className="mb-8 space-y-3 text-muted-foreground">
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin size={18} className="mr-2 text-primary" />
                <span>Dharwad, Karnataka, India</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Phone size={18} className="mr-2 text-primary" />
                <span>+91 7619687402</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail size={18} className="mr-2 text-primary" />
                <span>samsondandin335@gmail.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Linkedin size={18} className="mr-2 text-primary" />
                <a href="https://linkedin.com/in/samson-dandin" className="hover:text-primary transition-smooth">
                  linkedin.com/in/samson-dandin
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToContact} size="lg" className="accent-gradient hover:shadow-glow">
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="hover-glow">
                <Download size={18} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 shadow-elegant hover-glow transition-smooth">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-muted-foreground">
                    SD
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-glow-pulse">
                <span className="text-primary-foreground font-bold text-lg">AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="text-center mt-16 animate-slide-up">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Welcome to my portfolio! I'm passionate about leveraging artificial intelligence and machine learning 
            to solve real-world problems and create meaningful impact through technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;