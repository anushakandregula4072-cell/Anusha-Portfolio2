import React from 'react';
import { experiences, positionsOfResponsibility } from '../data/portfolioData';

const ExperiencePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Experience & Responsibilities</h1>
        <p className="text-lg text-cyan-400 mt-2">My professional journey and leadership roles.</p>
      </div>
      
      <section>
        <h2 className="text-3xl font-bold text-center text-white mb-8">Virtual Experiences</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-sm text-cyan-400 mt-1 sm:mt-0">{exp.date}</p>
              </div>
              <p className="text-md font-semibold text-gray-300 mb-2">{exp.company}</p>
              <p className="text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-white mb-8">Positions of Responsibility</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {positionsOfResponsibility.map((pos, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                <h3 className="text-xl font-bold text-white">{pos.title}</h3>
                <p className="text-sm text-cyan-400 mt-1 sm:mt-0">{pos.year}</p>
              </div>
              <p className="text-md font-semibold text-gray-300">{pos.organization}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
