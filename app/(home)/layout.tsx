import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Software Engineer specializing in AI, Web Development, Cloud Computing, and Academic Research',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

