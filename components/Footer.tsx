
import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-gray-400">&copy; {year} {personalInfo.name}. All Rights Reserved.</p>
        </div>
        <div className="flex items-center space-x-6">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <GithubIcon />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <LinkedinIcon />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
