import React from 'react';
import { education, certifications, achievements } from '../data/portfolioData';

const EducationPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Education & Achievements</h1>
        <p className="text-lg text-cyan-400 mt-2">My academic background, certifications, and accomplishments.</p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-center text-white mb-8">Education</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-sm text-cyan-400 mt-1 sm:mt-0">{edu.year}</p>
              </div>
              <p className="text-md font-semibold text-gray-300 mb-2">{edu.institution}</p>
              <p className="text-gray-400">Grade: {edu.grade}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-white mb-8">Certifications</h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                <p className="text-sm text-cyan-400 mt-1 sm:mt-0">{cert.year}</p>
              </div>
              <p className="text-md text-gray-300">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-center text-white mb-8">Achievements</h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {achievements.map((ach, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                 <p className="text-md text-gray-300">{ach.description}</p>
                 <p className="text-sm text-cyan-400 mt-1 sm:mt-0 sm:ml-4 flex-shrink-0">{ach.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
