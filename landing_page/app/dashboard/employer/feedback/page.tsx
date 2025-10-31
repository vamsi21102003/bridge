'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Star, 
  ThumbsUp, 
  Send, 
  Filter, 
  Search,
  Calendar,
  Building2,
  TrendingUp,
  Sparkles,
  CheckCircle,
  MapPin,
  Briefcase,
  Quote,
  ArrowRight,
  Plus,
  Eye
} from 'lucide-react';
import FeedbackSummary from '@/components/feedback/FeedbackSummary';

// Mock feedback data
const mockFeedbacks = [
  {
    id: 1,
    candidateName: "Priya Sharma",
    position: "Senior Software Engineer",
    company: "TechVision India",
    rating: 5,
    date: "2024-10-25",
    location: "Bangalore, Karnataka",
    feedback: "Amazing experience! The interview process was smooth and professional. The team was incredibly welcoming and the onboarding process exceeded my expectations. The work culture perfectly balances innovation with Indian values, and I'm thriving in my new role.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    jobType: "Full-time",
    department: "Engineering",
    verified: true,
    helpful: 24,
    tags: ["Great Culture", "Professional", "Smooth Process"]
  },
  {
    id: 2,
    candidateName: "Arjun Patel",
    position: "Product Manager",
    company: "InnovateHub Solutions",
    rating: 5,
    date: "2024-10-20",
    location: "Mumbai, Maharashtra",
    feedback: "Outstanding company culture and leadership. The role perfectly matched the job description, and the team has been incredibly supportive. The growth opportunities in the Indian market are endless, and I feel valued as an employee with excellent work-life balance.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    jobType: "Full-time",
    department: "Product",
    verified: true,
    helpful: 18,
    tags: ["Great Leadership", "Growth Opportunities", "Supportive Team"]
  },
  {
    id: 3,
    candidateName: "Kavya Reddy",
    position: "UX Designer",
    company: "DesignCraft Studios",
    rating: 4,
    date: "2024-10-18",
    location: "Hyderabad, Telangana",
    feedback: "Really positive experience overall. The creative freedom and collaborative environment are exactly what I was looking for. The company respects Indian festivals and traditions while maintaining a modern work culture. Everything has been smooth since joining.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    jobType: "Full-time",
    department: "Design",
    verified: true,
    helpful: 15,
    tags: ["Creative Freedom", "Collaborative", "Good Work-Life Balance"]
  },
  {
    id: 4,
    candidateName: "Rohit Kumar",
    position: "Data Scientist",
    company: "DataInsights Technologies",
    rating: 5,
    date: "2024-10-15",
    location: "Pune, Maharashtra",
    feedback: "Exceptional opportunity to work with cutting-edge technology and brilliant minds. The mentorship program follows the Indian guru-shishya tradition beautifully, and I've learned more in my first month than I did in my previous year elsewhere. Highly recommend this company!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    jobType: "Full-time",
    department: "Data Science",
    verified: true,
    helpful: 31,
    tags: ["Cutting-edge Tech", "Great Mentorship", "Learning Opportunities"]
  },
  {
    id: 5,
    candidateName: "Sneha Gupta",
    position: "Marketing Specialist",
    company: "BrandForge Agency",
    rating: 4,
    date: "2024-10-12",
    location: "Delhi, NCR",
    feedback: "Great team dynamics and interesting projects. The work is challenging in the best way possible, and there's a real sense of making an impact in the Indian market. The office culture is vibrant, inclusive, and celebrates diversity beautifully.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    jobType: "Full-time",
    department: "Marketing",
    verified: true,
    helpful: 12,
    tags: ["Team Dynamics", "Challenging Work", "Inclusive Culture"]
  },
  {
    id: 6,
    candidateName: "Vikram Singh",
    position: "Sales Manager",
    company: "SalesMax Solutions",
    rating: 5,
    date: "2024-10-10",
    location: "Chennai, Tamil Nadu",
    feedback: "Best career move I've ever made! The commission structure is fair, the leads are high-quality across Indian markets, and the sales tools provided are top-notch. Management is supportive and truly cares about employee success and family values.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    jobType: "Full-time",
    department: "Sales",
    verified: true,
    helpful: 22,
    tags: ["Fair Commission", "Quality Leads", "Supportive Management"]
  }
];

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState(mockFeedbacks);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState(mockFeedbacks);
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // New feedback form state
  const [newFeedback, setNewFeedback] = useState({
    candidateName: '',
    position: '',
    company: '',
    rating: 5,
    feedback: '',
    location: '',
    department: '',
    jobType: 'Full-time'
  });

  useEffect(() => {
    let filtered = feedbacks;

    if (searchTerm) {
      filtered = filtered.filter(feedback => 
        feedback.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feedback.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feedback.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feedback.feedback.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (ratingFilter !== 'all') {
      filtered = filtered.filter(feedback => feedback.rating === parseInt(ratingFilter));
    }

    if (departmentFilter !== 'all') {
      filtered = filtered.filter(feedback => feedback.department === departmentFilter);
    }

    setFilteredFeedbacks(filtered);
  }, [searchTerm, ratingFilter, departmentFilter, feedbacks]);

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    const feedback = {
      id: feedbacks.length + 1,
      ...newFeedback,
      date: new Date().toISOString().split('T')[0],
      avatar: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000)}?w=150&h=150&fit=crop&crop=face`,
      verified: true,
      helpful: 0,
      tags: ["New Feedback"]
    };
    
    setFeedbacks([feedback, ...feedbacks]);
    setNewFeedback({
      candidateName: '',
      position: '',
      company: '',
      rating: 5,
      feedback: '',
      location: '',
      department: '',
      jobType: 'Full-time'
    });
    setShowPostModal(false);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const averageRating = feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0) / feedbacks.length;
  const totalFeedbacks = feedbacks.length;
  const departments = [...new Set(feedbacks.map(f => f.department))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
              
              <div>
                <motion.h1
                  className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Candidate Feedback Hub
                </motion.h1>
                <motion.p
                  className="text-gray-600 text-lg mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Real feedback from candidates who found their dream jobs through our platform
                </motion.p>
                <motion.div
                  className="flex items-center space-x-4 mt-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(Math.round(averageRating))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {averageRating.toFixed(1)} average rating
                    </span>
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">{totalFeedbacks} total reviews</span>
                </motion.div>
              </div>
            </div>

            <motion.button
              onClick={() => setShowPostModal(true)}
              className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span className="font-medium">Post Feedback</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: MessageSquare, label: "Total Reviews", value: totalFeedbacks, color: "purple", trend: "+12%" },
              { icon: Star, label: "Average Rating", value: averageRating.toFixed(1), color: "yellow", trend: "+0.3" },
              { icon: ThumbsUp, label: "Positive Reviews", value: `${Math.round((feedbacks.filter(f => f.rating >= 4).length / totalFeedbacks) * 100)}%`, color: "green", trend: "+8%" },
              { icon: TrendingUp, label: "This Month", value: "24", color: "blue", trend: "+15%" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-green-500 text-sm font-medium flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {stat.trend}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</div>
                
                {/* Progress bar animation */}
                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((parseInt(stat.value) / (stat.value.includes('%') ? 100 : 100)) * 100, 100)}%` }}
                    transition={{ delay: 0.7 + index * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search feedback by name, position, or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Ratings</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
              
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Feedback Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <AnimatePresence>
            {filteredFeedbacks.map((feedback, index) => (
              <motion.div
                key={feedback.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src={feedback.avatar}
                          alt={feedback.candidateName}
                          className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                        />
                        {feedback.verified && (
                          <motion.div
                            className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                          >
                            <CheckCircle className="w-3 h-3 text-white" />
                          </motion.div>
                        )}
                      </motion.div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                          {feedback.candidateName}
                        </h3>
                        <p className="text-purple-600 font-medium">{feedback.position}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Building2 className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{feedback.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-2">
                        {renderStars(feedback.rating)}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(feedback.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Feedback Content */}
                  <div className="mb-6">
                    <div className="flex items-start space-x-3">
                      <Quote className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {feedback.feedback}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {feedback.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + tagIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{feedback.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{feedback.jobType}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <motion.button
                        className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{feedback.helpful}</span>
                      </motion.button>
                      
                      <motion.button
                        onClick={() => {
                          setSelectedFeedback(feedback);
                          setShowDetailModal(true);
                        }}
                        className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors duration-200 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">View Details</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredFeedbacks.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No feedback found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setRatingFilter('all');
                setDepartmentFilter('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-200"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Feedback Summary */}
        {filteredFeedbacks.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <FeedbackSummary 
              totalFeedbacks={totalFeedbacks}
              averageRating={averageRating}
              positivePercentage={Math.round((feedbacks.filter(f => f.rating >= 4).length / totalFeedbacks) * 100)}
            />
          </motion.div>
        )}
      </div>

      {/* Post Feedback Modal */}
      <AnimatePresence>
        {showPostModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Plus className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Share Your Success Story</h2>
                      <p className="text-gray-600">Help other candidates by sharing your experience</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPostModal(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl transition-colors duration-200"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmitFeedback} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newFeedback.candidateName}
                        onChange={(e) => setNewFeedback({...newFeedback, candidateName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Position *
                      </label>
                      <input
                        type="text"
                        required
                        value={newFeedback.position}
                        onChange={(e) => setNewFeedback({...newFeedback, position: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your job title"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={newFeedback.company}
                        onChange={(e) => setNewFeedback({...newFeedback, company: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={newFeedback.location}
                        onChange={(e) => setNewFeedback({...newFeedback, location: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="City, State"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Department *
                      </label>
                      <select
                        required
                        value={newFeedback.department}
                        onChange={(e) => setNewFeedback({...newFeedback, department: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select Department</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Product">Product</option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Data Science">Data Science</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Type *
                      </label>
                      <select
                        required
                        value={newFeedback.jobType}
                        onChange={(e) => setNewFeedback({...newFeedback, jobType: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rating *
                    </label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewFeedback({...newFeedback, rating: star})}
                          className="focus:outline-none transition-transform duration-200 hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= newFeedback.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-4 text-sm text-gray-600">
                        {newFeedback.rating} star{newFeedback.rating !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Feedback *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={newFeedback.feedback}
                      onChange={(e) => setNewFeedback({...newFeedback, feedback: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Share your experience working at this company. What did you like most? How was the interview process? Would you recommend it to others?"
                    />
                  </div>

                  <div className="flex space-x-4 pt-6">
                    <motion.button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl py-4 px-6 font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-5 h-5" />
                      <span>Submit Feedback</span>
                    </motion.button>
                    <button
                      type="button"
                      onClick={() => setShowPostModal(false)}
                      className="px-6 py-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail Modal */}
      <AnimatePresence>
        {showDetailModal && selectedFeedback && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <img
                      src={selectedFeedback.avatar}
                      alt={selectedFeedback.candidateName}
                      className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedFeedback.candidateName}</h2>
                      <p className="text-purple-600 font-medium">{selectedFeedback.position}</p>
                      <p className="text-gray-600">{selectedFeedback.company}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowDetailModal(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl transition-colors duration-200"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Quote className="w-6 h-6 text-purple-500" />
                        <h3 className="text-xl font-bold text-gray-900">Detailed Feedback</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {selectedFeedback.feedback}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedFeedback.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Details</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Star className="w-5 h-5 text-yellow-400" />
                          <div>
                            <div className="flex">
                              {renderStars(selectedFeedback.rating)}
                            </div>
                            <span className="text-sm text-gray-600">{selectedFeedback.rating}/5 stars</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="font-medium text-gray-900">Date Posted</p>
                            <p className="text-sm text-gray-600">{new Date(selectedFeedback.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="font-medium text-gray-900">Location</p>
                            <p className="text-sm text-gray-600">{selectedFeedback.location}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Briefcase className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="font-medium text-gray-900">Job Type</p>
                            <p className="text-sm text-gray-600">{selectedFeedback.jobType}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Building2 className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="font-medium text-gray-900">Department</p>
                            <p className="text-sm text-gray-600">{selectedFeedback.department}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <ThumbsUp className="w-5 h-5 text-green-500" />
                        <h3 className="text-lg font-bold text-gray-900">Community</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Helpful votes</span>
                          <span className="font-bold text-green-600">{selectedFeedback.helpful}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Verified review</span>
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}