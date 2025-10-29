'use client';

import { Header } from '@/components/university-layout/Header';
import { Sidebar } from '@/components/university-layout/Sidebar';
import { SummaryCard } from '@/components/university/cards/SummaryCard';
import { ChartContainer } from '@/components/university/charts/ChartContainer';
import { BarChart } from '@/components/university/charts/BarChart';
import { PieChart } from '@/components/university/charts/PieChart';
import { Brain, TrendingUp, Target, Lightbulb, AlertTriangle, CheckCircle } from 'lucide-react';

export default function AIInsightsPage() {
  const summaryCards = [
    {
      title: 'AI Accuracy Score',
      value: '94.2%',
      icon: <Brain className="w-6 h-6" />,
      trend: { value: 2.3, isPositive: true },
    },
    {
      title: 'Predictions Made',
      value: '15,420',
      icon: <TrendingUp className="w-6 h-6" />,
      trend: { value: 18.7, isPositive: true },
    },
    {
      title: 'Success Rate',
      value: '87.5%',
      icon: <Target className="w-6 h-6" />,
      trend: { value: 5.2, isPositive: true },
    },
    {
      title: 'Recommendations',
      value: '342',
      icon: <Lightbulb className="w-6 h-6" />,
      trend: { value: 12.8, isPositive: true },
    },
  ];

  const skillDemandPrediction = [
    { name: 'AI/ML', placed: 850, total: 1000, rate: '85.0' },
    { name: 'Cloud Computing', placed: 720, total: 900, rate: '80.0' },
    { name: 'Data Science', placed: 680, total: 800, rate: '85.0' },
    { name: 'Cybersecurity', placed: 560, total: 700, rate: '80.0' },
    { name: 'DevOps', placed: 480, total: 600, rate: '80.0' },
  ];

  const careerPathPredictions = [
    { name: 'Software Engineer', value: 3200, percentage: 35.2 },
    { name: 'Data Scientist', value: 1800, percentage: 19.8 },
    { name: 'Product Manager', value: 1200, percentage: 13.2 },
    { name: 'DevOps Engineer', value: 1000, percentage: 11.0 },
    { name: 'AI Engineer', value: 900, percentage: 9.9 },
    { name: 'Others', value: 1000, percentage: 11.0 },
  ];

  const aiRecommendations = [
    {
      id: 1,
      type: 'skill_gap',
      title: 'Critical Skill Gap Identified',
      description: 'AI/ML skills show 45% gap in CSE department. Immediate intervention recommended.',
      priority: 'High',
      impact: 'High',
      confidence: 92,
      action: 'Implement AI/ML bootcamp program',
      timeline: '3 months',
      status: 'pending',
    },
    {
      id: 2,
      type: 'placement_trend',
      title: 'Emerging Industry Demand',
      description: 'Cloud computing roles increasing by 35% in next quarter based on market analysis.',
      priority: 'Medium',
      impact: 'High',
      confidence: 88,
      action: 'Introduce cloud certification courses',
      timeline: '2 months',
      status: 'in_progress',
    },
    {
      id: 3,
      type: 'curriculum',
      title: 'Curriculum Optimization',
      description: 'Data Science curriculum alignment with industry needs shows 78% match.',
      priority: 'Medium',
      impact: 'Medium',
      confidence: 85,
      action: 'Update curriculum with latest tools',
      timeline: '6 months',
      status: 'completed',
    },
    {
      id: 4,
      type: 'partnership',
      title: 'Strategic Partnership Opportunity',
      description: 'Microsoft partnership could increase placement rate by 15% in IT department.',
      priority: 'High',
      impact: 'High',
      confidence: 90,
      action: 'Initiate partnership discussions',
      timeline: '1 month',
      status: 'pending',
    },
  ];

  const marketInsights = [
    {
      category: 'Technology Trends',
      insights: [
        'AI/ML demand increased by 67% in last 6 months',
        'Remote work capabilities now required for 85% of positions',
        'Cloud-native development skills in high demand',
      ],
    },
    {
      category: 'Industry Shifts',
      insights: [
        'Fintech sector showing 45% growth in hiring',
        'Healthcare tech emerging as major employer',
        'Sustainability roles increasing across industries',
      ],
    },
    {
      category: 'Salary Predictions',
      insights: [
        'AI specialists commanding 40% premium salaries',
        'Full-stack developers seeing 25% salary increase',
        'Data engineers in highest demand with 50% growth',
      ],
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in_progress': return <TrendingUp className="w-4 h-4" />;
      case 'pending': return <AlertTriangle className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 bput-dashboard-layout dashboard-layout">
      <Header userRole="university_admin" currentPage="ai-insights" />
      
      <div className="flex">
        <Sidebar currentPage="ai-insights" />
        
        <main className="main-content-with-sidebar p-6">
          <div className="page-enter">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                AI Insights & Predictions
              </h1>
              <p className="text-gray-600">
                AI-powered analytics and recommendations for strategic decision making
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
              {/* Skill Demand Predictions */}
              <ChartContainer title="AI-Predicted Skill Demand (Next 6 Months)" exportable>
                <BarChart data={skillDemandPrediction} height={300} />
              </ChartContainer>

              {/* Career Path Predictions */}
              <ChartContainer title="Predicted Career Paths Distribution" exportable>
                <PieChart data={careerPathPredictions} height={300} />
              </ChartContainer>
            </div>

            {/* AI Recommendations */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">AI Recommendations</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {aiRecommendations.map((rec, index) => (
                  <div
                    key={rec.id}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{rec.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{rec.description}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(rec.status)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(rec.status)}`}>
                          {rec.status.replace('_', ' ')}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-xs text-gray-500">Priority</span>
                        <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)} ml-2`}>
                          {rec.priority}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">Confidence</span>
                        <div className="text-sm font-semibold text-gray-900 ml-2">{rec.confidence}%</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="text-sm font-medium text-gray-900 mb-2">Recommended Action:</div>
                      <div className="text-sm text-gray-700">{rec.action}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Timeline: {rec.timeline}</div>
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium">
                        Take Action
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Insights */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Market Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {marketInsights.map((category, index) => (
                  <div
                    key={category.category}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h4>
                    <div className="space-y-3">
                      {category.insights.map((insight, insightIndex) => (
                        <div key={insightIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-gray-700 leading-relaxed">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}