'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Building2, TrendingUp } from 'lucide-react';

export function CTASection() {
  const benefits = [
    'AI-powered career matching',
    'Real-time skill gap analysis',
    'Direct industry connections',
    'Personalized learning paths',
    'Verified job opportunities',
    '24/7 career support',
  ];

  const userTypes = [
    {
      title: 'For Students',
      description: 'Discover your ideal career path and get matched with perfect opportunities',
      icon: Users,
      href: '/university',
      color: 'bg-blue-500',
    },
    {
      title: 'For Universities',
      description: 'Access comprehensive analytics and improve student placement outcomes',
      icon: TrendingUp,
      href: '/university',
      color: 'bg-green-500',
    },
    {
      title: 'For Employers',
      description: 'Find the best talent and build your future workforce',
      icon: Building2,
      href: '/university/employers',
      color: 'bg-purple-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block text-yellow-300">Career Journey?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of BPUT students and industry partners who are already 
            experiencing the power of AI-driven career success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/university"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
            >
              View Dashboard
            </Link>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center space-x-3 text-white animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* User Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((userType, index) => (
            <div
              key={userType.title}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${userType.color} rounded-xl flex items-center justify-center mb-6`}>
                <userType.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{userType.title}</h3>
              <p className="text-blue-100 leading-relaxed">{userType.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-blue-200 mb-8">Trusted by leading institutions and companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-white font-bold">TCS</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-white font-bold">Infosys</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-white font-bold">Wipro</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-white font-bold">Accenture</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <p className="text-blue-100 text-lg mb-4">
            Have questions? Our team is here to help.
          </p>
          <Link
            href="/university/contact"
            className="text-yellow-300 hover:text-yellow-200 font-semibold underline transition-colors duration-200"
          >
            Contact us today →
          </Link>
        </div>
      </div>
    </section>
  );
}