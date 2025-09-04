
import React from 'react';
import { personalInfo, skills, problemSolving } from '../data/portfolioData';
import SkillBadge from '../components/SkillBadge';
import { avatarImage } from '../assets/avatar';

const AboutPage: React.FC = () => {
  const technicalSkills = skills.filter(s => s.category === 'Technical');
  const softSkills = skills.filter(s => s.category === 'Soft');

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">About Me</h1>
        <p className="text-lg text-cyan-400 mt-2">My story, skills, and experience.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center bg-gray-800 p-8 rounded-lg shadow-xl">
        <div className="md:col-span-1 flex justify-center">
          <img src={avatarImage} alt="Anusha Kandregula" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-cyan-500"/>
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-4">Who I Am</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate and detail-oriented Civil Engineering undergraduate from NIT Patna, with a strong enthusiasm for data analytics. My journey into data began with a curiosity to uncover the stories hidden within numbers. I thrive on transforming complex datasets into actionable insights using tools like Python, SQL, and PowerBI. I am a lifelong learner, always excited to tackle new challenges and expand my technical skill set. Outside of academics, I enjoy leading initiatives and collaborating in teams, which has honed my leadership and communication skills.
          </p>
          <a href={personalInfo.resumeUrl} download="Kandregula_Anusha_Resume.pdf" className="mt-6 inline-block bg-cyan-600 text-white font-bold py-2 px-6 rounded-full hover:bg-cyan-700 transition-colors duration-300">
            Download My Resume
          </a>
        </div>
      </div>
      
       <section>
        <h2 className="text-3xl font-bold text-center text-white mb-8">Problem Solving</h2>
        <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg text-gray-300">{problemSolving.description}</p>
            <p className="text-sm text-cyan-400 mt-2">{problemSolving.years}</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-white mb-8">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technicalSkills.map(skill => <SkillBadge key={skill.name} skill={skill} />)}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-white mb-8">Soft Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {softSkills.map(skill => <SkillBadge key={skill.name} skill={skill} />)}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;