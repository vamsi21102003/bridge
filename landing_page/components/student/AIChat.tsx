'use client';

import React, { useState, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'ai' | 'user';
  timestamp: Date;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI Career Mentor. I can help you with career planning, skill development, and job search strategies. What would you like to explore today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "Help me create a career roadmap",
    "Review my resume",
    "Prepare for interviews",
    "Find suitable job opportunities"
  ];

  const aiResponses = [
    "I'd be happy to help you create a personalized career roadmap! First, let me understand your current situation. What's your current role and what career goals do you have in mind?",
    "Great choice! Resume optimization is crucial for job success. I can analyze your resume for ATS compatibility, keyword optimization, and overall impact. Would you like to upload your current resume?",
    "Interview preparation is one of my specialties! I can help you with behavioral questions, technical assessments, and even conduct mock interviews. What type of role are you interviewing for?",
    "Perfect! I can match you with opportunities based on your skills, experience, and preferences. Let me analyze your profile and suggest the best-fit positions. What industry interests you most?"
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responseIndex = quickQuestions.findIndex(q => q.toLowerCase().includes(text.toLowerCase().split(' ')[0]));
      const responseText = responseIndex >= 0 ? aiResponses[responseIndex] : "That's an interesting question! I'm here to help you with your career development. Could you provide more details so I can give you the most relevant advice?";
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
      {/* Chat Header */}
      <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/20">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          🤖
        </div>
        <div>
          <h3 className="font-semibold text-white">AI Career Mentor</h3>
          <p className="text-sm text-white/70">Online • Ready to help</p>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-white/30 text-white ml-auto'
                  : 'bg-white/20 text-white'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/20 text-white px-4 py-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Questions */}
      <div className="mb-4">
        <p className="text-sm text-white/70 mb-3">Quick questions:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="px-3 py-2 bg-white/20 text-white text-xs rounded-full hover:bg-white/30 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="flex space-x-3">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
          placeholder="Ask me anything about your career..."
          className="flex-1 px-4 py-3 bg-white/20 text-white placeholder-white/50 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <button
          onClick={() => handleSendMessage(inputText)}
          className="px-6 py-3 bg-white text-purple-600 rounded-xl font-medium hover:bg-gray-100 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AIChat;