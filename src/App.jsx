import React from 'react';
import './App.css';
import Background from './components/Background';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app">
      <Background />
      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
