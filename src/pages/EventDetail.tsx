import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  BadgeCheck,
  Share2,
  Heart,
  CalendarPlus,
  ExternalLink,
  ChevronRight,
  Star,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock event data
const eventData = {
  id: "1",
  title: "AI & Machine Learning Hackathon 2024",
  description: `Join us for the most exciting AI & ML hackathon of the year! This 48-hour event brings together the brightest minds in artificial intelligence and machine learning to solve real-world problems.

Whether you're a beginner or an expert, this hackathon offers something for everyone. Work alongside industry mentors, compete for amazing prizes, and showcase your skills to top recruiters.`,
  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
  date: "February 15-17, 2024",
  time: "9:00 AM - 9:00 PM",
  location: "IIT Delhi Campus, Hauz Khas, New Delhi",
  mode: "offline",
  category: "AI & ML",
  organizer: {
    name: "Tech Society IIT Delhi",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop",
    isVerified: true,
    eventsHosted: 45,
    followers: 12500,
  },
  price: "free",
  attendees: 245,
  maxAttendees: 300,
  speakers: [
    {
      name: "Dr. Priya Mehta",
      role: "AI Research Lead, Google",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Arjun Kapoor",
      role: "CTO, TechStartup",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Sneha Verma",
      role: "ML Engineer, Microsoft",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ],
  agenda: [
    { time: "9:00 AM", title: "Registration & Breakfast", day: "Day 1" },
    { time: "10:00 AM", title: "Opening Ceremony", day: "Day 1" },
    { time: "11:00 AM", title: "Team Formation & Problem Statements", day: "Day 1" },
    { time: "12:00 PM", title: "Hacking Begins!", day: "Day 1" },
    { time: "6:00 PM", title: "Mentor Sessions", day: "Day 1" },
    { time: "9:00 AM", title: "Day 2 Check-in", day: "Day 2" },
    { time: "2:00 PM", title: "Submission Deadline", day: "Day 2" },
    { time: "4:00 PM", title: "Final Presentations", day: "Day 2" },
    { time: "6:00 PM", title: "Awards Ceremony", day: "Day 2" },
  ],
  reviews: [
    {
      user: "Rahul S.",
      rating: 5,
      comment: "Amazing experience! Great mentors and well-organized event.",
      date: "Last event",
    },
    {
      user: "Priya M.",
      rating: 5,
      comment: "Best hackathon I've attended. Learned so much!",
      date: "Last event",
    },
  ],
  tags: ["Machine Learning", "Artificial Intelligence", "Hackathon", "Networking", "Prizes"],
};

const EventDetail = () => {
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false);
  const spotsLeft = eventData.maxAttendees - eventData.attendees;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={eventData.image}
            alt={eventData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Event Header */}
              <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow mb-6">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Link to="/events" className="hover:text-primary">Events</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span>{eventData.category}</span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="gradient-bg text-primary-foreground">{eventData.category}</Badge>
                  {eventData.mode === "offline" && (
                    <Badge variant="secondary">In-Person</Badge>
                  )}
                  {eventData.price === "free" && (
                    <Badge className="bg-accent text-accent-foreground">FREE</Badge>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-bold mb-4">{eventData.title}</h1>

                {/* Organizer */}
                <div className="flex items-center gap-3 mb-6">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={eventData.organizer.logo} />
                    <AvatarFallback>TS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{eventData.organizer.name}</span>
                      {eventData.organizer.isVerified && (
                        <BadgeCheck className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {eventData.organizer.eventsHosted} events hosted • {eventData.organizer.followers.toLocaleString()} followers
                    </p>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">{eventData.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-medium">{eventData.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{eventData.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Attendees</p>
                      <p className="font-medium">{eventData.attendees}/{eventData.maxAttendees} registered</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="about" className="bg-card rounded-2xl p-6 md:p-8 card-shadow">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="speakers">Speakers</TabsTrigger>
                  <TabsTrigger value="agenda">Agenda</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">About This Event</h3>
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {eventData.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {eventData.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="speakers">
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {eventData.speakers.map((speaker) => (
                      <div key={speaker.name} className="text-center">
                        <Avatar className="h-20 w-20 mx-auto mb-3">
                          <AvatarImage src={speaker.image} />
                          <AvatarFallback>{speaker.name[0]}</AvatarFallback>
                        </Avatar>
                        <h4 className="font-semibold">{speaker.name}</h4>
                        <p className="text-sm text-muted-foreground">{speaker.role}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="agenda">
                  <div className="space-y-4">
                    {eventData.agenda.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="text-sm text-muted-foreground w-20 flex-shrink-0">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-primary">{item.day}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <div className="space-y-6">
                    {eventData.reviews.map((review, index) => (
                      <div key={index} className="border-b border-border pb-6 last:border-0">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="font-medium mb-1">{review.user}</p>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Registration Card */}
                <div className="bg-card rounded-2xl p-6 card-shadow mb-6">
                  {/* Price */}
                  <div className="text-center mb-6">
                    {eventData.price === "free" ? (
                      <div className="text-3xl font-bold text-accent">FREE</div>
                    ) : (
                      <div className="text-3xl font-bold">₹{eventData.price}</div>
                    )}
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>

                  {/* Spots Left */}
                  {spotsLeft <= 50 && (
                    <div className="bg-destructive/10 text-destructive rounded-lg p-3 text-center mb-4">
                      <p className="text-sm font-medium">🔥 Only {spotsLeft} spots left!</p>
                    </div>
                  )}

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Registration</span>
                      <span className="font-medium">{Math.round((eventData.attendees / eventData.maxAttendees) * 100)}% full</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-bg rounded-full transition-all"
                        style={{ width: `${(eventData.attendees / eventData.maxAttendees) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Register Button */}
                  <Button variant="hero" size="lg" className="w-full mb-4">
                    Register Now
                  </Button>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSaved(!isSaved)}
                      className={isSaved ? "text-destructive border-destructive" : ""}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <CalendarPlus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Location Map Placeholder */}
                <div className="bg-card rounded-2xl p-6 card-shadow">
                  <h3 className="font-semibold mb-4">Event Location</h3>
                  <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">{eventData.location}</p>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default EventDetail;
