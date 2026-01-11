import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Wrench, Users, Sparkles, Cpu } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlowingChip from '@/components/ui/GlowingChip';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Core AI",
      size: "lg",
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
      size: "md",
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
      size: "md",
      skills: [
        { name: "TensorFlow", highlight: false },
        { name: "Keras", highlight: false },
        { name: "HuggingFace", highlight: false },
        { name: "Scikit-learn", highlight: false },
        { name: "NumPy", highlight: false },
        { name: "Pandas", highlight: false }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Code,
      title: "Programming Languages",
      size: "sm",
      skills: [
        { name: "Python", highlight: false },
        { name: "SQL", highlight: false },
        { name: "Java", highlight: true, tag: "Core" },
        { name: "C", highlight: false }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "ML/DL Concepts",
      size: "sm",
      skills: [
        { name: "Regression", highlight: false },
        { name: "KNN", highlight: false },
        { name: "K-Means", highlight: false },
        { name: "Object Detection", highlight: false }
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Soft Skills",
      size: "sm",
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

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'lg': return 'bento-lg';
      case 'md': return 'bento-md';
      default: return 'bento-sm';
    }
  };

  return (
    <section id="skills" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-secondary/5">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="gradient-orb w-[500px] h-[500px] bg-accent/10 -bottom-32 -left-32" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 text-primary">
              <Sparkles size={14} className="mr-2" />
              Technical Expertise
            </Badge>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 display-font">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent solutions
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid Skills */}
        <div className="bento-grid">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 0.1} className={getSizeClass(category.size)}>
              <Card className="glass-card card-hover group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <category.icon size={22} className="text-white" />
                    </motion.div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <GlowingChip 
                        key={skillIndex} 
                        highlight={skill.highlight}
                        tag={skill.highlight ? skill.tag : undefined}
                      >
                        {skill.name}
                      </GlowingChip>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="glass-card card-hover text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold gradient-text mb-2 code-font">{stat.value}</div>
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

export default Skills;
