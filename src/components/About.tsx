import { motion } from 'framer-motion';
import { Brain, Code, Users, Trophy, Rocket, Globe, Heart, GraduationCap } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';
import TextScramble from '@/components/ui/TextScramble';
import GlassChip from '@/components/ui/GlassChip';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Engineer",
      description: "Deep learning, NLP, and intelligent systems"
    },
    {
      icon: Code,
      title: "Developer",
      description: "Python, SQL, and modern frameworks"
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

  return (
    <section id="about" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full spotlight-glass text-sm text-primary font-mono-label mb-6">
            <GraduationCap size={14} />
            About Me
          </span>
          <h2 className="hero-title text-5xl md:text-7xl mb-6">
            <TextScramble delay={200}>Passionate About</TextScramble>{' '}
            <span className="gradient-text">
              <TextScramble delay={400}>Innovation</TextScramble>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            B.E. student in Artificial Intelligence and Machine Learning (2022-2026), driven to build intelligent solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Journey Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-display">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a <span className="text-primary font-medium">B.E. student in Artificial Intelligence and Machine Learning (2022-2026)</span>, 
                I have a strong foundation in programming, data science, and deep learning, backed by hands-on projects 
                that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a strong communicator, a collaborative teammate, and a regular contributor to college and community 
                activities. I believe in the power of technology to make a positive impact on society.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Problem Solver', 'Quick Learner', 'Team Player', 'Innovation Focused'].map((trait) => (
                  <GlassChip key={trait} variant="primary">{trait}</GlassChip>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard className="p-6 text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <highlight.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 font-display">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community Impact Section */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SpotlightCard className="p-8">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center shrink-0">
                  <Heart size={24} className="text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">{communityImpact.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{communityImpact.description}</p>
                </div>
              </div>
              
              {/* Initiatives */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {communityImpact.initiatives.map((initiative, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 rounded-xl spotlight-glass border border-destructive/10"
                  >
                    <span className="text-2xl shrink-0">{initiative.icon}</span>
                    <span className="text-destructive font-medium text-sm">{initiative.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl spotlight-glass">
                <div className="text-2xl font-bold gradient-text code-font">300+</div>
                <p className="text-xs text-muted-foreground mt-1">People Reached</p>
              </div>
              <div className="text-center p-4 rounded-xl spotlight-glass">
                <div className="text-2xl font-bold gradient-text code-font">3+</div>
                <p className="text-xs text-muted-foreground mt-1">Health Drives</p>
              </div>
              <div className="text-center p-4 rounded-xl spotlight-glass">
                <div className="text-2xl font-bold gradient-text code-font">2</div>
                <p className="text-xs text-muted-foreground mt-1">Partner Organizations</p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Languages & Values */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Globe size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display">Languages I Speak</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl spotlight-glass">
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <p className="font-medium">{lang.name}</p>
                      <p className="text-xs text-muted-foreground">{lang.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SpotlightCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Rocket size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display">Core Values</h3>
              </div>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl spotlight-glass group hover:border-primary/20 transition-colors">
                    <value.icon size={18} className="text-primary" />
                    <span className="font-medium">{value.label}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
