
import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 flex flex-col">
      <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{project.shortDescription}</p>
        <div className="mb-4">
          <span className="inline-block bg-cyan-800 rounded-full px-3 py-1 text-xs font-semibold text-cyan-200 mr-2 mb-2">{project.category}</span>
        </div>
        <Link 
          to={`/project/${project.id}`} 
          className="mt-auto block w-full text-center bg-cyan-600 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
