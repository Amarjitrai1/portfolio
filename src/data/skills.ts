import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'FaReact', category: 'frontend' },
  { name: 'TypeScript', icon: 'SiTypescript', category: 'frontend' },
  { name: 'JavaScript', icon: 'FaJs', category: 'frontend' },
  { name: 'Next.js', icon: 'SiNextdotjs', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'frontend' },
  { name: 'HTML5', icon: 'FaHtml5', category: 'frontend' },
  { name: 'CSS3', icon: 'FaCss3Alt', category: 'frontend' },
  { name: 'Framer Motion', icon: 'SiFramer', category: 'frontend' },
  
  // Backend & APIs
  { name: 'Node.js', icon: 'FaNode', category: 'backend' },
  { name: 'REST APIs', icon: 'FaServer', category: 'backend' },
  { name: 'GraphQL', icon: 'SiGraphql', category: 'backend' },
  
  // Tools & Others
  { name: 'Git', icon: 'FaGitAlt', category: 'tools' },
  { name: 'GitHub', icon: 'FaGithub', category: 'tools' },
  { name: 'VS Code', icon: 'SiVisualstudiocode', category: 'tools' },
  { name: 'Webpack', icon: 'SiWebpack', category: 'tools' },
  { name: 'Vite', icon: 'SiVite', category: 'tools' },
  { name: 'npm', icon: 'FaNpm', category: 'tools' },
  
  // Performance & Testing
  { name: 'Performance', icon: 'SiSpeedtest', category: 'other' },
  { name: 'Jest', icon: 'SiJest', category: 'other' },
  { name: 'Figma', icon: 'FaFigma', category: 'other' },
];