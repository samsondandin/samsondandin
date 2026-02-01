import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Wrench, Users, Sparkles, Cpu } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlowingChip from '@/components/ui/GlowingChip';
import HoverCard3D from '@/components/ui/HoverCard3D';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const chipContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        damping: 15,
        stiffness: 200,
      },
    },
  };

  return (
    <section id="skills" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-secondary/5">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <motion.div 
        className="gradient-orb w-[500px] h-[500px] bg-accent/10 -bottom-32 -left-32"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring' as const, stiffness: 200 }}
            >
              <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 text-primary">
                <Sparkles size={14} className="mr-2" />
                Technical Expertise
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-6xl font-extrabold mb-6 display-font"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Skills & <span className="gradient-text">Technologies</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              A comprehensive toolkit for building intelligent solutions
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Bento Grid Skills */}
        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className={getSizeClass(category.size)}
              variants={itemVariants}
            >
              <HoverCard3D>
                <Card className="glass-card card-hover group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ type: 'spring' as const, stiffness: 400 }}
                      >
                        <category.icon size={22} className="text-white" />
                      </motion.div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={chipContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div key={skillIndex} variants={chipVariants}>
                          <GlowingChip 
                            highlight={skill.highlight}
                            tag={skill.highlight ? skill.tag : undefined}
                          >
                            {skill.name}
                          </GlowingChip>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </HoverCard3D>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <HoverCard3D>
                <Card className="glass-card card-hover text-center">
                  <CardContent className="p-8">
                    <motion.div 
                      className="text-4xl font-bold gradient-text mb-2 code-font"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: 'spring' as const, stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </HoverCard3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
