
import React from 'react';
import type { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="bg-gray-700 text-gray-200 py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300">
      <p className="font-medium text-center">{skill.name}</p>
    </div>
  );
};

export default SkillBadge;
