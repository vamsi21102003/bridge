'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Star, 
  Plus, 
  Edit3, 
  Save, 
  X, 
  Upload, 
  User, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Eye, 
  Heart, 
  TrendingUp,
  Sparkles,
  BookOpen,
  Target,
  Users,
  Trophy,
  Lightbulb
} from 'lucide-react';

// Mock data for BPUT-affiliated colleges
const bputColleges = [
  "ITER (Institute of Technical Education and Research), Bhubaneswar",
  "CV Raman Global University, Bhubaneswar", 
  "Silicon Institute of Technology, Bhubaneswar",
  "GIET University, Gunupur",
  "Centurion University, Bhubaneswar",
  "KIIT University, Bhubaneswar",
  "SOA University, Bhubaneswar",
  "Trident Academy of Technology, Bhubaneswar",
  "Gandhi Institute of Engineering and Technology, Gunupur",
  "Kalinga Institute of Industrial Technology, Bhubaneswar"
];

// Skills gained through BriDGe
const bridgeSkills = [
  "Communication Skills",
  "Python Programming",
  "AI/ML Basics",
  "Resume Building",
  "Interview Preparation",
  "Data Structures & Algorithms",
  "Web Development",
  "Database Management",
  "Project Management",
  "Leadership Skills",
  "Problem Solving",
  "Technical Writing",
  "Presentation Skills",
  "Team Collaboration",
  "Time Management"
];

// Mock feedback data with Indian students from BPUT colleges
const mockFeedbacks = [
  {
    id: 1,
    fullName: "Rohit Sahu",
    collegeName: "ITER (Institute of Technical Education and Research), Bhubaneswar",
    jobRole: "Software Developer",
    companyName: "Infosys Limited",
    skillsGained: ["Python Programming", "Communication Skills", "Resume Building", "Interview Preparation"],
    experience: "BriDGe platform transformed my career journey completely! The AI-powered job matching connected me with Infosys, and the skill development modules helped me crack the technical interviews. The mentorship program was exceptional, and I gained confidence in both technical and soft skills. Highly recommend to all engineering students in Odisha!",
    profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    dateSubmitted: "2024-10-20",
    likes: 45,
    verified: true
  },
  {
    id: 2,
    fullName: "Priya Das",
    collegeName: "CV Raman Global University, Bhubaneswar",
    jobRole: "Data Analyst",
    companyName: "Tata Consultancy Services (TCS)",
    skillsGained: ["AI/ML Basics", "Data Structures & Algorithms", "Technical Writing", "Problem Solving"],
    experience: "Amazing experience with BriDGe! The platform's career guidance helped me transition from a confused final year student to a confident data analyst at TCS. The AI/ML modules were comprehensive, and the mock interviews prepared me well. The placement support team was always available to help. Grateful for this opportunity!",
    profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    dateSubmitted: "2024-10-15",
    likes: 38,
    verified: true
  },
  {
    id: 3,
    fullName: "Arjun Panda",
    collegeName: "Silicon Institute of Technology, Bhubaneswar",
    jobRole: "Frontend Developer",
    companyName: "Wipro Technologies",
    skillsGained: ["Web Development", "Communication Skills", "Team Collaboration", "Project Management"],
    experience: "BriDGe is a game-changer for engineering students! The web development track was perfectly structured, and the real-world projects helped me build a strong portfolio. The career counselors guided me throughout the placement process. Now working at Wipro and loving every moment of it!",
    profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    dateSubmitted: "2024-10-10",
    likes: 32,
    verified: true
  },
  {
    id: 4,
    fullName: "Sneha Mohanty",
    collegeName: "GIET University, Gunupur",
    jobRole: "Business Analyst",
    companyName: "Accenture India",
    skillsGained: ["Problem Solving", "Presentation Skills", "Leadership Skills", "Database Management"],
    experience: "Incredible journey with BriDGe! Coming from a small town, I never thought I could land a job at Accenture. The platform's comprehensive training modules, especially in business analysis and presentation skills, made all the difference. The mentors were supportive and the placement assistance was top-notch!",
    profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    dateSubmitted: "2024-10-05",
    likes: 41,
    verified: true
  },
  {
    id: 5,
    fullName: "Subham Jena",
    collegeName: "Centurion University, Bhubaneswar",
    jobRole: "DevOps Engineer",
    companyName: "Tech Mahindra",
    skillsGained: ["Python Programming", "Database Management", "Time Management", "Technical Writing"],
    experience: "BriDGe exceeded all my expectations! The DevOps track was comprehensive and industry-relevant. The hands-on projects and expert mentorship helped me secure a position at Tech Mahindra. The platform's focus on both technical and soft skills development is commendable. Thank you BriDGe team!",
    profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    dateSubmitted: "2024-09-28",
    likes: 29,
    verified: true
  },
  {
    id: 6,
    fullName: "Ananya Sahoo",
    collegeName: "KIIT University, Bhubaneswar",
    jobRole: "UI/UX Designer",
    companyName: "HCL Technologies",
    skillsGained: ["Web Development", "Communication Skills", "Team Collaboration", "Presentation Skills"],
    experience: "BriDGe platform is simply outstanding! The UI/UX design course was well-structured with practical assignments. The career guidance sessions helped me understand industry requirements better. Successfully placed at HCL Technologies and couldn't be happier. Highly recommend to all design aspirants!",
    profilePicture: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    dateSubmitted: "2024-09-25",
    likes: 35,
    verified: true
  }
];

interface Feedback {
  id?: number;
  fullName: string;
  collegeName: string;
  jobRole: string;
  companyName: string;
  skillsGained: string[];
  experience: string;
  profilePicture?: string;
  dateSubmitted?: string;
  likes?: number;
  verified?: boolean;
}

export default function StudentFeedbackPage() {
  const [feedbacks, setFeedbacks] = useState(mockFeedbacks);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingFeedback, setEditingFeedback] = useState<Feedback | null>(null);
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [collegeFilter, setCollegeFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  // Form state
  const [formData, setFormData] = useState<Feedback>({
    fullName: '',
    collegeName: '',
    jobRole: '',
    companyName: '',
    skillsGained: [],
    experience: '',
    profilePicture: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.collegeName) {
      newErrors.collegeName = 'College name is required';
    }

    if (!formData.jobRole.trim()) {
      newErrors.jobRole = 'Job role is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (formData.skillsGained.length === 0) {
      newErrors.skillsGained = 'Please select at least one skill';
    }

    if (!formData.experience.trim()) {
      newErrors.experience = 'Experience description is required';
    } else if (formData.experience.length < 50) {
      newErrors.experience = 'Experience must be at least 50 characters';
    } else if (formData.experience.length > 1000) {
      newErrors.experience = 'Experience must not exceed 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const newFeedback: Feedback = {
      ...formData,
      id: editingFeedback ? editingFeedback.id : feedbacks.length + 1,
      dateSubmitted: editingFeedback ? editingFeedback.dateSubmitted : new Date().toISOString().split('T')[0],
      likes: editingFeedback ? editingFeedback.likes : 0,
      verified: true,
      profilePicture: formData.profilePicture || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    };

    if (editingFeedback) {
      setFeedbacks(feedbacks.map(f => f.id === editingFeedback.id ? newFeedback : f));
    } else {
      setFeedbacks([newFeedback, ...feedbacks]);
    }

    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      fullName: '',
      collegeName: '',
      jobRole: '',
      companyName: '',
      skillsGained: [],
      experience: '',
      profilePicture: ''
    });
    setErrors({});
    setShowAddModal(false);
    setEditingFeedback(null);
  };

  // Handle edit
  const handleEdit = (feedback: Feedback) => {
    setFormData(feedback);
    setEditingFeedback(feedback);
    setShowAddModal(true);
  };

  // Handle skill selection
  const toggleSkill = (skill: string) => {
    const updatedSkills = formData.skillsGained.includes(skill)
      ? formData.skillsGained.filter(s => s !== skill)
      : [...formData.skillsGained, skill];
    
    setFormData({ ...formData, skillsGained: updatedSkills });
  };

  // Filter feedbacks
  const filteredFeedbacks = feedbacks.filter(feedback => {
    const matchesSearch = feedback.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.jobRole.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCollege = collegeFilter === 'all' || feedback.collegeName === collegeFilter;
    
    return matchesSearch && matchesCollege;
  });

  const colleges = [...new Set(feedbacks.map(f => f.collegeName))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
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
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl"
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
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Trophy className="w-10 h-10 text-white" />
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
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Student Success Stories
                </motion.h1>
                <motion.p
                  className="text-gray-600 text-lg mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Share your journey and inspire fellow BPUT students
                </motion.p>
                <motion.div
                  className="flex items-center space-x-4 mt-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {feedbacks.length} success stories
                    </span>
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">From BPUT affiliated colleges</span>
                </motion.div>
              </div>
            </div>

            <motion.button
              onClick={() => setShowAddModal(true)}
              className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span className="font-medium">Share Your Story</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { icon: Trophy, label: "Success Stories", value: feedbacks.length, color: "blue", trend: "+12%" },
            { icon: GraduationCap, label: "BPUT Colleges", value: colleges.length, color: "purple", trend: "+3" },
            { icon: Building2, label: "Partner Companies", value: "50+", color: "green", trend: "+8%" },
            { icon: Target, label: "Placement Rate", value: "94%", color: "orange", trend: "+5%" }
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
            </motion.div>
          ))}
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
              <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, company, or job role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={collegeFilter}
                onChange={(e) => setCollegeFilter(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px]"
              >
                <option value="all">All Colleges</option>
                {colleges.map(college => (
                  <option key={college} value={college}>{college.split(',')[0]}</option>
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
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
                          src={feedback.profilePicture}
                          alt={feedback.fullName}
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
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {feedback.fullName}
                        </h3>
                        <p className="text-blue-600 font-medium">{feedback.jobRole}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Building2 className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{feedback.companyName}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <motion.button
                        onClick={() => handleEdit(feedback)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Edit3 className="w-4 h-4" />
                      </motion.button>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span>{feedback.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* College Info */}
                  <div className="flex items-center space-x-2 mb-4">
                    <GraduationCap className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-gray-600">{feedback.collegeName.split(',')[0]}</span>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <Lightbulb className="w-4 h-4 mr-2 text-yellow-500" />
                      Skills Gained through BriDGe
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {feedback.skillsGained.slice(0, 3).map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + skillIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                      {feedback.skillsGained.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          +{feedback.skillsGained.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Experience Preview */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {feedback.experience.substring(0, 150)}
                      {feedback.experience.length > 150 && '...'}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(feedback.dateSubmitted!).toLocaleDateString()}</span>
                    </div>
                    
                    <motion.button
                      onClick={() => {
                        setSelectedFeedback(feedback);
                        setShowDetailModal(true);
                      }}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">Read Full Story</span>
                    </motion.button>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No stories found</h3>
            <p className="text-gray-600 mb-6">Be the first to share your success story!</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              Share Your Story
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}   
   {/* Add/Edit Feedback Modal */}
      <AnimatePresence>
        {showAddModal && (
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
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      {editingFeedback ? <Edit3 className="w-6 h-6 text-white" /> : <Plus className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {editingFeedback ? 'Edit Your Story' : 'Share Your Success Story'}
                      </h2>
                      <p className="text-gray-600">Help inspire fellow BPUT students with your journey</p>
                    </div>
                  </div>
                  <button
                    onClick={resetForm}
                    className="text-gray-400 hover:text-gray-600 text-2xl transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                            errors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                          }`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    {/* College Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        College Name *
                      </label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select
                          value={formData.collegeName}
                          onChange={(e) => setFormData({...formData, collegeName: e.target.value})}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                            errors.collegeName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                          }`}
                        >
                          <option value="">Select your college</option>
                          {bputColleges.map(college => (
                            <option key={college} value={college}>{college}</option>
                          ))}
                        </select>
                      </div>
                      {errors.collegeName && <p className="text-red-500 text-sm mt-1">{errors.collegeName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Job Role */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Role *
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={formData.jobRole}
                          onChange={(e) => setFormData({...formData, jobRole: e.target.value})}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                            errors.jobRole ? 'border-red-300 bg-red-50' : 'border-gray-200'
                          }`}
                          placeholder="e.g., Software Developer, Data Analyst"
                        />
                      </div>
                      {errors.jobRole && <p className="text-red-500 text-sm mt-1">{errors.jobRole}</p>}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                            errors.companyName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                          }`}
                          placeholder="e.g., Infosys, TCS, Wipro"
                        />
                      </div>
                      {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                    </div>
                  </div>

                  {/* Skills Gained */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skills Gained through BriDGe *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 border border-gray-200 rounded-xl bg-gray-50">
                      {bridgeSkills.map(skill => (
                        <motion.label
                          key={skill}
                          className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                            formData.skillsGained.includes(skill)
                              ? 'bg-blue-100 border-blue-300 text-blue-700'
                              : 'bg-white border-gray-200 hover:bg-gray-50'
                          } border`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input
                            type="checkbox"
                            checked={formData.skillsGained.includes(skill)}
                            onChange={() => toggleSkill(skill)}
                            className="rounded text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm font-medium">{skill}</span>
                        </motion.label>
                      ))}
                    </div>
                    {errors.skillsGained && <p className="text-red-500 text-sm mt-1">{errors.skillsGained}</p>}
                  </div>

                  {/* Profile Picture */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Picture (Optional)
                    </label>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        {formData.profilePicture ? (
                          <img src={formData.profilePicture} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                          <User className="w-8 h-8 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <input
                          type="url"
                          value={formData.profilePicture}
                          onChange={(e) => setFormData({...formData, profilePicture: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter image URL or upload image"
                        />
                        <p className="text-xs text-gray-500 mt-1">Supported formats: JPG, PNG, GIF (max 5MB)</p>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Experience & Testimonial *
                    </label>
                    <textarea
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                        errors.experience ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="Share your detailed experience with BriDGe platform. How did it help you in your career journey? What skills did you gain? How was the placement process? (Minimum 50 characters)"
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
                      <p className="text-xs text-gray-500 ml-auto">
                        {formData.experience.length}/1000 characters
                      </p>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex space-x-4 pt-6">
                    <motion.button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl py-4 px-6 font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Save className="w-5 h-5" />
                      <span>{editingFeedback ? 'Update Story' : 'Share Story'}</span>
                    </motion.button>
                    <button
                      type="button"
                      onClick={resetForm}
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
                      src={selectedFeedback.profilePicture}
                      alt={selectedFeedback.fullName}
                      className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedFeedback.fullName}</h2>
                      <p className="text-blue-600 font-medium">{selectedFeedback.jobRole}</p>
                      <p className="text-gray-600">{selectedFeedback.companyName}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowDetailModal(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <MessageSquare className="w-6 h-6 text-blue-500" />
                        <h3 className="text-xl font-bold text-gray-900">Success Story</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {selectedFeedback.experience}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                        Skills Gained through BriDGe
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedFeedback.skillsGained.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Details</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <GraduationCap className="w-5 h-5 text-purple-500" />
                          <div>
                            <p className="font-medium text-gray-900">College</p>
                            <p className="text-sm text-gray-600">{selectedFeedback.collegeName}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Briefcase className="w-5 h-5 text-blue-500" />
                          <div>
                            <p className="font-medium text-gray-900">Position</p>
                            <p className="text-sm text-gray-600">{selectedFeedback.jobRole}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Building2 className="w-5 h-5 text-green-500" />
                          <div>
                            <p className="font-medium text-gray-900">Company</p>
                            <p className="text-sm text-gray-600">{selectedFeedback.companyName}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="font-medium text-gray-900">Shared On</p>
                            <p className="text-sm text-gray-600">{new Date(selectedFeedback.dateSubmitted!).toLocaleDateString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Heart className="w-5 h-5 text-red-500" />
                        <h3 className="text-lg font-bold text-gray-900">Community Impact</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Likes received</span>
                          <span className="font-bold text-red-600">{selectedFeedback.likes}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Verified story</span>
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Inspiring students</span>
                          <span className="font-bold text-green-600">100+</span>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      onClick={() => handleEdit(selectedFeedback)}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl py-3 px-6 font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>Edit This Story</span>
                    </motion.button>
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