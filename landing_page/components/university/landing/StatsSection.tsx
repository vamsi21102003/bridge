'use client';

import { useEffect, useState } from 'react';
import { Users, Building2, TrendingUp, Award, MapPin, GraduationCap } from 'lucide-react';

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('stats-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      label: 'Total Students',
      value: 15420,
      displayValue: '15.4K+',
      icon: Users,
      color: 'bg-blue-500',
      trend: { value: 12, isPositive: true },
    },
    {
      label: 'Students Placed',
      value: 12336,
      displayValue: '12.3K+',
      icon: GraduationCap,
      color: 'bg-green-500',
      trend: { value: 8.5, isPositive: true },
    },
    {
      label: 'Partner Companies',
      value: 245,
      displayValue: '245+',
      icon: Building2,
      color: 'bg-purple-500',
      trend: { value: 15, isPositive: true },
    },
    {
      label: 'Average Package',
      value: 6.2,
      displayValue: '₹6.2L',
      icon: Award,
      color: 'bg-yellow-500',
      trend: { value: 18, isPositive: true },
    },
    {
      label: 'Placement Rate',
      value: 89.3,
      displayValue: '89.3%',
      icon: TrendingUp,
      color: 'bg-indigo-500',
      trend: { value: 5.2, isPositive: true },
    },
    {
      label: 'College Partners',
      value: 31,
      displayValue: '31+',
      icon: MapPin,
      color: 'bg-red-500',
      trend: { value: 3, isPositive: true },
    },
  ];

  const AnimatedCounter = ({ value, displayValue }: { value: number; displayValue: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span className="metric-counter text-3xl md:text-4xl font-bold text-gray-900">
        {isVisible ? displayValue : '0'}
      </span>
    );
  };

  return (
    <section id="stats-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering Success Through Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform has transformed thousands of careers, connecting students 
            with opportunities and helping them achieve their professional goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                {stat.trend && (
                  <div className="flex items-center text-sm font-medium text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +{stat.trend.value}%
                  </div>
                )}
              </div>
              
              <div className="mb-2">
                <AnimatedCounter value={stat.value} displayValue={stat.displayValue} />
              </div>
              
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">Real-Time Analytics</h3>
              <p className="text-gray-600">
                Live tracking of placement trends, skill gaps, and industry demands
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Machine learning algorithms for personalized career recommendations
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">Industry Partnerships</h3>
              <p className="text-gray-600">
                Direct connections with leading companies across multiple sectors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}