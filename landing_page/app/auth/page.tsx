'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { X } from 'lucide-react'
import AuthenticationForm from '@/components/auth/AuthenticationForm'

interface ModalAuthData {
  mode: 'signin' | 'signup'
  role: 'student' | 'employer' | 'institution'
  email: string
  password: string
  fullName?: string
  confirmPassword?: string
  remember?: boolean
}

export default function AuthPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const mode = searchParams.get('mode') // 'login' or 'signup'
  const fromModal = searchParams.get('fromModal') === 'true'
  const [modalData, setModalData] = useState<ModalAuthData | null>(null)

  // Handle authentication submission
  const handleAuthSubmit = async (data: {
    mode: 'Sign Up' | 'Login'
    userType: 'student' | 'employer' | 'university'
    commonFields: {
      fullName: string
      email: string
      password: string
    }
    roleSpecificFields: Record<string, any>
  }) => {
    console.log('Authentication data:', data)
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Simulate successful authentication for demo
      alert(`${data.mode} successful! Welcome ${data.commonFields.fullName || 'User'}!`)
      
      // Set auth token and user type for dashboard access
      document.cookie = `authToken=demo-${data.userType}-token; path=/; max-age=86400` // 24 hours
      document.cookie = `userType=${data.userType}; path=/; max-age=86400` // 24 hours
      
      // Redirect based on user type
      if (data.userType === 'employer') {
        router.push('/dashboard/employer')
      } else if (data.userType === 'student') {
        router.push('/dashboard/student')
      } else if (data.userType === 'university') {
        router.push('/university') // Redirect to full university website
      }
    } catch (error) {
      console.error('Authentication error:', error)
      alert('Authentication failed. Please try again.')
    }
  }

  // Handle social login
  const handleSocialLogin = async (provider: string) => {
    try {
      // TODO: Replace with actual OAuth integration
      // window.location.href = `/api/auth/${provider}`
      
      console.log(`${provider} login initiated`)
      alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login ready for integration!`)
    } catch (error) {
      console.error('Social login error:', error)
      alert('Social login failed. Please try again.')
    }
  }

  // Load modal data and clear it from sessionStorage
  useEffect(() => {
    if (fromModal) {
      const storedData = sessionStorage.getItem('authModalData')
      console.log('Raw stored data:', storedData)
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData) as ModalAuthData
          console.log('Parsed modal data:', parsedData)
          setModalData(parsedData)
          // Clear the data from sessionStorage after using it
          sessionStorage.removeItem('authModalData')
        } catch (error) {
          console.error('Error parsing modal data:', error)
        }
      } else {
        console.log('No stored data found in sessionStorage')
      }
    }
  }, [fromModal])

  // Auto-trigger signup mode if specified in URL
  useEffect(() => {
    if (mode === 'signup') {
      // You can add logic here to automatically switch to signup mode
      // The AuthenticationForm component handles the toggle internally
    }
  }, [mode])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Close Button */}
      <div className="absolute top-6 right-6 z-10">
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-800 transition-colors bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md"
        >
          <X className="w-5 h-5" />
        </Link>
      </div>

      {/* Data Transfer Indicator */}
      {modalData && (
        <div className="absolute top-6 left-6 z-10">
          <div className="text-green-600 bg-green-50/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-green-200">
            <span className="font-semibold">✓ Data transferred from modal</span>
          </div>
        </div>
      )}

      {/* Authentication Form with Same CSS Animations */}
      <AuthenticationForm 
        onSubmit={handleAuthSubmit}
        onSocialLogin={handleSocialLogin}
        initialData={modalData}
        initialMode={modalData?.mode === 'signup' ? 'Sign Up' : 'Login'}
        initialUserType={modalData?.role === 'institution' ? 'university' : modalData?.role}
      />
    </div>
  )
}