'use client';

import React, { useState } from 'react';
import Header from '@/components/student/Header';
import ProfileSidebar from '@/components/student/ProfileSidebar';
import AIChat from '@/components/student/AIChat';

const AIProPage: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

  const aiFeatures = [
    {
      id: 'mentor',
      title: 'AI Career Mentor',
      description: 'Get personalized career guidance 24/7 from our advanced AI mentor trained on industry best practices',
      icon: '🤖',
      gradient: 'from-blue-400 to-purple-600',
      features: ['Instant career advice', 'Personalized roadmaps', 'Industry insights', 'Goal tracking'],
      price: '₹1,999/month',
      isPremium: true
    },
    {
      id: 'resume',
      title: 'Smart Resume Builder',
      description: 'AI-powered resume optimization that adapts to job descriptions and industry standards',
      icon: '📄',
      gradient: 'from-green-400 to-blue-500',
      features: ['ATS optimization', 'Industry templates', 'Real-time feedback', 'Multi-format export'],
      price: '₹899/month',
      isPremium: true
    },
    {
      id: 'interview',
      title: 'AI Interview Coach',
      description: 'Practice with our AI interviewer that simulates real interview scenarios',
      icon: '🎯',
      gradient: 'from-purple-400 to-pink-500',
      features: ['Mock interviews', 'Behavioral questions', 'Technical assessments', 'Performance analytics'],
      price: '₹1,299/month',
      isPremium: true
    },
    {
      id: 'matching',
      title: 'Smart Job Matching',
      description: 'Advanced AI algorithms match you with opportunities based on your skills and preferences',
      icon: '🔍',
      gradient: 'from-orange-400 to-red-500',
      features: ['Skill-based matching', 'Salary predictions', 'Company culture fit', 'Growth potential'],
      price: '₹799/month',
      isPremium: true
    },
    {
      id: 'learning',
      title: 'Adaptive Learning Path',
      description: 'Personalized learning recommendations that evolve with your progress and goals',
      icon: '🧠',
      gradient: 'from-teal-400 to-green-500',
      features: ['Custom curricula', 'Skill gap analysis', 'Progress tracking', 'Certification paths'],
      price: '₹1,199/month',
      isPremium: true
    },
    {
      id: 'networking',
      title: 'AI Network Builder',
      description: 'Intelligent networking suggestions to connect with the right professionals',
      icon: '🌐',
      gradient: 'from-indigo-400 to-purple-500',
      features: ['Smart connections', 'Event recommendations', 'Conversation starters', 'Follow-up reminders'],
      price: '₹999/month',
      isPremium: true
    }
  ];

  const pricingPlans = {
    monthly: { price: 2499, period: 'month' },
    yearly: { price: 24990, period: 'year', savings: '17% off' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onProfileClick={() => setIsProfileOpen(true)} />
      <ProfileSidebar isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      {/* Hero Section with Advanced Animations */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating AI Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl opacity-20 animate-float flex items-center justify-center text-3xl">🤖</div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-30 animate-float-delayed flex items-center justify-center text-2xl">✨</div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-25 animate-float flex items-center justify-center text-4xl">🧠</div>
          <div className="absolute top-1/3 right-1/3 w-18 h-18 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl opacity-20 animate-float-delayed flex items-center justify-center text-2xl">🚀</div>
          <div className="absolute bottom-20 right-10 w-22 h-22 bg-gradient-to-br from-teal-400 to-green-500 rounded-3xl opacity-30 animate-float flex items-center justify-center text-3xl">⚡</div>
          
          {/* Neural Network Animation */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#764ba2" stopOpacity="0.2"/>
              </linearGradient>
            </defs>
            <g className="animate-pulse">
              <circle cx="200" cy="150" r="4" fill="#667eea" className="animate-ping"/>
              <circle cx="400" cy="100" r="4" fill="#764ba2" className="animate-ping"/>
              <circle cx="600" cy="200" r="4" fill="#667eea" className="animate-ping"/>
              <circle cx="800" cy="150" r="4" fill="#764ba2" className="animate-ping"/>
              <line x1="200" y1="150" x2="400" y2="100" stroke="url(#neuralGradient)" strokeWidth="2" className="animate-pulse"/>
              <line x1="400" y1="100" x2="600" y2="200" stroke="url(#neuralGradient)" strokeWidth="2" className="animate-pulse"/>
              <line x1="600" y1="200" x2="800" y2="150" stroke="url(#neuralGradient)" strokeWidth="2" className="animate-pulse"/>
            </g>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-medium mb-6">
              <span>✨</span>
              <span>AI-Powered Career Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                AI Pro Features
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Unlock the power of artificial intelligence to accelerate your career growth with personalized insights, smart recommendations, and advanced analytics
            </p>

            {/* Feature Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
              <div className="glass-card p-4 text-center card-hover">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">99.2%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="glass-card p-4 text-center card-hover">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-1">24/7</div>
                <div className="text-sm text-gray-600">AI Support</div>
              </div>
              <div className="glass-card p-4 text-center card-hover">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent mb-1">3x</div>
                <div className="text-sm text-gray-600">Faster Results</div>
              </div>
              <div className="glass-card p-4 text-center card-hover">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">50K+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold text-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Start Free Trial ✨
            </button>
          </div>
        </div>
      </section>

      {/* AI Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Intelligent Career Tools
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experience the future of career development with our cutting-edge AI features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Premium Crown Badge */}
              {feature.isPremium && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 shadow-lg animate-pulse">
                    <span className="text-white text-lg">👑</span>
                  </div>
                </div>
              )}

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Pricing */}
              {feature.price && (
                <div className="mb-4">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
                    <span className="text-lg">💰</span>
                    <span className="font-bold text-purple-700">{feature.price}</span>
                  </div>
                </div>
              )}

              {/* Feature List */}
              <ul className="space-y-2 mb-6">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Subscribe Now ✨
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Demo Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience AI in Action
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              See how our AI mentor can transform your career journey with personalized insights and recommendations
            </p>

            {/* Interactive AI Chat Interface */}
            <AIChat />

            <button className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Try AI Mentor Now 🚀
            </button>
          </div>
        </div>
      </section>

      {/* Premium Bundle Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 text-white relative overflow-hidden">
          {/* Crown Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 text-6xl">👑</div>
            <div className="absolute top-8 right-8 text-4xl">👑</div>
            <div className="absolute bottom-4 left-1/3 text-5xl">👑</div>
            <div className="absolute bottom-8 right-1/4 text-3xl">👑</div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-4xl animate-bounce">👑</span>
              <h2 className="text-3xl md:text-4xl font-bold">Premium Bundle Offer</h2>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>👑</span>
            </div>
            <p className="text-xl opacity-90 mb-6">
              Get ALL AI Pro features at an incredible discount!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Individual Features</h3>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span>AI Career Mentor</span>
                    <span>₹1,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Interview Coach</span>
                    <span>₹1,299</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Adaptive Learning</span>
                    <span>₹1,199</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Smart Resume Builder</span>
                    <span>₹899</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Network Builder</span>
                    <span>₹999</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Smart Job Matching</span>
                    <span>₹799</span>
                  </div>
                  <hr className="border-white/30 my-2" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Value</span>
                    <span>₹7,194</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/50">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-2xl">👑</span>
                  <h3 className="text-xl font-bold">Premium Bundle</h3>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">₹2,499</div>
                  <div className="text-lg opacity-90 mb-4">/month</div>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold mb-4">
                    Save ₹4,695/month (65% OFF!)
                  </div>
                  <ul className="text-left space-y-2 text-sm">
                    <li>✅ All 6 AI Pro Features</li>
                    <li>✅ Priority Support</li>
                    <li>✅ Advanced Analytics</li>
                    <li>✅ Early Access to New Features</li>
                    <li>✅ Unlimited Usage</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <button className="px-12 py-4 bg-white text-orange-600 rounded-2xl font-bold text-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              🚀 Get Premium Bundle Now
            </button>
            <p className="text-sm opacity-75 mt-3">14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Individual Feature Pricing
          </h2>
          <p className="text-gray-600 text-lg">
            Or choose individual AI features that suit your needs
          </p>
        </div>

        {/* Plan Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-2xl p-1 flex">
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedPlan === 'monthly'
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`px-6 py-3 rounded-xl font-medium transition-all relative ${
                selectedPlan === 'yearly'
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <div className="glass-card p-8 text-center relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">AI Pro</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ₹{pricingPlans[selectedPlan].price.toLocaleString()}
                </span>
                <span className="text-gray-600">/{pricingPlans[selectedPlan].period}</span>
                {selectedPlan === 'yearly' && (
                  <div className="text-green-600 text-sm font-medium mt-1">
                    {pricingPlans.yearly.savings}
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 text-left">
                {[
                  'Unlimited AI Career Mentor access',
                  'Smart Resume Builder & Optimizer',
                  'AI Interview Coach with feedback',
                  'Advanced job matching algorithm',
                  'Personalized learning paths',
                  'Priority customer support',
                  'Advanced analytics dashboard',
                  'Early access to new AI features'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold text-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Start Free Trial
              </button>
              <p className="text-sm text-gray-500 mt-3">
                14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            AI Pro Success Stories
          </h2>
          <p className="text-gray-600 text-lg">
            See how AI Pro has transformed careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Priya Sharma',
              role: 'Software Engineer at Google',
              story: 'AI Pro helped me transition from marketing to tech in just 8 months. The personalized learning path was incredible!',
              avatar: '👩‍💻',
              improvement: '300% salary increase'
            },
            {
              name: 'Rahul Gupta',
              role: 'Data Scientist at Netflix',
              story: 'The AI interview coach prepared me perfectly for technical interviews. I got offers from 3 top companies!',
              avatar: '👨‍🔬',
              improvement: '5 job offers received'
            },
            {
              name: 'Ananya Patel',
              role: 'Product Manager at Meta',
              story: 'Smart job matching connected me with opportunities I never would have found. The AI mentor guided every step.',
              avatar: '👩‍💼',
              improvement: 'Dream job achieved'
            }
          ].map((story, index) => (
            <div key={index} className="glass-card p-6 card-hover">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{story.avatar}</div>
                <h3 className="font-semibold text-gray-800">{story.name}</h3>
                <p className="text-sm text-gray-600">{story.role}</p>
              </div>
              <p className="text-gray-700 mb-4 italic">"{story.story}"</p>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-medium">
                  {story.improvement}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIProPage;