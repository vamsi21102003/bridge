'use client'

import { BookOpen, Users, Target, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useAuthModal } from '@/context/AuthModalContext'
import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'

export function GuidanceSection() {
  const { openModal } = useAuthModal()
  const { t } = useLanguage()
  
  const guidanceServices = [
    {
      id: 1,
      title: 'Career Counseling',
      icon: Target,
      description: 'Get personalized career advice from industry experts',
      features: ['1-on-1 Sessions', 'Career Path Planning', 'Goal Setting']
    },
    {
      id: 2,
      title: 'Resume Review',
      icon: BookOpen,
      description: 'Professional resume optimization and feedback',
      features: ['Expert Review', 'ATS Optimization', 'Industry Standards']
    },
    {
      id: 3,
      title: 'Interview Prep',
      icon: MessageCircle,
      description: 'Practice interviews with real-world scenarios',
      features: ['Mock Interviews', 'Feedback Sessions', 'Confidence Building']
    },
    {
      id: 4,
      title: 'Mentorship Program',
      icon: Users,
      description: 'Connect with experienced professionals in your field',
      features: ['Industry Mentors', 'Regular Check-ins', 'Network Building']
    }
  ]

  const successStories = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      story: 'The career guidance helped me transition from marketing to tech in just 8 months!'
    },
    {
      name: 'Mike Chen',
      role: 'Product Manager at Microsoft',
      story: 'Mock interviews and resume feedback were game-changers for my job search.'
    },
    {
      name: 'Emily Davis',
      role: 'UX Designer at Airbnb',
      story: 'My mentor guided me through the entire career change process. Couldn\'t have done it without them!'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const iconColors = [
    'from-blue-500 to-indigo-600',
    'from-emerald-500 to-teal-600', 
    'from-violet-500 to-purple-600',
    'from-orange-500 to-red-500'
  ]

  return (
    <section id="guidance" className="relative py-20 bg-gradient-to-br from-white via-slate-50 to-indigo-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-indigo-400/8 to-purple-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-violet-400/12 to-pink-400/12 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
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
            className="inline-flex items-center space-x-3 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-full mb-6 border border-indigo-200/50 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse block"></span>
              <span className="absolute inset-0 w-3 h-3 bg-indigo-400 rounded-full animate-ping"></span>
            </div>
            <span className="text-indigo-700 font-semibold text-sm tracking-wide">Career Guidance</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            {t('guidance.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('guidance.subtitle')}
          </p>
        </motion.div>

        {/* Guidance Services */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {guidanceServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div 
                key={service.id} 
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 1,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${iconColors[index]} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]`}>
                  <div className="w-full h-full bg-white rounded-xl"></div>
                </div>
                
                {/* Card Content */}
                <div className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-slate-200/50 group-hover:border-transparent">
                  {/* Hover Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${iconColors[index]} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`}></div>
                  
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${iconColors[index]} rounded-lg flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ 
                      rotate: 12, 
                      scale: 1.1,
                      y: -2
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center group/feature"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      >
                        <motion.div 
                          className="relative w-5 h-5 mr-3"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.1 + featureIndex * 0.1 + 0.2,
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
                            className={`w-5 h-5 bg-gradient-to-br ${iconColors[index]} rounded-md shadow-lg flex items-center justify-center`}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: index * 0.1 + featureIndex * 0.1 + 0.3,
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
                                delay: index * 0.1 + featureIndex * 0.1 + 0.7,
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
                        
                        <span className="text-sm text-slate-600 font-medium group-hover/feature:text-slate-800 transition-colors duration-200">
                          {feature}
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
                      className={`w-full border-2 hover:bg-gradient-to-r ${iconColors[index]} hover:text-white hover:border-transparent transition-all duration-300 font-semibold`}
                      onClick={openModal}
                    >
                      {t('guidance.learnMore')}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Success Stories */}
        <motion.div 
          className="bg-gradient-to-br from-slate-50/80 to-indigo-50/50 backdrop-blur-xl rounded-xl p-8 mb-12 border border-slate-200/50 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h3 
            className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-indigo-700 bg-clip-text text-transparent text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Success Stories
          </motion.h3>
          
          <div className="grid gap-6 md:grid-cols-3">
            {successStories.map((story, index) => (
              <motion.div 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-xl border border-slate-200/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <motion.p 
                    className="text-slate-600 italic mb-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                  >
                    "{story.story}"
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  >
                    <p className="font-bold text-slate-800 group-hover:text-indigo-700 transition-colors duration-300">
                      {story.name}
                    </p>
                    <p className="text-sm text-indigo-600 font-medium bg-indigo-50 px-2 py-1 rounded-full inline-block mt-1">
                      {story.role}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-xl p-8 text-center text-white overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-8 w-6 h-6 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-4 left-1/3 w-4 h-4 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-8 right-1/4 w-10 h-10 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          {/* Light Reflection Sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-pulse" style={{ animationDuration: '3s' }}></div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Ready to Accelerate Your Career?
            </motion.h3>
            
            <motion.p 
              className="text-lg mb-6 opacity-90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Book a free consultation with our career experts today
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="relative bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                onClick={openModal}
              >
                {/* Button Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{t('guidance.scheduleConsultation')}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}