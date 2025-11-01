'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Star, 
  Users, 
  ArrowRight, 
  GraduationCap, 
  Building2, 
  Sparkles,
  MessageSquare,
  Heart,
  TrendingUp
} from 'lucide-react';

const featuredStories = [
  {
    id: 1,
    name: "Rohit Sahu",
    college: "ITER, Bhubaneswar",
    company: "Infosys Limited",
    role: "Software Developer",
    rating: 5,
    preview: "BriDGe platform transformed my career journey completely! The AI-powered job matching connected me with Infosys...",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    skills: ["Python", "Communication", "Resume Building"],
    likes: 45
  },
  {
    id: 2,
    name: "Priya Das",
    college: "CV Raman Global University",
    company: "TCS",
    role: "Data Analyst",
    rating: 5,
    preview: "Amazing experience with BriDGe! The platform's career guidance helped me transition from a confused final year student...",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    skills: ["AI/ML", "Data Analysis", "Problem Solving"],
    likes: 38
  },
  {
    id: 3,
    name: "Arjun Panda",
    college: "Silicon Institute of Technology",
    company: "Wipro Technologies",
    role: "Frontend Developer",
    rating: 5,
    preview: "BriDGe is a game-changer for engineering students! The web development track was perfectly structured...",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    skills: ["Web Development", "React", "Team Work"],
    likes: 32
  }
];

export default function FeedbackShowcase() {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 shadow-lg border border-white/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full translate-y-12 -translate-x-12"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Trophy className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Student Success Stories</h3>
              <p className="text-gray-600">Real experiences from BPUT students who got placed through BriDGe</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">150+ stories</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600">94% placement rate</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl opacity-50 cursor-not-allowed">
            <span className="font-medium">Stories Coming Soon</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Featured Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredStories.map((story, index) => (
            <motion.div
              key={story.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-white/20 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Student Info */}
              <div className="flex items-center space-x-3 mb-4">
                <motion.img
                  src={story.avatar}
                  alt={story.name}
                  className="w-12 h-12 rounded-xl object-cover shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {story.name}
                  </h4>
                  <p className="text-blue-600 text-sm font-medium">{story.role}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-gray-500">{story.likes}</span>
                </div>
              </div>

              {/* College & Company */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-gray-600">{story.college}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">{story.company}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {renderStars(story.rating)}
                </div>
                <span className="text-sm text-gray-600">{story.rating}/5</span>
              </div>

              {/* Preview */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {story.preview}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {story.skills.slice(0, 2).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {story.skills.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                    +{story.skills.length - 2}
                  </span>
                )}
              </div>

              {/* Read More */}
              <div className="text-gray-400 text-sm font-medium flex items-center space-x-1 cursor-not-allowed">
                <span>Story preview only</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <MessageSquare className="w-8 h-8" />
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </div>
          <h4 className="text-xl font-bold mb-2">Got Placed? Share Your Success Story!</h4>
          <p className="text-blue-100 mb-4">
            Inspire fellow BPUT students by sharing your journey and help them achieve their career goals
          </p>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl opacity-50 cursor-not-allowed">
            <span>Feature Coming Soon</span>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}