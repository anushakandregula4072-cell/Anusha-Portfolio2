
import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import { avatarImage } from '../assets/avatar';

const HomePage: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <img 
          src={avatarImage} 
          alt="Anusha Kandregula" 
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-500 shadow-lg object-cover"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-cyan-400 mb-6">{personalInfo.title}</p>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          A driven Civil Engineering student at NIT Patna with a passion for data analytics. Leveraging skills in SQL, Python, and PowerBI to extract insights and solve complex problems. Eager to apply analytical abilities to real-world challenges.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/portfolio"
            className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-700 transition-transform transform hover:scale-105 duration-300"
          >
            View My Projects
          </Link>
          <Link
            to="/contact"
            className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-600 transition-transform transform hover:scale-105 duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-white mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/portfolio" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold">
            View All Projects &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;