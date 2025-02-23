import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Rocket } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: 'html' | 'css' | 'javascript' | 'python' | 'sql';
  onClick: () => void;
}

const icons = {
  html: Layout,
  css: Code2,
  javascript: Terminal,
  python: Rocket,
  sql: Database,
};

const difficultyColors = {
  Beginner: 'text-green-400',
  Intermediate: 'text-yellow-400',
  Advanced: 'text-red-400',
};

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  difficulty,
  icon,
  onClick,
}) => {
  const Icon = icons[icon];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glow-card bg-space-light rounded-xl p-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-neon-blue bg-opacity-10 rounded-lg">
          <Icon className="w-6 h-6 text-neon-blue" />
        </div>
        <div className="flex-1">
          <h3 className="font-orbitron text-xl mb-1">{title}</h3>
          <span className={`text-sm ${difficultyColors[difficulty]} mb-2 block`}>
            {difficulty}
          </span>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
      <button className="neon-button mt-4 w-full bg-neon-blue bg-opacity-10 hover:bg-opacity-20 text-neon-blue py-2 rounded-lg font-medium transition-all">
        Start Course
      </button>
    </motion.div>
  );
};

export default CourseCard;