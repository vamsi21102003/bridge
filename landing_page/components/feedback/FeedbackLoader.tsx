'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Star, Users, TrendingUp } from 'lucide-react';

export default function FeedbackLoader() {
  const icons = [MessageSquare, Star, Users, TrendingUp];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Icons */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>
          ))}
        </div>

        {/* Loading Text */}
        <motion.h2
          className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading Feedback Hub
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-8"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          Gathering success stories from our amazing candidates...
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"
            animate={{ x: [-256, 256] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20"
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}