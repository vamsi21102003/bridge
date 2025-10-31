'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, Sparkles } from 'lucide-react';

interface SuccessNotificationProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

export default function SuccessNotification({ show, message, onClose }: SuccessNotificationProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-4 right-4 z-50 max-w-sm"
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="bg-white/95 backdrop-blur-xl border border-green-200 rounded-2xl shadow-2xl p-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full -translate-y-10 translate-x-10"></div>
            
            <div className="relative z-10">
              <div className="flex items-start space-x-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-bold text-gray-900">Success!</h4>
                    <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {message}
                  </p>
                </div>
                
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Progress bar */}
              <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  onAnimationComplete={onClose}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}