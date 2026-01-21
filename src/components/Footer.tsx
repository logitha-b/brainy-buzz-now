import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    explore: [
      { name: "Browse Events", path: "/events" },
      { name: "Categories", path: "/categories" },
      { name: "Top Colleges", path: "/colleges" },
      { name: "Organizers", path: "/organizers" },
    ],
    host: [
      { name: "Host an Event", path: "/host" },
      { name: "Pricing", path: "/pricing" },
      { name: "Organizer Resources", path: "/resources" },
      { name: "Success Stories", path: "/success-stories" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" },
      { name: "FAQ", path: "/faq" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-primary/20 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero-bg opacity-10" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Never Miss an Event
              </h3>
              <p className="text-background/70">
                Subscribe to get personalized event recommendations in your inbox.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 max-w-xs"
              />
              <Button variant="accent">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">AllCollegeEvent</span>
            </Link>
            <p className="text-background/60 mb-6 max-w-xs">
              Discover, promote, and attend the best educational events near you. 
              Your next opportunity awaits.
            </p>
            <div className="space-y-3 text-sm text-background/60">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@allcollegeevent.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-background/60">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Host</h4>
            <ul className="space-y-3 text-sm text-background/60">
              {footerLinks.host.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-background/60">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-background/60">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © 2024 AllCollegeEvent. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
