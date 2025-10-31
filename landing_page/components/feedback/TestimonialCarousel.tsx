'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  rating: number;
  feedback: string;
  avatar: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ananya Iyer",
    position: "Senior Software Engineer",
    company: "TechVision India",
    rating: 5,
    feedback: "Amazing experience! The interview process was smooth and professional. The team was incredibly welcoming and the onboarding process exceeded my expectations. The work culture perfectly balances innovation with Indian values, and I'm thriving in my new role.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    location: "Bangalore, Karnataka"
  },
  {
    id: 2,
    name: "Rajesh Mehta",
    position: "Product Manager",
    company: "InnovateHub Solutions",
    rating: 5,
    feedback: "Outstanding company culture and leadership. The role perfectly matched the job description, and the team has been incredibly supportive. The growth opportunities in the Indian market are endless, and I feel valued as an employee with excellent work-life balance.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    location: "Mumbai, Maharashtra"
  },
  {
    id: 3,
    name: "Deepika Nair",
    position: "UX Designer",
    company: "DesignCraft Studios",
    rating: 4,
    feedback: "Really positive experience overall. The creative freedom and collaborative environment are exactly what I was looking for. The company respects Indian festivals and traditions while maintaining a modern work culture. Everything has been smooth since joining.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    location: "Kochi, Kerala"
  },
  {
    id: 4,
    name: "Aditya Joshi",
    position: "Data Scientist",
    company: "DataInsights Technologies",
    rating: 5,
    feedback: "Exceptional opportunity to work with cutting-edge technology and brilliant minds. The mentorship program follows the Indian guru-shishya tradition beautifully, and I've learned more in my first month than I did in my previous year elsewhere. Highly recommend this company!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    location: "Pune, Maharashtra"
  }
];

interface TestimonialCarouselProps {
  autoPlay?: boolean;
  interval?: number;
}

export default function TestimonialCarousel({ autoPlay = true, interval = 5000 }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-lg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full translate-y-12 -translate-x-12"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Success Stories</h3>
              <p className="text-gray-600">What our candidates say</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg bg-white/50 hover:bg-white/70 transition-colors duration-200"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-gray-600" />
              ) : (
                <Play className="w-4 h-4 text-gray-600" />
              )}
            </button>
            <button
              onClick={goToPrevious}
              className="p-2 rounded-lg bg-white/50 hover:bg-white/70 transition-colors duration-200"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-lg bg-white/50 hover:bg-white/70 transition-colors duration-200"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="relative h-80 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col justify-between shadow-lg border border-white/20">
                {/* Quote */}
                <div className="flex-1">
                  <div className="flex items-start space-x-4 mb-6">
                    <Quote className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg leading-relaxed italic">
                      "{currentTestimonial.feedback}"
                    </p>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <motion.img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
                      <p className="text-purple-600 font-medium">{currentTestimonial.position}</p>
                      <p className="text-gray-600 text-sm">{currentTestimonial.company} • {currentTestimonial.location}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-2">
                      {renderStars(currentTestimonial.rating)}
                    </div>
                    <p className="text-sm text-gray-500">{currentTestimonial.rating}/5 stars</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-purple-500 to-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        {isPlaying && (
          <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: interval / 1000, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        )}
      </div>
    </div>
  );
}