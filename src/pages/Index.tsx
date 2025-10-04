import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DescribeIdea from '@/components/DescribeIdea';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Impact from '@/components/Impact';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DescribeIdea />
        <HowItWorks />
        <Features />
        <Impact />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
