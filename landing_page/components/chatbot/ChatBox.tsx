'use client'

import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { useTextToSpeech } from '../../hooks/useTextToSpeech'
import { useSpeechToText } from '../../hooks/useSpeechToText'

interface Message {
  sender: 'user' | 'bot'
  text: string
}

interface ChatBoxProps {
  isOpen: boolean
  onClose: () => void
}

export const ChatBox = ({ isOpen, onClose }: ChatBoxProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      sender: 'bot', 
      text: 'Hey there! 👋 I\'m your BriDGe AI Chat Bot. I can help you with platform features, career guidance, job matching, account issues, and more. What would you like to know about BriDGe?' 
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [speakingMessageIndex, setSpeakingMessageIndex] = useState<number | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatBoxRef = useRef<HTMLDivElement>(null)
  
  const { speak, stop, pause, resume, isSpeaking, isPaused, isSupported } = useTextToSpeech()
  
  const { 
    startListening, 
    stopListening, 
    isListening, 
    transcript, 
    isSupported: isSpeechRecognitionSupported 
  } = useSpeechToText(
    (finalTranscript) => {
      // When speech recognition completes, set the input value
      setInput(finalTranscript)
      stopListening()
    },
    (error) => {
      console.error('Speech recognition error:', error)
    }
  )

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Focus the input when chat opens
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Click outside to close functionality
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && chatBoxRef.current && !chatBoxRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = { sender: 'user', text: input }
    const currentInput = input
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await axios.post('/api/chat', {
        message: currentInput
      })
      
      const botReply: Message = { sender: 'bot', text: response.data.reply }
      setMessages(prev => {
        const newMessages = [...prev, botReply]
        // Auto-speak the bot's response
        if (isSupported) {
          setTimeout(() => {
            setSpeakingMessageIndex(newMessages.length - 1)
            speak(response.data.reply)
          }, 100)
        }
        return newMessages
      })
    } catch (error) {
      console.error('Chat API Error:', error)
      const errorMessage: Message = { 
        sender: 'bot', 
        text: 'Sorry, I encountered an error. Please try again or ask me about BriDGe platform features.' 
      }
      setMessages(prev => {
        const newMessages = [...prev, errorMessage]
        // Auto-speak error message
        if (isSupported) {
          setTimeout(() => {
            setSpeakingMessageIndex(newMessages.length - 1)
            speak(errorMessage.text)
          }, 100)
        }
        return newMessages
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleSpeakMessage = (messageIndex: number, text: string) => {
    if (speakingMessageIndex === messageIndex && isSpeaking) {
      // If this message is currently speaking, stop it
      stop()
      setSpeakingMessageIndex(null)
    } else {
      // Stop any current speech and start new one
      stop()
      setSpeakingMessageIndex(messageIndex)
      speak(text)
    }
  }

  const handlePauseSpeech = () => {
    if (isPaused) {
      resume()
    } else {
      pause()
    }
  }

  const handleStopSpeech = () => {
    stop()
    setSpeakingMessageIndex(null)
  }

  // Clean up speech when component unmounts or chat closes
  useEffect(() => {
    if (!isOpen) {
      stop()
      setSpeakingMessageIndex(null)
    }
  }, [isOpen, stop])

  // Update speaking state when speech ends
  useEffect(() => {
    if (!isSpeaking && speakingMessageIndex !== null) {
      setSpeakingMessageIndex(null)
    }
  }, [isSpeaking, speakingMessageIndex])

  // Update input with speech transcript
  useEffect(() => {
    if (transcript && isListening) {
      setInput(transcript)
    }
  }, [transcript, isListening])

  const handleMicClick = () => {
    if (isListening) {
      stopListening()
    } else {
      startListening()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-20 right-4 z-[9998] w-80 h-96" style={{ pointerEvents: 'auto' }}>
      {/* Chat Window */}
      <div 
        ref={chatBoxRef}
        className="bg-white rounded-lg shadow-2xl w-full h-full flex flex-col border" 
        style={{ pointerEvents: 'auto' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="font-semibold">BriDGe AI Chat Bot</h3>
          <div className="flex items-center space-x-2">
            {/* Global speech control */}
            {isSupported && isSpeaking && (
              <button
                onClick={handleStopSpeech}
                className="text-white hover:text-gray-200 transition-colors p-1"
                title="Stop speaking"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
              </button>
            )}
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
                
                {/* Speech controls for bot messages */}
                {message.sender === 'bot' && isSupported && (
                  <div className="flex items-center mt-1 space-x-1">
                    <button
                      onClick={() => handleSpeakMessage(index, message.text)}
                      className="p-1 text-gray-500 hover:text-blue-500 transition-colors"
                      title={speakingMessageIndex === index && isSpeaking ? "Stop speaking" : "Speak message"}
                    >
                      {speakingMessageIndex === index && isSpeaking ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                      )}
                    </button>
                    
                    {/* Pause/Resume button - only show when this message is speaking */}
                    {speakingMessageIndex === index && isSpeaking && (
                      <button
                        onClick={handlePauseSpeech}
                        className="p-1 text-gray-500 hover:text-blue-500 transition-colors"
                        title={isPaused ? "Resume" : "Pause"}
                      >
                        {isPaused ? (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                          </svg>
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg rounded-bl-none text-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isListening ? "Listening..." : "Type your message..."}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
              disabled={isLoading}
            />
            
            {/* Microphone Button */}
            {isSpeechRecognitionSupported && (
              <button
                onClick={handleMicClick}
                disabled={isLoading}
                className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                  isListening
                    ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
                    : 'bg-gray-500 hover:bg-gray-600 text-white'
                }`}
                title={isListening ? "Stop listening" : "Start voice input"}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
            )}
            
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-400 disabled:to-gray-400 text-white px-4 py-2 rounded-lg text-sm transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}