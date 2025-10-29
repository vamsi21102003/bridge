'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Software Engineer at TCS',
      college: 'KIIT University',
      image: '/api/placeholder/64/64',
      rating: 5,
      content: 'The AI-powered career matching helped me find the perfect role that aligned with my skills and interests. The platform\'s insights were incredibly accurate and saved me months of job searching.',
      package: '₹8.5 LPA',
      year: '2024',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Data Analyst at Infosys',
      college: 'NIT Rourkela',
      image: '/api/placeholder/64/64',
      rating: 5,
      content: 'The skill gap analysis feature was a game-changer. It showed me exactly what skills I needed to develop, and the personalized learning path helped me land my dream job in data science.',
      package: '₹7.2 LPA',
      year: '2024',
    },
    {
      id: 3,
      name: 'Sneha Patel',
      role: 'Product Manager at Wipro',
      college: 'IIIT Bhubaneswar',
      image: '/api/placeholder/64/64',
      rating: 5,
      content: 'The direct industry connections through this platform opened doors I never knew existed. The mentorship program and networking opportunities were invaluable for my career growth.',
      package: '₹12 LPA',
      year: '2024',
    },
    {
      id: 4,
      name: 'Amit Singh',
      role: 'DevOps Engineer at Accenture',
      college: 'SOA University',
      image: '/api/placeholder/64/64',
      rating: 5,
      content: 'From skill assessment to job placement, the entire journey was seamless. The platform\'s AI recommendations were spot-on, and I got multiple offers from top companies.',
      package: '₹9.8 LPA',
      year: '2024',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from BPUT students who have transformed their careers through our 
            AI-powered platform and secured positions at leading companies.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-primary-400" />
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].college}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{testimonials[currentIndex].package}</div>
                  <div className="text-sm text-gray-500">Package</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{testimonials[currentIndex].year}</div>
                  <div className="text-sm text-gray-500">Placed</div>
                </div>
              </div>
            </div>
            
            {/* Rating */}
            <div className="flex justify-center mt-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Student Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">₹8.2L</div>
            <div className="text-gray-600">Average Package</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">45 Days</div>
            <div className="text-gray-600">Average Placement Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">95%</div>
            <div className="text-gray-600">Job Match Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
}