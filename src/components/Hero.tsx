import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Download, Github, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/profile-image.avif';
import MagneticButton from '@/components/ui/MagneticButton';
import TextScramble from '@/components/ui/TextScramble';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30" />
      
      {/* Ambient glow - Electric Cyan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
      
      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto relative z-10 w-full pt-24 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content - Main Typography */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full spotlight-glass text-sm text-primary font-mono-label">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for Hire
              </span>
            </motion.div>
            
            {/* Massive Headline with Text Scramble */}
            <div className="mb-6 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-2">
                  <TextScramble delay={400}>BUILDING</TextScramble>
                </h1>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text">
                  <TextScramble delay={600}>INTELLIGENCE.</TextScramble>
                </h1>
              </motion.div>
            </div>
            
            {/* Subheadline */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-lg md:text-xl text-muted-foreground font-medium mb-3 font-display">
                B.E. Student (2022-26) | AI & Machine Learning | Deploying Solutions.
              </p>
              <p className="text-base text-muted-foreground/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Building intelligent solutions that bridge technology and real-world impact through machine learning
              </p>
            </motion.div>

            {/* Minimal Skill Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              {['Deep Learning', 'NLP', 'Computer Vision'].map((skill, i) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground font-mono-label"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Quick Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 text-sm"
            >
              <a href="mailto:samsondandin335@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} />
                <span className="hidden sm:inline code-font">samsondandin335@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/samson-dandin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={16} />
                <span className="code-font">LinkedIn</span>
              </a>
              <a href="https://github.com/samsondandin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Github size={16} />
                <span className="code-font">GitHub</span>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton>
                <Button onClick={scrollToContact} size="lg" className="btn-primary group w-full sm:w-auto">
                  Get In Touch
                  <motion.span 
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button onClick={handleDownloadResume} variant="outline" size="lg" className="btn-outline w-full sm:w-auto">
                  <Download size={18} className="mr-2" />
                  Resume
                </Button>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Content - Profile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Cyan glow effect */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 bg-primary/20 rounded-full blur-3xl"
              />
              
              {/* Profile Image */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-primary/20 p-[2px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-full h-full rounded-full bg-background overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Samson Dandin - AI/ML Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4"
                >
                  <SpotlightCard className="px-4 py-2 rounded-full">
                    <span className="font-bold text-sm flex items-center gap-2 gradient-text code-font">
                      AI/ML
                    </span>
                  </SpotlightCard>
                </motion.div>
              </div>

              {/* Stats - Side panel */}
              <div className="absolute -left-24 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <SpotlightCard className="px-5 py-4 text-center">
                    <div className="text-2xl font-bold gradient-text code-font">10+</div>
                    <div className="text-xs text-muted-foreground font-mono-label">Projects</div>
                  </SpotlightCard>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <SpotlightCard className="px-5 py-4 text-center">
                    <div className="text-2xl font-bold gradient-text code-font">4</div>
                    <div className="text-xs text-muted-foreground font-mono-label">Certifications</div>
                  </SpotlightCard>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
        >
          <motion.button 
            onClick={scrollToAbout} 
            className="text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs font-mono-label mb-3 block">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={18} className="mx-auto group-hover:text-primary transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
