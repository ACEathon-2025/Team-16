import ideaImage from '@/assets/idea-illustration.jpg';

const DescribeIdea = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Describe the Idea
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Swasthya AI is an AI-powered health assistant built for rural and underserved communities. 
              Users can chat about their symptoms, go through smart Q&A, and receive AI-generated health 
              insights, home remedies, or a doctor visit suggestion. Each session is saved as a 'case' 
              for future reference. Post-visit feedback helps improve the system for everyone.
            </p>

            {/* Key benefits */}
            <div className="mt-8 grid gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Smart Symptom Analysis</h4>
                  <p className="text-muted-foreground">AI-powered conversation to understand your health concerns</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Personalized Recommendations</h4>
                  <p className="text-muted-foreground">Get tailored advice based on your specific situation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Health Record Keeping</h4>
                  <p className="text-muted-foreground">Track your health journey with saved case histories</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-fade-up">
            <div className="relative z-10">
              <img
                src={ideaImage}
                alt="Healthcare AI technology interface"
                className="w-full h-auto rounded-2xl shadow-medium"
              />
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescribeIdea;