'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/context/dashboard/AuthContext';
import { 
  X, 
  Edit3, 
  Eye, 
  Save, 
  Upload, 
  Download, 
  Share2, 
  Copy, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Building2, 
  Users, 
  Calendar, 
  Award, 
  Star, 
  Heart, 
  Camera, 
  FileText, 
  ExternalLink, 
  Check, 
  AlertCircle, 
  Settings, 
  Shield, 
  Lock, 
  Bell, 
  Target, 
  RefreshCw, 
  CheckCircle, 
  Plus, 
  Minus, 
  ChevronDown, 
  ArrowLeft, 
  Trash2, 
  Database, 
  Gift
} from 'lucide-react';

interface ProfilePageProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'view' | 'edit';
}

const ProfilePage: React.FC<ProfilePageProps> = ({ isOpen, onClose, mode: initialMode }) => {
  const { user } = useAuth();
  const [mode, setMode] = useState(initialMode);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');
  const [animationStep, setAnimationStep] = useState(0);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Profile data state
  const [profileData, setProfileData] = useState({
    companyName: 'HireKarma Technologies',
    industry: 'Technology & Software Development',
    email: 'contact@hirekarma.com',
    phone: '+91 98765 43210',
    website: 'www.hirekarma.com',
    location: 'Bangalore, Karnataka, India',
    founded: '2020',
    companySize: '50-200 employees',
    companyType: 'Private Company',
    description: 'HireKarma is a leading technology company focused on revolutionizing the hiring process through innovative AI-powered solutions. We help companies find the right talent efficiently while providing candidates with meaningful career opportunities.',
    specialties: ['AI/ML', 'Software Development', 'Talent Acquisition', 'HR Technology'],
    socialLinks: {
      linkedin: 'https://linkedin.com/company/hirekarma',
      twitter: 'https://twitter.com/hirekarma',
      facebook: 'https://facebook.com/hirekarma',
      instagram: 'https://instagram.com/hirekarma'
    },
    companyValues: ['Innovation', 'Transparency', 'Excellence', 'Collaboration'],
    benefits: ['Health Insurance', 'Flexible Working', 'Learning Budget', 'Stock Options'],
    certifications: ['ISO 27001', 'SOC 2 Type II', 'GDPR Compliant'],
    awards: ['Best HR Tech Startup 2023', 'Innovation Award 2022', 'Top Employer 2023']
  });

  // Update mode when initialMode prop changes
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  // Animation sequence on mount
  useEffect(() => {
    if (isOpen) {
      const timer1 = setTimeout(() => setAnimationStep(1), 100);
      const timer2 = setTimeout(() => setAnimationStep(2), 300);
      const timer3 = setTimeout(() => setAnimationStep(3), 500);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isOpen]);

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setMode('view');
    }, 2000);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleExport = (format: 'pdf' | 'json' | 'csv') => {
    // Simulate export functionality
    const data = {
      ...profileData,
      exportDate: new Date().toISOString(),
      format
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hirekarma-profile.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: Building2, color: 'text-blue-600' },
    { id: 'contact', label: 'Contact', icon: Phone, color: 'text-green-600' },
    { id: 'social', label: 'Social Media', icon: Share2, color: 'text-purple-600' },
    { id: 'company', label: 'Company Details', icon: Target, color: 'text-orange-600' },
    { id: 'achievements', label: 'Achievements', icon: Award, color: 'text-yellow-600' },
    { id: 'settings', label: 'Settings', icon: Settings, color: 'text-gray-600' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-[60] overflow-y-auto">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
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
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">HireKarma Profile</h1>
                  <p className="text-xs text-purple-200">{mode === 'edit' ? 'Edit Mode' : 'View Mode'}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                {/* Mode Toggle */}
                <div className="flex bg-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setMode('view')}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      mode === 'view' 
                        ? 'bg-white/20 text-white shadow-lg' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button
                    onClick={() => setMode('edit')}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      mode === 'edit' 
                        ? 'bg-white/20 text-white shadow-lg' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                </div>

                {/* Export Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <div className="py-2">
                      <button
                        onClick={() => handleExport('pdf')}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <FileText className="w-4 h-4 text-red-500" />
                        <span>Export as PDF</span>
                      </button>
                      <button
                        onClick={() => handleExport('json')}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Database className="w-4 h-4 text-blue-500" />
                        <span>Export as JSON</span>
                      </button>
                      <button
                        onClick={() => handleExport('csv')}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <FileText className="w-4 h-4 text-green-500" />
                        <span>Export as CSV</span>
                      </button>
                    </div>
                  </div>
                </div>

                {mode === 'edit' && (
                  <button
                    onClick={handleSave}
                    disabled={isLoading}
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors disabled:opacity-50"
                  >
                    {isLoading ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4" />
                    )}
                    <span>{isLoading ? 'Saving...' : 'Save'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div> 
       {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Profile Header */}
          <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 transition-all duration-1000 delay-300 ${animationStep >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Profile Image */}
              <div className="relative group">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <span className="text-4xl font-bold text-white">H</span>
                  )}
                </div>
                {mode === 'edit' && (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute -bottom-2 -right-2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors group-hover:scale-110 transform duration-200"
                  >
                    <Camera className="w-5 h-5 text-gray-600" />
                  </button>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{profileData.companyName}</h2>
                    <p className="text-purple-200 text-lg mb-2">{profileData.industry}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                      {profileData.specialties.map((specialty, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-4 md:mt-0">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <Users className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                      <div className="text-lg font-bold text-white">200+</div>
                      <div className="text-xs text-purple-200">Employees</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <Calendar className="w-6 h-6 text-green-400 mx-auto mb-1" />
                      <div className="text-lg font-bold text-white">2020</div>
                      <div className="text-xs text-purple-200">Founded</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>Contact</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                    <Copy className="w-4 h-4" />
                    <span>Copy Link</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-2 mb-8 border border-white/20 transition-all duration-1000 delay-500 ${animationStep >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white/20 text-white shadow-lg transform scale-105'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? tab.color : 'text-white/70'}`} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>     
     {/* Tab Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            {/* Basic Info Tab */}
            {activeTab === 'basic' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Building2 className="w-6 h-6 mr-3 text-blue-400" />
                  Basic Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Company Name</label>
                    {mode === 'edit' ? (
                      <input
                        type="text"
                        value={profileData.companyName}
                        onChange={(e) => setProfileData({...profileData, companyName: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-white/5 rounded-lg text-white">{profileData.companyName}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Industry</label>
                    {mode === 'edit' ? (
                      <input
                        type="text"
                        value={profileData.industry}
                        onChange={(e) => setProfileData({...profileData, industry: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-white/5 rounded-lg text-white">{profileData.industry}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Founded</label>
                    {mode === 'edit' ? (
                      <input
                        type="text"
                        value={profileData.founded}
                        onChange={(e) => setProfileData({...profileData, founded: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-white/5 rounded-lg text-white">{profileData.founded}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Company Size</label>
                    {mode === 'edit' ? (
                      <select
                        value={profileData.companySize}
                        onChange={(e) => setProfileData({...profileData, companySize: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      >
                        <option value="1-10 employees">1-10 employees</option>
                        <option value="11-50 employees">11-50 employees</option>
                        <option value="50-200 employees">50-200 employees</option>
                        <option value="200-1000 employees">200-1000 employees</option>
                        <option value="1000+ employees">1000+ employees</option>
                      </select>
                    ) : (
                      <div className="px-4 py-3 bg-white/5 rounded-lg text-white">{profileData.companySize}</div>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">Company Description</label>
                  {mode === 'edit' ? (
                    <textarea
                      rows={4}
                      value={profileData.description}
                      onChange={(e) => setProfileData({...profileData, description: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-white/5 rounded-lg text-white leading-relaxed">{profileData.description}</div>
                  )}
                </div>
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-green-400" />
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Email Address</label>
                    {mode === 'edit' ? (
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center px-4 py-3 bg-white/5 rounded-lg text-white">
                        <Mail className="w-5 h-5 mr-3 text-green-400" />
                        {profileData.email}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Phone Number</label>
                    {mode === 'edit' ? (
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center px-4 py-3 bg-white/5 rounded-lg text-white">
                        <Phone className="w-5 h-5 mr-3 text-blue-400" />
                        {profileData.phone}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Website</label>
                    {mode === 'edit' ? (
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="url"
                          value={profileData.website}
                          onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center px-4 py-3 bg-white/5 rounded-lg text-white">
                        <Globe className="w-5 h-5 mr-3 text-purple-400" />
                        <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {profileData.website}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Location</label>
                    {mode === 'edit' ? (
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="text"
                          value={profileData.location}
                          onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center px-4 py-3 bg-white/5 rounded-lg text-white">
                        <MapPin className="w-5 h-5 mr-3 text-red-400" />
                        {profileData.location}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}  
          {/* Social Media Tab */}
            {activeTab === 'social' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Share2 className="w-6 h-6 mr-3 text-purple-400" />
                  Social Media Links
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(profileData.socialLinks).map(([platform, url]) => (
                    <div key={platform}>
                      <label className="block text-sm font-medium text-purple-200 mb-2 capitalize">{platform}</label>
                      {mode === 'edit' ? (
                        <input
                          type="url"
                          value={url}
                          onChange={(e) => setProfileData({
                            ...profileData,
                            socialLinks: { ...profileData.socialLinks, [platform]: e.target.value }
                          })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder={`https://${platform}.com/company/hirekarma`}
                        />
                      ) : (
                        <div className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-lg text-white">
                          <span className="truncate">{url}</span>
                          <ExternalLink className="w-4 h-4 text-purple-400 ml-2 flex-shrink-0" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Company Details Tab */}
            {activeTab === 'company' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-orange-400" />
                  Company Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Company Values */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-red-400" />
                      Company Values
                    </h4>
                    <div className="space-y-2">
                      {profileData.companyValues.map((value, index) => (
                        <div key={index} className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-lg">
                          <span className="text-white">{value}</span>
                          {mode === 'edit' && (
                            <button className="text-red-400 hover:text-red-300">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                      {mode === 'edit' && (
                        <button className="w-full px-4 py-2 border-2 border-dashed border-white/30 rounded-lg text-white/70 hover:text-white hover:border-white/50 transition-colors">
                          <Plus className="w-4 h-4 inline mr-2" />
                          Add Value
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Gift className="w-5 h-5 mr-2 text-green-400" />
                      Employee Benefits
                    </h4>
                    <div className="space-y-2">
                      {profileData.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-lg">
                          <span className="text-white">{benefit}</span>
                          {mode === 'edit' && (
                            <button className="text-red-400 hover:text-red-300">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                      {mode === 'edit' && (
                        <button className="w-full px-4 py-2 border-2 border-dashed border-white/30 rounded-lg text-white/70 hover:text-white hover:border-white/50 transition-colors">
                          <Plus className="w-4 h-4 inline mr-2" />
                          Add Benefit
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-blue-400" />
                      Certifications
                    </h4>
                    <div className="space-y-2">
                      {profileData.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-lg">
                          <span className="text-white">{cert}</span>
                          {mode === 'edit' && (
                            <button className="text-red-400 hover:text-red-300">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                      {mode === 'edit' && (
                        <button className="w-full px-4 py-2 border-2 border-dashed border-white/30 rounded-lg text-white/70 hover:text-white hover:border-white/50 transition-colors">
                          <Plus className="w-4 h-4 inline mr-2" />
                          Add Certification
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-purple-400" />
                      Specialties
                    </h4>
                    <div className="space-y-2">
                      {profileData.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-lg">
                          <span className="text-white">{specialty}</span>
                          {mode === 'edit' && (
                            <button className="text-red-400 hover:text-red-300">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                      {mode === 'edit' && (
                        <button className="w-full px-4 py-2 border-2 border-dashed border-white/30 rounded-lg text-white/70 hover:text-white hover:border-white/50 transition-colors">
                          <Plus className="w-4 h-4 inline mr-2" />
                          Add Specialty
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )} 
           {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-yellow-400" />
                  Awards & Achievements
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {profileData.awards.map((award, index) => (
                    <div key={index} className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div className="ml-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{award}</h4>
                      <p className="text-purple-200 text-sm">Recognized for excellence in innovation and technology</p>
                      {mode === 'edit' && (
                        <button className="mt-4 text-red-400 hover:text-red-300 text-sm">
                          <Trash2 className="w-4 h-4 inline mr-1" />
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  
                  {mode === 'edit' && (
                    <div className="border-2 border-dashed border-white/30 rounded-xl p-6 flex flex-col items-center justify-center hover:border-white/50 transition-colors cursor-pointer">
                      <Plus className="w-8 h-8 text-white/50 mb-2" />
                      <span className="text-white/70">Add Achievement</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-gray-400" />
                  Profile Settings
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Privacy Settings */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-blue-400" />
                      Privacy Settings
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <div className="text-white font-medium">Public Profile</div>
                          <div className="text-purple-200 text-sm">Make your profile visible to everyone</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <div className="text-white font-medium">Contact Information</div>
                          <div className="text-purple-200 text-sm">Show contact details publicly</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Notification Settings */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white flex items-center">
                      <Bell className="w-5 h-5 mr-2 text-yellow-400" />
                      Notifications
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <div className="text-white font-medium">Email Notifications</div>
                          <div className="text-purple-200 text-sm">Receive updates via email</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <div className="text-white font-medium">Push Notifications</div>
                          <div className="text-purple-200 text-sm">Receive push notifications</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="mt-8 p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-400 mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Danger Zone
                  </h4>
                  <div className="space-y-3">
                    <button className="w-full md:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                      Delete Profile
                    </button>
                    <p className="text-red-300 text-sm">This action cannot be undone. This will permanently delete your profile.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 z-[70] flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center animate-bounce">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Profile Updated!</h3>
            <p className="text-gray-600 mb-4">Your profile has been successfully updated.</p>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span className="text-sm">Switching to view mode...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;