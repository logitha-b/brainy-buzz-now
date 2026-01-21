import { Search, MousePointerClick, Ticket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover Events",
    description: "Browse through hundreds of educational events, workshops, and hackathons tailored to your interests.",
    color: "from-primary to-blue-500",
  },
  {
    icon: MousePointerClick,
    title: "Register in Seconds",
    description: "One-click registration with instant confirmation. Get your QR ticket delivered to your email.",
    color: "from-accent to-emerald-400",
  },
  {
    icon: Ticket,
    title: "Attend & Network",
    description: "Show up, learn, and connect with like-minded students and professionals. Earn badges along the way!",
    color: "from-primary to-purple-400",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finding and attending your next event is as easy as 1-2-3
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
