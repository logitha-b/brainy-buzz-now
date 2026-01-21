import { Link } from "react-router-dom";
import { 
  Code2, 
  Briefcase, 
  Palette, 
  Brain, 
  TrendingUp, 
  Rocket, 
  Heart, 
  GraduationCap,
  ArrowRight 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { 
    name: "Technology", 
    icon: Code2, 
    color: "from-blue-500 to-cyan-500", 
    count: 120,
    description: "Web development, mobile apps, cloud computing, and more"
  },
  { 
    name: "Business", 
    icon: Briefcase, 
    color: "from-amber-500 to-orange-500", 
    count: 85,
    description: "Entrepreneurship, management, marketing, and leadership"
  },
  { 
    name: "Design", 
    icon: Palette, 
    color: "from-pink-500 to-rose-500", 
    count: 64,
    description: "UI/UX, graphic design, product design, and creativity"
  },
  { 
    name: "AI & ML", 
    icon: Brain, 
    color: "from-purple-500 to-violet-500", 
    count: 92,
    description: "Machine learning, deep learning, NLP, and data science"
  },
  { 
    name: "Finance", 
    icon: TrendingUp, 
    color: "from-green-500 to-emerald-500", 
    count: 48,
    description: "Investment, trading, fintech, and personal finance"
  },
  { 
    name: "Startups", 
    icon: Rocket, 
    color: "from-red-500 to-orange-500", 
    count: 73,
    description: "Pitch competitions, funding, and startup ecosystem"
  },
  { 
    name: "Health", 
    icon: Heart, 
    color: "from-rose-500 to-pink-500", 
    count: 35,
    description: "Healthcare, wellness, mental health, and biotech"
  },
  { 
    name: "Career", 
    icon: GraduationCap, 
    color: "from-indigo-500 to-blue-500", 
    count: 156,
    description: "Job preparation, interviews, placements, and skills"
  },
];

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Browse by <span className="gradient-text">Category</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore events across different domains and find the perfect match for your interests and career goals
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/events?category=${category.name.toLowerCase()}`}
                className="group relative bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{category.count} events</span>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoriesPage;
