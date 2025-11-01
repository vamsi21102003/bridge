'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'

import { SkillsSection } from '@/components/sections/SkillsSection'
import { GuidanceSection } from '@/components/sections/GuidanceSection'
import { CareerPotentialSection } from '@/components/sections/CareerPotentialSection'
import { FreemiumFeaturesSection } from '@/components/sections/FreemiumFeaturesSection'
import { AIJobsSection } from '@/components/sections/AIJobsSection'
import { ProFeaturesSection } from '@/components/sections/ProFeaturesSection'
import { useSimpleAnimations } from '@/hooks/useSimpleAnimations'
import { useScrollToBottom } from '@/hooks/useScrollToBottom'
import { ScrollTriggeredModal } from '@/components/ui/ScrollTriggeredModal'
import { AnimatePresence } from 'framer-motion'
import { AuthModalProvider, useAuthModal } from '@/context/AuthModalContext'
import { LanguageProvider } from '@/context/LanguageContext'

function HomePageContent() {
  useSimpleAnimations()
  
  // Auth modal context
  const { isModalOpen, closeModal, submitModalForm } = useAuthModal()
  
  // Scroll-triggered modal hook
  const { isTriggered, resetTrigger } = useScrollToBottom({
    threshold: 90, // Trigger when 90% scrolled
    delay: 0, // No delay - show immediately
    onlyOnce: true // Show only once per session
  });

  const handleModalClose = () => {
    resetTrigger();
    closeModal();
  };

  const handleSignIn = (data: any) => {
    console.log('Sign in data:', data);
    // Pass the data to the auth page
    submitModalForm(data);
    resetTrigger();
  };

  const handleSocialLogin = (provider: string) => {
    console.log('Social login with:', provider);
    // Handle social login logic here
    resetTrigger();
    closeModal();
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <main className="animate-slide-up">
        <div className="animate-scale-in">
          <HeroSection />
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <SkillsSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <GuidanceSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <AIJobsSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <CareerPotentialSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <FreemiumFeaturesSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <ProFeaturesSection />
        </div>
      </main>
      <Footer />

      {/* Auth modal - triggered by context or scroll */}
      <AnimatePresence>
        {(isTriggered || isModalOpen) && (
          <ScrollTriggeredModal
            onClose={handleModalClose}
            onSubmit={handleSignIn}
            onSocialLogin={handleSocialLogin}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <AuthModalProvider>
        <HomePageContent />
      </AuthModalProvider>
    </LanguageProvider>
  )
}