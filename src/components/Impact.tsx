import { Users, GraduationCap, Heart, Quote } from 'lucide-react';

const userGroups = [
  {
    icon: Users,
    title: "Villagers without easy hospital access",
    description: "Get reliable health guidance when the nearest clinic is hours away",
    stat: "500+ Villages",
    color: "from-primary to-primary-light"
  },
  {
    icon: GraduationCap,
    title: "Students living away from home",
    description: "Healthcare support for those studying far from family care",
    stat: "2000+ Students",
    color: "from-secondary to-secondary-light"
  },
  {
    icon: Heart,
    title: "Elderly or chronically ill users",
    description: "Continuous health monitoring and personalized care guidance",
    stat: "1500+ Seniors",
    color: "from-primary to-primary-light"
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Village Rampur, Bihar",
    quote: "Swasthya AI helped me understand my child's fever symptoms and gave me safe home remedies. The nearest doctor is 30km away, but now I have guidance anytime.",
    role: "Mother of 2"
  },
  {
    name: "Rajesh Kumar",
    location: "College Student, Delhi",
    quote: "Living in a hostel, I was worried about my persistent headaches. The AI chatbot asked the right questions and suggested when to see a doctor. Very helpful!",
    role: "Engineering Student"
  },
  {
    name: "Kamala Devi",
    location: "Farmer, Punjab",
    quote: "As someone with diabetes, tracking my health was difficult. Now I can save all my symptoms and show them to my doctor during monthly visits.",
    role: "Diabetic Patient"
  }
];

const Impact = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
            Who We Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Healthcare guidance for every community, every situation
          </p>
        </div>

        {/* User Groups */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {userGroups.map((group, index) => (
            <div
              key={index}
              className="card-healthcare text-center group hover:shadow-medium transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon & Stat */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${group.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <group.icon className="w-10 h-10 text-white" />
                </div>
                <div className="mt-3 px-3 py-1 bg-cream rounded-full inline-block">
                  <span className="text-sm font-semibold text-foreground">{group.stat}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                {group.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {group.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-card rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-display font-semibold text-2xl text-foreground mb-4">
              Real Stories, Real Impact
            </h3>
            <p className="text-muted-foreground">
              Hear from our community about how Swasthya AI has helped them
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary mb-4" />
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Attribution */}
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;