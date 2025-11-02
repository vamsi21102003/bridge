'use client'

import { useState, useRef, useCallback } from 'react'

export interface UseSpeechToTextReturn {
  startListening: () => void
  stopListening: () => void
  isListening: boolean
  transcript: string
  isSupported: boolean
  error: string | null
}

export const useSpeechToText = (
  onResult?: (transcript: string) => void,
  onError?: (error: string) => void
): UseSpeechToTextReturn => {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [error, setError] = useState<string | null>(null)
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  
  const isSupported = typeof window !== 'undefined' && 
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)

  const startListening = useCallback(() => {
    if (!isSupported) {
      const errorMsg = 'Speech recognition is not supported in this browser'
      setError(errorMsg)
      onError?.(errorMsg)
      return
    }

    try {
      // Create new recognition instance
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new SpeechRecognition()
      
      // Configure recognition settings
      recognition.continuous = false
      recognition.interimResults = true
      recognition.lang = 'en-US'
      recognition.maxAlternatives = 1

      // Set up event handlers
      recognition.onstart = () => {
        setIsListening(true)
        setError(null)
        setTranscript('')
      }

      recognition.onresult = (event) => {
        let finalTranscript = ''
        let interimTranscript = ''

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i]
          if (result.isFinal) {
            finalTranscript += result[0].transcript
          } else {
            interimTranscript += result[0].transcript
          }
        }

        const currentTranscript = finalTranscript || interimTranscript
        setTranscript(currentTranscript)

        // Call onResult callback with final transcript
        if (finalTranscript && onResult) {
          onResult(finalTranscript.trim())
        }
      }

      recognition.onerror = (event) => {
        const errorMsg = `Speech recognition error: ${event.error}`
        setError(errorMsg)
        setIsListening(false)
        onError?.(errorMsg)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      // Start recognition
      recognition.start()
      recognitionRef.current = recognition

    } catch (err) {
      const errorMsg = 'Failed to start speech recognition'
      setError(errorMsg)
      onError?.(errorMsg)
    }
  }, [isSupported, onResult, onError])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      recognitionRef.current = null
    }
    setIsListening(false)
  }, [])

  return {
    startListening,
    stopListening,
    isListening,
    transcript,
    isSupported,
    error
  }
}