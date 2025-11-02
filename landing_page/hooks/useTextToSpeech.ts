'use client'

import { useState, useRef, useCallback } from 'react'

export interface UseTextToSpeechReturn {
  speak: (text: string) => void
  stop: () => void
  pause: () => void
  resume: () => void
  isSpeaking: boolean
  isPaused: boolean
  isSupported: boolean
}

export const useTextToSpeech = (): UseTextToSpeechReturn => {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

  const speak = useCallback((text: string) => {
    if (!isSupported) return

    // Stop any current speech
    window.speechSynthesis.cancel()
    
    const utterance = new SpeechSynthesisUtterance(text)
    utteranceRef.current = utterance
    
    // Configure voice settings
    utterance.rate = 0.9
    utterance.pitch = 1
    utterance.volume = 0.8
    
    // Set up event listeners
    utterance.onstart = () => {
      setIsSpeaking(true)
      setIsPaused(false)
    }
    
    utterance.onend = () => {
      setIsSpeaking(false)
      setIsPaused(false)
      utteranceRef.current = null
    }
    
    utterance.onerror = () => {
      setIsSpeaking(false)
      setIsPaused(false)
      utteranceRef.current = null
    }
    
    utterance.onpause = () => {
      setIsPaused(true)
    }
    
    utterance.onresume = () => {
      setIsPaused(false)
    }
    
    // Start speaking
    window.speechSynthesis.speak(utterance)
  }, [isSupported])

  const stop = useCallback(() => {
    if (!isSupported) return
    
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
    setIsPaused(false)
    utteranceRef.current = null
  }, [isSupported])

  const pause = useCallback(() => {
    if (!isSupported || !isSpeaking) return
    
    window.speechSynthesis.pause()
    setIsPaused(true)
  }, [isSupported, isSpeaking])

  const resume = useCallback(() => {
    if (!isSupported || !isPaused) return
    
    window.speechSynthesis.resume()
    setIsPaused(false)
  }, [isSupported, isPaused])

  return {
    speak,
    stop,
    pause,
    resume,
    isSpeaking,
    isPaused,
    isSupported
  }
}