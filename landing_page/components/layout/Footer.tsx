'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { ROUTES, COMPANY_INFO } from '@/constants'

export function Footer() {
  const [email, setEmail] = useState('')

  const footerSections = {
    students: [
      { name: 'Find Opportunities', href: '#opportunities', icon: '🔍' },
      { name: 'Career Guidance', href: '#guidance', icon: '🎯' },
      { name: 'Skill Development', href: '#skills', icon: '⚡' },
      { name: 'Dashboard', href: '#dashboard', icon: '📊' }
    ],
    company: [
      { name: 'About Us', href: '#hero', icon: '🏢' },
      { name: 'Contact', href: '#contact', icon: '📞' },
      { name: 'Privacy Policy', href: '#privacy', icon: '🔒' },
      { name: 'Terms of Service', href: '#terms', icon: '📋' }
    ]
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">BriDGe</h3>
                <p className="text-sm text-gray-400">Bridge the gap between talent and opportunity</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming career development through AI-powered insights and personalized recommendations. 
              Bridging the gap between talent and opportunity.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold mb-3 text-purple-400">Stay Updated</h4>
              <p className="text-sm text-gray-300 mb-4">Get the latest opportunities and insights</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-600/50 border-gray-500 text-white placeholder-gray-400"
                />
                <Button type="submit" size="sm" className="bg-purple-600 hover:bg-purple-700">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Students */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-sm">🎓</span>
              </div>
              <h3 className="font-semibold text-blue-400">For Students</h3>
            </div>
            <ul className="space-y-3">
              {footerSections.students.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <span className="text-sm">{link.icon}</span>
                    </div>
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                <span className="text-white text-sm">🏢</span>
              </div>
              <h3 className="font-semibold text-purple-400">Company</h3>
            </div>
            <ul className="space-y-3 mb-6">
              {footerSections.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                      <span className="text-sm">{link.icon}</span>
                    </div>
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>support@bridge.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} BriDGe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}