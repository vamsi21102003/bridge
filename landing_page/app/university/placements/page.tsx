'use client';

import { Header } from '@/components/university-layout/Header';
import { Footer } from '@/components/university-layout/Footer';
import { TrendingUp, Building2, Users, Award, Star, MapPin } from 'lucide-react';

export default function PlacementsPage() {
  const placementStats = [
    { label: 'Overall Placement Rate', value: '89.3%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Highest Package', value: '₹45 LPA', icon: Award, color: 'text-yellow-600' },
    { label: 'Average Package', value: '₹8.2 LPA', icon: Users, color: 'text-blue-600' },
    { label: 'Companies Visited', value: '245+', icon: Building2, color: 'text-purple-600' },
  ];

  const topRecruiters = [
    { name: 'TCS', logo: 'T', hires: 450, package: '₹4-7 LPA', sector: 'IT Services' },
    { name: 'Infosys', logo: 'I', hires: 380, package: '₹4.5-8 LPA', sector: 'IT Services' },
    { name: 'Wipro', logo: 'W', hires: 320, package: '₹4.2-7.5 LPA', sector: 'IT Services' },
    { name: 'Accenture', logo: 'A', hires: 280, package: '₹5-9 LPA', sector: 'Consulting' },
    { name: 'Cognizant', logo: 'C', hires: 250, package: '₹3.8-6.5 LPA', sector: 'IT Services' },
    { name: 'Microsoft', logo: 'M', hires: 45, package: '₹12-25 LPA', sector: 'Technology' },
    { name: 'Amazon', logo: 'A', hires: 35, package: '₹15-30 LPA', sector: 'Technology' },
    { name: 'Google', logo: 'G', hires: 25, package: '₹18-45 LPA', sector: 'Technology' },
  ];

  const departmentWiseStats = [
    { department: 'Computer Science & Engineering', placed: 402, total: 450, percentage: 89.3, avgPackage: '₹8.5 LPA' },
    { department: 'Electronics & Communication', placed: 294, total: 360, percentage: 81.7, avgPackage: '₹7.2 LPA' },
    { department: 'Information Technology', placed: 168, total: 200, percentage: 84.0, avgPackage: '₹8.0 LPA' },
    { department: 'Mechanical Engineering', placed: 216, total: 300, percentage: 72.0, avgPackage: '₹6.8 LPA' },
    { department: 'Electrical Engineering', placed: 173, total: 240, percentage: 72.1, avgPackage: '₹6.5 LPA' },
    { department: 'Civil Engineering', placed: 136, total: 200, percentage: 68.0, avgPackage: '₹5.8 LPA' },
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      company: 'Google',
      package: '₹42 LPA',
      department: 'CSE',
      year: '2024',
      image: 'P',
      story: 'From a small town in Odisha to Google - Uni-BriDGe\'s comprehensive curriculum and placement support made my dream come true.',
    },
    {
      name: 'Rajesh Kumar',
      company: 'Microsoft',
      package: '₹28 LPA',
      department: 'ECE',
      year: '2024',
      image: 'R',
      story: 'The industry exposure and technical skills I gained through Uni-BriDGe helped me secure a position at Microsoft as a Software Engineer.',
    },
    {
      name: 'Sneha Patel',
      company: 'Amazon',
      package: '₹35 LPA',
      department: 'IT',
      year: '2024',
      image: 'S',
      story: 'Uni-BriDGe\'s focus on practical learning and industry connections opened doors to opportunities I never imagined possible.',
    },
  ];

  const yearlyTrends = [
    { year: '2020', placed: 9200, total: 12800, rate: 71.9 },
    { year: '2021', placed: 10100, total: 13500, rate: 74.8 },
    { year: '2022', placed: 11200, total: 14200, rate: 78.9 },
    { year: '2023', placed: 12000, total: 14800, rate: 81.1 },
    { year: '2024', placed: 12336, total: 15420, rate: 80.0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="placements" />
      
      <main className="page-enter">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Placement Statistics
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Exceptional placement records showcasing our commitment to student success and industry partnerships
              </p>
            </div>
          </div>
        </section>

        {/* Placement Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {placementStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Recruiters */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Recruiters
              </h2>
              <p className="text-xl text-gray-600">
                Leading companies that regularly recruit through Uni-BriDGe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topRecruiters.map((company, index) => (
                <div
                  key={company.name}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">{company.logo}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{company.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{company.sector}</p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Hires: </span>
                        <span className="text-primary-600 font-semibold">{company.hires}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Package: </span>
                        <span className="text-green-600 font-semibold">{company.package}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Department-wise Statistics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Department-wise Placement Statistics
              </h2>
              <p className="text-xl text-gray-600">
                Detailed placement data across all engineering departments
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Department</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Placed</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Total</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Percentage</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Avg Package</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {departmentWiseStats.map((dept, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 font-medium text-gray-900">{dept.department}</td>
                        <td className="px-6 py-4 text-center text-green-600 font-semibold">{dept.placed}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{dept.total}</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            {dept.percentage}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center font-semibold text-primary-600">{dept.avgPackage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Inspiring journeys of our students who achieved their career dreams
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div
                  key={story.name}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">{story.image}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                    <p className="text-primary-600 font-medium">{story.department} • {story.year}</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-green-600 mb-1">{story.package}</div>
                    <div className="text-gray-600">at {story.company}</div>
                  </div>
                  
                  <blockquote className="text-gray-600 text-sm leading-relaxed italic">
                    "{story.story}"
                  </blockquote>
                  
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Yearly Trends */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Placement Trends
              </h2>
              <p className="text-xl text-gray-600">
                Consistent growth in placement rates over the years
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {yearlyTrends.map((year, index) => (
                  <div
                    key={year.year}
                    className="text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl font-bold text-primary-600 mb-2">{year.year}</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{year.rate}%</div>
                    <div className="text-sm text-gray-600 mb-2">Placement Rate</div>
                    <div className="text-xs text-gray-500">
                      {year.placed.toLocaleString()}/{year.total.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Be part of Uni-BriDGe's exceptional placement record and launch your career with top companies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg">
                Apply for Admission
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 transition-all duration-200 hover:scale-105 backdrop-blur-sm">
                Download Placement Report
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}