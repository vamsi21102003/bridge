import { LanguageProvider } from '@/context/student/LanguageContext'
import { StudentAuthProvider } from '@/context/student/AuthContext'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <StudentAuthProvider>
        {children}
      </StudentAuthProvider>
    </LanguageProvider>
  )
}