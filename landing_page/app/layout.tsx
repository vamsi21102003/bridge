import './critical.css'
import './globals.css'
import '../styles/auth.css'
import '../styles/student-dashboard.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { QueryProvider } from '@/components/providers/QueryProvider'
import { AnimationProvider } from '@/components/providers/AnimationProvider'
import { AuthProvider } from '@/context/dashboard/AuthContext'
import { GlobalProvider } from '@/context/dashboard/GlobalContext'
import { LanguageProvider } from '@/context/student/LanguageContext'
import { StudentAuthProvider } from '@/context/student/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BriDGe - Career Platform',
  description: 'Bridging the gap between talent and opportunity with AI-powered career matching',
  keywords: 'jobs, career, AI matching, opportunities, recruitment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className={inter.className}>
        <QueryProvider>
          <AnimationProvider>
            <LanguageProvider>
              <StudentAuthProvider>
                <GlobalProvider>
                  <AuthProvider>
                    <div className="bridge-landing-page page-wrapper">
                      {children}
                    </div>
                  </AuthProvider>
                </GlobalProvider>
              </StudentAuthProvider>
            </LanguageProvider>
          </AnimationProvider>
        </QueryProvider>
      </body>
    </html>
  )
}