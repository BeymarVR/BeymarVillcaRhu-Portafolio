
import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <main className="bg-neutral-950 min-h-screen text-white">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </SmoothScroll>
  );
};

export default App;
