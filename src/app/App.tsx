import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Tools } from './components/Tools';
import { AiTools } from './components/AiTools';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Skills />
      <Tools />
      <AiTools />
      <Contact />
    </div>
  );
}
