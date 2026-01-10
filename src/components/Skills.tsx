import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Wrench, Users, Lightbulb, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "SQL", "Java (Basic)", "C"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Wrench,
      title: "Tools & IDEs",
      skills: ["VSCode", "Jupyter Notebook", "Streamlit"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Libraries & Frameworks",
      skills: ["TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "ML/DL Concepts",
      skills: ["Linear/Logistic Regression", "KNN", "K-Means", "CNNs", "Object Detection", "NAS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "AI/NLP Technologies",
      skills: ["NLP", "Transformers", "LLMs", "HuggingFace"],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Teamwork", "Critical Thinking"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const stats = [
    { value: "5+", label: "Programming Languages" },
    { value: "10+", label: "Technologies & Tools" },
    { value: "15+", label: "ML/AI Concepts" },
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
                    <span key={skillIndex} className="skill-badge">
                      {skill}
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