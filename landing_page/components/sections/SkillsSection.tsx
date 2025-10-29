'use client'

import { Code, Palette, BarChart, Lightbulb, Star, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useAuthModal } from '@/context/AuthModalContext'
import { useLanguage } from '@/context/LanguageContext'

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

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <div key={category.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4"
                  onClick={openModal}
                >
                  {t('skills.exploreSkills')}
                </Button>
              </div>
            )
          })}
        </div>

        {/* Trending Skills */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Trending Skills</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trendingSkills.map((skill, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{skill.name}</p>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-green-600 font-medium">{skill.growth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            onClick={openModal}
          >
            {t('skills.startLearning')}
          </Button>
        </div>
      </div>
    </section>
  )
}