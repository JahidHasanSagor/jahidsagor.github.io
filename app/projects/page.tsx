'use client'

import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'AI-Powered Web Application',
    description: 'A full-stack web application leveraging machine learning for intelligent data processing and user recommendations. Features real-time analytics and personalized user experiences.',
    tags: ['AI/ML', 'Next.js', 'TypeScript', 'TensorFlow', 'PostgreSQL'],
    href: '#',
    github: '#',
  },
  {
    title: 'Cloud Infrastructure Platform',
    description: 'Scalable cloud infrastructure solution with automated deployment and monitoring capabilities. Built with infrastructure-as-code principles.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    href: '#',
    github: '#',
  },
  {
    title: 'Research Publication System',
    description: 'Academic research management system with advanced search, citation tracking, and collaboration features for researchers.',
    tags: ['React', 'Node.js', 'MongoDB', 'Elasticsearch', 'GraphQL'],
    href: '#',
    github: '#',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard for visualizing complex data streams with real-time updates and customizable widgets.',
    tags: ['React', 'D3.js', 'WebSocket', 'Python', 'FastAPI'],
    href: '#',
    github: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce platform with payment integration, inventory management, and customer analytics.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'TypeScript'],
    href: '#',
    github: '#',
  },
  {
    title: 'Mobile-First PWA',
    description: 'Progressive Web Application with offline capabilities, push notifications, and seamless mobile experience.',
    tags: ['React', 'PWA', 'Service Workers', 'IndexedDB', 'Web Push'],
    href: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A collection of software engineering projects showcasing my work in AI, web development, and cloud computing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </div>
  )
}

