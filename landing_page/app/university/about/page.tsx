'use client';

import { Header } from '@/components/university-layout/Header';
import { Footer } from '@/components/university-layout/Footer';
import { Users, Award, MapPin, Calendar, Target, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  const achievements = [
    { icon: Users, title: '50,000+', subtitle: 'Alumni Network' },
    { icon: Award, title: '95%', subtitle: 'Placement Rate' },
    { icon: MapPin, title: '31+', subtitle: 'Affiliated Colleges' },
    { icon: Calendar, title: '25+', subtitle: 'Years of Excellence' },
  ];

  const leadership = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Vice Chancellor',
      image: '/api/placeholder/150/150',
      bio: 'Leading Uni-BriDGe with over 25 years of experience in technical education and research.',
    },
    {
      name: 'Prof. Sunita Patel',
      position: 'Registrar',
      image: '/api/placeholder/150/150',
      bio: 'Overseeing academic operations and student affairs with dedication to excellence.',
    },
    {
      name: 'Dr. Amit Singh',
      position: 'Dean, Placement',
      image: '/api/placeholder/150/150',
      bio: 'Driving industry partnerships and career opportunities for students.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="about" />
      
      <main className="page-enter">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Uni-BriDGe
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Uni-BriDGe - Bridging the gap between university education 
                and industry opportunities through AI-powered solutions
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-primary-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To provide quality technical education, foster innovation, and create 
                  industry-ready professionals who contribute to the technological advancement 
                  of society and the nation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Excellence in technical education</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Industry-academia collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Research and innovation focus</span>
                  </li>
                </ul>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-8 h-8 text-primary-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To be a globally recognized center of excellence in technical education, 
                  research, and innovation, producing world-class engineers and technologists 
                  who shape the future.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Global recognition and standards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Cutting-edge research facilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Sustainable development focus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600">
                Celebrating milestones in technical education and student success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.title}</div>
                  <div className="text-gray-600">{achievement.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600">
                Visionary leaders driving excellence in technical education
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div
                  key={leader.name}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <p className="text-primary-600 font-medium mb-4">{leader.position}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 bg-gradient-to-r from-primary-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                From humble beginnings to becoming Odisha's premier technical university
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  { year: '2024', event: 'Uni-BriDGe platform launched to bridge university-industry gap' },
                  { year: '2002', event: 'First batch of engineering graduates' },
                  { year: '2010', event: 'Achieved autonomous status' },
                  { year: '2015', event: 'Launched AI-powered career platform' },
                  { year: '2020', event: 'Digital transformation initiative' },
                  { year: '2024', event: 'Advanced analytics and placement system' },
                ].map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className="flex items-center space-x-6 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-primary-600 text-white px-4 py-2 rounded-lg font-bold min-w-20 text-center">
                      {milestone.year}
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}