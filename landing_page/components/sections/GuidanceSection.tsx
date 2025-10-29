'use client'

import { BookOpen, Users, Target, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useAuthModal } from '@/context/AuthModalContext'
import { useLanguage } from '@/context/LanguageContext'

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

  return (
    <section id="guidance" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('guidance.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('guidance.subtitle')}
          </p>
        </div>

        {/* Guidance Services */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {guidanceServices.map((service) => {
            const IconComponent = service.icon
            return (
              <div key={service.id} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={openModal}
                >
                  {t('guidance.learnMore')}
                </Button>
              </div>
            )
          })}
        </div>

        {/* Success Stories */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Success Stories</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">"{story.story}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{story.name}</p>
                  <p className="text-sm text-blue-600">{story.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Accelerate Your Career?</h3>
          <p className="text-lg mb-6 opacity-90">
            Book a free consultation with our career experts today
          </p>
          <Button 
            size="lg" 
            className="bg-white text-indigo-600 hover:bg-gray-100"
            onClick={openModal}
          >
            {t('guidance.scheduleConsultation')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}