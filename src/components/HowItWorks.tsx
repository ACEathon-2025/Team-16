import { User, MessageCircle, HelpCircle, FileText, BookmarkCheck } from 'lucide-react';
import processSteps from '@/assets/process-steps.jpg';

const steps = [
  {
    icon: User,
    title: "Create your health profile",
    description: "Set up your basic health information and preferences",
    color: "from-primary to-primary-light"
  },
  {
    icon: MessageCircle,
    title: "Chat about your symptoms",
    description: "Describe what you're experiencing in simple language",
    color: "from-secondary to-secondary-light"
  },
  {
    icon: HelpCircle,
    title: "Answer AI's follow-up questions",
    description: "Help the AI understand your condition better",
    color: "from-primary to-primary-light"
  },
  {
    icon: FileText,
    title: "Get diagnosis + advice",
    description: "Receive personalized health insights and recommendations",
    color: "from-secondary to-secondary-light"
  },
  {
    icon: BookmarkCheck,
    title: "Save & revisit your cases",
    description: "Keep track of your health journey over time",
    color: "from-primary to-primary-light"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to get the health guidance you need
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card-healthcare text-center group hover:shadow-medium transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number & Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-cream rounded-full flex items-center justify-center border-2 border-background">
                  <span className="text-sm font-bold text-foreground">{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-hero px-8 py-3 text-lg font-medium rounded-lg shadow-medium hover:shadow-strong transition-all duration-300">
            Try It Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;