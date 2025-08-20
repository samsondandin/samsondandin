import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Users, Heart, Megaphone, Shield } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      category: "AI Foundations",
      icon: Award,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud Technologies",
      issuer: "Infosys Springboard",
      year: "2025",
      category: "Cloud Computing",
      icon: Award,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Explore Machine Learning using Python",
      issuer: "Infosys Springboard",
      year: "2024",
      category: "Machine Learning",
      icon: Award,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Programming using Java",
      issuer: "Infosys Springboard",
      year: "2024",
      category: "Programming",
      icon: Award,
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    {
      title: "1st Place - Street Play Competition",
      semester: "Semester 3",
      icon: Trophy,
      color: "text-yellow-500"
    },
    {
      title: "2nd Place - Street Play Competition",
      semester: "Semester 2",
      icon: Trophy,
      color: "text-gray-400"
    },
    {
      title: "2nd Place - Street Play Competition",
      semester: "Semester 5",
      icon: Trophy,
      color: "text-gray-400"
    }
  ];

  const communityWork = [
    {
      title: "Blood Donation Drives",
      description: "Organized multiple blood donation campaigns",
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "Tobacco Awareness Camps",
      description: "Led awareness campaigns about tobacco hazards",
      icon: Megaphone,
      color: "text-orange-500"
    },
    {
      title: "Cancer Awareness Campaigns",
      description: "Promoted cancer awareness and early detection",
      icon: Shield,
      color: "text-pink-500"
    }
  ];

  return (
    <section id="certifications" className="section-spacing px-4 sm:px-6 lg:px-8 bg-secondary/5 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 pattern-dots opacity-15"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 neon-border">
            <Award size={14} className="mr-2" />
            Recognition
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Certifications & <span className="accent-gradient bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Continuous learning and community impact through various initiatives
          </p>
        </div>

        {/* Enhanced Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-gradient border-border hover-glow transition-bounce animate-fade-in group relative overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-bounce`}>
                    <cert.icon size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-smooth">{cert.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">{cert.category}</Badge>
                    <span className="text-sm text-muted-foreground font-mono">{cert.year}</span>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                </CardContent>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Competition Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-gradient border-border hover-glow transition-bounce text-center animate-scale-in group relative overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-bounce">
                    <achievement.icon size={36} className={`${achievement.color} drop-shadow-lg`} />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-smooth">{achievement.title}</h4>
                  <Badge variant="outline" className="bg-primary/5 border-primary/20">{achievement.semester}</Badge>
                </CardContent>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-smooth origin-left"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Community Involvement */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Community Involvement</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityWork.map((work, index) => (
              <Card key={index} className="card-gradient border-border hover-glow transition-bounce animate-fade-in group relative overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-bounce">
                    <work.icon size={32} className={`${work.color} drop-shadow-lg`} />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-smooth">{work.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{work.description}</p>
                </CardContent>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="glass-morphism shadow-elegant text-center animate-scale-in group">
            <CardContent className="p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <div className="relative z-10">
                <div className="text-3xl font-bold text-primary mb-1 font-mono">4</div>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-morphism shadow-elegant text-center animate-scale-in group" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <div className="relative z-10">
                <div className="text-3xl font-bold text-accent mb-1 font-mono">3</div>
                <p className="text-sm text-muted-foreground">Competition Wins</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-morphism shadow-elegant text-center animate-scale-in group" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <div className="relative z-10">
                <div className="text-3xl font-bold text-primary mb-1 font-mono">3</div>
                <p className="text-sm text-muted-foreground">Community Initiatives</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-morphism shadow-elegant text-center animate-scale-in group" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <div className="relative z-10">
                <div className="text-2xl font-bold text-accent mb-1 font-mono">2024-25</div>
                <p className="text-sm text-muted-foreground">Active Years</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;