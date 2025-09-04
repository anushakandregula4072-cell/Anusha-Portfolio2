
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import { GithubIcon } from '../components/icons';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-gray-300 mb-8">Sorry, the project you are looking for does not exist.</p>
        <Link to="/portfolio" className="bg-cyan-600 text-white font-bold py-3 px-6 rounded-full hover:bg-cyan-700 transition-colors duration-300">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-2xl">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{project.title}</h1>
      <p className="text-lg text-cyan-400 mb-6">{project.category}</p>
      
      <img className="w-full h-auto max-h-96 object-cover rounded-lg mb-8 shadow-lg" src={project.imageUrl} alt={project.title} />

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">Project Description</h2>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">My Role & Responsibilities</h2>
          <p className="text-gray-300 leading-relaxed">{project.myRole}</p>
        </div>
        <div className="md:col-span-1">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-cyan-800 text-cyan-200 text-xs font-semibold px-2.5 py-1.5 rounded-full">{tech}</span>
              ))}
            </div>
            
            <div className="mt-6 space-y-4">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-500 transition-colors duration-300"
                >
                  <GithubIcon />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                 <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full text-center bg-cyan-600 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors duration-300"
                >
                  View Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <Link to="/portfolio" className="text-cyan-400 hover:text-cyan-300 font-semibold">
            &larr; Back to All Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
