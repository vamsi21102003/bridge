'use client';

import { Header } from '@/components/university-layout/Header';
import { Footer } from '@/components/university-layout/Footer';
import { 
  HelpCircle, 
  Book, 
  MessageCircle, 
  Mail, 
  Phone, 
  Search,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function HelpPage() {
  const faqCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      faqs: [
        {
          question: 'How do I access the university dashboard?',
          answer: 'Login with your university credentials and navigate to the Dashboard section from the main menu.'
        },
        {
          question: 'What is the AI-powered career guidance system?',
          answer: 'Our AI system analyzes student profiles, market trends, and placement data to provide personalized career recommendations.'
        },
        {
          question: 'How do I view placement statistics?',
          answer: 'Go to University Dashboard > Analytics to view comprehensive placement statistics and trends.'
        }
      ]
    },
    {
      title: 'Account & Profile',
      icon: MessageCircle,
      faqs: [
        {
          question: 'How do I update my profile information?',
          answer: 'Click on your profile icon in the top right corner and select "Profile" to edit your information.'
        },
        {
          question: 'How do I change my password?',
          answer: 'Go to Settings > Security Settings to change your password securely.'
        },
        {
          question: 'Can I customize notification preferences?',
          answer: 'Yes, visit Settings > Notification Preferences to customize which notifications you receive.'
        }
      ]
    },
    {
      title: 'Analytics & Reports',
      icon: HelpCircle,
      faqs: [
        {
          question: 'How do I generate placement reports?',
          answer: 'Navigate to Analytics > Reports section where you can generate and download various placement reports.'
        },
        {
          question: 'What data is included in skill gap analysis?',
          answer: 'Skill gap analysis includes student competencies, industry requirements, and AI-powered recommendations for improvement.'
        },
        {
          question: 'How often is the data updated?',
          answer: 'Dashboard data is updated in real-time, while comprehensive reports are generated daily.'
        }
      ]
    }
  ];

  const contactOptions = [
    {
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      contact: 'support@bput.ac.in',
      icon: Mail,
      action: 'Send Email'
    },
    {
      title: 'Phone Support',
      description: 'Speak with our support team',
      contact: '+91 674 2386 081',
      icon: Phone,
      action: 'Call Now'
    },
    {
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      contact: 'Available 9 AM - 6 PM',
      icon: MessageCircle,
      action: 'Start Chat'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userRole="guest" currentPage="help" />
      
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="page-enter">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions and get support for the BPUT University Portal
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
              <Book className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">User Guide</h3>
              <p className="text-gray-600 mb-4">Complete guide to using the university portal</p>
              <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                View Guide <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
              <MessageCircle className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">Step-by-step video tutorials for key features</p>
              <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                Watch Videos <ExternalLink className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
              <HelpCircle className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">System Status</h3>
              <p className="text-gray-600 mb-4">Check current system status and updates</p>
              <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                Check Status <ExternalLink className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <category.icon className="w-6 h-6 text-primary-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-sm text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Still Need Help?</h2>
              <p className="text-gray-600">Our support team is here to assist you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors duration-200">
                  <option.icon className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                  <p className="text-sm font-medium text-gray-900 mb-4">{option.contact}</p>
                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                    {option.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}