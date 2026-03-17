import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar, Eye, Cpu, Link2, ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import HoverCard3D from '@/components/ui/HoverCard3D';

const experiences = [
  {
    id: 'karpine',
    company: 'Karpine Technologies',
    role: 'AI/ML Intern',
    location: 'Bangalore, India',
    period: 'Mar 2026 – Present',
    current: true,
    description:
      'Engineering the next generation of Digital Product Passports (DPP). Currently specializing in .NET backend architecture and its integration with decentralized digital twin systems.',
    highlights: [
      'Architecting robust .NET backend services for scalable Digital Product Passport (DPP) platforms',
      'Integrating decentralized digital twin systems with enterprise backend infrastructure',
      'Building APIs and data pipelines that power end-to-end product traceability and compliance workflows',
    ],
    technologies: ['.NET', 'Digital Product Passports', 'Digital Twins', 'C#', 'Backend Architecture', 'REST APIs'],
    icon: Cpu,
    color: 'from-primary to-accent',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, damping: 22, stiffness: 120 },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <motion.div
        className="gradient-orb w-[350px] h-[350px] bg-accent/10 top-20 left-0"
        animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring' as const, stiffness: 200 }}
            >
              <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 text-primary">
                <Briefcase size={14} className="mr-2" />
                Experience
              </Badge>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6 display-font"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Industry <span className="gradient-text">Experience</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Transitioning from academic AI research to real-world, industry-level development
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-accent/40 to-transparent"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />

          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.15}>
              <div className="relative md:grid md:grid-cols-2 md:gap-12 mb-16 last:mb-0">
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_16px_hsl(var(--primary)/0.5)] z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                />

                {/* Pulse ring for current role */}
                {exp.current && (
                  <motion.div
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary/50 z-[9]"
                    animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}

                {/* Card — on the right for even, left for odd (first card on right) */}
                <div className={`${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'} pl-16 md:pl-0`}>
                  <HoverCard3D>
                    <Card className="glass-card card-hover overflow-hidden">
                      {/* Status ribbon */}
                      {exp.current && (
                        <div className="absolute top-4 right-4 z-10">
                          <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Badge className="bg-primary/20 text-primary border border-primary/30 gap-1.5">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                              </span>
                              Current
                            </Badge>
                          </motion.div>
                        </div>
                      )}

                      <CardContent className="p-8">
                        {/* Header */}
                        <motion.div className="flex items-start gap-4 mb-5" whileHover={{ x: 3 }}>
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shrink-0 shadow-lg`}
                            whileHover={{ rotate: 8, scale: 1.1 }}
                          >
                            <exp.icon size={22} className="text-primary-foreground" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold display-font">{exp.role}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                        </motion.div>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-4 mb-5 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-primary/70" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-primary/70" />
                            {exp.period}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

                        {/* Highlights */}
                        <motion.div
                          className="space-y-3 mb-6"
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {exp.highlights.map((h, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10"
                              variants={itemVariants}
                              whileHover={{ x: 5 }}
                            >
                              <ArrowRight size={16} className="text-primary mt-0.5 shrink-0" />
                              <span className="text-sm text-muted-foreground">{h}</span>
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Tech stack */}
                        <motion.div
                          className="flex flex-wrap gap-2"
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {exp.technologies.map((tech) => (
                            <motion.div key={tech} variants={itemVariants}>
                              <Badge variant="secondary" className="bg-primary/10 text-primary border-0 hover:bg-primary/20 transition-colors text-xs">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </HoverCard3D>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Milestone keycap */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 flex justify-center">
            <HoverCard3D>
              <motion.div
                className="relative group cursor-default"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Keycap shape */}
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 shadow-[0_6px_0_hsl(var(--primary)/0.25),0_8px_24px_hsl(var(--primary)/0.15)] flex flex-col items-center justify-center gap-1.5 group-hover:shadow-[0_4px_0_hsl(var(--primary)/0.3),0_6px_20px_hsl(var(--primary)/0.25)] transition-shadow">
                  <Sparkles size={22} className="text-primary" />
                  <span className="text-xs font-bold text-primary code-font tracking-wider">INTERN</span>
                  <span className="text-[10px] text-muted-foreground">2026</span>
                </div>
                {/* Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl -z-10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </HoverCard3D>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;
