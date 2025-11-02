'use client'

import { useState } from 'react'
import Link from 'next/link'

export const AIMentorTextToSpeechDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          AI Mentor Text-to-Speech Demo
        </h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6">Enhanced Features Added:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Auto-speak AI responses</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Individual message speech controls</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Pause/Resume during speech</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Global stop control in header</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Welcome message auto-speech</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Smooth animations & visual feedback</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-4">How It Works:</h2>
          <div className="space-y-4 text-white/80">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-semibold text-white">Auto-Speech</h3>
                <p>AI responses automatically start speaking when generated, including the welcome message</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎛️</span>
              <div>
                <h3 className="font-semibold text-white">Individual Controls</h3>
                <p>Each AI message has its own speaker button to replay or stop that specific message</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⏯️</span>
              <div>
                <h3 className="font-semibold text-white">Pause & Resume</h3>
                <p>During active speech, pause/resume buttons appear for fine control</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🛑</span>
              <div>
                <h3 className="font-semibold text-white">Global Stop</h3>
                <p>Header stop button immediately halts all speech activity</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/ai-mentor"
              className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Try AI Mentor with Text-to-Speech
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-3">Technical Implementation:</h3>
          <div className="text-white/70 text-sm space-y-2">
            <p>• Uses browser's native Speech Synthesis API</p>
            <p>• Optimized speech settings (rate: 0.9, pitch: 1, volume: 0.8)</p>
            <p>• Automatic state management and cleanup</p>
            <p>• Graceful fallback for unsupported browsers</p>
            <p>• Integrated with existing Framer Motion animations</p>
          </div>
        </div>
      </div>
    </div>
  )
}