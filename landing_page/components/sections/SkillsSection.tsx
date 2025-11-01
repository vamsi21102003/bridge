'use client'

import { Code, Palette, BarChart, Lightbulb, Star, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useAuthModal } from '@/context/AuthModalContext'
import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'
import { CursorTrail } from '@/components/ui/CursorTrail'

export function SkillsSection() {
  const { openModal } = useAuthModal()
  const { t } = useLanguage()
  
  const skillCategories = [
    {
      id: 1,
      title: 'Programming & Development',
      icon: Code,
      skills: ['JavaScript', 'Python', 'React', 'Node.js', 'SQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Design & Creative',
      icon: Palette,
      skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Prototyping'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 3,
      title: 'Data & Analytics',
      icon: BarChart,
      skills: ['Data Analysis', 'Machine Learning', 'Tableau', 'Statistics'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Business & Strategy',
      icon: Lightbulb,
      skills: ['Project Management', 'Business Analysis', 'Strategy', 'Leadership'],
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const trendingSkills = [
    { name: 'Artificial Intelligence', growth: '+45%' },
    { name: 'Cloud Computing', growth: '+38%' },
    { name: 'Cybersecurity', growth: '+32%' },
    { name: 'Data Science', growth: '+28%' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 overflow-hidden">
      <CursorTrail />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-teal-400/8 to-cyan-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-violet-400/12 to-indigo-400/12 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-full mb-6 border border-blue-200/50 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse block"></span>
              <span className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping"></span>
            </div>
            <span className="text-blue-700 font-semibold text-sm tracking-wide">Skill Development</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div 
                key={category.id} 
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 1,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]`}>
                  <div className="w-full h-full bg-white rounded-xl"></div>
                </div>
                
                {/* Card Content */}
                <div className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-slate-200/50 group-hover:border-transparent">
                  {/* Hover Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`}></div>
                  
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className="flex items-center group/skill"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      >
                        <motion.div 
                          className="relative w-5 h-5 mr-3"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.1 + skillIndex * 0.1 + 0.2,
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {/* Square background with gradient fill animation */}
                          <motion.div 
                            className={`w-5 h-5 bg-gradient-to-br ${category.color} rounded-md shadow-lg flex items-center justify-center`}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: index * 0.1 + skillIndex * 0.1 + 0.3,
                              duration: 0.6,
                              type: "spring",
                              stiffness: 200,
                              damping: 15
                            }}
                          >
                            {/* Checkmark icon */}
                            <motion.svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                              initial={{ pathLength: 0, opacity: 0 }}
                              whileInView={{ pathLength: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: index * 0.1 + skillIndex * 0.1 + 0.7,
                                duration: 0.8,
                                ease: "easeInOut"
                              }}
                            >
                              <motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </motion.svg>
                          </motion.div>
                        </motion.div>
                        
                        <span className="text-sm text-slate-600 font-medium group-hover/skill:text-slate-800 transition-colors duration-200">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`w-full mt-4 border-2 hover:bg-gradient-to-r ${category.color} hover:text-white hover:border-transparent transition-all duration-300 font-semibold`}
                      onClick={openModal}
                    >
                      {t('skills.exploreSkills')}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trending Skills */}
        <motion.div 
          className="bg-white/70 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/50 p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div 
            className="flex items-center mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <TrendingUp className="w-6 h-6 text-emerald-500 mr-3" />
            </motion.div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Trending Skills
            </h3>
          </motion.div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trendingSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="group relative p-4 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-lg border border-slate-200/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <p className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                    {skill.name}
                  </p>
                  <div className="flex items-center mt-2">
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    </motion.div>
                    <span className="text-sm text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-full">
                      {skill.growth}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="relative px-12 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              onClick={openModal}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative z-10 flex items-center space-x-2">
                <span>{t('skills.startLearning')}</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  ✨
                </motion.span>
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}