'use client';

import React from 'react';
import { Course } from '@/types/student';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const getProviderIcon = (provider: string) => {
    switch (provider) {
      case 'youtube':
        return '📺';
      case 'coursera':
        return '🎓';
      default:
        return '📚';
    }
  };

  const getProviderColor = (provider: string) => {
    switch (provider) {
      case 'youtube':
        return 'bg-red-100 text-red-800';
      case 'coursera':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-primary flex items-center justify-center">
        <div className="text-4xl text-white">
          {getProviderIcon(course.provider)}
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProviderColor(course.provider)}`}>
            {course.provider.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">by {course.instructor}</p>

        {/* Course Details */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>⏱️ {course.duration}</span>
          <span>📊 {course.level}</span>
        </div>

        {/* Rating and Students */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-medium text-gray-700">{course.rating}</span>
          </div>
          <span className="text-sm text-gray-500">
            {course.students.toLocaleString()} students
          </span>
        </div>

        {/* Action Button */}
        <button className="w-full py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default CourseCard;