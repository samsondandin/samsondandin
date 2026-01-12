import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Youtube, Eye, Code, Zap, CheckCircle, Server, ChevronDown, Activity, Image, Search, Gauge, Timer, GripVertical, Layers } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GlowingChip from '@/components/ui/GlowingChip';

const MetricRing = ({ value, label, color }: { value: number; label: string; color: string }) => {
  const circumference = 2 * Math.PI * 36;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-secondary/30"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="36"
            stroke={color}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold code-font">{value}%</span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground mt-2 text-center max-w-[80px]">{label}</span>
    </div>
  );
};

// Typing animation component
const TypingAnimation = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, 2000);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, text]);

  return (
    <span className="code-font">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-4 bg-primary ml-0.5"
      />
    </span>
  );
};

// Masonry preview images
const MasonryPreview = () => {
  const images = [
    { height: 'h-20', color: 'from-orange-400 to-pink-500' },
    { height: 'h-28', color: 'from-blue-400 to-purple-500' },
    { height: 'h-16', color: 'from-green-400 to-teal-500' },
    { height: 'h-24', color: 'from-yellow-400 to-orange-500' },
    { height: 'h-20', color: 'from-pink-400 to-rose-500' },
    { height: 'h-16', color: 'from-indigo-400 to-blue-500' },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 p-3 bg-secondary/20 rounded-xl border border-border/50">
      {images.map((img, i) => (
        <motion.div
          key={i}
          className={`${img.height} rounded-lg bg-gradient-to-br ${img.color} relative overflow-hidden group cursor-pointer`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="text-center text-white text-[8px] p-1">
              <p className="font-medium">sunset.jpg</p>
              <p className="opacity-70">1.2MB</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
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
      id: "summify",
      title: "Summmify - AI YouTube Video Summarizer",
      description: "Developed a comprehensive tool to transcribe and summarize YouTube videos using advanced NLP techniques. Integrated an intelligent chatbot for seamless user interaction.",
      impact: "Reduced manual effort by 6+ hours weekly for content teams",
      technologies: ["Python", "HuggingFace Transformers", "Streamlit", "NLP"],
      deployment: ["Flask", "Hugging Face"],
      metrics: [
        { value: 78, label: "Content Reduction", positive: true },
        { value: 60, label: "User Interaction ↑", positive: true }
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
        { value: 88, label: "Accuracy", positive: true },
        { value: 22, label: "Error Reduction", positive: true }
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
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="gradient-orb w-[400px] h-[400px] bg-primary/10 top-20 right-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 text-primary">
              <Code size={14} className="mr-2" />
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 display-font">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world applications of AI/ML technologies solving meaningful problems
            </p>
          </div>
        </ScrollReveal>

        {/* Smart Image Gallery - Featured Project */}
        <ScrollReveal className="mb-8">
          <motion.div
            onHoverStart={() => setHoveredProject('gallery')}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <Card className="glass-card card-hover overflow-hidden border-2 border-primary/20">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5"
                animate={{ scale: hoveredProject === 'gallery' ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Image size={28} className="text-white" />
                    </motion.div>
                    <div>
                      <Badge className="mb-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30">
                        <Layers size={12} className="mr-1" />
                        Full-Stack Project
                      </Badge>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        Smart Image Gallery
                      </CardTitle>
                    </div>
                  </div>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                    <CheckCircle size={12} className="mr-1" />
                    Completed
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  A high-performance, AI-powered image gallery with intelligent search, drag-and-drop organization, 
                  and optimized delivery through modern image formats and lazy loading.
                </p>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                {/* AI Search Bar Simulation */}
                <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                  <div className="flex items-center gap-3 px-4 py-3 bg-background/50 rounded-lg border border-primary/20">
                    <Search size={18} className="text-primary" />
                    <span className="text-muted-foreground">Search for: "</span>
                    <TypingAnimation text="Sunset at the beach" />
                    <span className="text-muted-foreground">"</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Masonry Grid Preview */}
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2 text-sm">
                      <Image size={14} className="text-primary" />
                      Masonry Grid Preview
                    </h4>
                    <MasonryPreview />
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Hover over images to see metadata
                    </p>
                  </div>

                  {/* Performance Dashboard */}
                  <div className="space-y-4">
                    <h4 className="font-medium flex items-center gap-2 text-sm">
                      <Gauge size={14} className="text-primary" />
                      Performance Dashboard
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <Gauge size={18} className="text-green-500" />
                          </div>
                          <span className="font-medium text-sm">Lighthouse Score</span>
                        </div>
                        <span className="text-xl font-bold code-font text-green-500">95+</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <Timer size={18} className="text-blue-500" />
                          </div>
                          <span className="font-medium text-sm">Faster Load Times</span>
                        </div>
                        <span className="text-xl font-bold code-font text-blue-500">40%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                            <GripVertical size={18} className="text-purple-500" />
                          </div>
                          <span className="font-medium text-sm">Drag & Drop Latency</span>
                        </div>
                        <span className="text-xl font-bold code-font text-purple-500">0ms</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deployment Tags */}
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Server size={14} className="text-accent" />
                    <span className="font-medium">Deployment:</span>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">Vercel</Badge>
                  <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">Cloudinary CDN</Badge>
                </div>

                {/* Pipeline Architecture Dropdown */}
                <div className="border border-border/50 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedArchitecture(expandedArchitecture === 'gallery' ? null : 'gallery')}
                    className="w-full p-4 flex items-center justify-between bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  >
                    <span className="font-medium flex items-center gap-2">
                      <Layers size={14} className="text-primary" />
                      View Pipeline
                    </span>
                    <motion.div
                      animate={{ rotate: expandedArchitecture === 'gallery' ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} className="text-muted-foreground" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: expandedArchitecture === 'gallery' ? 'auto' : 0, opacity: expandedArchitecture === 'gallery' ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-secondary/10 space-y-3">
                      {[
                        { step: 1, title: 'Dynamic Image Sourcing', desc: 'API/Local', color: 'text-blue-500' },
                        { step: 2, title: 'Smart Optimization', desc: 'WebP/AVIF Conversion', color: 'text-green-500' },
                        { step: 3, title: 'Interactive UI', desc: 'DND-Kit & Framer Motion', color: 'text-purple-500' },
                        { step: 4, title: 'Secure Cloud Persistence', desc: 'Storage Integration', color: 'text-orange-500' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={expandedArchitecture === 'gallery' ? { x: 0, opacity: 1 } : {}}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center text-sm font-bold ${item.color}`}>
                            {item.step}
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-sm">{item.title}</span>
                            <span className="text-muted-foreground text-xs ml-2">({item.desc})</span>
                          </div>
                          {i < 3 && <span className="text-primary">→</span>}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Animated Tech Chips */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Zap size={14} className="text-primary" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Remix", "TypeScript", "Tailwind CSS", "Cloudinary"].map((tech, i) => (
                      <GlowingChip key={i}>{tech}</GlowingChip>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <motion.div 
                    className="flex-1"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: hoveredProject === 'gallery' ? 0 : -10, opacity: hoveredProject === 'gallery' ? 1 : 0.7 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button onClick={handleViewCode} variant="outline" size="sm" className="w-full">
                      <Github size={16} className="mr-2" />
                      Explore Code
                    </Button>
                  </motion.div>
                  <Button onClick={() => handleLiveDemo("Smart Image Gallery")} size="sm" className="flex-1 btn-primary">
                    <ExternalLink size={16} className="mr-2" />
                    View Live Gallery
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.2}>
              <motion.div
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="glass-card card-hover group h-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                    animate={{ scale: hoveredProject === project.id ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <project.icon size={26} className="text-white" />
                      </motion.div>
                      <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                        <CheckCircle size={12} className="mr-1" />
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6 relative z-10">
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
                            <span className="text-xs text-muted-foreground">Live Interactions</span>
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

                    {/* Metrics Visualization */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                      <h4 className="font-medium mb-4 flex items-center gap-2 text-sm">
                        <Activity size={14} className="text-primary" />
                        Performance Metrics
                      </h4>
                      <div className="flex justify-center gap-6">
                        {project.metrics.map((metric, i) => (
                          <MetricRing 
                            key={i} 
                            value={metric.value} 
                            label={metric.label}
                            color={metric.positive ? "hsl(var(--primary))" : "hsl(var(--destructive))"}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Deployment Tags */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Server size={14} className="text-accent" />
                        <span className="font-medium">Deployment:</span>
                      </div>
                      {project.deployment.map((dep, i) => (
                        <Badge key={i} className="bg-accent/10 text-accent border-accent/20 text-xs">
                          {dep}
                        </Badge>
                      ))}
                    </div>

                    {/* Architecture Dropdown */}
                    <div className="border border-border/50 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setExpandedArchitecture(expandedArchitecture === project.id ? null : project.id)}
                        className="w-full p-4 flex items-center justify-between bg-secondary/20 hover:bg-secondary/30 transition-colors"
                      >
                        <span className="font-medium flex items-center gap-2">
                          <Code size={14} className="text-primary" />
                          System Architecture
                        </span>
                        <motion.div
                          animate={{ rotate: expandedArchitecture === project.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={18} className="text-muted-foreground" />
                        </motion.div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: expandedArchitecture === project.id ? 'auto' : 0, opacity: expandedArchitecture === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-secondary/10 space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant="outline" className="text-xs">Input</Badge>
                            <span className="text-muted-foreground">{project.architecture.input}</span>
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">Pipeline</Badge>
                            {project.architecture.processing.map((step, i) => (
                              <span key={i} className="text-xs text-muted-foreground flex items-center">
                                {step}
                                {i < project.architecture.processing.length - 1 && (
                                  <span className="mx-2 text-primary">→</span>
                                )}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant="outline" className="text-xs">Output</Badge>
                            <span className="text-muted-foreground">{project.architecture.output}</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <Zap size={14} className="text-primary" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <GlowingChip key={i}>{tech}</GlowingChip>
                        ))}
                      </div>
                    </div>

                    {/* Actions with slide-in effect */}
                    <div className="flex gap-3 pt-2">
                      <motion.div 
                        className="flex-1"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: hoveredProject === project.id ? 0 : -10, opacity: hoveredProject === project.id ? 1 : 0.7 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button onClick={handleViewCode} variant="outline" size="sm" className="w-full">
                          <Github size={16} className="mr-2" />
                          View Code
                        </Button>
                      </motion.div>
                      <Button onClick={() => handleLiveDemo(project.title)} size="sm" className="flex-1 btn-primary">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="glass-card card-hover text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold gradient-text mb-2 code-font">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
