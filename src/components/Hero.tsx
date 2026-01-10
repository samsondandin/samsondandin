import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Linkedin, Download, Github, ArrowDown, Sparkles, Brain, Code2 } from 'lucide-react';
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
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>
      
      {/* Gradient Orbs - More subtle and professional */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
            {/* Status Badge */}
            <div className="mb-8">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Open to Opportunities
                </span>
              </Badge>
              
              {/* Name with refined typography */}
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                <span className="block text-foreground">Samson</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Dandin
                </span>
              </h1>
              
              {/* Title */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-medium">
                AI/ML Engineer & Developer
              </p>
              <p className="text-base text-muted-foreground/80 max-w-md mx-auto lg:mx-0">
                Building intelligent solutions that bridge technology and real-world impact
              </p>
            </div>

            {/* Quick Stats Row */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
                <Brain size={16} className="text-primary" />
                <span className="text-sm font-medium">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
                <Code2 size={16} className="text-accent" />
                <span className="text-sm font-medium">Full Stack</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium">Computer Vision</span>
              </div>
            </div>

            {/* Contact Info - Compact and Clean */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm">
              <a href="mailto:samsondandin335@gmail.com" 
                 className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/30 border border-border/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 group">
                <Mail size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors truncate">samsondandin335@gmail.com</span>
              </a>
              <a href="tel:+917619687402" 
                 className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/30 border border-border/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 group">
                <Phone size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">+91 7619687402</span>
              </a>
              <a href="https://linkedin.com/in/samson-dandin" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/30 border border-border/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 group">
                <Linkedin size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn Profile</span>
              </a>
              <a href="https://github.com/samsondandin" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/30 border border-border/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 group">
                <Github size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">GitHub Profile</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToContact} size="lg" className="px-8 py-6 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get In Touch
              </Button>
              <Button onClick={handleDownloadResume} variant="outline" size="lg" className="px-8 py-6 text-base font-semibold border-2 hover:bg-card/50">
                <Download size={18} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Professional Profile Section */}
          <div className="flex justify-center lg:justify-end animate-scale-in order-1 lg:order-2">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-xl opacity-60"></div>
                
                {/* Profile frame */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-primary via-accent to-primary shadow-2xl">
                  <div className="w-full h-full rounded-full bg-background overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Samson Dandin - AI/ML Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg">
                  <span className="text-primary-foreground font-bold text-sm flex items-center gap-1">
                    <Brain size={14} />
                    AI/ML
                  </span>
                </div>

                {/* Location badge */}
                <div className="absolute -top-2 -left-2 px-3 py-1.5 bg-card/90 backdrop-blur-sm border border-border/50 rounded-full shadow-lg">
                  <span className="text-xs font-medium flex items-center gap-1 text-muted-foreground">
                    <MapPin size={12} className="text-primary" />
                    India
                  </span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="space-y-3">
                  <div className="px-4 py-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg text-center">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="px-4 py-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg text-center">
                    <div className="text-2xl font-bold text-accent">3+</div>
                    <div className="text-xs text-muted-foreground">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <button onClick={scrollToAbout} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-medium">Scroll to explore</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;