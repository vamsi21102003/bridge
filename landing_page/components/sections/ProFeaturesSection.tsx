'use client'

import { useState } from 'react'
import { 
  User, Brain, TrendingUp, Star, BarChart3, Target, Award, Users, MapPin, 
  Calendar, BookOpen, Video, Shield, Heart, Eye, Building, Briefcase, Globe
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useAuthModal } from '@/context/AuthModalContext'

export function ProFeaturesSection() {
  const [activeTab, setActiveTab] = useState('Pro Overview')
  const { openModal } = useAuthModal()

  const tabs = [
    'Pro Overview',
    'AI Recommendations', 
    'Personalised Path',
    'Pro Features'
  ]

  const proStats = {
    profileScore: 85,
    jobMatches: 12,
    personalizedPaths: 5,
    proFeaturesActive: 8
  }

  const topSkills = ['Python', 'JavaScript', 'React', 'SQL', 'Data Structures']

  // AI Recommendations Data
  const recommendedJobs = [
    {
      title: 'Software Engineer',
      company: 'TCS',
      location: 'Mumbai, Maharashtra',
      salary: '₹12L - ₹18L',
      type: 'Full-time',
      posted: '2 days ago',
      match: 95,
      skills: ['Python', 'JavaScript']
    },
    {
      title: 'Frontend Developer',
      company: 'Infosys',
      location: 'Bangalore, Karnataka',
      salary: '₹8L - ₹14L',
      type: 'Full-time',
      posted: '1 day ago',
      match: 92,
      skills: ['JavaScript', 'React']
    }
  ]

  const recommendedInternships = [
    {
      title: 'Software Engineering Intern',
      company: 'Flipkart',
      location: 'Bangalore, Karnataka',
      stipend: '₹35,000/month',
      duration: '12 weeks',
      match: 90
    },
    {
      title: 'Frontend Development Intern',
      company: 'Zomato',
      location: 'Gurgaon, Haryana',
      stipend: '₹30,000/month',
      duration: '10 weeks',
      match: 87
    }
  ]

  // Personalized Path Data
  const courseraRecommendations = [
    {
      title: 'Python Programming Specialization',
      provider: 'IIT Bombay',
      duration: '8 months',
      rating: 4.8,
      students: '2.1M students',
      price: 'Free to audit',
      match: 95,
      level: 'BEGINNER',
      skills: ['Python', 'Data Structures']
    },
    {
      title: 'React Development Masterclass',
      provider: 'Coding Ninjas India',
      duration: '6 weeks',
      rating: 4.9,
      students: '890K students',
      price: '₹3,999/month',
      match: 92,
      level: 'INTERMEDIATE',
      skills: ['React', 'JavaScript']
    }
  ]

  const youtubeRecommendations = [
    {
      title: 'JavaScript Complete Course in Hindi',
      channel: 'CodeWithHarry',
      duration: '8 hours',
      views: '12M views',
      likes: '450K likes',
      match: 90
    },
    {
      title: 'SQL Tutorial in Hindi - Complete Database Course',
      channel: 'Apna College',
      duration: '4 hours',
      views: '8.5M views',
      likes: '320K likes',
      match: 88
    }
  ]

  // Pro Features Data
  const studentProFeatures = [
    {
      title: 'Micro-Credentialing',
      description: 'Earn verified micro-credentials for every milestone and project completion. Showcase achievements on your AI-generated profile with streak-based rewards and badges.',
      icon: Award
    },
    {
      title: 'Premium Personalization Tools',
      description: 'Auto-generate professional portfolio webpages from your projects. Test-drive real-world jobs through interactive career simulations and virtual internships.',
      icon: Star
    },
    {
      title: 'Career Talks & Live Q&A Panels',
      description: 'Join exclusive live sessions with industry experts and alumni. AI generates insight summaries and smart FAQs from each session.',
      icon: Video
    },
    {
      title: 'Emotion-Based Engagement',
      description: 'AI companion detects stress and burnout through your text inputs. Proactively recommends relaxation techniques and learning breaks for well-being.',
      icon: Heart
    },
    {
      title: 'Virtual Alumni Mentoring Hub',
      description: 'Get matched with alumni using intelligent algorithms. Receive mentorship, career guidance, and networking opportunities from graduates.',
      icon: Users
    },
    {
      title: 'Geo-Aware Internship Map',
      description: 'Discover internships visually on an AI-powered map near your location. Filter by skill match, role type, and distance instantly.',
      icon: MapPin
    }
  ]

  const employerFeatures = [
    {
      title: 'Employer Collaboration Center',
      description: 'Intelligent hiring hub with AI-ranked candidates and auto-generated shortlists. Smart feedback loop learns recruiter preferences with reputation scoring system.',
      icon: Building
    },
    {
      title: 'Candidate Analytics',
      description: 'Deep insights into student performance and potential with real-time data. Track engagement, skill strengths, and learning progress for informed hiring decisions.',
      icon: BarChart3
    },
    {
      title: 'Predictive Employability Insights Dashboard',
      description: 'Advanced AI analytics for placement predictions and skill gap trends. Department-wise insights with curriculum improvement recommendations based on live industry data.',
      icon: TrendingUp
    },
    {
      title: 'Employer Engagement & Branding Portal',
      description: 'Create custom company pages showcasing culture and career paths. Host virtual job fairs and webinars to reach qualified candidates effectively.',
      icon: Briefcase
    }
  ]

  const institutionalFeatures = [
    {
      title: 'Advanced Analytics Dashboard Suite',
      description: 'Predictive AI dashboards with placement forecasts and skill gap tracking. Custom report builder exports insights in PDF/CSV formats for data-driven decisions.',
      icon: BarChart3
    },
    {
      title: 'Cloud Ecosystem & API Integrations',
      description: 'Seamless integration with Skill Odisha, Digital Odisha, and BPUT SIS platforms. Federated learning with anonymized multi-college data for enhanced AI models.',
      icon: Globe
    }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Pro Overview':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-purple-500 to-blue-600 text-white border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">PRO</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Arjun Sharma</h3>
                  <p className="text-sm opacity-90 mb-4">Computer Science Student<br />BriDGe Pro Member</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">{proStats.profileScore}%</div>
                      <div className="text-xs opacity-80">Pro Profile Score</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{proStats.jobMatches}</div>
                      <div className="text-xs opacity-80">AI Job Matches</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{proStats.personalizedPaths}</div>
                      <div className="text-xs opacity-80">Personalised Paths</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{proStats.proFeaturesActive}</div>
                      <div className="text-xs opacity-80">Pro Features Active</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-3">Top Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {topSkills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Recommendations Preview */}
            <div className="space-y-6">
              <Card className="bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-purple-600" />
                    AI Recommended Jobs & Internships
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Based on your BriDGe Pro analysis, here are premium personalized recommendations:
                  </p>
                  <div className="space-y-2">
                    <div className="p-3 bg-blue-50 rounded-lg text-sm">
                      Software Engineer at TCS
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg text-sm">
                      Frontend Developer at Infosys
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg text-sm">
                      Data Analyst at Wipro
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Career Progress */}
            <div className="space-y-6">
              <Card className="bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Career Progress</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Profile Completion</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Skill Development</span>
                        <span>72%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '72%' }} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'AI Recommendations':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-2 flex items-center justify-center">
                <Brain className="w-6 h-6 mr-2" />
                AI-Powered Job & Internship Recommendations
              </h3>
              <p className="text-gray-600">Based on your skills: Python, JavaScript, React, SQL, Data Structures</p>
            </div>

            {/* Recommended Jobs */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-red-600" />
                  Recommended Jobs
                </h4>
                <span className="text-sm text-gray-500 italic">Showing top matches for your profile</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedJobs.map((job, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h5 className="font-semibold text-lg text-blue-600">{job.title}</h5>
                          <p className="text-gray-600">{job.company}</p>
                        </div>
                        <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {job.match}% MATCH
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {job.type} • {job.posted}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <Button 
                          className="flex-1 bg-blue-600 hover:bg-blue-700"
                          onClick={openModal}
                        >
                          Apply
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={openModal}
                        >
                          Save
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recommended Internships */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-purple-600" />
                  Recommended Internships
                </h4>
                <span className="text-sm text-gray-500 italic">Perfect for building experience</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedInternships.map((internship, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h5 className="font-semibold text-lg text-blue-600">{internship.title}</h5>
                          <p className="text-gray-600">{internship.company}</p>
                        </div>
                        <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {internship.match}% MATCH
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {internship.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {internship.stipend}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {internship.duration}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button 
                          className="flex-1 bg-blue-600 hover:bg-blue-700"
                          onClick={openModal}
                        >
                          Apply
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={openModal}
                        >
                          Save
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case 'Personalised Path':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-2 flex items-center justify-center">
                <Target className="w-6 h-6 mr-2" />
                Personalized Learning Path
              </h3>
              <p className="text-gray-600">Curated courses based on your skills: Python, JavaScript, React, SQL, Data Structures</p>
            </div>

            {/* Coursera Recommendations */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  Coursera Recommendations
                </h4>
                <span className="text-sm text-gray-500 italic">Professional certificates and specializations</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courseraRecommendations.map((course, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h5 className="font-semibold text-lg text-blue-600">{course.title}</h5>
                          <p className="text-gray-600">{course.provider}</p>
                        </div>
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {course.match}% MATCH
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-2 fill-current text-yellow-500" />
                          {course.rating} rating
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {course.students}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {course.price}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                          {course.level}
                        </span>
                      </div>

                      <div className="flex space-x-2">
                        <Button 
                          className="flex-1 bg-blue-600 hover:bg-blue-700"
                          onClick={openModal}
                        >
                          Enroll
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={openModal}
                        >
                          Save
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* YouTube Recommendations */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Video className="w-5 h-5 mr-2 text-red-600" />
                  YouTube Recommendations
                </h4>
                <span className="text-sm text-gray-500 italic">Free video tutorials and courses</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {youtubeRecommendations.map((video, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h5 className="font-semibold text-lg text-blue-600">{video.title}</h5>
                          <p className="text-gray-600">{video.channel}</p>
                        </div>
                        <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {video.match}% MATCH
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {video.duration}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-2" />
                          {video.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-2" />
                          {video.likes}
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700"
                        onClick={openModal}
                      >
                        Watch Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case 'Pro Features':
        return (
          <div className="space-y-12">
            {/* Student Pro Features */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-2 flex items-center justify-center">
                  <User className="w-6 h-6 mr-2" />
                  Student Pro Features
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studentProFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-semibold text-lg mb-3 text-blue-600">
                          {index + 1}. {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Employer Subscription Features */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-purple-600 mb-2 flex items-center justify-center">
                  <Building className="w-6 h-6 mr-2" />
                  Employer Subscription Features
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {employerFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-3 text-purple-600">
                              {index + 1}. {feature.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Institutional Plan Features */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-green-600 mb-2 flex items-center justify-center">
                  <Shield className="w-6 h-6 mr-2" />
                  Institutional Plan Features
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {institutionalFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-3 text-green-600">
                              {index + 1}. {feature.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-100 to-blue-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            BriDGe Pro Personalised Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock your potential with premium personalised insights, AI 
            recommendations, and advanced career guidance
          </p>
        </div>

        {/* Pro Dashboard Mockup */}
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/60 backdrop-blur-lg border border-white/40 shadow-2xl">
            <CardContent className="p-8">
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tabs.map((tab, index) => (
                  <Button
                    key={tab}
                    variant={activeTab === tab ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab 
                        ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 animate-glow shadow-2xl shadow-blue-500/30 scale-105' 
                        : 'bg-white/50 backdrop-blur-sm hover:bg-white/70 hover:scale-105 hover:shadow-lg'
                    } transform transition-all duration-300 hover:rotate-1 animate-slide-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tab}
                  </Button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="animate-fade-in">
                {renderTabContent()}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}