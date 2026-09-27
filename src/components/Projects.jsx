import React, { useEffect, useState } from 'react';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';
import './Projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/TarunShree/repos?sort=updated&per_page=6');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
        // Fallback data in case of rate limits or errors
        setRepos([
          { id: 1, name: 'Portfolio', description: 'A dynamic interactive portfolio.', html_url: '#', stargazers_count: 5, forks_count: 1, language: 'JavaScript' },
          { id: 2, name: 'Project Two', description: 'Awesome project two.', html_url: '#', stargazers_count: 12, forks_count: 2, language: 'Python' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="projects container" id="projects">
      <h2 className="section-title text-gradient animate-fade-in-up">Latest Projects</h2>
      
      {loading ? (
        <div className="loading-state">
          <div className="spinner pulse-anim"></div>
          <p>Loading projects...</p>
        </div>
      ) : (
        <div className="projects-grid">
          {repos.map((repo, index) => (
            <TiltCard 
              key={repo.id} 
              className={`project-card glass-panel animate-fade-in-up delay-${Math.min((index + 1) * 100, 500)}`}
            >
              <div className="project-header">
                <h3>{repo.name}</h3>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="external-link">
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="project-desc">
                {repo.description || "No description provided."}
              </p>
              <div className="project-footer">
                <span className="language">
                  <span className="lang-dot"></span>
                  {repo.language || 'Code'}
                </span>
                <div className="stats">
                  <span className="stat"><Star size={16} /> {repo.stargazers_count}</span>
                  <span className="stat"><GitFork size={16} /> {repo.forks_count}</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
