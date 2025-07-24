import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Users, Heart, Megaphone, Shield } from 'lucide-react';

const Certifications = () => {
  const certifications = [
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
    <section id="certifications" className="section-spacing px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Recognition</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Certifications & <span className="accent-gradient bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and community impact through various initiatives
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-gradient border-border hover-glow transition-smooth animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <cert.icon size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">{cert.category}</Badge>
                    <span className="text-sm text-muted-foreground">{cert.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Competition Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-gradient border-border hover-glow transition-smooth text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <achievement.icon size={32} className={`mx-auto mb-4 ${achievement.color}`} />
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <Badge variant="outline">{achievement.semester}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Involvement */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Community Involvement</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityWork.map((work, index) => (
              <Card key={index} className="card-gradient border-border hover-glow transition-smooth animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <work.icon size={32} className={`mx-auto mb-4 ${work.color}`} />
                  <h4 className="font-semibold mb-2">{work.title}</h4>
                  <p className="text-sm text-muted-foreground">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-gradient border-border text-center animate-scale-in">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-1">3</div>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-accent mb-1">3</div>
              <p className="text-sm text-muted-foreground">Competition Wins</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-1">3</div>
              <p className="text-sm text-muted-foreground">Community Initiatives</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-accent mb-1">2024-25</div>
              <p className="text-sm text-muted-foreground">Active Years</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;