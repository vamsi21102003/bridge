'use client';

import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Target, Award } from 'lucide-react';
import { skillData, weeklyProgress, achievements } from '../utils/mockData';

export default function SkillTracker() {
  const disciplineScore = 78;
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (disciplineScore / 100) * circumference;

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
    <section id="progress" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Your Progress &
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Growth Journey
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Track your skills, discipline, and achievements with AI-powered insights
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skill Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-2xl p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="text-primary" size={24} />
              <h3 className="text-white font-semibold text-xl">Skill Development</h3>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: 'white', fontSize: 12 }} />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    tick={{ fill: 'white', fontSize: 10 }}
                  />
                  <Radar
                    name="Current"
                    dataKey="current"
                    stroke="#6366F1"
                    fill="#6366F1"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Target"
                    dataKey="target"
                    stroke="#A855F7"
                    fill="transparent"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Discipline Circle */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Target className="text-secondary" size={24} />
              <h3 className="text-white font-semibold text-xl">Discipline Score</h3>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={strokeDasharray}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{disciplineScore}%</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-white/80 text-sm">
                Great consistency! You're building strong habits.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Weekly Progress Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <h3 className="text-white font-semibold text-xl mb-6">Weekly Progress</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" tick={{ fill: 'white', fontSize: 12 }} />
                <YAxis tick={{ fill: 'white', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.8)', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#6366F1" 
                  strokeWidth={3}
                  dot={{ fill: '#6366F1', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* AI Summary & Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* AI Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <TrendingUp size={16} className="text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">AI Insights</h3>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
              <p className="text-white/90 text-sm leading-relaxed">
                You improved focus by 12% this week. Your consistency in learning JavaScript is paying off! 
                I recommend adding 15 minutes of daily practice to accelerate your progress even further.
              </p>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Award className="text-accent" size={24} />
              <h3 className="text-white font-semibold text-lg">Achievements</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  whileHover={{ scale: 1.05 }}
                  className={`p-3 rounded-xl text-center transition-all duration-200 ${
                    achievement.unlocked 
                      ? 'bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30' 
                      : 'bg-white/5 border border-white/10 opacity-50'
                  }`}
                >
                  <div className="text-2xl mb-1">{achievement.icon}</div>
                  <p className="text-white text-xs font-medium">{achievement.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}