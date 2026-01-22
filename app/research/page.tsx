'use client'

import { motion } from 'framer-motion'

const researchItems = [
  {
    title: 'Machine Learning for Natural Language Processing',
    year: '2024',
    type: 'Thesis',
    description: 'Advanced research on transformer architectures and their applications in multilingual NLP tasks. Explored novel approaches to cross-lingual transfer learning.',
    tags: ['NLP', 'Transformers', 'Deep Learning', 'Transfer Learning'],
    link: '#',
  },
  {
    title: 'Scalable Cloud Computing Architectures',
    year: '2023',
    type: 'Conference Paper',
    description: 'Analysis of modern cloud architectures for handling large-scale distributed systems. Proposed optimization strategies for cost and performance.',
    tags: ['Cloud Computing', 'Distributed Systems', 'Architecture', 'Optimization'],
    link: '#',
  },
  {
    title: 'AI Ethics in Software Development',
    year: '2023',
    type: 'Journal Article',
    description: 'Comprehensive study on ethical considerations in AI-powered software systems. Framework for responsible AI implementation.',
    tags: ['AI Ethics', 'Software Engineering', 'Responsible AI', 'Framework'],
    link: '#',
  },
  {
    title: 'Web Performance Optimization Techniques',
    year: '2022',
    type: 'Research Paper',
    description: 'Empirical analysis of modern web performance optimization techniques. Comparative study of various strategies and their impact.',
    tags: ['Web Performance', 'Optimization', 'Frontend', 'Metrics'],
    link: '#',
  },
]

export default function Research() {
  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Research & Publications</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Academic research contributions, thesis work, and publications in computer science and AI.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {researchItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="font-medium">{item.year}</span>
                  <span className="px-2 py-1 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
              >
                Read Paper →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

