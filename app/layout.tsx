import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Jahid Sagor | Software Engineer & Researcher',
    template: '%s | Jahid Sagor',
  },
  description: 'Portfolio of Jahid Sagor - Software Engineer specializing in AI, Web Development, Cloud Computing, and Academic Research',
  keywords: ['Software Engineer', 'AI', 'Web Development', 'Cloud Computing', 'Research', 'Portfolio'],
  authors: [{ name: 'Jahid Sagor' }],
  creator: 'Jahid Sagor',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jahidsagor.github.io',
    siteName: 'Jahid Sagor Portfolio',
    title: 'Jahid Sagor | Software Engineer & Researcher',
    description: 'Portfolio of Jahid Sagor - Software Engineer specializing in AI, Web Development, Cloud Computing, and Academic Research',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jahid Sagor | Software Engineer & Researcher',
    description: 'Portfolio of Jahid Sagor - Software Engineer specializing in AI, Web Development, Cloud Computing, and Academic Research',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

