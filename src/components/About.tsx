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
                I'm a Fullstack Engineer who loves building things that are a joy to use.
              </h3>

              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  My sweet spot is right where a great-looking frontend meets a solid, scalable backend.
                  Lately, I've been deep in the world of{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    React and TypeScript
                  </span>
                  , obsessing over how to make web apps not just fast, but feel instant.
                </p>

                <p>
                  For example, I recently built a{' '}
                  <span className="font-semibold">performance-optimized e-commerce site</span>{' '}
                  that seamlessly handles thousands of products, and I was proud to get the search
                  and filter times down to a near-instant blink. I've also been{' '}
                  <span className="font-semibold">tinkering with AI to automate expense reports</span>{' '}
                  and built a <span className="font-semibold">financial dashboard</span>{' '}
                  to help visualize where all the money goes.
                </p>

                <p>
                  At the end of the day, I just enjoy solving real problems with{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    clean, thoughtful code
                  </span>
                  . When I'm away from the keyboard, you'll usually find me hiking local trails,
                  playing tennis or soccer, or exploring new restaurants around the city.
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