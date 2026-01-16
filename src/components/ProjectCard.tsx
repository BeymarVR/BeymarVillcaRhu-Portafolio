
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

  return (
    <motion.div 
        className="bg-background-light rounded-lg overflow-hidden shadow-lg group relative"
        variants={cardVariants}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-700 text-sm text-primary font-semibold px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
        <h3 className="text-2xl font-bold mb-4 text-center">{project.title}</h3>
        <div className="flex space-x-6">
            {/* <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors" aria-label="Live Demo">
                <FaExternalLinkAlt size={32} />
            </a> */}
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors" aria-label="Source Code">
                <FaGithub size={32} />
            </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
