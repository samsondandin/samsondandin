import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, Users, Trophy, Rocket, Target, Star, Globe, Heart, GraduationCap } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import HoverCard3D from '@/components/ui/HoverCard3D';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Aspiring AI/ML Engineer",
      description: "Deep learning, NLP, and intelligent systems"
    },
    {
      icon: Code,
      title: "Aspiring Developer",
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

  const communityImpact = {
    title: "Community Involvement",
    description: "Reached 300+ people through 3+ health drives in collaboration with Dandin Trust and Indian Cancer Society",
    initiatives: [
      { icon: "🩸", label: "Blood Donation Drives" },
      { icon: "🚭", label: "Tobacco Awareness Camps" },
      { icon: "🎗️", label: "Cancer Awareness Campaigns" }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  return (
    <section id="about" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <motion.div 
        className="gradient-orb w-[400px] h-[400px] bg-primary/10 top-0 right-0"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring' as const, stiffness: 200 }}
            >
              <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 text-primary">
                <Star size={14} className="mr-2" />
                About Me
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 display-font"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Passionate About <span className="gradient-text">Innovation</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              B.E. student in Artificial Intelligence and Machine Learning (2022-2026), driven to build intelligent solutions
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Journey Card */}
          <ScrollReveal direction="left">
            <HoverCard3D>
              <Card className="glass-card card-hover">
                <CardContent className="p-8">
                  <motion.div 
                    className="flex items-center gap-3 mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring' as const, stiffness: 400 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <GraduationCap size={18} className="text-primary-foreground" />
                    </motion.div>
                    <h3 className="text-2xl font-bold display-font">My Journey</h3>
                  </motion.div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    As a <span className="text-primary font-medium">B.E. student in Artificial Intelligence and Machine Learning (2022-2026)</span>, 
                    I have a strong foundation in programming, data science, and deep learning, backed by hands-on projects 
                    that solve real-world problems. My journey in AI/ML began with curiosity and has evolved into a passion 
                    for creating intelligent solutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I am a strong communicator, a collaborative teammate, and a regular contributor to college and community 
                    activities. I believe in the power of technology to make a positive impact on society.
                  </p>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {['Problem Solver', 'Quick Learner', 'Team Player', 'Innovation Focused'].map((trait) => (
                      <motion.div key={trait} variants={itemVariants}>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-0 hover:bg-primary/20 transition-colors">
                          {trait}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </HoverCard3D>
          </ScrollReveal>

          {/* Highlights Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div key={index} variants={itemVariants}>
                <HoverCard3D>
                  <Card className="glass-card card-hover group h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: 'spring' as const, stiffness: 400 }}
                      >
                        <highlight.icon size={24} className="text-primary" />
                      </motion.div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </HoverCard3D>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Community Impact Section */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            <HoverCard3D>
              <Card className="glass-card card-hover overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <motion.div 
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shrink-0"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Heart size={24} className="text-primary-foreground" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold display-font">{communityImpact.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{communityImpact.description}</p>
                      </div>
                    </motion.div>
                    
                    {/* Initiatives */}
                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {communityImpact.initiatives.map((initiative, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20"
                          variants={itemVariants}
                          whileHover={{ scale: 1.03, x: 5 }}
                        >
                          <span className="text-2xl shrink-0">{initiative.icon}</span>
                          <span className="text-primary font-medium text-sm">{initiative.label}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                  
                  {/* Stats Grid */}
                  <motion.div 
                    className="mt-6 grid grid-cols-3 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { value: "300+", label: "People Reached" },
                      { value: "3+", label: "Health Drives" },
                      { value: "2", label: "Partner Organizations" }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index}
                        className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-2xl font-bold gradient-text code-font">{stat.value}</div>
                        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </HoverCard3D>
          </div>
        </ScrollReveal>

        {/* Languages & Values */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Languages */}
          <ScrollReveal direction="left" delay={0.1}>
            <HoverCard3D>
              <Card className="glass-card card-hover">
                <CardContent className="p-8">
                  <motion.div 
                    className="flex items-center gap-3 mb-6"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      <Globe size={20} className="text-primary-foreground" />
                    </motion.div>
                    <h3 className="text-xl font-bold display-font">Languages I Speak</h3>
                  </motion.div>
                  <motion.div 
                    className="grid grid-cols-2 gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {languages.map((lang, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors"
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, x: 5 }}
                      >
                        <span className="text-2xl">{lang.flag}</span>
                        <div>
                          <p className="font-medium">{lang.name}</p>
                          <p className="text-xs text-muted-foreground">{lang.level}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </HoverCard3D>
          </ScrollReveal>

          {/* Core Values */}
          <ScrollReveal direction="right" delay={0.2}>
            <HoverCard3D>
              <Card className="glass-card card-hover">
                <CardContent className="p-8">
                  <motion.div 
                    className="flex items-center gap-3 mb-6"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center"
                      whileHover={{ rotate: -10 }}
                    >
                      <Target size={20} className="text-primary-foreground" />
                    </motion.div>
                    <h3 className="text-xl font-bold display-font">Core Values</h3>
                  </motion.div>
                  <motion.div 
                    className="space-y-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {values.map((value, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors group"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, x: 10 }}
                      >
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                          <value.icon size={18} className="text-primary" />
                        </motion.div>
                        <span className="font-medium">{value.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </HoverCard3D>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
