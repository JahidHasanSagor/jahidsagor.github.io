import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Software Engineer specializing in AI, Web Development, Cloud Computing, and Academic Research',
}

const skills = [
  { name: 'AI/ML', icon: '🤖' },
  { name: 'Web Development', icon: '🌐' },
  { name: 'Cloud Computing', icon: '☁️' },
  { name: 'Research', icon: '🔬' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
]

const featuredProjects = [
  {
    title: 'AI-Powered Web Application',
    description: 'A full-stack web application leveraging machine learning for intelligent data processing and user recommendations.',
    tags: ['AI/ML', 'Next.js', 'TypeScript', 'TensorFlow'],
    href: '#',
    github: '#',
  },
  {
    title: 'Cloud Infrastructure Platform',
    description: 'Scalable cloud infrastructure solution with automated deployment and monitoring capabilities.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    href: '#',
    github: '#',
  },
  {
    title: 'Research Publication System',
    description: 'Academic research management system with advanced search, citation tracking, and collaboration features.',
    tags: ['React', 'Node.js', 'MongoDB', 'Elasticsearch'],
    href: '#',
    github: '#',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-container">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Jahid Sagor</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Software Engineer & Researcher
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I specialize in building intelligent web applications, cloud solutions, and conducting
              cutting-edge research at the intersection of AI and software engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-container bg-gray-50 dark:bg-gray-800/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and domains I work with
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 card hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work and contributions
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
          >
            View All Projects →
          </Link>
        </div>
      </section>
    </>
  )
}

