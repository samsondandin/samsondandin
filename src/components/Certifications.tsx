import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Users, Heart, Megaphone, Shield, Calendar, Star } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import HoverCard3D from '@/components/ui/HoverCard3D';

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      category: "AI Foundations",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud Technologies",
      issuer: "Infosys Springboard",
      year: "2025",
      category: "Cloud Computing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Explore Machine Learning using Python",
      issuer: "Infosys Springboard",
      year: "2024",
      category: "Machine Learning",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Programming using Java",
      issuer: "Infosys Springboard",
      year: "2024",
      category: "Programming",
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    { title: "1st Place - Street Play", semester: "Semester 3", place: "1st" },
    { title: "2nd Place - Street Play", semester: "Semester 2", place: "2nd" },
    { title: "2nd Place - Street Play", semester: "Semester 5", place: "2nd" }
  ];

  const communityWork = [
    { title: "Blood Donation Drives", description: "Organized multiple campaigns", icon: Heart, color: "text-red-500" },
    { title: "Tobacco Awareness", description: "Led awareness campaigns", icon: Megaphone, color: "text-orange-500" },
    { title: "Cancer Awareness", description: "Promoted early detection", icon: Shield, color: "text-pink-500" }
  ];

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
    <section id="certifications" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-secondary/5">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <motion.div 
        className="gradient-orb w-[400px] h-[400px] bg-accent/10 bottom-0 left-0"
        animate={{ x: [-20, 20, -20], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
                <Award size={14} className="mr-2" />
                Recognition
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 display-font"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Certifications & <span className="gradient-text">Achievements</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Continuous learning and community impact through various initiatives
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center display-font flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Star size={20} className="text-primary" />
            Professional Certifications
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <HoverCard3D>
                  <Card className="glass-card card-hover group h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.15, rotate: 10 }}
                          transition={{ type: 'spring' as const, stiffness: 400 }}
                        >
                          <Award size={24} className="text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">{cert.title}</CardTitle>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="secondary" className="text-xs">{cert.category}</Badge>
                            <span className="text-sm text-muted-foreground code-font flex items-center gap-1">
                              <Calendar size={12} />
                              {cert.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Issued by <span className="text-foreground font-medium">{cert.issuer}</span></p>
                    </CardContent>
                  </Card>
                </HoverCard3D>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center display-font flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Trophy size={20} className="text-amber-500" />
            Competition Achievements
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <HoverCard3D>
                  <Card className="glass-card card-hover text-center group">
                    <CardContent className="p-8">
                      <motion.div 
                        className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                          achievement.place === "1st" 
                            ? 'bg-gradient-to-br from-amber-400 to-yellow-500' 
                            : 'bg-gradient-to-br from-slate-300 to-slate-400'
                        } shadow-lg`}
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Trophy size={28} className="text-white" />
                      </motion.div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{achievement.title}</h4>
                      <Badge variant="outline" className="border-primary/30">{achievement.semester}</Badge>
                    </CardContent>
                  </Card>
                </HoverCard3D>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Community Work */}
        <div>
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center display-font flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users size={20} className="text-primary" />
            Community Involvement
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {communityWork.map((work, index) => (
              <motion.div key={index} variants={itemVariants}>
                <HoverCard3D>
                  <Card className="glass-card card-hover text-center group">
                    <CardContent className="p-8">
                      <motion.div 
                        className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500/10 to-pink-500/10 flex items-center justify-center"
                        whileHover={{ scale: 1.15 }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <work.icon size={28} className={work.color} />
                      </motion.div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{work.title}</h4>
                      <p className="text-sm text-muted-foreground">{work.description}</p>
                    </CardContent>
                  </Card>
                </HoverCard3D>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { value: "4", label: "Certifications" },
            { value: "3", label: "Competition Wins" },
            { value: "3", label: "Community Initiatives" },
            { value: "2024-25", label: "Active Years" },
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass-card text-center group">
                <CardContent className="p-6">
                  <motion.div 
                    className="text-2xl font-bold gradient-text code-font"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
