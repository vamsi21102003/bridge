'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Award, Users, MessageSquare, Heart } from 'lucide-react';

interface FeedbackSummaryProps {
  totalFeedbacks: number;
  averageRating: number;
  positivePercentage: number;
}

export default function FeedbackSummary({ totalFeedbacks, averageRating, positivePercentage }: FeedbackSummaryProps) {
  const ratingDistribution = [
    { stars: 5, count: Math.floor(totalFeedbacks * 0.65), percentage: 65 },
    { stars: 4, count: Math.floor(totalFeedbacks * 0.25), percentage: 25 },
    { stars: 3, count: Math.floor(totalFeedbacks * 0.07), percentage: 7 },
    { stars: 2, count: Math.floor(totalFeedbacks * 0.02), percentage: 2 },
    { stars: 1, count: Math.floor(totalFeedbacks * 0.01), percentage: 1 },
  ];

  const highlights = [
    {
      icon: Award,
      title: "Excellence Award",
      description: "Top 1% platform for candidate satisfaction",
      color: "yellow"
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Over 10,000 successful job placements",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Loved by Candidates",
      description: "96% would recommend to friends",
      color: "red"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl p-8 shadow-lg border border-white/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Rating Overview */}
        <div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Rating Overview</h3>
              <p className="text-gray-600">Detailed breakdown of candidate feedback</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < Math.round(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600">Based on {totalFeedbacks} reviews</p>
            </div>

            <div className="space-y-3">
              {ratingDistribution.map((rating, index) => (
                <motion.div
                  key={rating.stars}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-1 w-16">
                    <span className="text-sm font-medium text-gray-700">{rating.stars}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${rating.percentage}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <div className="w-12 text-right">
                    <span className="text-sm text-gray-600">{rating.count}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{positivePercentage}%</div>
              <div className="text-sm text-green-700">Positive Reviews</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">4.2x</div>
              <div className="text-sm text-blue-700">Industry Average</div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Platform Highlights</h3>
              <p className="text-gray-600">Why candidates choose us</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br from-${highlight.color}-500 to-${highlight.color}-600 rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <highlight.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{highlight.title}</h4>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <MessageSquare className="w-8 h-8" />
              <div>
                <h4 className="text-xl font-bold">Join the Success Stories</h4>
                <p className="text-purple-100">Share your experience and inspire others</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-purple-200 text-sm">Companies</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">10K+</div>
                <div className="text-purple-200 text-sm">Candidates</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">95%</div>
                <div className="text-purple-200 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}