import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research',
  description: 'Academic research publications, thesis work, and contributions to the field of computer science and AI',
}

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

