import { Code, Database, Zap, Cloud, Smartphone, Brain } from 'lucide-react';

const technologies = [
  {
    icon: Code,
    name: "React.js",
    description: "Modern web interface",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Zap,
    name: "FastAPI",
    description: "High-performance backend",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Brain,
    name: "OpenAI",
    description: "AI-powered diagnosis",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Database,
    name: "Supabase",
    description: "Secure data storage",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Cloud,
    name: "Firebase",
    description: "Real-time sync",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Smartphone,
    name: "PWA Ready",
    description: "Mobile optimized",
    color: "from-indigo-500 to-indigo-600"
  }
];

const TechStack = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-accent/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-semibold text-2xl text-foreground mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-muted-foreground">
            Reliable, scalable, and secure healthcare technology stack
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-background/80 backdrop-blur-sm rounded-xl p-4 text-center group hover:shadow-soft transition-all duration-300 animate-fade-up border border-border/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <tech.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h4 className="font-semibold text-foreground text-sm mb-1">
                {tech.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Performance Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-background/60 rounded-lg p-4 border border-border/30">
            <div className="text-2xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="bg-background/60 rounded-lg p-4 border border-border/30">
            <div className="text-2xl font-bold text-secondary">&lt; 2s</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
          <div className="bg-background/60 rounded-lg p-4 border border-border/30">
            <div className="text-2xl font-bold text-primary">256-bit</div>
            <div className="text-sm text-muted-foreground">Encryption</div>
          </div>
          <div className="bg-background/60 rounded-lg p-4 border border-border/30">
            <div className="text-2xl font-bold text-secondary">24/7</div>
            <div className="text-sm text-muted-foreground">Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;