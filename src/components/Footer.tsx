import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Amarjitrai1', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/amarjitrai/', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:amarjitrai1@yahoo.com', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text font-display mb-2">
              Amarjit Singh
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Fullstack Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center md:justify-end">
              Made with <FaHeart className="text-red-500 mx-1" size={14} /> by Amarjit Singh
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};