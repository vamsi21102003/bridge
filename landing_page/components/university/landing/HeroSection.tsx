'use client';

import Link from 'next/link';
import { ArrowRight, Users, Building2, TrendingUp, Award } from 'lucide-react';

export function HeroSection() {
  const stats = [
    { label: 'Students Placed', value: '12,336', icon: Users },
    { label: 'Partner Companies', value: '245', icon: Building2 },
    { label: 'Placement Rate', value: '89.3%', icon: TrendingUp },
    { label: 'Average Package', value: '₹6.2L', icon: Award },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI-Powered Career
              <span className="block text-yellow-300">Success Platform</span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Connecting university students with industry opportunities through intelligent 
              matching, skill development, and career guidance.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/university/placements"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
              >
                View Placements
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Smart Matching</h3>
                    <p className="text-blue-100 text-sm">AI-powered career recommendations</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Skill Development</h3>
                    <p className="text-blue-100 text-sm">Personalized learning paths</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Industry Connect</h3>
                    <p className="text-blue-100 text-sm">Direct employer partnerships</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full animate-bounce-subtle"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400/20 rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}