'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href?: string
  github?: string
  index?: number
}

export default function ProjectCard({ title, description, tags, href, github, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {href && (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
          >
            View Project →
          </Link>
        )}
        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
          >
            GitHub
          </Link>
        )}
      </div>
    </motion.div>
  )
}

