'use client';

import React, { useState, useRef, useEffect } from 'react';

const AIBuddy: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 I'm your AI Buddy! I'm here to support you emotionally and help with your career journey. How are you feeling today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That sounds challenging! 💪 Remember, every expert was once a beginner. What specific area would you like to focus on?",
        "I understand how you're feeling! 🤗 Career growth can be overwhelming, but you're taking the right steps by being here.",
        "Great question! 🌟 Let me help you break that down into manageable steps. What's your biggest concern right now?",
        "You're doing amazing! 🚀 Every small step counts towards your bigger goals. What would make you feel more confident?",
        "I'm here for you! 💙 Sometimes we all need someone to talk to. What's been on your mind lately?"
      ];

      const botResponse = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickResponses = [
    "I'm feeling stressed 😰",
    "Need career advice 💼",
    "Feeling motivated! 🔥",
    "Having doubts 🤔"
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-8 left-8 w-24 h-24 bg-gradient-to-r from-sky-400/15 to-blue-400/15 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-8 right-8 w-20 h-20 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl animate-float-delayed"></div>
        
        {/* Floating Emojis */}
        <div className="absolute top-12 left-12 text-2xl animate-bounce opacity-20">🤖</div>
        <div className="absolute bottom-12 right-12 text-2xl animate-bounce opacity-20" style={{ animationDelay: '1s' }}>💙</div>
        <div className="absolute top-1/3 right-1/3 text-xl animate-bounce opacity-25" style={{ animationDelay: '2s' }}>✨</div>
      </div>

      {/* Main Container */}
      <div className="relative group">
        {/* Animated Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 blur-xl animate-pulse"></div>
        
        {/* Main Rectangular Container */}
        <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
          
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/30 backdrop-blur-xl rounded-full mb-4 border border-white/40 animate-fadeIn">
              <div className="relative">
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse block"></span>
                <span className="absolute inset-0 w-2 h-2 bg-sky-400 rounded-full animate-ping"></span>
              </div>
              <span className="text-sky-700 font-semibold text-xs tracking-wide">AI Support</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 animate-slideUp">
              YOUR AI BUDDY 🤖💙
            </h2>
            
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Your personal AI companion for emotional support, career guidance, and 24/7 assistance.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 justify-center mb-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-1 bg-white/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/50 shadow-lg">
                <span className="text-sm animate-pulse">💝</span>
                <span className="text-xs font-medium text-sky-700">Emotional Support</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/50 shadow-lg">
                <span className="text-sm animate-pulse">🎯</span>
                <span className="text-xs font-medium text-sky-700">Career Guidance</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/50 shadow-lg">
                <span className="text-sm animate-pulse">🕐</span>
                <span className="text-xs font-medium text-sky-700">24/7 Available</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/50 shadow-lg">
                <span className="text-sm animate-pulse">🤗</span>
                <span className="text-xs font-medium text-sky-700">Friendly Chat</span>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="max-w-3xl mx-auto">
            {/* Chat Messages Area */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 p-4 mb-4 h-64 overflow-y-auto shadow-inner animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-fadeIn`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      msg.isBot 
                        ? 'bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-bl-sm' 
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-br-sm'
                    } shadow-lg`}>
                      <div className="flex items-start space-x-2">
                        {msg.isBot && <span className="text-lg animate-bounce-gentle">🤖</span>}
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                        {!msg.isBot && <span className="text-lg animate-bounce-gentle">😊</span>}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start animate-fadeIn">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-lg">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg animate-bounce-gentle">🤖</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Quick Response Buttons */}
            <div className="flex flex-wrap gap-2 mb-3 justify-center animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              {quickResponses.map((response, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(response)}
                  className="px-3 py-1 bg-white/30 backdrop-blur-md border border-white/40 rounded-full text-xs font-medium text-sky-700 hover:bg-white/40 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {response}
                </button>
              ))}
            </div>

            {/* Message Input Area */}
            <div className="relative animate-fadeIn" style={{ animationDelay: '1s' }}>
              <div className="flex items-end space-x-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 p-3 shadow-lg">
                {/* Animated Buddy Avatar */}
                <div className="flex-shrink-0 relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-gentle">
                    <span className="text-lg">🤖</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>

                {/* Text Input */}
                <div className="flex-1 relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Share what's on your mind... I'm here to help! 💙"
                    className="w-full px-3 py-2 bg-white/30 backdrop-blur-md border border-white/40 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300 text-slate-700 placeholder-slate-500 min-h-[50px] max-h-24 text-sm"
                    rows={2}
                  />
                  <div className="absolute bottom-1 right-2 text-xs text-slate-500">
                    Enter to send
                  </div>
                </div>

                {/* Send Button */}
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim() || isTyping}
                  className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-xl hover:from-sky-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {isTyping ? '⏳' : '💌'}
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center animate-fadeIn" style={{ animationDelay: '1.2s' }}>
                <div className="group cursor-pointer">
                  <div className="text-lg font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-xs text-slate-600 font-medium">Always Here</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    100K+
                  </div>
                  <div className="text-xs text-slate-600 font-medium">Conversations</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    98%
                  </div>
                  <div className="text-xs text-slate-600 font-medium">Satisfaction</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-lg font-bold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    ∞
                  </div>
                  <div className="text-xs text-slate-600 font-medium">Care & Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBuddy;