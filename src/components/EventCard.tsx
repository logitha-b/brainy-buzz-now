import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, BadgeCheck, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  mode: "online" | "offline" | "hybrid";
  category: string;
  organizer: string;
  isVerified?: boolean;
  price: number | "free";
  attendees: number;
  maxAttendees: number;
  isCompleted?: boolean;
}

const EventCard = ({
  id,
  title,
  image,
  date,
  time,
  location,
  mode,
  category,
  organizer,
  isVerified = false,
  price,
  attendees,
  maxAttendees,
  isCompleted = false,
}: EventCardProps) => {
  const spotsLeft = maxAttendees - attendees;
  const isAlmostFull = spotsLeft <= 10;

  return (
    <Link to={`/event/${id}`} className="group block">
      <div className="bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
              {category}
            </Badge>
            {mode === "online" && (
              <Badge className="bg-accent text-accent-foreground">Online</Badge>
            )}
            {mode === "hybrid" && (
              <Badge className="gradient-bg text-primary-foreground">Hybrid</Badge>
            )}
          </div>

          {/* Price */}
          <div className="absolute top-3 right-3">
            <Badge 
              className={price === "free" 
                ? "bg-accent text-accent-foreground font-bold" 
                : "bg-primary text-primary-foreground font-bold"
              }
            >
              {price === "free" ? "FREE" : `₹${price}`}
            </Badge>
          </div>

          {/* Almost Full Warning */}
          {isAlmostFull && spotsLeft > 0 && (
            <div className="absolute bottom-3 left-3">
              <Badge variant="destructive" className="animate-pulse">
                Only {spotsLeft} spots left!
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Organizer */}
          <div className="flex items-center gap-1 mb-3">
            <span className="text-sm text-muted-foreground">by {organizer}</span>
            {isVerified && (
              <BadgeCheck className="w-4 h-4 text-primary" />
            )}
          </div>

          {/* Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{date}</span>
              <Clock className="w-4 h-4 text-primary ml-2" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="line-clamp-1">{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-primary" />
              <span>{attendees}/{maxAttendees} registered</span>
            </div>
          </div>

          {/* CTA */}
          <Button variant={isCompleted ? "outline" : "hero"} className="w-full">
            {isCompleted ? "View Details" : "Register Now"}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
