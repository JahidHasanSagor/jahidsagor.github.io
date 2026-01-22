import { Metadata } from 'next'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Jahid Sagor - Software Engineer, Researcher, and technology enthusiast',
}

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Leading development of AI-powered web applications and cloud infrastructure solutions.',
  },
  {
    role: 'Research Assistant',
    company: 'University Research Lab',
    period: '2020 - 2022',
    description: 'Conducted research on machine learning applications in natural language processing and cloud computing.',
  },
  {
    role: 'Software Developer',
    company: 'Startup Inc.',
    period: '2019 - 2020',
    description: 'Developed full-stack web applications using modern frameworks and cloud technologies.',
  },
]

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University Name',
    period: '2020 - 2022',
    focus: 'Artificial Intelligence & Machine Learning',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    period: '2016 - 2020',
    focus: 'Software Engineering',
  },
]

export default function About() {
  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate software engineer and researcher with a deep interest in artificial intelligence,
              web technologies, and cloud computing. My work combines technical expertise with academic rigor
              to build innovative solutions and contribute to the advancement of technology.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              With experience spanning full-stack development, AI/ML implementation, and cloud infrastructure,
              I enjoy tackling complex problems and turning ideas into reality. I'm particularly interested in
              the intersection of AI and software engineering, exploring how intelligent systems can enhance
              user experiences and solve real-world challenges.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not coding or researching, you can find me contributing to open-source projects,
              writing technical articles, or exploring the latest developments in technology.
            </p>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{edu.focus}</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

