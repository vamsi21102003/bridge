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

export default function HomePage() {
  useSimpleAnimations()
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
    </div>
  )
}