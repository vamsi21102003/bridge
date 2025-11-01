'use client';

import { Header } from '@/components/university-layout/Header';
import { Footer } from '@/components/university-layout/Footer';
import { BookOpen, Clock, Users, Award, ChevronRight } from 'lucide-react';

export default function ProgramsPage() {
  const programs = [
    {
      id: 'btech',
      name: 'Bachelor of Technology (B.Tech)',
      duration: '4 Years',
      departments: [
        { name: 'Computer Science & Engineering', code: 'CSE', seats: 120 },
        { name: 'Electronics & Communication Engineering', code: 'ECE', seats: 90 },
        { name: 'Mechanical Engineering', code: 'ME', seats: 90 },
        { name: 'Electrical Engineering', code: 'EE', seats: 60 },
        { name: 'Civil Engineering', code: 'CE', seats: 60 },
        { name: 'Information Technology', code: 'IT', seats: 60 },
      ],
      eligibility: ['10+2 with Physics, Chemistry, Mathematics', 'Minimum 60% marks', 'Valid JEE Main score'],
      highlights: ['Industry-aligned curriculum', 'Hands-on laboratory experience', 'Internship opportunities', 'Placement assistance'],
    },
    {
      id: 'mtech',
      name: 'Master of Technology (M.Tech)',
      duration: '2 Years',
      departments: [
        { name: 'Computer Science & Engineering', code: 'CSE', seats: 30 },
        { name: 'Electronics & Communication Engineering', code: 'ECE', seats: 24 },
        { name: 'Mechanical Engineering', code: 'ME', seats: 24 },
        { name: 'Electrical Engineering', code: 'EE', seats: 18 },
      ],
      eligibility: ['B.Tech/B.E. in relevant discipline', 'Minimum 60% marks', 'Valid GATE score'],
      highlights: ['Research-oriented curriculum', 'Advanced laboratory facilities', 'Industry collaboration', 'Thesis work'],
    },
    {
      id: 'mba',
      name: 'Master of Business Administration (MBA)',
      duration: '2 Years',
      departments: [
        { name: 'General Management', code: 'GM', seats: 60 },
        { name: 'Technology Management', code: 'TM', seats: 30 },
      ],
      eligibility: ['Bachelor\'s degree in any discipline', 'Minimum 50% marks', 'Valid CAT/MAT score'],
      highlights: ['Industry-focused curriculum', 'Case study methodology', 'Corporate internships', 'Leadership development'],
    },
  ];

  const departments = [
    {
      name: 'Computer Science & Engineering',
      description: 'Leading department in software development, AI, and emerging technologies',
      faculty: 25,
      labs: 8,
      specializations: ['Artificial Intelligence', 'Data Science', 'Cybersecurity', 'Software Engineering'],
    },
    {
      name: 'Electronics & Communication Engineering',
      description: 'Excellence in electronics, communication systems, and VLSI design',
      faculty: 20,
      labs: 6,
      specializations: ['VLSI Design', 'Communication Systems', 'Embedded Systems', 'Signal Processing'],
    },
    {
      name: 'Mechanical Engineering',
      description: 'Strong foundation in mechanical systems, manufacturing, and automation',
      faculty: 18,
      labs: 7,
      specializations: ['Manufacturing', 'Thermal Engineering', 'Robotics', 'Automotive Engineering'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="programs" />
      
      <main className="page-enter">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Academic Programs
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive technical education programs designed to create industry-ready professionals
              </p>
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Programs
              </h2>
              <p className="text-xl text-gray-600">
                Choose from our range of undergraduate and postgraduate programs
              </p>
            </div>

            <div className="space-y-12">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
                        <div className="flex items-center space-x-6 text-gray-600 mb-4">
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-2" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-5 h-5 mr-2" />
                            <span>{program.departments.length} Departments</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Departments */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Departments & Seats</h4>
                        <div className="space-y-3">
                          {program.departments.map((dept) => (
                            <div key={dept.code} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-900">{dept.code}</div>
                                <div className="text-sm text-gray-600">{dept.name}</div>
                              </div>
                              <div className="text-primary-600 font-semibold">{dept.seats} seats</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Eligibility */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Eligibility Criteria</h4>
                        <ul className="space-y-2">
                          {program.eligibility.map((criteria, criteriaIndex) => (
                            <li key={criteriaIndex} className="flex items-start">
                              <ChevronRight className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Program Highlights</h4>
                        <ul className="space-y-2">
                          {program.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start">
                              <Award className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leading Departments
              </h2>
              <p className="text-xl text-gray-600">
                Excellence in education and research across multiple engineering disciplines
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <div
                  key={dept.name}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-8 h-8 text-primary-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">{dept.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{dept.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{dept.faculty}</div>
                      <div className="text-sm text-gray-600">Faculty</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{dept.labs}</div>
                      <div className="text-sm text-gray-600">Labs</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.specializations.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students who have built successful careers through our programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg">
                Apply Now
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 transition-all duration-200 hover:scale-105 backdrop-blur-sm">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}