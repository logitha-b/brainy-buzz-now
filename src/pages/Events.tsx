import { useState } from "react";
import { Search, Filter, SlidersHorizontal, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";

const categories = ["All", "Technology", "Business", "Design", "AI & ML", "Finance", "Startups", "Health", "Career"];
const modes = ["All Modes", "Online", "Offline", "Hybrid"];
const priceFilters = ["All Prices", "Free", "Paid"];

const allEvents = [
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
  {
    id: "5",
    title: "Web3 & Blockchain Development Masterclass",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    date: "Feb 28, 2024",
    time: "3:00 PM",
    location: "Online Event",
    mode: "online" as const,
    category: "Technology",
    organizer: "Blockchain India",
    isVerified: true,
    price: 799,
    attendees: 156,
    maxAttendees: 200,
  },
  {
    id: "6",
    title: "Financial Planning for Young Professionals",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    date: "Mar 1, 2024",
    time: "4:00 PM",
    location: "NMIMS Mumbai",
    mode: "offline" as const,
    category: "Finance",
    organizer: "Finance Club NMIMS",
    isVerified: true,
    price: "free" as const,
    attendees: 90,
    maxAttendees: 150,
  },
  {
    id: "7",
    title: "Health Tech Innovation Summit",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
    date: "Mar 5, 2024",
    time: "10:00 AM",
    location: "AIIMS Delhi",
    mode: "hybrid" as const,
    category: "Health",
    organizer: "HealthTech India",
    isVerified: true,
    price: 599,
    attendees: 200,
    maxAttendees: 250,
  },
  {
    id: "8",
    title: "Product Management Workshop by Google PM",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    date: "Mar 8, 2024",
    time: "2:00 PM",
    location: "Online Event",
    mode: "online" as const,
    category: "Business",
    organizer: "PM School India",
    isVerified: true,
    price: 999,
    attendees: 320,
    maxAttendees: 400,
  },
];

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMode, setSelectedMode] = useState("All Modes");
  const [selectedPrice, setSelectedPrice] = useState("All Prices");
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesMode = selectedMode === "All Modes" || event.mode === selectedMode.toLowerCase();
    const matchesPrice = selectedPrice === "All Prices" || 
                         (selectedPrice === "Free" && event.price === "free") ||
                         (selectedPrice === "Paid" && event.price !== "free");
    
    return matchesSearch && matchesCategory && matchesMode && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Explore <span className="gradient-text">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover workshops, hackathons, seminars, and networking events that match your interests
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events, topics, or organizers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 h-14 text-lg rounded-xl border-2 focus:border-primary"
              />
            </div>

            {/* Filter Toggle Button (Mobile) */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full mb-4"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>

            {/* Filters */}
            <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
              <div className="flex flex-wrap gap-4 items-center justify-center">
                {/* Category Pills */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? "gradient-bg text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4 justify-center">
                {/* Mode Filter */}
                <Select value={selectedMode} onValueChange={setSelectedMode}>
                  <SelectTrigger className="w-[140px]">
                    <MapPin className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Mode" />
                  </SelectTrigger>
                  <SelectContent>
                    {modes.map((mode) => (
                      <SelectItem key={mode} value={mode}>
                        {mode}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Price Filter */}
                <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceFilters.map((price) => (
                      <SelectItem key={price} value={price}>
                        {price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Date Filter */}
                <Button variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Any Date
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredEvents.length}</span> events
            </p>
            <Select defaultValue="relevance">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="date">Date (Soonest)</SelectItem>
                <SelectItem value="popularity">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No events found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search query
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedMode("All Modes");
                  setSelectedPrice("All Prices");
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
