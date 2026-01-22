import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Jahid Sagor - Software Engineer and Researcher',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

