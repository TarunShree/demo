import React from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import TextReveal from './TextReveal';
import MagneticButton from './MagneticButton';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content animate-fade-in-up">
        <div className="avatar-container float">
          <div className="avatar-glow"></div>
          <img 
            src="/profile.png?v=2"
            alt="Tarun Shree M" 
            className="avatar" 
          />
        </div>
        <h1 className="title delay-100">
          Hi, I'm <span className="text-gradient">Tarun Shree M</span>
        </h1>
        <h2 className="subtitle delay-200">
          <TextReveal text="Software Developer & Tech Enthusiast" />
        </h2>
        <p className="description delay-300 animate-fade-in-up">
          IT student with a strong passion for Data Science and Machine Learning. Focused on building my technical foundation in Python and SQL to solve complex problems through data.
        </p>
        
        <div className="social-links delay-400 animate-fade-in-up">
          <MagneticButton href="https://github.com/TarunShree" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn">
            <FaGithub size={20} />
            <span>GitHub</span>
          </MagneticButton>
          <MagneticButton href="https://linkedin.com/in/tarun-shree-m/" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn">
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </MagneticButton>
          <MagneticButton href="mailto:tarunshree55@gmail.com" className="glass-panel social-btn primary">
            <Mail size={20} />
            <span>Email Me</span>
          </MagneticButton>
        </div>
      </div>
      
      <a href="#skills" className="scroll-indicator delay-500 animate-fade-in-up">
        <ChevronDown size={32} className="pulse-anim float" />
      </a>
    </section>
  );
};

export default Hero;
