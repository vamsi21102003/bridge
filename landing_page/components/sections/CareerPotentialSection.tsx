'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, ArrowRight, Star, Lightbulb, BookOpen, TrendingUp, X, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function CareerPotentialSection() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)

  const features = [
    {
      icon: Plus,
      title: 'AI Job Recommendations',
      description: 'Get personalized job and internship recommendations powered by advanced AI algorithms that understand your unique profile and career aspirations.',
      gradient: 'from-blue-500 to-purple-600',
      details: {
        benefits: ['95% match accuracy', '1000+ job opportunities daily', 'Real-time notifications'],
        howItWorks: 'Our AI analyzes your skills, experience, preferences, and career goals to match you with the most relevant opportunities.',
        features: ['Smart filtering', 'Salary predictions', 'Company culture fit', 'Growth potential analysis']
      }
    },
    {
      icon: ArrowRight,
      title: 'Structured Career Paths',
      description: 'Transform your skill analysis into clear, structured career roadmaps with step-by-step guidance and course recommendations.',
      gradient: 'from-purple-500 to-pink-600',
      details: {
        benefits: ['Clear roadmaps', 'Step-by-step guidance', 'Milestone tracking'],
        howItWorks: 'We create personalized career paths based on your current skills and desired destination, with actionable steps.',
        features: ['Interactive roadmaps', 'Progress tracking', 'Skill gap analysis', 'Timeline planning']
      }
    },
    {
      icon: Star,
      title: 'BriDGe Pro Personalised Features',
      description: 'Advanced personalised features to unlock your potential - track your progress, discover strengths, and access premium career insights.',
      gradient: 'from-pink-500 to-red-500',
      details: {
        benefits: ['Premium insights', 'Advanced analytics', 'Priority support'],
        howItWorks: 'Unlock advanced features with detailed personality assessments, career coaching, and exclusive opportunities.',
        features: ['Personality insights', '1-on-1 coaching', 'Exclusive job access', 'Advanced analytics']
      }
    },
    {
      icon: Lightbulb,
      title: 'Smart Skill Analysis',
      description: 'AI-powered assessment that analyzes your skills, experiences, and potential to create personalized development plans.',
      gradient: 'from-yellow-500 to-orange-500',
      details: {
        benefits: ['Skill gap identification', 'Personalized learning', 'Industry benchmarking'],
        howItWorks: 'Our AI evaluates your current skills against industry standards and identifies areas for improvement.',
        features: ['Skill scoring', 'Gap analysis', 'Learning recommendations', 'Progress tracking']
      }
    },
    {
      icon: BookOpen,
      title: 'Course Recommendations',
      description: 'Get targeted course suggestions based on your career goals and skill gaps to accelerate your professional growth.',
      gradient: 'from-green-500 to-teal-500',
      details: {
        benefits: ['Curated content', 'Industry-relevant courses', 'Certification tracking'],
        howItWorks: 'We recommend courses from top platforms that align with your career goals and fill your skill gaps.',
        features: ['Course matching', 'Progress tracking', 'Certification management', 'Learning paths']
      }
    },
    {
      icon: TrendingUp,
      title: 'Career Progress Tracking',
      description: 'Monitor your career development journey with detailed analytics and insights about your professional growth.',
      gradient: 'from-indigo-500 to-blue-500',
      details: {
        benefits: ['Visual progress tracking', 'Goal achievement', 'Performance insights'],
        howItWorks: 'Track your career milestones, skill improvements, and goal achievements with comprehensive analytics.',
        features: ['Progress dashboards', 'Goal setting', 'Achievement badges', 'Growth analytics']
      }
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Career Potential
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered insights, structured career paths, and personalized 
            recommendations to guide your professional journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={feature.title}
                className="group hover:scale-105 transition-all duration-300 cursor-pointer border-0 shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedFeature(index)}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow mb-4">
                    {feature.description}
                  </p>
                  <Button variant="outline" size="sm" className="mt-auto">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Interactive Modal */}
        {selectedFeature !== null && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${features[selectedFeature].gradient} rounded-xl flex items-center justify-center`}>
                      {(() => {
                        const Icon = features[selectedFeature].icon
                        return <Icon className="w-6 h-6 text-white" />
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {features[selectedFeature].title}
                    </h3>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedFeature(null)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {features[selectedFeature].description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">How It Works</h4>
                    <p className="text-gray-600">
                      {features[selectedFeature].details.howItWorks}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {features[selectedFeature].details.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {features[selectedFeature].details.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Link href="/register">
                      <Button className="flex-1">
                        Get Started Free
                      </Button>
                    </Link>
                    <Link href="/demo">
                      <Button variant="outline" className="flex-1">
                        Watch Demo
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Additional Info Card */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🎯</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Discover your career goals. Click on any feature card to explore its capabilities and 
                  see how it can transform your career journey
                </h3>
                <p className="text-lg opacity-90">
                  Our comprehensive platform combines AI technology with personalized insights to help you 
                  make informed career decisions and achieve your professional aspirations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}