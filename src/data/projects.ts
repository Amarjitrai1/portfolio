import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'performance-ecommerce',
    title: 'Performance E-commerce Platform',
    description: 'High-performance product catalog with 5,000+ items, sub-100ms filters, and real-time metrics.',
    longDescription: 'A performance-optimized e-commerce platform built with React and TypeScript, demonstrating advanced optimization techniques including lazy loading, memoization, and debouncing. Handles 5,000+ products with sub-100ms filter times and achieves 95+ Lighthouse scores.',
    image: '/images/performance-ecommerce.png', // Add your screenshot
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Performance', 'Lazy Loading'],
    githubUrl: 'https://github.com/Amarjitrai1/performance-ecommerce.git',
    liveUrl: 'https://performance-ecommerce.netlify.app',
    featured: true,
    metrics: [
      { label: 'Products', value: '5,000+' },
      { label: 'Filter Time', value: '<100ms' },
      { label: 'Lighthouse', value: '95+' },
      { label: 'TTI', value: '<2s' },
    ]
  },
  {
    id: 'ai-expense-processor',
    title: 'AI Expense Processor',
    description: 'Intelligent receipt processing with 85%+ accuracy and automated categorization.',
    longDescription: 'An AI-powered expense processor that automatically extracts vendor details, amounts, categories, and dates from receipts with confidence scoring. Features intelligent categorization, batch processing, and real-time analytics.',
    image: '/images/ai-expense-processor.png', // Add your screenshot
    tags: ['React', 'TypeScript', 'AI Integration', 'NLP', 'Async'],
    githubUrl: 'https://github.com/Amarjitrai1/ai-expense-processor.git',
    liveUrl: 'https://ai-expense-processor.netlify.app/',
    featured: true,
    metrics: [
      { label: 'Accuracy', value: '85%+' },
      { label: 'Processing', value: '1-2s' },
      { label: 'Auto-Approval', value: '70%' },
      { label: 'Categories', value: '9+' },
    ]
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Dashboard',
    description: 'Real-time expense tracking with analytics, filtering, and budget monitoring.',
    longDescription: 'A comprehensive financial dashboard for tracking expenses, analyzing spending patterns, and managing budgets. Features real-time analytics, advanced filtering, CSV export, and LocalStorage persistence.',
    image: '/images/financial-dashboard.png', // Add your screenshot
    tags: ['React', 'TypeScript', 'Analytics', 'LocalStorage', 'Charts'],
    githubUrl: 'https://github.com/Amarjitrai1/financial-dashboard.git',
    liveUrl: 'https://financial-board.netlify.app/',
    featured: true,
    metrics: [
      { label: 'Transactions', value: '150+' },
      { label: 'Filter Time', value: '<50ms' },
      { label: 'Categories', value: '10+' },
      { label: 'Export', value: 'CSV' },
    ]
  },
];