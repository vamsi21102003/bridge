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
import { FloatingChatbotButton } from '@/components/ui/FloatingChatbotButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uni-BriDGe - Career Platform',
  description: 'Bridging the gap between university talent and industry opportunity with AI-powered career matching',
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
                      <FloatingChatbotButton />
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