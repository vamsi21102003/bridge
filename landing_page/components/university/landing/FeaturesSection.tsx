'use client';

import { Brain, Target, Users, BarChart3, Shield, Zap } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms analyze student profiles, skills, and preferences to match them with the most suitable career opportunities and internships.',
      color: 'bg-blue-500',
      benefits: ['95% accuracy rate', 'Personalized recommendations', 'Continuous learning'],
    },
    {
      icon: Target,
      title: 'Skill Gap Analysis',
      description: 'Identify skill gaps and receive personalized learning paths to bridge the gap between current abilities and industry requirements.',
      color: 'bg-green-500',
      benefits: ['Real-time assessment', 'Industry-aligned skills', 'Progress tracking'],
    },
    {
      icon: Users,
      title: 'Industry Connect',
      description: 'Direct access to hiring managers, industry mentors, and networking opportunities with leading companies across various sectors.',
      color: 'bg-purple-500',
      benefits: ['245+ partner companies', 'Direct employer access', 'Mentorship programs'],
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics for universities to track placement trends, student performance, and industry demands in real-time.',
      color: 'bg-yellow-500',
      benefits: ['Real-time insights', 'Predictive analytics', 'Custom reports'],
    },
    {
      icon: Shield,
      title: 'Verified Opportunities',
      description: 'All job postings and internship opportunities are verified and vetted to ensure authenticity and quality for student safety.',
      color: 'bg-red-500',
      benefits: ['100% verified jobs', 'Secure applications', 'Quality assurance'],
    },
    {
      icon: Zap,
      title: 'Instant Notifications',
      description: 'Get real-time updates on new opportunities, application status, interview schedules, and important career-related announcements.',
      color: 'bg-indigo-500',
      benefits: ['Real-time alerts', 'Smart filtering', 'Multi-channel delivery'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Career Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with industry expertise 
            to provide students with everything they need for career success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 interactive-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-xl ${feature.color} mr-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Career Journey?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of university students who have already found their dream careers 
              through our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg">
                Start Your Journey
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 transition-all duration-200 hover:scale-105 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}