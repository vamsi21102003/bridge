'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, Plus, Bot, User } from 'lucide-react';
import { quickPrompts, aiResponses } from '../utils/mockData';

export default function ChatAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your AI Mentor, powered by advanced AI to provide personalized guidance. I'm here to help you learn, grow, and achieve your goals. Whether you need study strategies, career advice, or motivation - I'm ready to support your journey. What would you like to explore today?",
      timestamp: new Date(),
      isAI: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content = inputValue) => {
    if (!content.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Send message to OpenAI API
      const response = await fetch('/api/ai-mentor-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content.trim(),
          conversationHistory: messages.slice(-10) // Send last 10 messages for context
        }),
      });

      const data = await response.json();

      if (data.success || data.fallback) {
        const aiMessage = {
          id: Date.now() + 1,
          type: 'ai',
          content: data.response,
          timestamp: new Date(),
          isAI: true
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        throw new Error('Failed to get AI response');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Fallback to mock response if API fails
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment, or feel free to continue our conversation!",
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, aiMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickPrompt = (prompt) => {
    handleSendMessage(prompt);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section id="chat" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Chat with Your 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}AI Mentor
            </span>
          </h2>
          <p className="text-xl text-white/80">
            Get personalized guidance, motivation, and learning support
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl overflow-hidden"
        >
          {/* Chat Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <Bot className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold">AI Mentor</h3>
                <p className="text-white/60 text-sm">Always here to help</p>
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-r from-secondary to-accent' 
                        : 'bg-gradient-to-r from-primary to-secondary'
                    }`}>
                      {message.type === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-secondary to-accent text-white'
                        : message.isError
                        ? 'bg-red-500/20 border border-red-500/30 text-white'
                        : 'bg-white/10 text-white'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      {message.isAI && (
                        <div className="flex items-center mt-2 text-xs text-white/60">
                          <Bot size={12} className="mr-1" />
                          <span>AI-powered response</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="typing-indicator"></div>
                      <div className="typing-indicator"></div>
                      <div className="typing-indicator"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-6 py-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2 mb-4">
              {quickPrompts.slice(0, 3).map((prompt, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuickPrompt(prompt)}
                  className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm rounded-lg transition-all duration-200"
                >
                  {prompt}
                </motion.button>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 glass rounded-lg text-white/60 hover:text-white"
              >
                <Plus size={20} />
              </motion.button>

              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  rows="1"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 glass rounded-lg text-white/60 hover:text-white"
              >
                <Mic size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}