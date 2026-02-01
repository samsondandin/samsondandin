import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import ProgressBar from '@/components/ui/ProgressBar';
import SmoothCursor from '@/components/ui/SmoothCursor';
import { Github, Linkedin, Heart, Terminal } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    }
  },
  exit: { opacity: 0 }
};

const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Index = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="min-h-screen bg-background overflow-x-hidden"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ProgressBar />
        <SmoothCursor />
        <Navigation />
        
        <main>
          <Hero />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <About />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <Skills />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <Projects />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <Certifications />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.div>
        </main>
        
        <ScrollToTop />
        
        {/* Premium Footer */}
        <motion.footer 
          className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background */}
          <div className="absolute inset-0 pattern-dots opacity-10" />
          <motion.div 
            className="gradient-orb w-[300px] h-[300px] bg-primary/5 bottom-0 left-1/2 -translate-x-1/2"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col items-center text-center">
              {/* Logo */}
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg glow-primary">
                  <Terminal className="w-6 h-6 text-primary-foreground" />
                </div>
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold mb-2 display-font"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Samson Dandin
              </motion.h3>
              <motion.p 
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                AI/ML Enthusiast | Problem Solver | Aspiring Developer
              </motion.p>
              
              {/* Social Links */}
              <motion.div 
                className="flex gap-4 mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.a 
                  href="https://github.com/samsondandin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/samson-dandin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              </motion.div>
              
              {/* Divider */}
              <motion.div 
                className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              
              {/* Copyright */}
              <motion.p 
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                © 2025 Samson Dandin. Built with{' '}
                <span className="text-primary font-medium">React</span>,{' '}
                <span className="text-accent font-medium">TypeScript</span> &{' '}
                <span className="text-primary font-medium">Tailwind CSS</span>
              </motion.p>
              <motion.p 
                className="text-xs text-muted-foreground/60 mt-2 flex items-center gap-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Designed with <Heart size={12} className="text-red-500 animate-pulse" /> for AI innovation
              </motion.p>
            </div>
          </div>
        </motion.footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
