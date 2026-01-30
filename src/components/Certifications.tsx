import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Users, Heart, Megaphone, Shield, Calendar, Star } from 'lucide-react';

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

  return (
    <section id="certifications" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-secondary/5">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="gradient-orb w-[400px] h-[400px] bg-accent/10 bottom-0 left-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 text-primary">
            <Award size={14} className="mr-2" />
            Recognition
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 display-font">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and community impact through various initiatives
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center display-font flex items-center justify-center gap-2">
            <Star size={20} className="text-primary" />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card card-hover group">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Award size={24} className="text-white" />
                    </div>
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
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center display-font flex items-center justify-center gap-2">
            <Trophy size={20} className="text-amber-500" />
            Competition Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-card card-hover text-center group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    achievement.place === "1st" 
                      ? 'bg-gradient-to-br from-amber-400 to-yellow-500' 
                      : 'bg-gradient-to-br from-slate-300 to-slate-400'
                  } shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Trophy size={28} className="text-white" />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{achievement.title}</h4>
                  <Badge variant="outline" className="border-primary/30">{achievement.semester}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Work */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center display-font flex items-center justify-center gap-2">
            <Users size={20} className="text-primary" />
            Community Involvement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityWork.map((work, index) => (
              <Card key={index} className="glass-card card-hover text-center group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500/10 to-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <work.icon size={28} className={work.color} />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{work.title}</h4>
                  <p className="text-sm text-muted-foreground">{work.description}</p>
                </CardContent>
              </Card>
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
            <Card key={index} className="glass-card text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="text-2xl font-bold gradient-text code-font">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;