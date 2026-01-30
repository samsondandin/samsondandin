import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Youtube, Eye, Code, Zap, CheckCircle, Server, ChevronDown, Activity, Image } from 'lucide-react';
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
      "Smart Image Gallery": "https://smart-gallery-80002.web.app"
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
        { value: 95, label: "Lighthouse Score", positive: true },
        { value: 40, label: "Faster Load", positive: true }
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

        {/* Projects Grid - All Uniform */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <motion.div
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="h-full"
              >
                <Card className="glass-card card-hover group h-full overflow-hidden flex flex-col">
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
                    <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm mt-2 line-clamp-3">{project.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-5 relative z-10 flex-1 flex flex-col">
                    {/* Live Metrics Ticker for Sign Language Project */}
                    {project.liveMetrics && (
                      <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                        <h4 className="font-medium mb-2 flex items-center gap-2 text-xs text-green-500">
                          <Activity size={12} className="animate-pulse" />
                          Live Performance
                        </h4>
                        <div className="flex justify-around">
                          <div className="text-center">
                            <div className="text-xl font-bold code-font gradient-text">
                              <AnimatedCounter value={project.liveMetrics.interactions} suffix="+" />
                            </div>
                            <span className="text-[10px] text-muted-foreground">Interactions</span>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold code-font gradient-text">
                              <AnimatedCounter value={project.liveMetrics.accuracy} suffix="%" />
                            </div>
                            <span className="text-[10px] text-muted-foreground">Accuracy</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Metrics Visualization */}
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                      <h4 className="font-medium mb-3 flex items-center gap-2 text-xs">
                        <Activity size={12} className="text-primary" />
                        Performance Metrics
                      </h4>
                      <div className="flex justify-center gap-4">
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
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Server size={12} className="text-accent" />
                        <span className="font-medium">Deploy:</span>
                      </div>
                      {project.deployment.map((dep, i) => (
                        <Badge key={i} className="bg-accent/10 text-accent border-accent/20 text-[10px] px-2 py-0.5">
                          {dep}
                        </Badge>
                      ))}
                    </div>

                    {/* Architecture Dropdown */}
                    <div className="border border-border/50 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setExpandedArchitecture(expandedArchitecture === project.id ? null : project.id)}
                        className="w-full p-3 flex items-center justify-between bg-secondary/20 hover:bg-secondary/30 transition-colors"
                      >
                        <span className="font-medium text-sm flex items-center gap-2">
                          <Code size={12} className="text-primary" />
                          System Architecture
                        </span>
                        <motion.div
                          animate={{ rotate: expandedArchitecture === project.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} className="text-muted-foreground" />
                        </motion.div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: expandedArchitecture === project.id ? 'auto' : 0, opacity: expandedArchitecture === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 bg-secondary/10 space-y-2">
                          <div className="flex items-center gap-2 text-xs">
                            <Badge variant="outline" className="text-[10px] px-1.5 py-0">Input</Badge>
                            <span className="text-muted-foreground">{project.architecture.input}</span>
                          </div>
                          <div className="flex items-start gap-2 flex-wrap">
                            <Badge variant="outline" className="text-[10px] px-1.5 py-0 shrink-0">Pipeline</Badge>
                            <div className="flex flex-wrap gap-1">
                              {project.architecture.processing.map((step, i) => (
                                <span key={i} className="text-[10px] text-muted-foreground flex items-center">
                                  {step}
                                  {i < project.architecture.processing.length - 1 && (
                                    <span className="mx-1 text-primary">→</span>
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <Badge variant="outline" className="text-[10px] px-1.5 py-0">Output</Badge>
                            <span className="text-muted-foreground">{project.architecture.output}</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Technologies */}
                    <div className="flex-1">
                      <h4 className="font-medium mb-2 flex items-center gap-2 text-sm">
                        <Zap size={12} className="text-primary" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, i) => (
                          <GlowingChip key={i}>{tech}</GlowingChip>
                        ))}
                      </div>
                    </div>

                    {/* Actions with slide-in effect */}
                    <div className="flex gap-2 pt-2 mt-auto">
                      <motion.div 
                        className="flex-1"
                        initial={{ x: -20, opacity: 0.7 }}
                        animate={{ x: hoveredProject === project.id ? 0 : -5, opacity: hoveredProject === project.id ? 1 : 0.7 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button onClick={handleViewCode} variant="outline" size="sm" className="w-full text-xs">
                          <Github size={14} className="mr-1.5" />
                          View Code
                        </Button>
                      </motion.div>
                      <Button onClick={() => handleLiveDemo(project.title)} size="sm" className="flex-1 btn-primary text-xs">
                        <ExternalLink size={14} className="mr-1.5" />
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
