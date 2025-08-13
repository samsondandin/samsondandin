import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Youtube, Eye, MessageSquare, Clock } from 'lucide-react';

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
    <section id="projects" className="section-spacing px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="accent-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-world applications of AI/ML technologies solving meaningful problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient border-border hover-glow transition-smooth animate-fade-in group" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {project.timeline ? (
                      <Badge variant="outline" className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {project.status}
                      </Badge>
                    ) : (
                      <Badge variant="secondary">{project.status}</Badge>
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

              <CardContent className="space-y-6">
                {/* Impact */}
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-primary">Impact</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center">
                    <MessageSquare size={16} className="mr-2 text-accent" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-medium mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button 
                    onClick={() => handleViewCode(project.title)}
                    variant="outline" 
                    size="sm" 
                    className="flex items-center"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </Button>
                  <Button 
                    onClick={() => handleLiveDemo(project.title)}
                    variant="outline" 
                    size="sm" 
                    className="flex items-center"
                    disabled={project.title === "Sign Language Interpreter"}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    {project.title === "Sign Language Interpreter" ? "Coming Soon" : "Live Demo"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-gradient border-border text-center animate-scale-in">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <p className="text-muted-foreground">Major Projects</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-accent mb-2">6+</div>
              <p className="text-muted-foreground">Hours Saved Weekly</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Real-world Impact</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;