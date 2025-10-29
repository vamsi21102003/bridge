'use client';

import { Header } from '@/components/university-layout/Header';
import { Sidebar } from '@/components/university-layout/Sidebar';
import { ChartContainer } from '@/components/university/charts/ChartContainer';
import { PieChart } from '@/components/university/charts/PieChart';
import { BarChart } from '@/components/university/charts/BarChart';
import { SummaryCard } from '@/components/university/cards/SummaryCard';
import { TrendingUp, Building2, DollarSign, Users } from 'lucide-react';

export default function IndustryInsightsPage() {
  const summaryCards = [
    {
      title: 'Active Industries',
      value: '12',
      icon: <Building2 className="w-6 h-6" />,
      trend: { value: 8.3, isPositive: true },
    },
    {
      title: 'Fastest Growing',
      value: 'FinTech',
      icon: <TrendingUp className="w-6 h-6" />,
      trend: { value: 45.2, isPositive: true },
    },
    {
      title: 'Highest Paying',
      value: 'Tech',
      icon: <DollarSign className="w-6 h-6" />,
      trend: { value: 22.1, isPositive: true },
    },
    {
      title: 'Total Hires',
      value: '12,336',
      icon: <Users className="w-6 h-6" />,
      trend: { value: 15.7, isPositive: true },
    },
  ];

  const industryDistribution = [
    { name: 'Information Technology', value: 4200, percentage: 34.0 },
    { name: 'Manufacturing', value: 2100, percentage: 17.0 },
    { name: 'Financial Services', value: 1800, percentage: 14.6 },
    { name: 'Consulting', value: 1500, percentage: 12.2 },
    { name: 'Healthcare', value: 1200, percentage: 9.7 },
    { name: 'Education', value: 800, percentage: 6.5 },
    { name: 'Others', value: 736, percentage: 6.0 },
  ];

  const salaryByIndustry = [
    { name: 'Technology', placed: 25, total: 30, rate: '25.0' },
    { name: 'Finance', placed: 18, total: 25, rate: '18.0' },
    { name: 'Consulting', placed: 15, total: 20, rate: '15.0' },
    { name: 'Healthcare', placed: 12, total: 18, rate: '12.0' },
    { name: 'Manufacturing', placed: 8, total: 15, rate: '8.0' },
    { name: 'Education', placed: 6, total: 12, rate: '6.0' },
  ];

  const industryTrends = [
    {
      industry: 'Artificial Intelligence',
      growth: '+67%',
      demand: 'Very High',
      avgPackage: '₹15-35 LPA',
      topSkills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow'],
      companies: ['Google', 'Microsoft', 'Amazon', 'OpenAI'],
      forecast: 'Explosive growth expected through 2025',
    },
    {
      industry: 'FinTech',
      growth: '+45%',
      demand: 'High',
      avgPackage: '₹12-28 LPA',
      topSkills: ['Blockchain', 'Payment Systems', 'Risk Analysis', 'Compliance'],
      companies: ['Paytm', 'Razorpay', 'CRED', 'PhonePe'],
      forecast: 'Sustained growth with regulatory support',
    },
    {
      industry: 'Cloud Computing',
      growth: '+38%',
      demand: 'High',
      avgPackage: '₹10-25 LPA',
      topSkills: ['AWS', 'Azure', 'DevOps', 'Kubernetes'],
      companies: ['Amazon', 'Microsoft', 'Google', 'IBM'],
      forecast: 'Digital transformation driving demand',
    },
    {
      industry: 'Cybersecurity',
      growth: '+32%',
      demand: 'High',
      avgPackage: '₹8-22 LPA',
      topSkills: ['Ethical Hacking', 'Network Security', 'Incident Response'],
      companies: ['Cisco', 'Palo Alto', 'CrowdStrike', 'FireEye'],
      forecast: 'Critical need across all sectors',
    },
    {
      industry: 'Data Science',
      growth: '+28%',
      demand: 'Medium-High',
      avgPackage: '₹8-20 LPA',
      topSkills: ['Python', 'R', 'SQL', 'Machine Learning'],
      companies: ['Netflix', 'Uber', 'Airbnb', 'Spotify'],
      forecast: 'Steady growth with AI integration',
    },
    {
      industry: 'Green Technology',
      growth: '+25%',
      demand: 'Medium',
      avgPackage: '₹6-18 LPA',
      topSkills: ['Renewable Energy', 'Sustainability', 'IoT'],
      companies: ['Tesla', 'Tata Power', 'Adani Green', 'ReNew Power'],
      forecast: 'Government initiatives boosting sector',
    },
  ];

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'Very High': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium-High': return 'bg-yellow-100 text-yellow-800';
      case 'Medium': return 'bg-green-100 text-green-800';
      case 'Low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 bput-dashboard-layout dashboard-layout">
      <Header userRole="university_admin" currentPage="analytics" />
      
      <div className="flex">
        <Sidebar currentPage="analytics" />
        
        <main className="main-content-with-sidebar p-6">
          <div className="page-enter">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Industry Insights
              </h1>
              <p className="text-gray-600">
                Comprehensive analysis of industry trends, demands, and opportunities
              </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {summaryCards.map((card, index) => (
                <SummaryCard
                  key={card.title}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                  trend={card.trend}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Industry Distribution */}
              <ChartContainer title="Placement Distribution by Industry" exportable>
                <PieChart data={industryDistribution} height={300} />
              </ChartContainer>

              {/* Average Salary by Industry */}
              <ChartContainer title="Average Package by Industry (LPA)" exportable>
                <BarChart data={salaryByIndustry} height={300} />
              </ChartContainer>
            </div>

            {/* Industry Trends */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Emerging Industry Trends</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {industryTrends.map((trend, index) => (
                  <div
                    key={trend.industry}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{trend.industry}</h4>
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="text-2xl font-bold text-green-600">{trend.growth}</div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDemandColor(trend.demand)}`}>
                            {trend.demand} Demand
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">Average Package Range</div>
                      <div className="text-lg font-semibold text-primary-600">{trend.avgPackage}</div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">Top Skills Required</div>
                      <div className="flex flex-wrap gap-2">
                        {trend.topSkills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">Leading Companies</div>
                      <div className="text-sm text-gray-600">
                        {trend.companies.join(', ')}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm font-medium text-gray-700 mb-1">Market Forecast</div>
                      <div className="text-sm text-gray-600">{trend.forecast}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Intelligence */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Market Opportunities */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Market Opportunities</h3>
                <div className="space-y-4">
                  {[
                    {
                      opportunity: 'AI/ML Specialization',
                      potential: 'Very High',
                      timeline: '6 months',
                      investment: 'Medium',
                    },
                    {
                      opportunity: 'Cloud Certification Programs',
                      potential: 'High',
                      timeline: '3 months',
                      investment: 'Low',
                    },
                    {
                      opportunity: 'Cybersecurity Bootcamp',
                      potential: 'High',
                      timeline: '4 months',
                      investment: 'Medium',
                    },
                    {
                      opportunity: 'Data Science Track',
                      potential: 'Medium',
                      timeline: '8 months',
                      investment: 'High',
                    },
                  ].map((opp, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-gray-200 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="font-medium text-gray-900 mb-2">{opp.opportunity}</div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-600">Potential: </span>
                          <span className={`font-medium ${
                            opp.potential === 'Very High' ? 'text-red-600' :
                            opp.potential === 'High' ? 'text-orange-600' : 'text-yellow-600'
                          }`}>
                            {opp.potential}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Timeline: </span>
                          <span className="font-medium text-gray-900">{opp.timeline}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Partnerships */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Strategic Partnerships</h3>
                <div className="space-y-4">
                  {[
                    {
                      company: 'Microsoft',
                      type: 'Technology Partner',
                      focus: 'Cloud & AI Training',
                      status: 'Active',
                    },
                    {
                      company: 'Amazon',
                      type: 'Certification Partner',
                      focus: 'AWS Cloud Skills',
                      status: 'Active',
                    },
                    {
                      company: 'Google',
                      type: 'Education Partner',
                      focus: 'AI/ML Curriculum',
                      status: 'Proposed',
                    },
                    {
                      company: 'IBM',
                      type: 'Research Partner',
                      focus: 'Quantum Computing',
                      status: 'Discussion',
                    },
                  ].map((partnership, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-gray-200 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-gray-900">{partnership.company}</div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          partnership.status === 'Active' ? 'bg-green-100 text-green-800' :
                          partnership.status === 'Proposed' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {partnership.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-1">{partnership.type}</div>
                      <div className="text-sm text-gray-500">{partnership.focus}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Outlook */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Future Outlook</h3>
                <div className="space-y-4">
                  {[
                    {
                      trend: 'Remote Work Normalization',
                      impact: 'High',
                      description: 'Permanent shift to hybrid work models',
                    },
                    {
                      trend: 'AI Integration',
                      impact: 'Very High',
                      description: 'AI skills becoming mandatory across roles',
                    },
                    {
                      trend: 'Sustainability Focus',
                      impact: 'Medium',
                      description: 'Green technology jobs increasing',
                    },
                    {
                      trend: 'Skill-based Hiring',
                      impact: 'High',
                      description: 'Emphasis on practical skills over degrees',
                    },
                  ].map((outlook, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-primary-50 border border-primary-200 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-gray-900">{outlook.trend}</div>
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          outlook.impact === 'Very High' ? 'bg-red-100 text-red-800' :
                          outlook.impact === 'High' ? 'bg-orange-100 text-orange-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {outlook.impact}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">{outlook.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}