'use client';

import React from 'react';

const AIMentorCard: React.FC = () => {
  return (
    <div className="group relative bg-gradient-to-br from-blue-500/90 to-purple-600/90 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 text-white overflow-hidden">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-white rounded-full animate-ping"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-6 right-8 w-1 h-1 bg-cyan-300 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-8 left-6 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-3 right-3 w-1 h-1 bg-pink-300 rounded-full animate-ping opacity-50" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 text-center">
        {/* AI Robot Head with Complex Animation */}
        <div className="relative mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-125 transition-transform duration-500 relative overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute inset-2 bg-white/20 rounded-full animate-pulse"></div>
            {/* Robot Face */}
            <div className="relative z-10">
              <div className="text-4xl animate-bounce">🤖</div>
            </div>
          </div>
          
          {/* Multiple Rotating Rings */}
          <div className="absolute inset-0 w-24 h-24 mx-auto">
            <div className="w-full h-full border-4 border-cyan-300 rounded-full animate-spin opacity-40" style={{ animationDuration: '4s' }}></div>
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto">
            <div className="w-full h-full border-2 border-blue-300 rounded-full animate-spin opacity-30" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto">
            <div className="w-full h-full border border-white rounded-full animate-ping opacity-20"></div>
          </div>

          {/* AI Status Indicator */}
          <div className="absolute -top-2 -right-2 bg-green-400 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
            ONLINE
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2">AI Career Assistant</h3>
        <p className="text-white/90 mb-1">Powered by Advanced AI</p>
        <p className="text-white/70 text-sm mb-4">Available 24/7 • Instant Responses</p>

        {/* AI Capabilities */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
            <div className="text-lg mb-1">🧠</div>
            <div className="text-xs font-medium">Smart Analysis</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
            <div className="text-lg mb-1">⚡</div>
            <div className="text-xs font-medium">Instant Help</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
            <div className="text-lg mb-1">📈</div>
            <div className="text-xs font-medium">Growth Tracking</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
            <div className="text-lg mb-1">🎯</div>
            <div className="text-xs font-medium">Goal Setting</div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-white/40">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-2xl">💰</span>
            <span className="text-2xl font-bold">₹200</span>
            <span className="text-white/80">/session</span>
          </div>
          <div className="text-sm text-white/90">Most affordable mentorship option</div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 px-4 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-xl">
            Start Chat 💬
          </button>
          <button className="px-4 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-colors">
            ℹ️
          </button>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-30 rounded-3xl blur-xl transition-opacity duration-500 -z-10"></div>
    </div>
  );
};

export default AIMentorCard;