'use client'

import { useEffect } from 'react'

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Simple setup
    const setupAnimations = () => {
      const buttons = document.querySelectorAll('button')
      buttons.forEach((btn) => {
        if (!btn.classList.contains('btn-enhanced')) {
          btn.classList.add('btn-enhanced')
        }
      })
      
      const cards = document.querySelectorAll('.glass-card')
      cards.forEach((card) => {
        if (!card.classList.contains('hover-lift')) {
          card.classList.add('hover-lift')
        }
      })
    }
    
    // Setup on mount
    setupAnimations()
    
    // Setup after a short delay
    const timeoutId = setTimeout(setupAnimations, 100)
    
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  
  return <>{children}</>
}