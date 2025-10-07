import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNode, FaGitAlt, 
  FaGithub, FaNpm, FaFigma 
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFramer, 
  SiGraphql, SiWebpack, SiVite, SiJest 
} from 'react-icons/si';

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'Framer', icon: SiFramer, color: '#0055FF' },
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', icon: FaNode, color: '#339933' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      ],
    },
    {
      title: 'Tools & Testing',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'GitHub', icon: FaGithub, color: '#181717' },
        // { name: 'VS Code', icon: SiVisualstudio, color: '#007ACC' }, // Removed invalid icon
        { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
        { name: 'Vite', icon: SiVite, color: '#646CFF' },
        { name: 'npm', icon: FaNpm, color: '#CB3837' },
        { name: 'Jest', icon: SiJest, color: '#C21325' },
        { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-white dark:bg-dark-bg"
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
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6"
                >
                  {category.skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// SkillCard Component
// ============================================

interface SkillCardProps {
  skill: {
    name: string;
    icon: any;
    color: string;
  };
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
    >
      <Icon 
        size={48} 
        className="mb-2 transition-colors duration-300"
        style={{ color: skill.color }}
      />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
        {skill.name}
      </span>
    </motion.div>
  );
};
