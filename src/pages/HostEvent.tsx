import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Upload, 
  Check,
  Sparkles,
  Zap,
  Shield,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: Users,
    title: "Reach 50,000+ Students",
    description: "Get your event in front of students and professionals across India"
  },
  {
    icon: Zap,
    title: "Instant Registration",
    description: "One-click registration system with automatic confirmations"
  },
  {
    icon: Shield,
    title: "Verified Badge",
    description: "Build trust with a verified organizer badge on your profile"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track registrations, engagement, and attendee demographics"
  },
];

const HostEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    time: "",
    mode: "",
    location: "",
    maxAttendees: "",
    price: "",
    isFree: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event data:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Free to host • No hidden fees</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Host Your <span className="gradient-text">Event</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Create and promote your educational event to thousands of students and professionals. 
                Get registrations, manage attendees, and track analytics—all in one place.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4 p-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl p-8 card-shadow">
                <h2 className="text-2xl font-bold mb-6">Create Your Event</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Event Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g., AI & Machine Learning Workshop"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your event, what attendees will learn, and why they should join..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="min-h-32"
                      required
                    />
                  </div>

                  {/* Category & Mode */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="ai-ml">AI & ML</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="startups">Startups</SelectItem>
                          <SelectItem value="health">Health</SelectItem>
                          <SelectItem value="career">Career</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Event Mode *</Label>
                      <Select
                        value={formData.mode}
                        onValueChange={(value) => setFormData({ ...formData, mode: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">Online</SelectItem>
                          <SelectItem value="offline">Offline (In-Person)</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date *</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="h-12 pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Time *</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="time"
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="h-12 pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Location / Platform *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="location"
                        placeholder={formData.mode === "online" ? "e.g., Zoom, Google Meet" : "e.g., IIT Delhi Campus"}
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="h-12 pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Attendees & Price */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="maxAttendees">Max Attendees *</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="maxAttendees"
                          type="number"
                          placeholder="e.g., 100"
                          value={formData.maxAttendees}
                          onChange={(e) => setFormData({ ...formData, maxAttendees: e.target.value })}
                          className="h-12 pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="price">Ticket Price (₹)</Label>
                        <div className="flex items-center gap-2">
                          <Label htmlFor="isFree" className="text-sm text-muted-foreground">Free Event</Label>
                          <Switch
                            id="isFree"
                            checked={formData.isFree}
                            onCheckedChange={(checked) => setFormData({ ...formData, isFree: checked, price: checked ? "" : formData.price })}
                          />
                        </div>
                      </div>
                      <Input
                        id="price"
                        type="number"
                        placeholder="0"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="h-12"
                        disabled={formData.isFree}
                      />
                    </div>
                  </div>

                  {/* Banner Upload */}
                  <div className="space-y-2">
                    <Label>Event Banner</Label>
                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">
                        Drag and drop an image, or <span className="text-primary">browse</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Recommended: 1200x630px (PNG, JPG)
                      </p>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button type="button" variant="outline" className="flex-1">
                      Preview Event
                    </Button>
                    <Button type="submit" variant="hero" className="flex-1">
                      <Check className="w-5 h-5 mr-2" />
                      Create Event
                    </Button>
                  </div>
                </form>

                <p className="text-sm text-muted-foreground text-center mt-6">
                  By creating an event, you agree to our{" "}
                  <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HostEvent;
