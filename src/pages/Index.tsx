import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import { Github, Linkedin, Heart, Terminal } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <ScrollToTop />
      
      {/* Premium Footer */}
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="gradient-orb w-[300px] h-[300px] bg-primary/5 bottom-0 left-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg glow-primary">
                <Terminal className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2 display-font">Samson Dandin</h3>
            <p className="text-muted-foreground mb-6">AI/ML Enthusiast | Problem Solver | Aspiring Developer</p>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a href="https://github.com/samsondandin" target="_blank" rel="noopener noreferrer" 
                 className="w-11 h-11 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group">
                <Github size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com/in/samson-dandin" target="_blank" rel="noopener noreferrer"
                 className="w-11 h-11 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group">
                <Linkedin size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
            
            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />
            
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2025 Samson Dandin. Built with{' '}
              <span className="text-primary font-medium">React</span>,{' '}
              <span className="text-accent font-medium">TypeScript</span> &{' '}
              <span className="text-primary font-medium">Tailwind CSS</span>
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2 flex items-center gap-1">
              Designed with <Heart size={12} className="text-red-500" /> for AI innovation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;