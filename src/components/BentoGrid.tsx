import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Youtube, Eye, Image, Trophy, Code, Zap, CheckCircle, Activity, ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SpotlightCard from '@/components/ui/SpotlightCard';
import GlassChip from '@/components/ui/GlassChip';
import TextScramble from '@/components/ui/TextScramble';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const MetricLarge = ({ value, label, suffix = "%" }: { value: number; label: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <span className="text-4xl md:text-5xl font-bold gradient-text code-font">
        {isInView && <AnimatedCounter value={value} suffix={suffix} duration={2000} />}
      </span>
      <p className="text-xs text-muted-foreground mt-2 font-mono-label">{label}</p>
    </motion.div>
  );
};

const BentoGrid = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleViewCode = () => {
    window.open('https://github.com/samsondandin?tab=repositories', '_blank', 'noopener,noreferrer');
  };

  const handleLiveDemo = (url: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const projects = [
    {
      id: "summify",
      title: "Summmify",
      description: "AI-powered YouTube Summarizer using Hugging Face Transformers & Flask.",
      icon: Youtube,
      iconColor: "text-red-500",
      metrics: [
        { value: 78, label: "Content Reduction", suffix: "%" },
        { value: 60, label: "Interaction Boost", suffix: "%" }
      ],
      tags: ["Python", "NLP", "LLMs"],
      size: "large",
      demoUrl: "https://summmify-ai-demo.streamlit.app"
    },
    {
      id: "sign-language",
      title: "Sign Language Interpreter",
      description: "Real-time gesture recognition with 88% accuracy using CNNs & MediaPipe. Integrated with Zoom & TTS.",
      icon: Eye,
      iconColor: "text-primary",
      metrics: [
        { value: 88, label: "Accuracy", suffix: "%" },
        { value: 22, label: "Error Reduction", suffix: "%" }
      ],
      tags: ["TensorFlow", "OpenCV", "CNN"],
      size: "wide",
      demoUrl: ""
    }
  ];

  const techStack = [
    "Python", "SQL", "RAG", "Docker", "Git", "TensorFlow", "Next.js", "TypeScript"
  ];

  const certs = [
    { title: "Oracle Cloud AI 2025", issuer: "Oracle" },
    { title: "Infosys ML Certified", issuer: "Infosys" }
  ];

  const community = [
    "Led 3+ Blood Donation Drives (300+ people reached).",
    "Collaborated with Indian Cancer Society for awareness campaigns."
  ];

  return (
    <section id="projects" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
      {/* Subtle background */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full spotlight-glass text-sm text-primary font-mono-label mb-6">
            <Code size={14} />
            Portfolio
          </span>
          <h2 className="hero-title text-5xl md:text-7xl mb-6">
            <TextScramble delay={200}>Featured</TextScramble>{' '}
            <span className="gradient-text">
              <TextScramble delay={400}>Work</TextScramble>
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Card 1 - Large Project (Summify) */}
          <motion.div
            className="col-span-12 md:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="p-6 md:p-8 h-full" spotlightColor="rgba(34, 211, 238, 0.1)">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                  <Youtube size={28} className="text-destructive" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20 font-mono-label">
                  <CheckCircle size={12} className="mr-1" />
                  Completed
                </Badge>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold font-display mb-3">
                <TextScramble scrambleOnHover>Summmify</TextScramble>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                AI-powered YouTube Summarizer using Hugging Face Transformers & Flask. Reduces manual effort by 6+ hours weekly.
              </p>
              
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-6 mb-6 p-4 rounded-xl spotlight-glass">
                <MetricLarge value={78} label="Content Reduction" suffix="%" />
                <MetricLarge value={60} label="Interaction Boost" suffix="%" />
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "NLP", "LLMs", "Flask", "Hugging Face"].map((tag, i) => (
                  <GlassChip key={i} variant="primary">{tag}</GlassChip>
                ))}
              </div>
              
              {/* Actions */}
              <div className="flex gap-3">
                <Button onClick={handleViewCode} variant="outline" className="flex-1 btn-outline">
                  <Github size={16} className="mr-2" />
                  View Code
                </Button>
                <Button onClick={() => handleLiveDemo("https://summmify-ai-demo.streamlit.app")} className="flex-1 btn-primary">
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2 - Tech Arsenal (Tall) */}
          <motion.div
            className="col-span-12 md:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SpotlightCard className="p-6 h-full" spotlightColor="rgba(34, 211, 238, 0.1)">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Zap size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display">Tech Arsenal</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <GlassChip>{tech}</GlassChip>
                  </motion.div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3 - Sign Language (Wide) */}
          <motion.div
            className="col-span-12 md:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SpotlightCard className="p-6 md:p-8 h-full" spotlightColor="rgba(34, 211, 238, 0.1)">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Eye size={28} className="text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20 font-mono-label">
                  <Activity size={12} className="mr-1" />
                  Live
                </Badge>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold font-display mb-3">
                <TextScramble scrambleOnHover>Sign Language Interpreter</TextScramble>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Real-time gesture recognition with 88% accuracy using CNNs & MediaPipe. Integrated with Zoom & TTS.
              </p>
              
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-6 mb-6 p-4 rounded-xl spotlight-glass">
                <MetricLarge value={88} label="Accuracy" suffix="%" />
                <MetricLarge value={22} label="Error Reduction" suffix="%" />
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "OpenCV", "CNN", "MediaPipe"].map((tag, i) => (
                  <GlassChip key={i} variant="primary">{tag}</GlassChip>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4 - Recognition (Square) */}
          <motion.div
            className="col-span-12 md:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SpotlightCard className="p-6 h-full" spotlightColor="rgba(251, 191, 36, 0.1)">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center glow-primary">
                  <Trophy size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold font-display">Recognition</h3>
              </div>
              
              <div className="space-y-4">
                {certs.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl spotlight-glass border border-primary/10"
                  >
                    <p className="font-medium text-sm">{cert.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                  </motion.div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 5 - Smart Gallery */}
          <motion.div
            className="col-span-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SpotlightCard className="p-6 md:p-8" spotlightColor="rgba(34, 211, 238, 0.1)">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                      <Image size={28} className="text-background" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-display mb-1">
                        <TextScramble scrambleOnHover>Smart Image Gallery</TextScramble>
                      </h3>
                      <Badge className="bg-primary/10 text-primary border-primary/20 font-mono-label">
                        <CheckCircle size={12} className="mr-1" />
                        Completed
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    High-performance, AI-powered image gallery with intelligent search, drag-and-drop organization, and optimized delivery.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Remix", "TypeScript", "Tailwind CSS", "Cloudinary"].map((tag, i) => (
                      <GlassChip key={i} variant="primary">{tag}</GlassChip>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 p-6 rounded-xl spotlight-glass">
                  <MetricLarge value={95} label="Lighthouse Score" suffix="+" />
                  <MetricLarge value={40} label="Faster Load" suffix="%" />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Community Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold font-display mb-8 text-center">
            <TextScramble delay={200}>Community Impact</TextScramble>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {community.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <SpotlightCard className="p-6" spotlightColor="rgba(34, 211, 238, 0.1)">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
