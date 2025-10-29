'use client';

import React from 'react';

interface SubscriptionCardProps {
  type: 'pro' | 'ai' | 'premium';
  isActive?: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ type, isActive = false }) => {
  const subscriptionData = {
    pro: {
      title: 'BriDGe Pro',
      icon: '✨',
      price: 2499,
      period: 'month',
      description: 'Unlock AI-powered career insights, premium mentoring, and exclusive opportunities',
      gradient: 'from-purple-600 to-blue-600',
      features: ['AI Career Mentor', 'Priority Support', 'Exclusive Jobs', 'Advanced Analytics']
    },
    ai: {
      title: 'AI Premium',
      icon: '🤖',
      price: 1599,
      period: 'month',
      description: 'Advanced AI features for resume optimization and interview preparation',
      gradient: 'from-blue-600 to-indigo-600',
      features: ['Smart Resume Builder', 'AI Interview Coach', 'Skill Recommendations', 'Career Roadmap']
    },
    premium: {
      title: 'Premium Support',
      icon: '🎧',
      price: 799,
      period: 'month',
      description: '24/7 priority support with dedicated career counselors',
      gradient: 'from-green-600 to-teal-600',
      features: ['24/7 Support', 'Personal Counselor', 'Priority Queue', 'Phone Support']
    }
  };

  const data = subscriptionData[type];

  return (
    <div className={`bg-gradient-to-br ${data.gradient} rounded-2xl p-6 text-white relative overflow-hidden ${
      isActive ? 'ring-4 ring-white/30' : ''
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-6 h-6 border border-white rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{data.icon}</span>
            <h4 className="font-bold text-lg">{data.title}</h4>
          </div>
          {isActive && (
            <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full font-medium">
              Active
            </span>
          )}
        </div>
        
        <p className="text-sm opacity-90 mb-4">
          {data.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold">₹{data.price.toLocaleString()}</span>
            <span className="text-sm opacity-75">/{data.period}</span>
          </div>
          <div className="text-right">
            <div className="text-xs opacity-75">Save 17%</div>
            <div className="text-sm font-medium">with yearly</div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-2">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                <span className="text-xs opacity-90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${
          isActive 
            ? 'bg-white/20 text-white border border-white/30 hover:bg-white/30' 
            : 'bg-white text-purple-600 hover:bg-gray-100'
        }`}>
          {isActive ? 'Manage Subscription' : `Upgrade Now 🚀`}
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;