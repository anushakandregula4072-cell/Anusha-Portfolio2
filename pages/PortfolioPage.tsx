
import React, { useState, useMemo } from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = useMemo(() => ['All', ...new Set(projects.map(p => p.category))], []);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return projects;
    }
    return projects.filter(p => p.category === filter);
  }, [filter]);
  
  const buttonClasses = (cat: string) => `px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
    filter === cat ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
  }`;

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">My Portfolio</h1>
        <p className="text-lg text-cyan-400 mt-2">A collection of my work and projects.</p>
      </div>
      
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} className={buttonClasses(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
