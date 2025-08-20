import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import { Github } from 'lucide-react';

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
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Enhanced Footer */}
      <footer className="glass-morphism border-t border-border/50 py-12 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pattern-dots opacity-5"></div>
        <div className="floating-orb"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
              <span className="text-white font-bold text-lg">SD</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Samson Dandin</h3>
            <p className="text-muted-foreground mb-4">AI/ML Enthusiast | Problem Solver | Aspiring Developer</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/samsondandin" target="_blank" rel="noopener noreferrer" 
               className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center hover-glow transition-bounce">
              <Github size={20} className="text-muted-foreground hover:text-primary transition-smooth" />
            </a>
            <a href="https://linkedin.com/in/samson-dandin" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center hover-glow transition-bounce">
              <svg className="w-5 h-5 text-muted-foreground hover:text-primary transition-smooth" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          
          <div className="border-t border-border/20 pt-6">
            <p className="text-muted-foreground text-sm">
              © 2025 Samson Dandin. Built with passion for AI/ML innovation using 
              <span className="text-primary font-medium"> React</span>, 
              <span className="text-accent font-medium"> TypeScript</span>, and 
              <span className="text-primary font-medium"> Tailwind CSS</span>.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              Designed with ❤️ for the future of artificial intelligence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
