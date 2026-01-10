import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, Users, Trophy, Rocket, Target, Lightbulb, Star, Globe } from 'lucide-react';

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

  const languages = [
    { flag: "🇬🇧", name: "English", level: "Fluent" },
    { flag: "🇮🇳", name: "Hindi", level: "Fluent" },
    { flag: "🇮🇳", name: "Tamil", level: "Fluent" },
    { flag: "🇮🇳", name: "Kannada", level: "Basic" },
  ];

  const values = [
    { icon: Rocket, label: "Innovation-Driven" },
    { icon: Users, label: "Collaborative Spirit" },
    { icon: Brain, label: "Continuous Learning" },
    { icon: Trophy, label: "Excellence-Focused" },
  ];

  return (
    <section id="about" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="gradient-orb w-[400px] h-[400px] bg-primary/10 top-0 right-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 text-primary">
            <Star size={14} className="mr-2" />
            About Me
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 display-font">
            Passionate About <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Motivated and curious engineering student specializing in Artificial Intelligence and Machine Learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Journey Card */}
          <div className="animate-fade-in">
            <Card className="glass-card card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 display-font">My Journey</h3>
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
                  {['Problem Solver', 'Quick Learner', 'Team Player', 'Innovation Focused'].map((trait) => (
                    <Badge key={trait} variant="secondary" className="bg-primary/10 text-primary border-0">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 stagger-children">
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass-card card-hover group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages & Values */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Languages */}
          <Card className="glass-card card-hover animate-fade-in">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Globe size={20} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold display-font">Languages I Speak</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors">
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <p className="font-medium">{lang.name}</p>
                      <p className="text-xs text-muted-foreground">{lang.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Core Values */}
          <Card className="glass-card card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Target size={20} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold display-font">Core Values</h3>
              </div>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors group">
                    <value.icon size={18} className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{value.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;