import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Linkedin, Download, Github, ArrowDown, Sparkles, Brain, Code2, ChevronRight } from 'lucide-react';
import profileImage from '@/assets/profile-image.avif';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    try {
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
      {/* Background Effects */}
      <div className="absolute inset-0 pattern-grid opacity-30" />
      <div className="gradient-orb w-[600px] h-[600px] bg-primary/20 -top-48 -left-48" />
      <div className="gradient-orb w-[500px] h-[500px] bg-accent/20 -bottom-32 -right-32" style={{ animationDelay: '2s' }} />
      <div className="gradient-orb w-[300px] h-[300px] bg-cyan-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
            {/* Status Badge */}
            <div className="mb-8">
              <Badge className="mb-6 px-4 py-2 text-sm bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Open to Opportunities
                </span>
              </Badge>
              
              {/* Name */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight display-font">
                <span className="block text-foreground">Samson</span>
                <span className="block gradient-text">Dandin</span>
              </h1>
              
              {/* Title */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-3 font-medium">
                AI/ML Engineer & Developer
              </p>
              <p className="text-base text-muted-foreground/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Building intelligent solutions that bridge technology and real-world impact through machine learning and computer vision
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                <Brain size={16} className="text-primary" />
                <span className="text-sm font-medium">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                <Code2 size={16} className="text-accent" />
                <span className="text-sm font-medium">Full Stack</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                <Sparkles size={16} className="text-cyan-500" />
                <span className="text-sm font-medium">Computer Vision</span>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="grid grid-cols-2 gap-3 mb-8 text-sm max-w-lg mx-auto lg:mx-0">
              <a href="mailto:samsondandin335@gmail.com" 
                 className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 group interactive">
                <Mail size={18} className="text-primary" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors truncate">samsondandin335@gmail.com</span>
              </a>
              <a href="tel:+917619687402" 
                 className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 group interactive">
                <Phone size={18} className="text-primary" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">+91 7619687402</span>
              </a>
              <a href="https://linkedin.com/in/samson-dandin" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 group interactive">
                <Linkedin size={18} className="text-primary" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
              </a>
              <a href="https://github.com/samsondandin" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 group interactive">
                <Github size={18} className="text-primary" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToContact} size="lg" className="btn-primary group">
                Get In Touch
                <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={handleDownloadResume} variant="outline" size="lg" className="btn-outline">
                <Download size={18} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Profile */}
          <div className="flex justify-center lg:justify-end animate-scale-in order-1 lg:order-2">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-cyan-500/30 rounded-full blur-2xl opacity-60 animate-pulse" />
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-cyan-500 p-[3px]">
                  <div className="w-full h-full rounded-full bg-background overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Samson Dandin - AI/ML Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg glow-primary">
                  <span className="text-primary-foreground font-bold text-sm flex items-center gap-1 code-font">
                    <Brain size={14} />
                    AI/ML
                  </span>
                </div>

                {/* Location Badge */}
                <div className="absolute -top-2 -left-2 px-3 py-1.5 glass-card rounded-full shadow-lg">
                  <span className="text-xs font-medium flex items-center gap-1 text-muted-foreground">
                    <MapPin size={12} className="text-primary" />
                    India
                  </span>
                </div>
              </div>

              {/* Stats - Desktop only */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden xl:block space-y-4">
                <div className="glass-card px-5 py-4 rounded-2xl text-center card-hover">
                  <div className="text-2xl font-bold text-primary code-font">10+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="glass-card px-5 py-4 rounded-2xl text-center card-hover">
                  <div className="text-2xl font-bold text-accent code-font">4</div>
                  <div className="text-xs text-muted-foreground">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
          <button onClick={scrollToAbout} className="text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-medium mb-2 block">Scroll to explore</span>
            <ArrowDown size={20} className="mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;