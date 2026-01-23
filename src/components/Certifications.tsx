import { motion } from 'framer-motion';
import { Award, Trophy, Users, Heart, Megaphone, Shield, Calendar } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';
import TextScramble from '@/components/ui/TextScramble';
import GlassChip from '@/components/ui/GlassChip';

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      category: "AI Foundations"
    },
    {
      title: "Cloud Technologies",
      issuer: "Infosys Springboard",
      year: "2025",
      category: "Cloud Computing"
    },
    {
      title: "Explore Machine Learning using Python",
      issuer: "Infosys Springboard",
      year: "2024",
      category: "Machine Learning"
    },
    {
      title: "Programming using Java",
      issuer: "Infosys Springboard",
      year: "2024",
      category: "Programming"
    }
  ];

  const achievements = [
    { title: "1st Place - Street Play", semester: "Semester 3", place: "1st" },
    { title: "2nd Place - Street Play", semester: "Semester 2", place: "2nd" },
    { title: "2nd Place - Street Play", semester: "Semester 5", place: "2nd" }
  ];

  const communityWork = [
    { title: "Blood Donation Drives", description: "Organized multiple campaigns", icon: Heart },
    { title: "Tobacco Awareness", description: "Led awareness campaigns", icon: Megaphone },
    { title: "Cancer Awareness", description: "Promoted early detection", icon: Shield }
  ];

  return (
    <section id="certifications" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      
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
            <Award size={14} />
            Recognition
          </span>
          <h2 className="hero-title text-5xl md:text-7xl mb-6">
            <TextScramble delay={200}>Certifications &</TextScramble>{' '}
            <span className="gradient-text">
              <TextScramble delay={400}>Achievements</TextScramble>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and community impact through various initiatives
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center font-display flex items-center justify-center gap-2">
            <Award size={20} className="text-primary" />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Award size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-2 font-display">{cert.title}</h4>
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <GlassChip variant="primary">{cert.category}</GlassChip>
                        <span className="text-sm text-muted-foreground code-font flex items-center gap-1">
                          <Calendar size={12} />
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Issued by <span className="text-foreground font-medium">{cert.issuer}</span></p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center font-display flex items-center justify-center gap-2">
            <Trophy size={20} className="text-accent" />
            Competition Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard className="p-8 text-center" spotlightColor={achievement.place === "1st" ? "rgba(251, 191, 36, 0.1)" : "rgba(148, 163, 184, 0.1)"}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    achievement.place === "1st" 
                      ? 'bg-accent/10 border border-accent/20' 
                      : 'bg-muted/20 border border-muted/30'
                  }`}>
                    <Trophy size={28} className={achievement.place === "1st" ? "text-accent" : "text-muted-foreground"} />
                  </div>
                  <h4 className="font-semibold mb-2 font-display">{achievement.title}</h4>
                  <GlassChip>{achievement.semester}</GlassChip>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community Work */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center font-display flex items-center justify-center gap-2">
            <Users size={20} className="text-primary" />
            Community Involvement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityWork.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                    <work.icon size={28} className="text-destructive" />
                  </div>
                  <h4 className="font-semibold mb-2 font-display">{work.title}</h4>
                  <p className="text-sm text-muted-foreground">{work.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "4", label: "Certifications" },
            { value: "3", label: "Competition Wins" },
            { value: "3", label: "Community Initiatives" },
            { value: "2024-25", label: "Active Years" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-6 text-center">
                <div className="text-2xl font-bold gradient-text code-font">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
