import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of software engineering projects including AI applications, web platforms, and cloud solutions',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

