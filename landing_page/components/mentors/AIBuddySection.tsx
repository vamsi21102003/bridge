'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export function AIBuddySection() {
  const [selectedMood, setSelectedMood] = useState('')
  const [inputMessage, setInputMessage] = useState('')

  const moods = [
    { id: 'stressed', label: "I'm feeling stressed 😰", color: 'from-red-400 to-pink-500' },
    { id: 'career', label: "Need career advice 💼", color: 'from-blue-400 to-indigo-500' },
    { id: 'motivated', label: "Feeling motivated! 🚀", color: 'from-green-400 to-emerald-500' },
    { id: 'doubts', label: "Having doubts 😕", color: 'from-yellow-400 to-orange-500' }
  ]

  const stats = [
    { label: '24/7', sublabel: 'Always Here', icon: '🕐' },
    { label: '100K+', sublabel: 'Conversations', icon: '💬' },
    { label: '98%', sublabel: 'Satisfaction', icon: '❤️' },
    { label: '∞', sublabel: 'Care & Support', icon: '🤗' }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 right-10 w-12 h-12 bg-pink-400/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-blue-700 font-semibold text-sm">🤖 AI Support</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              YOUR AI BUDDY 🤖💙
            </h2>
            
            <p className="text-slate-700 text-lg max-w-2xl mx-auto leading-relaxed">
              Your personal AI companion for emotional support, career guidance, and 24/7 assistance.
            </p>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full">
              <span>😊</span>
              <span className="text-orange-700 font-medium text-sm">Emotional Support</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full">
              <span>💼</span>
              <span className="text-blue-700 font-medium text-sm">Career Guidance</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full">
              <span>🕐</span>
              <span className="text-green-700 font-medium text-sm">24/7 Available</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full">
              <span>💬</span>
              <span className="text-purple-700 font-medium text-sm">Friendly Chat</span>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="max-w-4xl mx-auto">
            {/* AI Message */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl animate-bounce">🤖</span>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl rounded-tl-sm p-4 shadow-lg">
                    <p className="text-sm md:text-base">
                      Hi there! 👋 I'm your AI Buddy! I'm here to support you emotionally and help with your career journey. How are you feeling today?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mood Selection */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {moods.map((mood) => (
                <motion.button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedMood === mood.id
                      ? `bg-gradient-to-r ${mood.color} text-white shadow-lg transform scale-105`
                      : 'bg-white/70 text-gray-700 hover:bg-white/90 shadow-md hover:shadow-lg'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {mood.label}
                </motion.button>
              ))}
            </div>

            {/* Input Area */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">👤</span>
                </div>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Share what's on your mind... I'm here to help! 💙"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-500"
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg">
                  <span className="hidden sm:inline">Enter to send</span>
                  <span className="sm:hidden">📤</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}