'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <span className="text-white font-semibold text-xl">Mentor</span>
          </motion.div>

          {/* Description */}
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
            Your personal AI-powered mentor for continuous learning and growth
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-white/60 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                color: ['#ef4444', '#f97316', '#ef4444']
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart size={16} fill="currentColor" />
            </motion.div>
            <span>by AI Mentor Team</span>
          </div>
          
          <p className="text-white/40 text-xs mt-2">
            © 2024 AI Mentor. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}