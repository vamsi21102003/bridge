'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Quote, Award, Heart } from 'lucide-react';
import { motivationalQuotes } from '../utils/mockData';

export default function ReflectionSection() {
  const [reflection, setReflection] = useState('');
  const [aiSummary, setAiSummary] = useState('');
  const [currentQuote, setCurrentQuote] = useState(0);

  const handleSubmitReflection = () => {
    if (reflection.trim()) {
      // Simulate AI response
      setAiSummary(
        "Thank you for sharing your reflection! I can see you're making great progress with your learning goals. Your dedication to consistent practice is really paying off. Tomorrow, let's focus on building on today's momentum and tackling that JavaScript challenge you mentioned."
      );
      setReflection('');
    }
  };

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length);
  };

  return (
    <section id="reflection" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Daily Reflection &
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Insights
            </span>
          </h2>
          <p className="text-xl text-white/80">
            End your day with reflection and celebrate your achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Reflection Input */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="text-primary" size={24} />
              <h3 className="text-white font-semibold text-xl">Daily Reflection</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">
                  What went well today?
                </label>
                <textarea
                  value={reflection}
                  onChange={(e) => setReflection(e.target.value)}
                  placeholder="Share your thoughts, wins, challenges, and learnings from today..."
                  rows="6"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmitReflection}
                disabled={!reflection.trim()}
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                <span>Submit Reflection</span>
              </motion.button>

              {aiSummary && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-4 bg-primary/10 border border-primary/20 rounded-xl"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">AI Encouragement</h4>
                      <p className="text-white/90 text-sm leading-relaxed">{aiSummary}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Achievements & Quote */}
          <div className="space-y-8">
            {/* Achievements Board */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Award className="text-accent" size={24} />
                <h3 className="text-white font-semibold text-xl">Today's Achievements</h3>
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 bg-green-500/10 border border-green-500/20 rounded-xl"
                >
                  <div className="text-2xl">🎯</div>
                  <div>
                    <p className="text-white font-medium text-sm">Completed Daily Goal</p>
                    <p className="text-white/60 text-xs">Finished JavaScript practice session</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl"
                >
                  <div className="text-2xl">📚</div>
                  <div>
                    <p className="text-white font-medium text-sm">Learning Streak</p>
                    <p className="text-white/60 text-xs">7 days in a row!</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl"
                >
                  <div className="text-2xl">⚡</div>
                  <div>
                    <p className="text-white font-medium text-sm">Focus Session</p>
                    <p className="text-white/60 text-xs">2 hours of deep work</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Motivational Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Quote className="text-secondary" size={24} />
                <h3 className="text-white font-semibold text-xl">Daily Inspiration</h3>
              </div>

              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-white/90 text-lg leading-relaxed mb-4 italic">
                  "{motivationalQuotes[currentQuote]}"
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextQuote}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm rounded-lg transition-all duration-200"
                >
                  New Quote
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}