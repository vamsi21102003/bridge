'use client'

import { Play, Plus, User, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { useAuthModal } from '@/context/AuthModalContext'
import { useLanguage } from '@/context/LanguageContext'

export function HeroSection() {
  const { openModal } = useAuthModal()
  const { t } = useLanguage()
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              {t('hero.title.line1')}
              <br />
              <span className="text-purple-600">{t('hero.title.line2')}</span>
              <br />
              <span className="text-blue-500">{t('hero.title.line3')}</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-700 hover:via-purple-800 hover:to-indigo-700 animate-glow hover:animate-pulse transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50"
                onClick={openModal}
              >
                {t('hero.getStarted')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex items-center group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-indigo-300 transform hover:scale-105 transition-all duration-300"
                onClick={openModal}
              >
                <Play className="w-5 h-5 mr-2 group-hover:animate-pulse group-hover:text-indigo-600" />
                {t('hero.watchDemo')}
              </Button>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="space-y-6 animate-slide-up">
            {/* AI Recommended Jobs Card */}
            <Card className="bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500 text-white border-0 hover:from-blue-600 hover:via-blue-700 hover:to-teal-600 transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 animate-float">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 hover:rotate-12">
                    <Plus className="w-6 h-6 hover:animate-spin" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:animate-pulse">AI Recommended JOBS and Internships</h3>
                    <p className="text-sm opacity-90">Get personalized job and internship recommendations powered by AI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Completion Card */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/30 animate-float" style={{ animationDelay: '1s' }}>
                <CardContent className="p-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-3 hover:bg-white/30 hover:scale-110 transition-all duration-300 hover:rotate-12">
                    <User className="w-5 h-5 hover:animate-bounce" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Profile Completion</h3>
                  <p className="text-xs opacity-90">Complete your profile to get personalized recommendations</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 animate-float" style={{ animationDelay: '2s' }}>
                <CardContent className="p-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-3 hover:bg-white/30 hover:scale-110 transition-all duration-300 hover:-rotate-12">
                    <BarChart3 className="w-5 h-5 hover:animate-pulse" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Structured Career Path/Courses</h3>
                  <p className="text-xs opacity-90">Skill analysis transformed into structured career roadmaps and course recommendations</p>
                </CardContent>
              </Card>
            </div>

            {/* BriDGe Pro Features Card */}
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">★</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">BriDGe Pro Personalised Features</h3>
                    <p className="text-sm opacity-90">Advanced personalised features to unlock your potential - track progress and discover opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}