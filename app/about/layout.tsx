import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Jahid Sagor - Software Engineer, Researcher, and technology enthusiast',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

