'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Brain } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="neural-network"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Sparkles className="text-accent" size={24} />
              <span className="text-accent font-medium">AI-Powered Learning</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Your Personal
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}AI Mentor
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/80 mb-8 leading-relaxed"
            >
              Learn. Grow. Evolve. Your AI-powered coach for learning, discipline, and personal growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('chat')}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-2xl shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Chatting</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('plan')}
                className="px-8 py-4 glass text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Brain size={20} />
                <span>Build My Plan</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* AI Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-80 h-80 mx-auto"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
              
              {/* Main Avatar */}
              <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full glass flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center"
                >
                  <Brain size={48} className="text-white" />
                </motion.div>
              </div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute w-3 h-3 bg-accent rounded-full"
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${10 + i * 15}%`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}