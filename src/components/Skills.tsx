import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Wrench, Users, Lightbulb, Sparkles, Cpu, GitBranch, Container } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Core AI",
      skills: [
        { name: "CNNs", highlight: false },
        { name: "RAG", highlight: false },
        { name: "LLMs", highlight: false },
        { name: "Model Deployment", highlight: false },
        { name: "NLP", highlight: false },
        { name: "Transformers", highlight: false }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Wrench,
      title: "MLOps & Tools",
      skills: [
        { name: "Docker", highlight: false },
        { name: "Git", highlight: false },
        { name: "Google Colab", highlight: false },
        { name: "Jupyter Notebook", highlight: false },
        { name: "VSCode", highlight: false },
        { name: "Streamlit", highlight: false }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Frameworks",
      skills: [
        { name: "TensorFlow", highlight: false },
        { name: "Keras", highlight: false },
        { name: "HuggingFace Transformers", highlight: false },
        { name: "Scikit-learn", highlight: false },
        { name: "NumPy", highlight: false },
        { name: "Pandas", highlight: false },
        { name: "Matplotlib", highlight: false }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", highlight: false },
        { name: "SQL", highlight: false },
        { name: "Java", highlight: true, tag: "Core Language" },
        { name: "C", highlight: false }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "ML/DL Concepts",
      skills: [
        { name: "Linear/Logistic Regression", highlight: false },
        { name: "KNN", highlight: false },
        { name: "K-Means", highlight: false },
        { name: "Object Detection", highlight: false },
        { name: "NAS", highlight: false }
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        { name: "Leadership", highlight: false },
        { name: "Communication", highlight: false },
        { name: "Teamwork", highlight: false },
        { name: "Critical Thinking", highlight: false }
      ],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const stats = [
    { value: "4+", label: "Core Languages" },
    { value: "15+", label: "Technologies & Tools" },
    { value: "10+", label: "AI/ML Concepts" },
  ];

  return (
    <section id="skills" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-secondary/5">
      {/* Background */}
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="gradient-orb w-[500px] h-[500px] bg-accent/10 -bottom-32 -left-32" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 text-primary">
            <Sparkles size={14} className="mr-2" />
            Technical Expertise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 display-font">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions and solving complex problems
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card card-hover group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={22} className="text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className={`skill-badge relative ${skill.highlight ? 'ring-2 ring-primary/50 bg-primary/10' : ''}`}
                    >
                      {skill.name}
                      {skill.highlight && skill.tag && (
                        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[9px] px-1.5 py-0.5 rounded-full font-medium">
                          {skill.tag}
                        </span>
                      )}
                    </span>
                  ))}
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
                <div className="text-4xl font-bold gradient-text mb-2 code-font">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
