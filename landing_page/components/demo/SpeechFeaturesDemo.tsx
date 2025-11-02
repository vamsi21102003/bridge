'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChatBox } from '../chatbot/ChatBox'

export const SpeechFeaturesDemo = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Complete Speech Integration Demo
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Text-to-Speech Features */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">🔊</span>
              Text-to-Speech Features
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Auto-speak AI responses</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Individual message controls</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Pause/Resume functionality</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Global stop controls</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Welcome message auto-speech</span>
              </div>
            </div>
          </div>

          {/* Speech-to-Text Features */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">🎤</span>
              Speech-to-Text Features
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-white/90">Voice input via microphone</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-white/90">Real-time speech recognition</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-white/90">Visual listening indicators</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-white/90">Automatic text insertion</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-white/90">Browser compatibility detection</span>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6">How the Complete Speech Integration Works:</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-3xl">🎯</span>
                <div>
                  <h3 className="font-semibold text-white mb-2">Voice Input</h3>
                  <p className="text-white/80 text-sm">Click the microphone button to start voice input. The button turns red and pulses while listening. Speak naturally and your words will appear in the input field.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl">🤖</span>
                <div>
                  <h3 className="font-semibold text-white mb-2">AI Response</h3>
                  <p className="text-white/80 text-sm">When the AI responds, it automatically starts speaking the response. You can hear the full conversation flow naturally.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-3xl">🎛️</span>
                <div>
                  <h3 className="font-semibold text-white mb-2">Speech Controls</h3>
                  <p className="text-white/80 text-sm">Each AI message has individual controls to replay, pause, or stop. Use the global stop button in the header to halt all speech immediately.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl">♿</span>
                <div>
                  <h3 className="font-semibold text-white mb-2">Accessibility</h3>
                  <p className="text-white/80 text-sm">Perfect for users with visual impairments, motor difficulties, or anyone who prefers voice interaction over typing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Buttons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">ChatBot Demo</h3>
            <p className="text-white/70 mb-6 text-sm">
              Try the compact chat interface with full speech integration
            </p>
            <button
              onClick={() => setIsChatOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Open ChatBot
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">AI Mentor Demo</h3>
            <p className="text-white/70 mb-6 text-sm">
              Experience the full AI Mentor interface with advanced speech features
            </p>
            <Link 
              href="/ai-mentor"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Try AI Mentor
            </Link>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Technical Implementation:</h3>
          <div className="grid md:grid-cols-2 gap-6 text-white/70 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-2">Text-to-Speech:</h4>
              <ul className="space-y-1">
                <li>• Browser's native Speech Synthesis API</li>
                <li>• Optimized voice settings (rate: 0.9, pitch: 1, volume: 0.8)</li>
                <li>• Automatic state management and cleanup</li>
                <li>• Visual feedback and control integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Speech-to-Text:</h4>
              <ul className="space-y-1">
                <li>• Web Speech Recognition API</li>
                <li>• Real-time transcript processing</li>
                <li>• Interim and final result handling</li>
                <li>• Error handling and browser compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Component */}
      <ChatBox 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </div>
  )
}