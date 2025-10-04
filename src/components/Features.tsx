import { Bot, Leaf, FileText } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "AI Health Chatbot",
    description: "Intelligent conversation that understands your symptoms and guides you through proper health assessment.",
    gradient: "from-primary to-primary-light",
    bgColor: "bg-primary/5"
  },
  {
    icon: Leaf,
    title: "Home Remedy Suggestions",
    description: "Safe, traditional remedies and wellness tips from trusted medical knowledge, perfect for rural communities.",
    gradient: "from-secondary to-secondary-light",
    bgColor: "bg-secondary/5"
  },
  {
    icon: FileText,
    title: "Case-Based Medical Record",
    description: "Your health journey documented and stored securely. Track symptoms, treatments, and progress over time.",
    gradient: "from-primary to-primary-light",
    bgColor: "bg-primary/5"
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
            Feature Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for better health management
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-8 group hover:shadow-medium transition-all duration-300 animate-fade-up border border-border/20`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-xl text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-6">
                <button className="text-primary font-medium hover:text-primary-dark transition-colors duration-200">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-cream to-accent rounded-2xl">
          <h3 className="font-display font-semibold text-2xl text-foreground mb-4">
            Ready to take control of your health?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of users who trust Swasthya AI for their health needs
          </p>
          <button className="btn-hero px-8 py-3 text-lg font-medium rounded-lg shadow-medium hover:shadow-strong transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;