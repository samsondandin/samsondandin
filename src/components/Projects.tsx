import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Youtube, Eye, MessageSquare, Clock, Code, Zap, Trophy } from 'lucide-react';

const Projects = () => {
  const handleViewCode = (projectTitle: string) => {
    // Add GitHub URLs for each project
    const githubUrls = {
      "Summmify - AI YouTube Video Summarizer": "https://github.com/samsondandin/summmify-ai-youtube-summarizer",
      "Sign Language Interpreter": "https://github.com/samsondandin/sign-language-interpreter"
    };
    
    const url = githubUrls[projectTitle as keyof typeof githubUrls];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // Fallback to main GitHub profile
      window.open('https://github.com/samsondandin', '_blank', 'noopener,noreferrer');
    }
  };

  const handleLiveDemo = (projectTitle: string) => {
    // Add demo URLs for each project
    const demoUrls = {
      "Summmify - AI YouTube Video Summarizer": "https://summmify-ai-demo.streamlit.app",
      "Sign Language Interpreter": "" // Coming soon
    };
    
    const url = demoUrls[projectTitle as keyof typeof demoUrls];
    if (url && url !== "") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const projects = [
    {
      title: "Summmify - AI YouTube Video Summarizer",
      description: "Developed a comprehensive tool to transcribe and summarize YouTube videos using advanced NLP techniques. Integrated an intelligent chatbot for seamless user interaction and content exploration.",
      impact: "Reduced manual effort by 6+ hours weekly for content teams",
      technologies: ["Python", "HuggingFace Transformers", "Streamlit", "NLP"],
      features: [
        "Automatic video transcription",
        "AI-powered summarization",
        "Interactive chatbot integration",
        "Real-time processing"
      ],
      icon: Youtube,
      color: "from-red-500 to-pink-500",
      status: "Completed"
    },
    {
      title: "Sign Language Interpreter",
      description: "Built an advanced computer vision system to interpret sign language gestures for better communication accessibility. Aimed to bridge communication gaps for the Deaf community.",
      impact: "Enhancing accessibility for the Deaf community",
      technologies: ["MediaPipe", "OpenCV", "TensorFlow", "Computer Vision"],
      features: [
        "Real-time gesture recognition",
        "Hand landmark detection",
        "Deep learning classification",
        "Multi-language support"
      ],
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
      status: "Mar 2025 – Jun 2025",
      timeline: true
    }
  ];

  return (
    <section id="projects" className="section-spacing px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 neon-border">
            <Code size={14} className="mr-2" />
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Featured <span className="accent-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Real-world applications of AI/ML technologies solving meaningful problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-morphism border-border hover-glow transition-bounce animate-fade-in group relative overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-glow group-hover:scale-110 transition-bounce`}>
                    <project.icon size={28} className="text-white drop-shadow-lg" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {project.timeline ? (
                      <Badge variant="outline" className="flex items-center bg-primary/5 border-primary/20">
                        <Clock size={12} className="mr-1" />
                        {project.status}
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">{project.status}</Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                {/* Enhanced Impact */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/20 group-hover:border-primary/40 transition-smooth">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium text-primary">Impact</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>

                {/* Enhanced Features */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center">
                    <div className="w-5 h-5 bg-accent/20 rounded flex items-center justify-center mr-2">
                      <MessageSquare size={12} className="text-accent" />
                    </div>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-smooth">
                        <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Technologies */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center">
                    <div className="w-5 h-5 bg-primary/20 rounded flex items-center justify-center mr-2">
                      <Zap size={12} className="text-primary" />
                    </div>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs hover:bg-primary/10 hover:border-primary/20 transition-smooth">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button 
                    onClick={() => handleViewCode(project.title)}
                    variant="outline" 
                    size="sm" 
                    className="flex items-center neon-border hover-glow"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </Button>
                  <Button 
                    onClick={() => handleLiveDemo(project.title)}
                    variant="outline" 
                    size="sm" 
                    className="flex items-center cyber-button"
                    disabled={project.title === "Sign Language Interpreter"}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    {project.title === "Sign Language Interpreter" ? "Coming Soon" : "Live Demo"}
                  </Button>
                </div>
              </CardContent>
              
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-smooth"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced Project Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-morphism shadow-elegant text-center animate-scale-in group">
            <CardContent className="p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2 font-mono">2+</div>
                <p className="text-muted-foreground">Major Projects</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-morphism shadow-elegant text-center animate-scale-in group" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={24} className="text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2 font-mono">6+</div>
                <p className="text-muted-foreground">Hours Saved Weekly</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-morphism shadow-elegant text-center animate-scale-in group" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2 font-mono">100%</div>
                <p className="text-muted-foreground">Real-world Impact</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;