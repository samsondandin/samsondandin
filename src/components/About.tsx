import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Code, Users, Trophy, Rocket, Target, Lightbulb, Star } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Specialist",
      description: "Deep learning, NLP, and computer vision expertise"
    },
    {
      icon: Code,
      title: "Developer",
      description: "Python, Java, and modern frameworks"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong communication and collaboration skills"
    },
    {
      icon: Trophy,
      title: "Achiever",
      description: "Multiple competition wins and certifications"
    }
  ];

  return (
    <section id="about" className="section-spacing px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 mesh-bg opacity-30"></div>
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 neon-border">
            <Star size={14} className="mr-2" />
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Passionate About <span className="accent-gradient bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Motivated and curious engineering student specializing in Artificial Intelligence and Machine Learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <Card className="card-gradient border-border shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I have a strong foundation in programming, data science, and deep learning, backed by hands-on projects 
                  that solve real-world problems. My journey in AI/ML began with curiosity and has evolved into a passion 
                  for creating intelligent solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I am a strong communicator, a collaborative teammate, and a regular contributor to college and community 
                  activities. I believe in the power of technology to make a positive impact on society.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Problem Solver</Badge>
                  <Badge variant="secondary">Quick Learner</Badge>
                  <Badge variant="secondary">Team Player</Badge>
                  <Badge variant="secondary">Innovation Focused</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Enhanced Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-gradient border-border hover-glow transition-bounce group" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-bounce">
                      <highlight.icon size={28} className="text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-smooth">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Languages & Values Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Languages */}
          <Card className="glass-morphism shadow-elegant animate-fade-in">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Languages I Speak</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <span className="text-2xl mb-2 block">🇬🇧</span>
                  <p className="font-semibold">English</p>
                  <p className="text-sm text-muted-foreground">Fluent</p>
                </div>
                <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                  <span className="text-2xl mb-2 block">🇮🇳</span>
                  <p className="font-semibold">Hindi</p>
                  <p className="text-sm text-muted-foreground">Fluent</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <span className="text-2xl mb-2 block">🇮🇳</span>
                  <p className="font-semibold">Tamil</p>
                  <p className="text-sm text-muted-foreground">Fluent</p>
                </div>
                <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                  <span className="text-2xl mb-2 block">🇮🇳</span>
                  <p className="font-semibold">Kannada</p>
                  <p className="text-sm text-muted-foreground">Basic</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Values */}
          <Card className="glass-morphism shadow-elegant animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Core Values</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <Rocket size={18} className="text-primary" />
                  <span className="font-medium">Innovation-Driven</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <Users size={18} className="text-accent" />
                  <span className="font-medium">Collaborative Spirit</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <Brain size={18} className="text-primary" />
                  <span className="font-medium">Continuous Learning</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <Trophy size={18} className="text-accent" />
                  <span className="font-medium">Excellence-Focused</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;