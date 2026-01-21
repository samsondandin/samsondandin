import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Youtube, Eye, Code, Zap, CheckCircle, Server, Activity, Image } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GlowingChip from '@/components/ui/GlowingChip';
import TextScramble from '@/components/ui/TextScramble';
import FrostedCard from '@/components/ui/FrostedCard';
import ParallaxContainer from '@/components/ui/ParallaxContainer';

const MetricLarge = ({ value, label, suffix = "%" }: { value: number; label: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="metric-large gradient-text-ice">
        {isInView && <AnimatedCounter value={value} suffix={suffix} duration={2000} />}
      </span>
      <p className="text-sm text-muted-foreground mt-2 font-mono-label">{label}</p>
    </motion.div>
  );
};

const Projects = () => {
  const [expandedArchitecture, setExpandedArchitecture] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const handleViewCode = () => {
    window.open('https://github.com/samsondandin?tab=repositories', '_blank', 'noopener,noreferrer');
  };

  const handleLiveDemo = (projectTitle: string) => {
    const demoUrls: Record<string, string> = {
      "Summmify - AI YouTube Video Summarizer": "https://summmify-ai-demo.streamlit.app",
      "Sign Language Interpreter": "",
      "Smart Image Gallery": ""
    };
    const url = demoUrls[projectTitle];
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const projects = [
    {
      id: "smart-gallery",
      title: "Smart Image Gallery",
      description: "A high-performance, AI-powered image gallery with intelligent search, drag-and-drop organization, and optimized delivery through modern image formats and lazy loading.",
      impact: "95+ Lighthouse Score with 40% faster load times",
      technologies: ["Remix", "TypeScript", "Tailwind CSS", "Cloudinary"],
      deployment: ["Vercel", "Cloudinary CDN"],
      metrics: [
        { value: 95, label: "Lighthouse", suffix: "+" },
        { value: 40, label: "Faster Load", suffix: "%" }
      ],
      features: ["Masonry Grid Layout", "AI-Powered Search", "Drag & Drop Sorting", "WebP/AVIF Optimization"],
      architecture: {
        input: "Image Upload/API",
        processing: ["Smart Optimization", "WebP/AVIF Conversion", "DND-Kit Integration", "Framer Motion UI"],
        output: "Optimized Gallery"
      },
      icon: Image,
      color: "from-primary to-accent"
    },
    {
      id: "summify",
      title: "Summmify - AI YouTube Video Summarizer",
      description: "Developed a comprehensive tool to transcribe and summarize YouTube videos using advanced NLP techniques. Integrated an intelligent chatbot for seamless user interaction.",
      impact: "Reduced manual effort by 6+ hours weekly for content teams",
      technologies: ["Python", "HuggingFace Transformers", "Streamlit", "NLP"],
      deployment: ["Flask", "Hugging Face"],
      metrics: [
        { value: 78, label: "Content Reduction", suffix: "%" },
        { value: 60, label: "User Interaction ↑", suffix: "%" }
      ],
      features: ["Automatic video transcription", "AI-powered summarization", "Interactive chatbot", "Real-time processing"],
      architecture: {
        input: "YouTube URL",
        processing: ["Video Extraction", "Audio Transcription", "NLP Summarization", "Chatbot Integration"],
        output: "Summarized Content + Q&A"
      },
      icon: Youtube,
      color: "from-accent to-primary"
    },
    {
      id: "sign-language",
      title: "Sign Language Interpreter",
      description: "Built an advanced computer vision system to interpret sign language gestures for better communication accessibility for the Deaf community.",
      impact: "Enhancing accessibility for the Deaf community",
      technologies: ["MediaPipe", "OpenCV", "TensorFlow", "Deep Learning"],
      deployment: ["OpenCV", "Zoom/TTS API Integration"],
      metrics: [
        { value: 88, label: "Accuracy", suffix: "%" },
        { value: 22, label: "Error Reduction", suffix: "%" }
      ],
      liveMetrics: { interactions: 20, accuracy: 88 },
      features: ["Real-time gesture recognition", "Hand landmark detection", "Deep learning classification", "TTS Output"],
      architecture: {
        input: "Webcam Feed",
        processing: ["MediaPipe Landmarks", "Feature Extraction", "TensorFlow Classification", "TTS Output"],
        output: "Text/Speech Output"
      },
      icon: Eye,
      color: "from-primary to-primary/50"
    }
  ];

  const stats = [
    { value: 3, suffix: "+", label: "Major Projects" },
    { value: 6, suffix: "+", label: "Hours Saved Weekly" },
    { value: 100, suffix: "%", label: "Real-world Impact" },
  ];

  return (
    <section ref={sectionRef} id="projects" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Ambient light */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full frosted-glass text-sm text-primary font-mono-label mb-6">
            <Code size={14} />
            Portfolio
          </span>
          <h2 className="hero-title text-5xl md:text-7xl mb-6">
            <TextScramble delay={200}>Featured</TextScramble>{' '}
            <span className="gradient-text-ice">
              <TextScramble delay={400}>Projects</TextScramble>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of AI/ML technologies solving meaningful problems
          </p>
        </motion.div>

        {/* Floating Bento-style Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ParallaxContainer key={project.id} speed={index % 2 === 0 ? -0.05 : 0.05}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <FrostedCard className="p-8 md:p-12 overflow-hidden" glow="ice">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left - Project Info */}
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <motion.div 
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.3)' }}
                        >
                          <project.icon size={28} className="text-background" />
                        </motion.div>
                        <Badge className="bg-primary/10 text-primary border-primary/20 font-mono-label">
                          <CheckCircle size={12} className="mr-1" />
                          Completed
                        </Badge>
                      </div>
                      
                      <div>
                        <motion.h3 
                          className="text-2xl md:text-3xl font-bold font-display mb-3 cursor-pointer"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <TextScramble scrambleOnHover>{project.title}</TextScramble>
                        </motion.h3>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>

                      {/* Live Metrics Ticker */}
                      {project.liveMetrics && (
                        <div className="p-4 rounded-xl frosted-glass border border-primary/20">
                          <h4 className="font-medium mb-3 flex items-center gap-2 text-sm text-primary font-mono-label">
                            <Activity size={14} className="animate-pulse" />
                            Live Performance
                          </h4>
                          <div className="flex justify-around">
                            <div className="text-center">
                              <div className="text-2xl font-bold code-font gradient-text-ice">
                                <AnimatedCounter value={project.liveMetrics.interactions} suffix="+" />
                              </div>
                              <span className="text-xs text-muted-foreground font-mono-label">Interactions</span>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold code-font gradient-text-ice">
                                <AnimatedCounter value={project.liveMetrics.accuracy} suffix="%" />
                              </div>
                              <span className="text-xs text-muted-foreground font-mono-label">Accuracy</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium mb-3 flex items-center gap-2 text-sm font-mono-label">
                          <Zap size={14} className="text-primary" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <GlowingChip>{tech}</GlowingChip>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Deployment Tags */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono-label">
                          <Server size={14} className="text-accent" />
                          <span>Deploy:</span>
                        </div>
                        {project.deployment.map((dep, i) => (
                          <Badge key={i} className="bg-accent/10 text-accent border-accent/20 text-xs font-mono">
                            {dep}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4">
                        <Button onClick={handleViewCode} variant="outline" className="flex-1 btn-outline">
                          <Github size={16} className="mr-2" />
                          Explore Code
                        </Button>
                        <Button onClick={() => handleLiveDemo(project.title)} className="flex-1 btn-primary">
                          <ExternalLink size={16} className="mr-2" />
                          View Live
                        </Button>
                      </div>
                    </div>

                    {/* Right - Metrics & Architecture */}
                    <div className="space-y-6">
                      {/* Large Metrics Display */}
                      <div className="accent-metric">
                        <h4 className="font-medium mb-6 flex items-center gap-2 text-sm text-center justify-center font-mono-label">
                          <Activity size={14} className="text-primary" />
                          Performance Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-6">
                          {project.metrics.map((metric, i) => (
                            <MetricLarge 
                              key={i} 
                              value={metric.value} 
                              label={metric.label}
                              suffix={metric.suffix}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Architecture - Glassmorphic Accordion */}
                      <FrostedCard className="rounded-xl overflow-hidden" hover={false}>
                        <button
                          onClick={() => setExpandedArchitecture(expandedArchitecture === project.id ? null : project.id)}
                          className="w-full p-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
                        >
                          <span className="font-medium text-sm flex items-center gap-2 font-mono-label">
                            <Code size={14} className="text-primary" />
                            View Pipeline
                          </span>
                          <motion.span
                            animate={{ rotate: expandedArchitecture === project.id ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-muted-foreground"
                          >
                            +
                          </motion.span>
                        </button>
                        
                        <AnimatePresence>
                          {expandedArchitecture === project.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 pt-0 space-y-4">
                                {/* Step 1: Input */}
                                <motion.div 
                                  className="flex items-center gap-3"
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.1 }}
                                >
                                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary code-font">1</span>
                                  <div>
                                    <p className="text-xs text-muted-foreground font-mono-label">Input</p>
                                    <p className="text-sm font-medium">{project.architecture.input}</p>
                                  </div>
                                </motion.div>

                                {/* Processing Steps */}
                                {project.architecture.processing.map((step, i) => (
                                  <motion.div 
                                    key={i}
                                    className="flex items-center gap-3"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + (i + 1) * 0.1 }}
                                  >
                                    <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent code-font">{i + 2}</span>
                                    <p className="text-sm font-medium">{step}</p>
                                  </motion.div>
                                ))}

                                {/* Output */}
                                <motion.div 
                                  className="flex items-center gap-3"
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.1 + (project.architecture.processing.length + 1) * 0.1 }}
                                >
                                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">✓</span>
                                  <div>
                                    <p className="text-xs text-muted-foreground font-mono-label">Output</p>
                                    <p className="text-sm font-medium">{project.architecture.output}</p>
                                  </div>
                                </motion.div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </FrostedCard>
                    </div>
                  </div>
                </FrostedCard>
              </motion.div>
            </ParallaxContainer>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <FrostedCard key={index} className="p-8 text-center" glow="ice">
              <div className="text-5xl md:text-6xl font-bold gradient-text-ice mb-3 code-font">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground font-mono-label">{stat.label}</p>
            </FrostedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
