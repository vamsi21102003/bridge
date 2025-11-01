'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, TrendingUp, Search, Sparkles } from 'lucide-react';
import { mockCourses } from '../utils/mockData';

export default function LearningPanel() {
  const [searchQuery, setSearchQuery] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Mock AI suggestion
      setAiSuggestion(`Based on "${searchQuery}", I recommend starting with JavaScript fundamentals and then moving to React. This will give you a solid foundation for modern web development.`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Choose or Continue Your 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Learning Path
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            AI-curated learning paths tailored to your goals and schedule
          </motion.p>
        </motion.div>

        {/* AI Suggestion Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 mb-12"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Sparkles className="text-accent" size={24} />
            <h3 className="text-white font-semibold text-lg">AI Learning Assistant</h3>
          </div>
          
          <form onSubmit={handleSearchSubmit} className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="I have 1 hour today — what should I learn?"
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Ask AI
            </motion.button>
          </form>

          {aiSuggestion && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="p-4 bg-primary/10 border border-primary/20 rounded-xl"
            >
              <p className="text-white/90">{aiSuggestion}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Course Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mockCourses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">{course.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  course.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                  course.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-red-500/20 text-red-300'
                }`}>
                  {course.difficulty}
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-4 text-white/70">
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp size={16} />
                  <span className="text-sm">{course.progress}%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-white/70 mb-2">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play size={18} />
                <span>Continue Learning</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}