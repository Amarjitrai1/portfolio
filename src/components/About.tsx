import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-dark-bg"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Replace with your actual image */}
                  <img
                    src="https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=Your+Photo"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 dark:bg-primary-900/30 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 dark:bg-purple-900/30 rounded-full -z-10"></div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Frontend Engineer passionate about building exceptional user experiences
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  I'm a frontend developer specializing in building fast, scalable, 
                  and beautiful web applications. With a strong focus on{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    React, TypeScript, and performance optimization
                  </span>
                  , I create solutions that not only look great but perform exceptionally.
                </p>

                <p>
                  My recent projects include a{' '}
                  <span className="font-semibold">performance-optimized e-commerce platform</span>{' '}
                  handling 5,000+ products with sub-100ms filter times, an{' '}
                  <span className="font-semibold">AI-powered expense processor</span>{' '}
                  with 85%+ accuracy, and a{' '}
                  <span className="font-semibold">comprehensive financial dashboard</span>{' '}
                  with real-time analytics.
                </p>

                <p>
                  I'm passionate about{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    performance optimization, clean code architecture, and creating 
                    delightful user experiences
                  </span>
                  . I love learning new technologies and staying up-to-date with the 
                  latest frontend development trends.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing my knowledge through 
                  technical writing.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    3+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    10+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects Built
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    5K+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Lines of Code
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};