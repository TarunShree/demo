import React from 'react';
import { Database, Code2, Server, Globe, BrainCircuit, Smartphone } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section container" id="skills">
      <div className="section-header">
        <h2 className="section-title text-gradient animate-fade-in-up">Technical Arsenal</h2>
        <p className="section-subtitle animate-fade-in-up delay-100">
          A curated stack of tools and technologies I use to build scalable, data-driven applications.
        </p>
      </div>
      
      <div className="bento-grid">
        
        {/* Main Card: Data Science & AI */}
        <SpotlightCard className="bento-card bento-large">
          <div className="bento-icon-glow">
            <BrainCircuit size={32} />
          </div>
          <h3>Data Science & AI</h3>
          <p className="bento-desc">Harnessing data to engineer intelligent systems, predictive models, and GenAI applications.</p>
          <div className="tech-tags">
            <span>Python</span>
            <span>SQL</span>
            <span>Pandas</span>
            <span>Machine Learning</span>
            <span>Generative AI</span>
            <span>Data Analytics</span>
          </div>
        </SpotlightCard>

        {/* Medium Card: Software Engineering */}
        <SpotlightCard className="bento-card bento-medium">
          <div className="bento-icon-glow">
            <Code2 size={32} />
          </div>
          <h3>Software Engineering</h3>
          <p className="bento-desc">Building robust architectures and intuitive interfaces.</p>
          <div className="tech-tags">
            <span>JavaScript</span>
            <span>React</span>
            <span>C++</span>
            <span>System Design</span>
          </div>
        </SpotlightCard>

        {/* Wide Card: Cloud & DevOps */}
        <SpotlightCard className="bento-card bento-wide">
          <div className="bento-icon-glow">
            <Server size={32} />
          </div>
          <div className="wide-content">
            <div className="wide-text">
              <h3>Infrastructure & Cloud</h3>
              <p className="bento-desc">Deploying scalable, reliable, and secure environments.</p>
            </div>
            <div className="tech-tags">
              <span>AWS PartyRock</span>
              <span>Linux</span>
              <span>Git & GitHub</span>
              <span>Docker</span>
              <span>Postman</span>
            </div>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
};

export default Skills;
