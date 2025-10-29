'use client'

import { useEffect } from 'react'

export function useSimpleAnimations() {
  useEffect(() => {
    // Simple function to ensure animations are applied
    const applyAnimations = () => {
      // Add btn-enhanced to all buttons
      const buttons = document.querySelectorAll('button')
      buttons.forEach((button) => {
        if (!button.classList.contains('btn-enhanced')) {
          button.classList.add('btn-enhanced')
        }
      })
      
      // Add hover-lift to glass cards
      const cards = document.querySelectorAll('.glass-card')
      cards.forEach((card) => {
        if (!card.classList.contains('hover-lift')) {
          card.classList.add('hover-lift')
        }
      })
    }
    
    // Apply on mount
    applyAnimations()
    
    // Apply after a short delay for dynamic content
    const timeoutId = setTimeout(applyAnimations, 200)
    
    // Reapply when page becomes visible (handles tab switching)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(applyAnimations, 100)
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])
}