import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search, Zap } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* 404 Animation */}
        <div className="mb-8 animate-scale-in">
          <div className="text-8xl md:text-9xl font-bold accent-gradient bg-clip-text text-transparent mb-4 animate-pulse">
            404
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-bounce">
              <Search size={24} className="text-primary" />
            </div>
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center animate-bounce" style={{animationDelay: '0.2s'}}>
              <Zap size={24} className="text-accent" />
            </div>
          </div>
        </div>

        <Card className="glass-morphism border-border shadow-elegant animate-fade-in">
          <CardContent className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Oops! The page you're looking for seems to have vanished into the digital void.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Attempted route: <code className="bg-secondary/50 px-2 py-1 rounded text-primary">{location.pathname}</code>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.history.back()} 
                variant="outline" 
                size="lg" 
                className="neon-border hover-glow"
              >
                <ArrowLeft size={18} className="mr-2" />
                Go Back
              </Button>
              <Button 
                onClick={() => window.location.href = "/"} 
                size="lg" 
                className="cyber-button"
              >
                <Home size={18} className="mr-2" />
                Return Home
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Decorative Elements */}
        <div className="mt-8 flex justify-center space-x-8 animate-slide-up">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold">AI</span>
            </div>
            <p className="text-xs text-muted-foreground">Powered by Intelligence</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-accent font-bold">ML</span>
            </div>
            <p className="text-xs text-muted-foreground">Machine Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
