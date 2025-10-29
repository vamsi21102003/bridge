'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  X, 
  Check, 
  Crown, 
  Zap, 
  Award, 
  Star, 
  Sparkles, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Heart,
  Shield,
  Rocket,
  Target,
  TrendingUp,
  Users,
  BarChart3,
  MessageSquare,
  Calendar,
  Search,
  Filter,
  Database,
  Globe,
  Code,
  Headphones,
  Lock,
  Palette,
  Activity,
  PieChart,
  Download,
  Clock,
  Building2,
  Settings,
  Bell,
  Mail,
  Phone,
  CreditCard,
  Gift,
  Percent,
  DollarSign,
  CheckCircle,
  XCircle,
  Info,
  AlertCircle,
  Lightbulb,
  Briefcase,
  FileText,
  Share2,
  Upload,
  RefreshCw,
  Archive,
  UserCheck,
  Plus,
  Minus,
  Eye,
  Edit3,
  Trash2,
  Copy,
  ExternalLink,
  Maximize2,
  Minimize2,
  MoreHorizontal,
  MoreVertical,
  PlayCircle,
  PauseCircle,
  Volume2,
  VolumeX,
  Wifi,
  Smartphone,
  Monitor,
  Tablet,
  Laptop
} from 'lucide-react';

interface SubscriptionPageProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

const SubscriptionPage: React.FC<SubscriptionPageProps> = ({ isOpen, onClose, selectedPlan = 'Professional' }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('plans');
  const [selectedPlanState, setSelectedPlanState] = useState(selectedPlan);
  const [showComparison, setShowComparison] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Animation sequence on mount
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setAnimationStep(1), 100);
      const timer2 = setTimeout(() => setAnimationStep(2), 300);
      const timer3 = setTimeout(() => setAnimationStep(3), 500);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isOpen]);

  // Comprehensive subscription plans with enhanced features
  const subscriptionPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '₹2,999',
      originalPrice: '₹3,999',
      period: '/month',
      popular: false,
      discount: '25% OFF',
      description: 'Perfect for small businesses starting their hiring journey',
      features: [
        { name: '5 Job Posts per month', icon: Briefcase, included: true },
        { name: 'Basic Analytics Dashboard', icon: BarChart3, included: true },
        { name: 'Email Support (24-48h response)', icon: Mail, included: true },
        { name: 'Standard Job Templates (10)', icon: FileText, included: true },
        { name: 'Basic Candidate Filtering', icon: Filter, included: true },
        { name: 'Application Management', icon: Users, included: true },
        { name: 'Company Profile Page', icon: Building2, included: true },
        { name: 'Mobile App Access', icon: Smartphone, included: true },
        { name: 'AI-Powered Matching', icon: Target, included: false },
        { name: 'Advanced Analytics', icon: PieChart, included: false },
        { name: 'Priority Support', icon: Headphones, included: false },
        { name: 'Custom Branding', icon: Palette, included: false }
      ],
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      icon: Zap,
      buttonText: 'Start Free Trial',
      trialDays: 14
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '₹5,999',
      originalPrice: '₹7,999',
      period: '/month',
      popular: true,
      discount: '25% OFF',
      description: 'Most popular choice for growing companies',
      features: [
        { name: '25 Job Posts per month', icon: Briefcase, included: true },
        { name: 'Advanced Analytics & Reports', icon: PieChart, included: true },
        { name: 'Priority Email & Chat Support', icon: Headphones, included: true },
        { name: 'Premium Job Templates (50+)', icon: FileText, included: true },
        { name: 'AI-Powered Candidate Matching', icon: Target, included: true },
        { name: 'Custom Company Branding', icon: Palette, included: true },
        { name: 'Interview Scheduling Tools', icon: Calendar, included: true },
        { name: 'Bulk Actions & Management', icon: Settings, included: true },
        { name: 'Social Media Job Sharing', icon: Share2, included: true },
        { name: 'Candidate Database Access', icon: Database, included: true },
        { name: 'Email Campaign Tools', icon: Mail, included: true },
        { name: 'Advanced Search Filters', icon: Search, included: true },
        { name: 'Team Collaboration (5 users)', icon: Users, included: true },
        { name: 'API Access (Basic)', icon: Code, included: true },
        { name: 'White-label Solution', icon: Crown, included: false },
        { name: 'Dedicated Account Manager', icon: UserCheck, included: false }
      ],
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-pink-50',
      icon: Crown,
      buttonText: 'Get Started',
      trialDays: 30
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '₹12,999',
      originalPrice: '₹15,999',
      period: '/month',
      popular: false,
      discount: '19% OFF',
      description: 'Complete solution for large organizations',
      features: [
        { name: 'Unlimited Job Posts', icon: Briefcase, included: true },
        { name: 'Complete Analytics Suite', icon: Activity, included: true },
        { name: 'Dedicated Account Manager', icon: UserCheck, included: true },
        { name: 'Custom Templates & Workflows', icon: FileText, included: true },
        { name: 'Advanced AI Matching Algorithm', icon: Target, included: true },
        { name: 'White-label Solution', icon: Crown, included: true },
        { name: 'Full API Access & Integrations', icon: Code, included: true },
        { name: 'Multi-location Support', icon: Globe, included: true },
        { name: 'Advanced Team Management', icon: Users, included: true },
        { name: 'Custom Reports & Dashboards', icon: PieChart, included: true },
        { name: 'Priority Phone Support (24/7)', icon: Phone, included: true },
        { name: 'Onboarding Assistance', icon: Rocket, included: true },
        { name: 'Custom Integrations', icon: Settings, included: true },
        { name: 'Advanced Security Features', icon: Shield, included: true },
        { name: 'Compliance Tools', icon: Lock, included: true },
        { name: 'Data Export & Backup', icon: Download, included: true }
      ],
      color: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      icon: Award,
      buttonText: 'Contact Sales',
      trialDays: 30
    }
  ];

  const handlePlanSelect = async (planId: string) => {
    setIsLoading(true);
    setSelectedPlanState(planId);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 3000);
  };

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechStart Solutions',
      role: 'HR Director',
      content: 'HireKarma transformed our hiring process. We reduced time-to-hire by 60% and found better candidates.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      company: 'InnovateCorp',
      role: 'Talent Acquisition Lead',
      content: 'The AI matching feature is incredible. It saves us hours of screening and delivers quality candidates.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Amit Patel',
      company: 'GrowthTech',
      role: 'CEO',
      content: 'Best investment we made for our HR team. The analytics help us make data-driven hiring decisions.',
      rating: 5,
      avatar: '👨‍💻'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 z-50 overflow-y-auto">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <div className={`bg-white/10 backdrop-blur-md border-b border-white/20 transition-all duration-1000 ${animationStep >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">HireKarma</h1>
                  <p className="text-xs text-purple-200">Subscription Plans</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${animationStep >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>Limited Time Offer - Up to 25% OFF</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Supercharge Your Hiring
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
              Choose the perfect plan to transform your recruitment process with AI-powered matching, 
              advanced analytics, and premium features designed for modern hiring teams.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: '10,000+', label: 'Companies Trust Us', icon: Building2 },
                { number: '500K+', label: 'Successful Hires', icon: Users },
                { number: '60%', label: 'Faster Hiring', icon: Clock },
                { number: '95%', label: 'Satisfaction Rate', icon: Star }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <stat.icon className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Plans Section */}
          <div className={`transition-all duration-1000 delay-500 ${animationStep >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {subscriptionPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${
                    plan.popular ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
                  } ${selectedPlanState === plan.id ? 'ring-4 ring-green-500' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                        <Crown className="w-4 h-4 inline mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    {plan.discount}
                  </div>

                  <div className={`bg-gradient-to-br ${plan.bgGradient} p-8`}>
                    {/* Plan Header */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <plan.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                      
                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        </div>
                        <span className="text-gray-600">{plan.period}</span>
                      </div>

                      {/* Trial Info */}
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold inline-block">
                        {plan.trialDays} Days Free Trial
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handlePlanSelect(plan.id)}
                      disabled={isLoading}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isLoading && selectedPlanState === plan.id ? (
                        <div className="flex items-center justify-center space-x-2">
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Processing...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <span>{plan.buttonText}</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      )}
                    </button>
                  </div>

                  {/* Features List */}
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.slice(0, 8).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          {feature.included ? (
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          )}
                          <feature.icon className={`w-4 h-4 flex-shrink-0 ${feature.included ? 'text-purple-600' : 'text-gray-400'}`} />
                          <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-500'}`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                      {plan.features.length > 8 && (
                        <li className="text-sm text-purple-600 font-medium cursor-pointer hover:underline">
                          +{plan.features.length - 8} more features
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Comparison Toggle */}
          <div className="text-center mb-12">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center space-x-2">
                <span>Detailed Feature Comparison</span>
                {showComparison ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>
          </div>

          {/* Detailed Comparison Table */}
          {showComparison && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 border border-white/20 animate-fadeIn">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Complete Feature Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-4 text-white font-semibold">Features</th>
                      {subscriptionPlans.map(plan => (
                        <th key={plan.id} className="text-center py-4 px-4 text-white font-semibold">
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Get all unique features */}
                    {Array.from(new Set(subscriptionPlans.flatMap(plan => plan.features.map(f => f.name)))).map((featureName, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4 text-purple-200">{featureName}</td>
                        {subscriptionPlans.map(plan => {
                          const feature = plan.features.find(f => f.name === featureName);
                          return (
                            <td key={plan.id} className="text-center py-3 px-4">
                              {feature?.included ? (
                                <Check className="w-5 h-5 text-green-400 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-500 mx-auto" />
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Testimonials */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white text-center mb-8">What Our Customers Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-purple-200">{testimonial.role}</p>
                      <p className="text-xs text-purple-300">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-purple-100 text-sm italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "Can I change my plan anytime?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
                },
                {
                  question: "Is there a free trial?",
                  answer: "Yes! All plans come with a free trial period. No credit card required to start."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, UPI, net banking, and digital wallets."
                },
                {
                  question: "Do you offer refunds?",
                  answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">{faq.question}</h4>
                  <p className="text-purple-200 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 z-60 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center animate-bounce">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
            <p className="text-gray-600 mb-4">Your subscription has been activated successfully.</p>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span className="text-sm">Redirecting...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPage;

// Add custom CSS animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); }
    50% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.6); }
  }
  
  .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
  .animate-slideInLeft { animation: slideInLeft 0.8s ease-out; }
  .animate-slideInRight { animation: slideInRight 0.8s ease-out; }
  .animate-scaleIn { animation: scaleIn 0.5s ease-out; }
  .animate-float { animation: float 3s ease-in-out infinite; }
  .animate-glow { animation: glow 2s ease-in-out infinite; }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}