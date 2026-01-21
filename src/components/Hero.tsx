import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Trusted by 10,000+ students & professionals</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            Discover, Promote &{" "}
            <span className="gradient-text">Attend the Best</span>{" "}
            Educational Events
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Connect with workshops, hackathons, seminars, and networking events 
            from top colleges and organizations. Your next opportunity is one click away.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/events">
              <Button variant="hero" size="xl" className="group">
                Explore Events
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/host">
              <Button variant="heroOutline" size="xl">
                Host an Event
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-foreground mb-1">
                <Calendar className="w-6 h-6 text-primary" />
                <span>500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Events Monthly</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-foreground mb-1">
                <Users className="w-6 h-6 text-accent" />
                <span>50K+</span>
              </div>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-foreground mb-1">
                <Sparkles className="w-6 h-6 text-primary" />
                <span>200+</span>
              </div>
              <p className="text-sm text-muted-foreground">Partner Colleges</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
