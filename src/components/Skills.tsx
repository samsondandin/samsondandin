import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Wrench, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "SQL", "Java (Basic)", "C"]
    },
    {
      icon: Wrench,
      title: "Tools & IDEs",
      skills: ["VSCode", "Jupyter Notebook", "Streamlit"]
    },
    {
      icon: Database,
      title: "Libraries & Frameworks",
      skills: ["TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      icon: Brain,
      title: "ML/DL Concepts",
      skills: ["Linear/Logistic Regression", "KNN", "K-Means", "CNNs", "Object Detection", "NAS"]
    },
    {
      icon: Lightbulb,
      title: "AI/NLP Technologies",
      skills: ["NLP", "Transformers", "LLMs", "HuggingFace"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Teamwork", "Critical Thinking"]
    }
  ];

  return (
    <section id="skills" className="section-spacing px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Technical Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Skills & <span className="accent-gradient bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent solutions and solving complex problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient border-border hover-glow transition-smooth animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-gradient border-border text-center animate-scale-in">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Programming Languages</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <p className="text-muted-foreground">Technologies & Tools</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">ML/AI Concepts</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;