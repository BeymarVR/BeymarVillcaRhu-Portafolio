
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-background text-text font-sans antialiased">
      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Beymar Villca Rhu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
