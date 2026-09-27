import React from 'react';
import { Briefcase, GraduationCap, Award, ChevronRight } from 'lucide-react';
import './About.css';

const About = () => {
  const timeline = [
    {
      type: 'hackathon',
      icon: <Award size={24} />,
      title: '3rd Place - MathNova Hackathon',
      subtitle: 'Patient-Sovereign Prescription Network',
      date: '2024',
      description: 'Architected a decentralized medical record platform that places data sovereignty in the hands of patients. Engineered a dual-engine AI safety net to cross-reference prescriptions against patient allergy vaults, demonstrating how AI acts as an accelerator for robust, human-driven logical reasoning and product design.'
    },
    {
      type: 'experience',
      icon: <Briefcase size={24} />,
      title: 'GenAI Application Builder',
      subtitle: 'AWS Student Builder Group',
      date: 'Aug 2024',
      description: 'Developed and deployed Generative AI applications leveraging AWS PartyRock. Bridged the gap between theoretical LLM concepts (embeddings, cosine similarity) and production-ready applications. Recognized as a top performer in interactive technical trivia.'
    },
    {
      type: 'experience',
      icon: <Award size={24} />,
      title: 'All India NCAT (AIR 16,771)',
      subtitle: 'National Creativity Aptitude Test',
      date: '2024',
      description: 'Validated advanced problem-solving, logical reasoning, and critical aptitude on a highly competitive national stage.'
    },
    {
      type: 'experience',
      icon: <Briefcase size={24} />,
      title: 'Software Engineering Job Simulations',
      subtitle: 'LinkedIn / Forage',
      date: '2023 - 2024',
      description: 'Completed rigorous, industry-standard job simulations hosted on LinkedIn. Developed practical skills in software architecture, debugging, and agile methodologies to bridge the gap between academic theory and enterprise engineering.'
    },
    {
      type: 'education',
      icon: <Award size={24} />,
      title: 'NPTEL Certifications',
      subtitle: 'Joy of Computing & Soft Skills',
      date: 'Completed',
      description: 'Earned elite certifications from NPTEL, demonstrating a strong grasp of Python programming fundamentals (Joy of Computing) alongside advanced communication and soft skills necessary for team leadership.'
    },
    {
      type: 'education',
      icon: <GraduationCap size={24} />,
      title: 'IT Undergraduate (9.45 CGPA)',
      subtitle: 'Easwari Engineering College (SRM Group)',
      date: 'Present',
      description: 'Fostering a strong academic foundation with a 9.45 CGPA in Information Technology, while actively engaging in competitive programming, hackathons, and continuous upskilling initiatives like NPTEL and Kaggle.'
    }
  ];

  return (
    <section className="about-section container" id="about">
      <h2 className="section-title text-gradient animate-fade-in-up">The Engineer Behind the Code</h2>
      
      <div className="about-grid">
        {/* Left Column: Professional Bio */}
        <div className="about-content">
          <div className="glass-panel text-content professional-bio animate-fade-in-up delay-100">
            <p>
              I am a driven software developer and data science enthusiast dedicated to engineering intelligent, scalable, and data-driven solutions. My expertise lies at the intersection of robust backend logic, advanced analytical modeling, and seamless user experiences.
            </p>
            <p>
              Rather than just writing code, I focus on solving complex architectural problems. Whether it's building decentralized healthcare platforms to secure patient data or leveraging Generative AI to push boundaries, I approach every project with rigorous critical thinking and a product-first mindset.
            </p>
            <p>
              Technology is a powerful accelerator, but human ingenuity is the engine. I am constantly expanding my technical repertoire—from robust SQL architectures to Generative AI—to build the tools of tomorrow.
            </p>
            
            <a href="https://linkedin.com/in/tarun-shree-m/" target="_blank" rel="noopener noreferrer" className="read-more-btn">
              Explore my full journey <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="timeline-section">
          <div className="timeline">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item animate-fade-in-up delay-${Math.min((index + 3) * 100, 500)}`}
              >
                <div className="timeline-marker">
                  <div className={`marker-icon ${item.type}`}>
                    {item.icon}
                  </div>
                  {index !== timeline.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="timeline-content glass-panel">
                  <span className="timeline-date">{item.date}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-subtitle">{item.subtitle}</h4>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
