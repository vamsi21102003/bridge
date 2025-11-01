import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../styles/university.css' // University-specific styles
import { QueryProvider } from '@/components/providers/QueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uni-BriDGe - University Bridge Platform',
  description: 'AI-Powered Career Recommendation and Internship Matching Platform for university students and employers',
  keywords: 'Uni-BriDGe, university, career, internship, placement, AI, technology, education',
}

export default function UniversityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="university-website">
      <QueryProvider>
        {children}
      </QueryProvider>
    </div>
  )
}