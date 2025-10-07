import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';
import { useState } from 'react';

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-dark-card"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my skills in React, 
              TypeScript, and performance optimization.
            </p>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          {/* Projects Grid - Now with equal height */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View More/Less Button */}
          {projects.length > 6 && (
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                {showAll ? 'Show Less Projects' : `View All Projects (${projects.length})`}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
interface ProjectCardProps {
  project: any;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="bg-white dark:bg-dark-bg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
        {/* Project Image - Fixed Height */}
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=' + project.title;
            }}
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <div className="flex space-x-4">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-gray-900" size={20} />
              </motion.a>
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-600 rounded-full hover:bg-primary-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt className="text-white" size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Project Info - Flexible Height */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title - Fixed Height */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 h-14 line-clamp-2">
            {project.title}
          </h3>
          
          {/* Description - Fixed Height */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 h-20 line-clamp-3 text-sm">
            {project.description}
          </p>

          {/* Tags - Fixed Height with Scroll */}
          <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem] max-h-[5rem] overflow-y-auto">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics - Push to Bottom */}
          {project.metrics && (
            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
              {project.metrics.map((metric: any, idx: number) => (
                <div key={idx} className="text-center">
                  <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
          Featured
        </div>
      )}
    </motion.div>
  );
};

