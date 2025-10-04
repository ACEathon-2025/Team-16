import { Heart, Github, Mail, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-display font-bold text-xl text-foreground">
                Swasthya AI
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              AI-powered healthcare assistant for rural and underserved communities. 
              Get trusted health guidance when you need it most.
            </p>
            <div className="flex items-center text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-primary fill-current" />
              <span>by Team Swasthya AI for ACEathon 2025</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="mailto:support@swasthyaai.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                </a>
              </li>
              <li>
                <a href="https://github.com/swasthyaai" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Swasthya AI. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/swasthyaai" 
              className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:team@swasthyaai.com" 
              className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* ACEathon Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-secondary/10 rounded-full border border-secondary/20">
            <span className="text-sm font-medium text-foreground">
              🏆 Participating in ACEathon 2025 - Building the Future of Healthcare
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;