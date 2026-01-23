import { motion } from 'framer-motion';
import { Code, Database, Brain, Wrench, Users, Sparkles, Cpu } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';
import TextScramble from '@/components/ui/TextScramble';
import GlassChip from '@/components/ui/GlassChip';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Core AI",
      size: "lg",
      skills: ["CNNs", "RAG", "LLMs", "Model Deployment", "NLP", "Transformers"]
    },
    {
      icon: Wrench,
      title: "MLOps & Tools",
      size: "md",
      skills: ["Docker", "Git", "Google Colab", "Jupyter", "VSCode", "Streamlit"]
    },
    {
      icon: Database,
      title: "Frameworks",
      size: "md",
      skills: ["TensorFlow", "Keras", "HuggingFace", "Scikit-learn", "NumPy", "Pandas"]
    },
    {
      icon: Code,
      title: "Languages",
      size: "sm",
      skills: ["Python", "SQL", "C"]
    },
    {
      icon: Cpu,
      title: "ML Concepts",
      size: "sm",
      skills: ["Regression", "KNN", "K-Means", "Object Detection"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      size: "sm",
      skills: ["Leadership", "Communication", "Teamwork", "Critical Thinking"]
    }
  ];

  const stats = [
    { value: "3+", label: "Core Languages" },
    { value: "15+", label: "Technologies" },
    { value: "10+", label: "AI Concepts" },
  ];

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'lg': return 'col-span-12 md:col-span-8';
      case 'md': return 'col-span-12 md:col-span-6';
      default: return 'col-span-12 md:col-span-4';
    }
  };

  return (
    <section id="skills" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full spotlight-glass text-sm text-primary font-mono-label mb-6">
            <Sparkles size={14} />
            Technical Expertise
          </span>
          <h2 className="hero-title text-5xl md:text-7xl mb-6">
            <TextScramble delay={200}>Skills &</TextScramble>{' '}
            <span className="gradient-text">
              <TextScramble delay={400}>Technologies</TextScramble>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions
          </p>
        </motion.div>

        {/* Bento Grid Skills */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={getSizeClass(category.size)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <category.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold font-display">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <GlassChip>{skill}</GlassChip>
                    </motion.div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2 code-font">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
