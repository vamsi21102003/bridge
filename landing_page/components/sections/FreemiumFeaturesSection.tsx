'use client'

import { User, BarChart3, MessageCircle, Layout, Star, Bell, FileText, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

export function FreemiumFeaturesSection() {
  const freemiumFeatures = [
    {
      icon: User,
      title: 'AI-Powered Student Profiling',
      description: 'Smart digital profiles with AI insights',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'AI-Based Skill Gap Analyzer',
      description: 'Identify missing skills with AI-driven paths',
      gradient: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: MessageCircle,
      title: 'Intelligent Interview Coach',
      description: 'Realistic mock interviews with instant feedback',
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      icon: Layout,
      title: 'Personalized Career Dashboard',
      description: 'All-in-one career readiness hub',
      gradient: 'from-slate-400 to-slate-600'
    },
    {
      icon: Star,
      title: 'Smart Recommendation System',
      description: 'AI suggests right courses and certifications',
      gradient: 'from-teal-400 to-teal-600'
    },
    {
      icon: Bell,
      title: 'Personalized Job Alerts',
      description: 'Real-time notifications for opportunities',
      gradient: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: FileText,
      title: 'University Insights Dashboard',
      description: 'Real-time placement analytics for administrators',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      icon: Users,
      title: 'AI Mentor Assistant',
      description: 'Personal AI career guide',
      gradient: 'from-pink-400 to-pink-600'
    }
  ]

  const additionalFeatures = [
    {
      icon: FileText,
      title: 'Personalization Tools',
      description: 'AI-crafted resumes and profiles',
      gradient: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'Multilingual Support',
      description: 'English and Odia language support',
      gradient: 'from-orange-400 to-orange-600'
    },
    {
      icon: BarChart3,
      title: 'AI Path Predictor',
      description: 'Visualize your future career trajectory',
      gradient: 'from-red-400 to-red-600'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-100 to-blue-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/30 backdrop-blur-sm border border-white/40 rounded-full px-6 py-3 mb-6">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">🏠</span>
            </div>
            <span className="text-gray-700 font-medium">Free Tier Features</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-purple-600">Freemium Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock your potential with our comprehensive free tier – everything 
            you need to kickstart your career journey
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {freemiumFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={feature.title}
                className="group hover:scale-105 transition-all duration-300 cursor-pointer bg-white/40 backdrop-blur-sm border border-white/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={feature.title}
                className="group hover:scale-105 transition-all duration-300 cursor-pointer bg-white/40 backdrop-blur-sm border border-white/30"
                style={{ animationDelay: `${(index + 8) * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}