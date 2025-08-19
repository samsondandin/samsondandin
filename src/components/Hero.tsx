import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Linkedin, Download, Github } from 'lucide-react';
import profileImage from '@/assets/profile-image.avif';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    try {
      // Create a temporary link to download resume
      const link = document.createElement('a');
      link.href = '/samson-dandin-resume.pdf';
      link.download = 'Samson_Dandin_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
      alert('Unable to download resume. Please contact me directly.');
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating Orbs for Visual Interest */}
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 pattern-grid opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 text-sm neon-border">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  Available for Opportunities
                </span>
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="block hover-scale transition-bounce">Samson</span>
                <span className="block accent-gradient bg-clip-text text-transparent hover-scale transition-bounce">
                  Dandin
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 mono-font">
                AI/ML Enthusiast | Problem Solver | Aspiring Developer
              </p>
            </div>

            <div className="mb-8 space-y-3 text-muted-foreground">
              <div className="flex items-center justify-center lg:justify-start glass-morphism rounded-lg p-2 hover-scale transition-bounce">
                <MapPin size={18} className="mr-3 text-primary" />
                <span>Dharwad, Karnataka, India</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start glass-morphism rounded-lg p-2 hover-scale transition-bounce">
                <Phone size={18} className="mr-3 text-primary" />
                <span>+91 7619687402</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start glass-morphism rounded-lg p-2 hover-scale transition-bounce">
                <Mail size={18} className="mr-3 text-primary" />
                <a href="mailto:samsondandin335@gmail.com" className="hover:text-primary transition-smooth">
                  samsondandin335@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start glass-morphism rounded-lg p-2 hover-scale transition-bounce">
                <Linkedin size={18} className="mr-3 text-primary" />
                <a href="https://linkedin.com/in/samson-dandin" className="hover:text-primary transition-smooth" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/samson-dandin
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start glass-morphism rounded-lg p-2 hover-scale transition-bounce">
                <Github size={18} className="mr-3 text-primary" />
                <a href="https://github.com/samsondandin" className="hover:text-primary transition-smooth" target="_blank" rel="noopener noreferrer">
                  github.com/samsondandin
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToContact} size="lg" className="cyber-button">
                Get In Touch
              </Button>
              <Button onClick={handleDownloadResume} variant="outline" size="lg" className="neon-border hover-glow">
                <Download size={18} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Picture */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Rotating gradient border */}
              <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin" 
                   style={{animationDuration: '8s'}}></div>
              
              {/* Profile container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 shadow-elegant hover-glow transition-smooth">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden backdrop-blur-sm">
                  <img 
                    src={profileImage} 
                    alt="Samson Dandin - AI/ML Developer"
                    className="w-72 h-72 rounded-full object-cover hover-scale transition-bounce"
                  />
                </div>
              </div>
              
              {/* Enhanced AI Badge */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-cyber animate-pulse">
                <span className="text-primary-foreground font-bold text-lg mono-font">AI</span>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-8 h-8 bg-accent/30 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-6 h-6 bg-primary/40 rounded-full blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute -top-4 -right-8 w-4 h-4 bg-accent/50 rounded-full blur-sm animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>

        {/* Enhanced Welcome Message */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to my portfolio! I'm passionate about leveraging 
              <span className="text-primary font-semibold"> artificial intelligence</span> and 
              <span className="text-accent font-semibold"> machine learning</span> 
              to solve real-world problems and create meaningful impact through technology.
            </p>
            <div className="mt-6 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mono-font">5+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mono-font">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mono-font">3+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;