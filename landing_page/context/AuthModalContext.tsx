'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface AuthFormData {
  mode: 'signin' | 'signup'
  role: 'student' | 'institution'
  email: string
  password: string
  fullName?: string
  confirmPassword?: string
  remember?: boolean
}

interface AuthModalContextType {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
  submitModalForm: (data: AuthFormData) => void
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined)

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const submitModalForm = (data: AuthFormData) => {
    console.log('Storing modal data:', data)
    // Store the form data in sessionStorage so it persists during navigation
    sessionStorage.setItem('authModalData', JSON.stringify(data))
    
    // Close the modal
    setIsModalOpen(false)
    
    // Navigate to auth page with the appropriate mode
    const mode = data.mode === 'signup' ? 'signup' : 'login'
    router.push(`/auth?mode=${mode}&fromModal=true`)
  }

  return (
    <AuthModalContext.Provider value={{ isModalOpen, openModal, closeModal, submitModalForm }}>
      {children}
    </AuthModalContext.Provider>
  )
}

export function useAuthModal() {
  const context = useContext(AuthModalContext)
  if (context === undefined) {
    throw new Error('useAuthModal must be used within an AuthModalProvider')
  }
  return context
}