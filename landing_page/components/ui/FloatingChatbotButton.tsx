'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChatBox } from '@/components/chatbot/ChatBox'

export function FloatingChatbotButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleClick = () => {
    setIsChatOpen(true)
  }

  const handleChatClose = () => {
    setIsChatOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="relative">
        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute bottom-full right-0 mb-3 px-3 py-1 bg-white shadow-md rounded-lg border border-gray-200 whitespace-nowrap"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <span className="text-sm font-medium text-gray-700">AI Chatbot 💬</span>
              {/* Tooltip Arrow */}
              <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white drop-shadow-sm"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-30"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Secondary Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.2, 0.05, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Main Button */}
        <motion.button
          className="relative w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            y: [0, -4, 0]
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          aria-label="AI Chatbot"
          style={{ display: isChatOpen ? 'none' : 'block' }}
        >
          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
            animate={isHovered ? { 
              translateX: ["-100%", "100%"] 
            } : {}}
            transition={{
              duration: 0.8,
              ease: "easeInOut"
            }}
          />

          {/* Robot Icon */}
          <motion.div
            className="relative z-10 flex items-center justify-center w-full h-full"
            animate={isHovered ? {
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            } : {
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: isHovered ? 0.6 : 2,
              repeat: isHovered ? 1 : Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-lg sm:text-2xl">🤖</span>
          </motion.div>

          {/* Online Status Dot */}
          <motion.div
            className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full shadow-sm border border-white"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Click Ripple Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{
              scale: [0, 1.2],
              opacity: [0.3, 0]
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>


      </div>



      {/* Chat Box */}
      <ChatBox isOpen={isChatOpen} onClose={handleChatClose} />
    </div>
  )
}