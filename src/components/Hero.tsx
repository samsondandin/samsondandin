import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Linkedin, Download, Github, ArrowDown, Brain, Sparkles } from 'lucide-react';
import profileImage from '@/assets/profile-image.avif';
import MagneticButton from '@/components/ui/MagneticButton';
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

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.05,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    })
  };

  const firstName = "Samson";
  const lastName = "Dandin";

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen hero-gradient flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Minimal geometric accent */}
      <motion.div 
        className="absolute top-20 right-10 w-40 h-40 border border-primary/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-24 h-24 border border-accent/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      
      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto relative z-10 w-full pt-20 pb-12"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Available for opportunities
              </span>
            </motion.div>
            
            {/* Massive Name Typography */}
            <div className="mb-6 overflow-hidden">
              <div className="flex flex-wrap justify-center lg:justify-start">
                {firstName.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className="hero-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start -mt-2 md:-mt-4">
                {lastName.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i + firstName.length}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className="hero-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl gradient-text"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Title with line accent */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-3">
                AI/ML Engineer & Developer
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
              {['Machine Learning', 'Deep Learning', 'NLP'].map((skill, i) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Quick Contact - Minimal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 text-sm"
            >
              <a href="mailto:samsondandin335@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} />
                <span className="hidden sm:inline">samsondandin335@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/samson-dandin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/samsondandin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Github size={16} />
                <span>GitHub</span>
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

          {/* Right Content - Profile with floating elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-accent/20 to-cyan-500/20 rounded-full blur-3xl"
              />
              
              {/* Profile Image */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-cyan-500 p-[2px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-full h-full rounded-full bg-background overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Samson Dandin - AI/ML Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                {/* Floating Badge - AI/ML */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 px-4 py-2 glass-card rounded-full shadow-xl"
                >
                  <span className="font-bold text-sm flex items-center gap-2 gradient-text code-font">
                    <Brain size={14} className="text-primary" />
                    AI/ML
                  </span>
                </motion.div>

                {/* Location Badge */}
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-4 -left-4 px-3 py-1.5 glass-card rounded-full shadow-xl"
                >
                  <span className="text-xs font-medium flex items-center gap-1.5 text-muted-foreground">
                    <MapPin size={12} className="text-primary" />
                    India
                  </span>
                </motion.div>

                {/* Sparkle decoration */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 -right-12 hidden lg:block"
                >
                  <Sparkles size={20} className="text-primary/50" />
                </motion.div>
              </div>

              {/* Stats - Side panel */}
              <div className="absolute -left-24 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="glass-card px-5 py-4 rounded-2xl text-center"
                >
                  <div className="text-2xl font-bold gradient-text code-font">10+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="glass-card px-5 py-4 rounded-2xl text-center"
                >
                  <div className="text-2xl font-bold gradient-text code-font">4</div>
                  <div className="text-xs text-muted-foreground">Certifications</div>
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
            <span className="text-xs font-medium mb-3 block uppercase tracking-widest">Scroll</span>
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
