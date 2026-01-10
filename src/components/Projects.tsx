import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Youtube, Eye, MessageSquare, Code, Zap, CheckCircle } from 'lucide-react';

const Projects = () => {
  const handleViewCode = (projectTitle: string) => {
    const githubUrls = {
      "Summmify - AI YouTube Video Summarizer": "https://github.com/samsondandin/summmify-ai-youtube-summarizer",
      "Sign Language Interpreter": "https://github.com/samsondandin/sign-language-interpreter"
    };
    
    const url = githubUrls[projectTitle as keyof typeof githubUrls];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      window.open('https://github.com/samsondandin', '_blank', 'noopener,noreferrer');
    }
  };

  const handleLiveDemo = (projectTitle: string) => {
    const demoUrls = {
      "Summmify - AI YouTube Video Summarizer": "https://summmify-ai-demo.streamlit.app",
      "Sign Language Interpreter": ""
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
      description: "Built an advanced computer vision system to interpret sign language gestures for better communication accessibility. Successfully bridging communication gaps for the Deaf community.",
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
      status: "Completed"
    }
  ];

  const stats = [
    { icon: Code, value: "2+", label: "Major Projects" },
    { icon: Zap, value: "6+", label: "Hours Saved Weekly" },
    { icon: CheckCircle, value: "100%", label: "Real-world Impact" },
  ];

  return (
    <section id="projects" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="gradient-orb w-[400px] h-[400px] bg-primary/10 top-20 right-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 text-primary">
            <Code size={14} className="mr-2" />
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 display-font">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of AI/ML technologies solving meaningful problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card card-hover group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon size={26} className="text-white" />
                  </div>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20">
                    <CheckCircle size={12} className="mr-1" />
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground mt-2">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Impact */}
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-primary">Impact</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <MessageSquare size={14} className="text-accent" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Zap size={14} className="text-primary" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/50 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    onClick={() => handleViewCode(project.title)}
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </Button>
                  <Button 
                    onClick={() => handleLiveDemo(project.title)}
                    size="sm"
                    className="flex-1 btn-primary"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card card-hover text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2 code-font">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;