import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Stats } from '@/components/Stats';
import { Pricing } from '@/components/Pricing';
import { Team } from '@/components/Team';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Pricing />
      <Team />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
