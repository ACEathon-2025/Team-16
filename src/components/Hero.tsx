import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-illustration.jpg';

const Hero = () => {
  return (
    <section id="home" className="py-16 md:py-24 bg-gradient-to-br from-background to-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Your trusted{' '}
              <span className="text-primary">
                AI health assistant
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Understand your symptoms. Get safe, AI-guided advice. Track your health over time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="btn-hero text-lg px-8 py-3 animate-slide-in" asChild>
                <Link to="/signup">Start Now</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Safe & Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Trusted by 10k+ users</span>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Doctor consulting via mobile app with rural family"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;