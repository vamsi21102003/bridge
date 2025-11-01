'use client'

import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

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
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatBoxRef = useRef<HTMLDivElement>(null)

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
      setMessages(prev => [...prev, botReply])
    } catch (error) {
      console.error('Chat API Error:', error)
      const errorMessage: Message = { 
        sender: 'bot', 
        text: 'Sorry, I encountered an error. Please try again or ask me about BriDGe platform features.' 
      }
      setMessages(prev => [...prev, errorMessage])
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
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}
              >
                {message.text}
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
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
              disabled={isLoading}
            />
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