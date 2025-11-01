'use client';

import { Header } from '@/components/university-layout/Header';
import { Footer } from '@/components/university-layout/Footer';
import { Sidebar } from '@/components/university-layout/Sidebar';
import { User, Mail, Phone, MapPin, Calendar, Edit } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 university-dashboard-layout dashboard-layout university-website particle-bg">
      <Header userRole="university_admin" currentPage="profile" />
      
      <div className="flex">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 main-content-with-sidebar-right">
        <div className="page-enter">
          {/* Enhanced Header */}
          <div className="mb-8 slide-in-left">
            <div className="relative">
              <h1 className="text-4xl font-bold gradient-text mb-4 float-animation">
                👤 Profile
              </h1>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-violet-400 to-fuchsia-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
            <p className="text-lg text-gray-700 slide-in-right stagger-2 font-medium">
              ⚙️ Manage your account information and preferences
            </p>
          </div>

          {/* Enhanced Profile Card */}
          <div className="enhanced-card hover-tilt slide-in-bottom stagger-3 overflow-hidden">
            {/* Enhanced Cover Photo */}
            <div className="h-32 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              <div className="absolute top-4 right-4 text-white/30 text-6xl">👤</div>
            </div>
            
            {/* Profile Info */}
            <div className="px-6 py-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg -mt-16 border-4 border-white">
                    <User className="w-10 h-10 text-primary-600" />
                  </div>
                  <div className="ml-6 mt-4">
                    <h2 className="text-2xl font-bold text-gray-900">University Admin</h2>
                    <p className="text-gray-600">Uni-BriDGe Portal Administrator</p>
                  </div>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
                  <Edit className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
              </div>

              {/* Contact Information */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">admin@unibridge.ac.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium text-gray-900">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-medium text-gray-900">Bhubaneswar, Odisha</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Account Details</h3>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Member Since</p>
                      <p className="font-medium text-gray-900">January 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Role</p>
                      <p className="font-medium text-gray-900">University Administrator</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <p className="font-medium text-green-600">Active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">Updated placement statistics</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">Added new employer partnership</p>
                  <p className="text-sm text-gray-600">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-gray-900">Generated monthly report</p>
                  <p className="text-sm text-gray-600">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Sidebar currentPage="profile" />
      </div>
      
      <Footer />
    </div>
  );
}