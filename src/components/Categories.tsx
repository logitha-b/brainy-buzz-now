import { Link } from "react-router-dom";
import { 
  Code2, 
  Briefcase, 
  Palette, 
  Brain, 
  TrendingUp, 
  Rocket, 
  Heart, 
  GraduationCap 
} from "lucide-react";

const categories = [
  { name: "Technology", icon: Code2, color: "from-blue-500 to-cyan-500", count: 120 },
  { name: "Business", icon: Briefcase, color: "from-amber-500 to-orange-500", count: 85 },
  { name: "Design", icon: Palette, color: "from-pink-500 to-rose-500", count: 64 },
  { name: "AI & ML", icon: Brain, color: "from-purple-500 to-violet-500", count: 92 },
  { name: "Finance", icon: TrendingUp, color: "from-green-500 to-emerald-500", count: 48 },
  { name: "Startups", icon: Rocket, color: "from-red-500 to-orange-500", count: 73 },
  { name: "Health", icon: Heart, color: "from-rose-500 to-pink-500", count: 35 },
  { name: "Career", icon: GraduationCap, color: "from-indigo-500 to-blue-500", count: 156 },
];

const Categories = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Explore by <span className="gradient-text">Category</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find events that match your interests and career goals
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/events?category=${category.name.toLowerCase()}`}
              className="group relative bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} events</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
