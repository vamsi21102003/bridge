'use client'

import { useState } from 'react'
import { MapPin, Clock, DollarSign, Star, Briefcase, Users, Zap, Heart, X, ExternalLink, BookmarkPlus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function AIJobsSection() {
  const [activeFilter, setActiveFilter] = useState('All Opportunities')
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  const filters = [
    { name: 'All Opportunities', count: 7, color: 'bg-purple-500' },
    { name: 'Internships', count: 4, color: 'bg-gray-500' },
    { name: 'Full-time Jobs', count: 5, color: 'bg-blue-500' },
    { name: 'Urgent', count: 4, color: 'bg-red-500' },
    { name: 'Featured', count: 4, color: 'bg-yellow-500' }
  ]

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechMahindra',
      companyInitial: 'TM',
      location: 'Pune, Maharashtra',
      type: 'Internship',
      salary: '₹25k/mo',
      tags: ['React', 'JavaScript', 'CSS'],
      urgent: true,
      featured: true,
      gradient: 'from-pink-500 to-blue-500',
      applyBy: 'Jan 30, 2024'
    },
    {
      id: 2,
      title: 'Junior Data Scientist',
      company: 'Infosys Analytics',
      companyInitial: 'IA',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      salary: '₹8.5L/yr',
      tags: ['Python', 'SQL', 'Machine Learning'],
      urgent: true,
      featured: true,
      gradient: 'from-purple-500 to-blue-500',
      applyBy: 'Jan 15, 2024'
    },
    {
      id: 3,
      title: 'Digital Marketing Intern',
      company: 'Digital Bharat Marketing',
      companyInitial: 'DB',
      location: 'Mumbai, Maharashtra',
      type: 'Internship',
      salary: '₹22k/mo',
      tags: ['SEO', 'Social Media', 'Content Creation'],
      urgent: true,
      featured: false,
      gradient: 'from-pink-500 to-purple-500',
      applyBy: 'Jun 25, 2023'
    },
    {
      id: 4,
      title: 'Senior Backend Developer',
      company: 'Wipro Cloud Solutions',
      companyInitial: 'WC',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      salary: '₹15L/yr',
      tags: ['Node.js', 'AWS', 'Docker', 'MongoDB'],
      urgent: false,
      featured: true,
      gradient: 'from-green-500 to-blue-500',
      applyBy: 'Feb 10, 2024'
    },
    {
      id: 5,
      title: 'Product Management Intern',
      company: 'Paytm FinTech',
      companyInitial: 'PF',
      location: 'Noida, Uttar Pradesh',
      type: 'Internship',
      salary: '₹30k/mo',
      tags: ['Product Strategy', 'Analytics', 'Figma'],
      urgent: false,
      featured: true,
      gradient: 'from-blue-500 to-purple-500',
      applyBy: 'Mar 15, 2024'
    },
    {
      id: 6,
      title: 'Unity Game Developer',
      company: 'Nazara Games Studio',
      companyInitial: 'NG',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      salary: '₹9.5L/yr',
      tags: ['Unity', 'C#', 'Game Design'],
      urgent: false,
      featured: false,
      gradient: 'from-orange-500 to-red-500',
      applyBy: 'Apr 20, 2024'
    }
  ]

  const getJobDetails = (jobId: number) => {
    const job = jobs.find(j => j.id === jobId)
    if (!job) return null

    return {
      ...job,
      fullDescription: `Join ${job.company} as a ${job.title} and be part of an innovative team that's shaping the future of technology. This role offers excellent growth opportunities and the chance to work with cutting-edge technologies.`,
      requirements: [
        'Bachelor\'s degree in relevant field',
        'Strong problem-solving skills',
        'Excellent communication abilities',
        'Team collaboration experience'
      ],
      responsibilities: [
        'Develop and maintain high-quality code',
        'Collaborate with cross-functional teams',
        'Participate in code reviews',
        'Contribute to technical documentation'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Flexible working hours',
        'Professional development opportunities',
        'Health and wellness programs'
      ]
    }
  }

  return (
    <section id="opportunities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 to-cyan-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            AI Recommended Jobs & Internships
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized opportunities matched to your profile through advanced AI analysis
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <Button
              key={filter.name}
              variant={activeFilter === filter.name ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter.name)}
              className={`${
                activeFilter === filter.name 
                  ? 'animate-glow shadow-2xl shadow-primary/30 scale-105' 
                  : 'bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/70 hover:scale-105 hover:shadow-lg'
              } flex items-center space-x-2 transform transition-all duration-300 hover:rotate-1 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-3 h-3 ${filter.color} rounded-full animate-pulse`} />
              <span>{filter.name}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs hover:bg-white/30 transition-all duration-300">{filter.count}</span>
            </Button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <Card 
              key={job.id}
              className={`group hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 cursor-pointer bg-gradient-to-br ${job.gradient} text-white border-0 relative overflow-hidden animate-slide-up hover-lift`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedJob(job.id)}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{job.companyInitial}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-sm opacity-90">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    {job.urgent && (
                      <div className="flex items-center bg-red-500 px-2 py-1 rounded-full">
                        <Zap className="w-3 h-3 mr-1" />
                        <span className="text-xs font-medium">Urgent</span>
                      </div>
                    )}
                    {job.featured && (
                      <div className="flex items-center bg-yellow-500 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        <span className="text-xs font-medium text-yellow-900">Featured</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Job Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm opacity-90">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm opacity-90">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm opacity-90">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-sm opacity-90">
                    <Clock className="w-4 h-4 mr-2" />
                    Apply by {job.applyBy}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button 
                    className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-lg transform transition-all duration-300 animate-pulse-slow"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      // Handle apply
                    }}
                  >
                    APPLY NOW
                  </Button>
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 hover:scale-110 hover:rotate-12 transform transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      // Handle bookmark
                    }}
                  >
                    <BookmarkPlus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>

              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="w-full h-full bg-white rounded-full transform translate-x-16 -translate-y-16" />
              </div>
            </Card>
          ))}
        </div>

        {/* Job Details Modal */}
        {selectedJob !== null && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <CardContent className="p-8">
                {(() => {
                  const jobDetails = getJobDetails(selectedJob)
                  if (!jobDetails) return null

                  return (
                    <>
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 bg-gradient-to-r ${jobDetails.gradient} rounded-xl flex items-center justify-center`}>
                            <span className="text-white font-bold text-2xl">{jobDetails.companyInitial}</span>
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                              {jobDetails.title}
                            </h3>
                            <p className="text-xl text-gray-600">{jobDetails.company}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {jobDetails.location}
                              </span>
                              <span className="flex items-center">
                                <Briefcase className="w-4 h-4 mr-1" />
                                {jobDetails.type}
                              </span>
                              <span className="flex items-center">
                                <DollarSign className="w-4 h-4 mr-1" />
                                {jobDetails.salary}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedJob(null)}
                        >
                          <X className="w-5 h-5" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3">Job Description</h4>
                            <p className="text-gray-600 leading-relaxed">
                              {jobDetails.fullDescription}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h4>
                            <ul className="space-y-2">
                              {jobDetails.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start text-gray-600">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3">Responsibilities</h4>
                            <ul className="space-y-2">
                              {jobDetails.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start text-gray-600">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2" />
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3">Skills Required</h4>
                            <div className="flex flex-wrap gap-2">
                              {jobDetails.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <Card className="bg-gray-50">
                            <CardContent className="p-6">
                              <h4 className="font-semibold text-gray-900 mb-4">Quick Apply</h4>
                              <div className="space-y-4">
                                <Button className="w-full" size="lg">
                                  Apply Now
                                </Button>
                                <Button variant="outline" className="w-full">
                                  <BookmarkPlus className="w-4 h-4 mr-2" />
                                  Save Job
                                </Button>
                                <Button variant="ghost" className="w-full">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Share Job
                                </Button>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-gray-50">
                            <CardContent className="p-6">
                              <h4 className="font-semibold text-gray-900 mb-4">Benefits & Perks</h4>
                              <ul className="space-y-2">
                                {jobDetails.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="bg-gray-50">
                            <CardContent className="p-6">
                              <h4 className="font-semibold text-gray-900 mb-4">Application Deadline</h4>
                              <div className="flex items-center text-sm text-gray-600">
                                <Clock className="w-4 h-4 mr-2" />
                                Apply by {jobDetails.applyBy}
                              </div>
                              {jobDetails.urgent && (
                                <div className="mt-2 flex items-center text-sm text-red-600">
                                  <Zap className="w-4 h-4 mr-2" />
                                  Urgent hiring - Apply soon!
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </>
                  )
                })()}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}