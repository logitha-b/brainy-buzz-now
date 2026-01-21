import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import EventCard from "./EventCard";

const featuredEvents = [
  {
    id: "1",
    title: "AI & Machine Learning Hackathon 2024",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    date: "Feb 15, 2024",
    time: "9:00 AM",
    location: "IIT Delhi, New Delhi",
    mode: "offline" as const,
    category: "AI & ML",
    organizer: "Tech Society IIT Delhi",
    isVerified: true,
    price: "free" as const,
    attendees: 245,
    maxAttendees: 300,
  },
  {
    id: "2",
    title: "Startup Pitch Competition - Find Your Investor",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
    date: "Feb 20, 2024",
    time: "2:00 PM",
    location: "Online Event",
    mode: "online" as const,
    category: "Startups",
    organizer: "StartupIndia",
    isVerified: true,
    price: 499,
    attendees: 180,
    maxAttendees: 200,
  },
  {
    id: "3",
    title: "UX Design Workshop - From Beginner to Pro",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    date: "Feb 22, 2024",
    time: "10:00 AM",
    location: "MICA, Ahmedabad",
    mode: "hybrid" as const,
    category: "Design",
    organizer: "Design Club MICA",
    isVerified: true,
    price: 299,
    attendees: 85,
    maxAttendees: 100,
  },
  {
    id: "4",
    title: "Campus Recruitment Preparation Bootcamp",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop",
    date: "Feb 25, 2024",
    time: "11:00 AM",
    location: "VIT Vellore, Chennai",
    mode: "offline" as const,
    category: "Career",
    organizer: "Placement Cell VIT",
    isVerified: true,
    price: "free" as const,
    attendees: 420,
    maxAttendees: 500,
  },
];

const FeaturedEvents = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Hand-picked events trending this week. Don't miss out!
            </p>
          </div>
          <Link to="/events">
            <Button variant="outline" className="group">
              View All Events
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
