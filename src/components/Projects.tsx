import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Youtube, Eye, Code, Zap, CheckCircle, Server, X, Activity, Image } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GlowingChip from '@/components/ui/GlowingChip';

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
      <span className="metric-large gradient-text">
        {isInView && <AnimatedCounter value={value} suffix={suffix} duration={2000} />}
      </span>
      <p className="text-sm text-muted-foreground mt-2 uppercase tracking-widest">{label}</p>
    </motion.div>
  );
};

const Projects = () => {
  const [expandedArchitecture, setExpandedArchitecture] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

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
      color: "from-purple-500 to-pink-500",
      status: "Completed"
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
      color: "from-red-500 to-pink-500",
      status: "Completed"
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
      color: "from-blue-500 to-cyan-500",
      status: "Completed"
    }
  ];

  const stats = [
    { value: 3, suffix: "+", label: "Major Projects" },
    { value: 6, suffix: "+", label: "Hours Saved Weekly" },
    { value: 100, suffix: "%", label: "Real-world Impact" },
  ];

  return (
    <section id="projects" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 text-primary">
              <Code size={14} className="mr-2" />
              Portfolio
            </Badge>
            <h2 className="hero-title text-5xl md:text-7xl mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world applications of AI/ML technologies solving meaningful problems
            </p>
          </div>
        </ScrollReveal>

        {/* Fullscreen-width Project Sections */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.div
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="relative distortion-container"
              >
                <div className="distortion-overlay" />
                
                <div className="glass-card p-8 md:p-12 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left - Project Info */}
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <motion.div 
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <project.icon size={28} className="text-white" />
                        </motion.div>
                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                          <CheckCircle size={12} className="mr-1" />
                          {project.status}
                        </Badge>
                      </div>
                      
                      <div>
                        <motion.h3 
                          className="text-2xl md:text-3xl font-bold display-font mb-3 cursor-pointer"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>

                      {/* Live Metrics Ticker for Sign Language Project */}
                      {project.liveMetrics && (
                        <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                          <h4 className="font-medium mb-3 flex items-center gap-2 text-sm text-green-500">
                            <Activity size={14} className="animate-pulse" />
                            Live Performance
                          </h4>
                          <div className="flex justify-around">
                            <div className="text-center">
                              <div className="text-2xl font-bold code-font gradient-text">
                                <AnimatedCounter value={project.liveMetrics.interactions} suffix="+" />
                              </div>
                              <span className="text-xs text-muted-foreground">Interactions</span>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold code-font gradient-text">
                                <AnimatedCounter value={project.liveMetrics.accuracy} suffix="%" />
                              </div>
                              <span className="text-xs text-muted-foreground">Accuracy</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium mb-3 flex items-center gap-2 text-sm">
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
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Server size={14} className="text-accent" />
                          <span className="font-medium">Deploy:</span>
                        </div>
                        {project.deployment.map((dep, i) => (
                          <Badge key={i} className="bg-accent/10 text-accent border-accent/20 text-xs">
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
                        <h4 className="font-medium mb-6 flex items-center gap-2 text-sm text-center justify-center">
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

                      {/* Architecture - Glassmorphic Modal Style */}
                      <div className="glass-card rounded-xl overflow-hidden">
                        <button
                          onClick={() => setExpandedArchitecture(expandedArchitecture === project.id ? null : project.id)}
                          className="w-full p-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
                        >
                          <span className="font-medium text-sm flex items-center gap-2">
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
                                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">1</span>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Input</p>
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
                                    <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent">{i + 2}</span>
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
                                  <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-xs font-bold text-green-500">✓</span>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Output</p>
                                    <p className="text-sm font-medium">{project.architecture.output}</p>
                                  </div>
                                </motion.div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="accent-metric text-center">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-3 code-font">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground uppercase tracking-widest text-sm">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
