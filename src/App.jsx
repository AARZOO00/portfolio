import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WhatIBuild from './components/WhatIBuild';
import Projects from './components/Projects';
import Education from './components/Education';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <WhatIBuild />
        <Projects />
        <Education />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
