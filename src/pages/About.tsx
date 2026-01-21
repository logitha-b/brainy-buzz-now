import { Link } from "react-router-dom";
import { 
  Target, 
  Users, 
  Sparkles, 
  Award, 
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Globe,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "50,000+", label: "Active Users" },
  { value: "500+", label: "Events Monthly" },
  { value: "200+", label: "Partner Colleges" },
  { value: "95%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To democratize access to educational opportunities by connecting students with the right events, workshops, and networking opportunities that can shape their careers."
  },
  {
    icon: Sparkles,
    title: "Our Vision",
    description: "To become India's largest educational event platform where every student can discover opportunities that matter and every organizer can reach their target audience."
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "We believe in accessibility, trust, and community. Every event on our platform is vetted to ensure quality, and we prioritize student success above all."
  },
];

const team = [
  {
    name: "Priya Sharma",
    role: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    bio: "Former Product Lead at Google, IIT Delhi alumna"
  },
  {
    name: "Rahul Verma",
    role: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    bio: "Ex-Amazon engineer, BITS Pilani alumnus"
  },
  {
    name: "Ananya Patel",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    bio: "MBA from IIM Ahmedabad, 8+ years in EdTech"
  },
  {
    name: "Arjun Kapoor",
    role: "Head of Growth",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    bio: "Previously at Unacademy, NIT Trichy alumnus"
  },
];

const milestones = [
  { year: "2021", title: "Founded", description: "Started with 5 colleges and a dream" },
  { year: "2022", title: "10K Users", description: "Reached our first 10,000 registered users" },
  { year: "2023", title: "Series A", description: "Raised $5M to expand across India" },
  { year: "2024", title: "50K+ Users", description: "Crossed 50,000 active users milestone" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                <span>About AllCollegeEvent</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Empowering Students to{" "}
                <span className="gradient-text">Discover Opportunities</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We're on a mission to connect every student in India with educational events 
                that can transform their careers. From hackathons to workshops, we make 
                discovery effortless.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/events">
                  <Button variant="hero" size="lg" className="group">
                    Explore Events
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/host">
                  <Button variant="outline" size="lg">
                    Host an Event
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="bg-card rounded-2xl p-8 card-shadow">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                AllCollegeEvent was born out of frustration. As students, we missed countless 
                opportunities simply because we didn't know about them. We built this platform 
                to ensure no student ever misses out on an opportunity that could change their life.
              </p>
            </div>

            {/* Timeline */}
            <div className="max-w-2xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h4 className="font-bold text-lg">{milestone.title}</h4>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Meet the <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're a passionate team of educators, engineers, and entrepreneurs 
                committed to transforming how students discover opportunities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="relative mb-4 inline-block">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 rounded-full gradient-bg opacity-0 group-hover:opacity-20 transition-opacity" />
                  </div>
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-primary text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 card-shadow text-center">
              <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Join Our Growing Community
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Whether you're a student looking to learn, an organizer wanting to host, 
                or a college looking to partner—we'd love to have you on board.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/auth?mode=signup">
                  <Button variant="hero" size="lg">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
