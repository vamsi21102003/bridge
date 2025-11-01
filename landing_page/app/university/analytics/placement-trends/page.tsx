'use client';

import { Header } from '@/components/university-layout/Header';
import { Sidebar } from '@/components/university-layout/Sidebar';
import { ChartContainer } from '@/components/university/charts/ChartContainer';
import { LineChart } from '@/components/university/charts/LineChart';
import { BarChart } from '@/components/university/charts/BarChart';
import { SummaryCard } from '@/components/university/cards/SummaryCard';
import { TrendingUp, Calendar, Target, Award } from 'lucide-react';

export default function PlacementTrendsPage() {
  const summaryCards = [
    {
      title: 'YoY Growth Rate',
      value: '+12.5%',
      icon: <TrendingUp className="w-6 h-6" />,
      trend: { value: 3.2, isPositive: true },
    },
    {
      title: 'Peak Hiring Month',
      value: 'March',
      icon: <Calendar className="w-6 h-6" />,
      trend: { value: 8.7, isPositive: true },
    },
    {
      title: 'Placement Target',
      value: '85%',
      icon: <Target className="w-6 h-6" />,
      trend: { value: 2.1, isPositive: true },
    },
    {
      title: 'Avg Package Growth',
      value: '+18.3%',
      icon: <Award className="w-6 h-6" />,
      trend: { value: 5.4, isPositive: true },
    },
  ];

  const yearlyTrends = [
    { year: '2019', placed: 8500, total: 12000, rate: '70.8' },
    { year: '2020', placed: 9200, total: 12800, rate: '71.9' },
    { year: '2021', placed: 10100, total: 13500, rate: '74.8' },
    { year: '2022', placed: 11200, total: 14200, rate: '78.9' },
    { year: '2023', placed: 12000, total: 14800, rate: '81.1' },
    { year: '2024', placed: 12336, total: 15420, rate: '80.0' },
  ];

  const monthlyTrends = [
    { name: 'Jan', placed: 850, total: 1200, rate: '70.8' },
    { name: 'Feb', placed: 920, total: 1250, rate: '73.6' },
    { name: 'Mar', placed: 1200, total: 1400, rate: '85.7' },
    { name: 'Apr', placed: 1100, total: 1350, rate: '81.5' },
    { name: 'May', placed: 980, total: 1300, rate: '75.4' },
    { name: 'Jun', placed: 750, total: 1100, rate: '68.2' },
  ];

  const industryTrends = [
    {
      industry: 'Information Technology',
      growth: '+25%',
      hires: 4200,
      avgPackage: '₹8.5L',
      trend: 'increasing',
    },
    {
      industry: 'Financial Services',
      growth: '+18%',
      hires: 1800,
      avgPackage: '₹9.2L',
      trend: 'increasing',
    },
    {
      industry: 'Consulting',
      growth: '+15%',
      hires: 1200,
      avgPackage: '₹10.5L',
      trend: 'increasing',
    },
    {
      industry: 'Manufacturing',
      growth: '+8%',
      hires: 2100,
      avgPackage: '₹6.8L',
      trend: 'stable',
    },
    {
      industry: 'Healthcare',
      growth: '+22%',
      hires: 800,
      avgPackage: '₹7.5L',
      trend: 'increasing',
    },
    {
      industry: 'Education',
      growth: '-5%',
      hires: 600,
      avgPackage: '₹5.2L',
      trend: 'decreasing',
    },
  ];

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'increasing': return 'text-green-600';
      case 'stable': return 'text-blue-600';
      case 'decreasing': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing': return '↗️';
      case 'stable': return '➡️';
      case 'decreasing': return '↘️';
      default: return '➡️';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 university-dashboard-layout dashboard-layout">
      <Header userRole="university_admin" currentPage="analytics" />
      
      <div className="flex">
        <main className="main-content-with-sidebar-right p-6">
          <div className="page-enter">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Placement Trends Analysis
              </h1>
              <p className="text-gray-600">
                Historical trends and forecasting for placement performance
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
              {/* Yearly Trends */}
              <div className="lg:col-span-2">
                <ChartContainer title="Yearly Placement Trends (2019-2024)" exportable>
                  <LineChart data={yearlyTrends} height={350} />
                </ChartContainer>
              </div>

              {/* Monthly Trends */}
              <ChartContainer title="Monthly Placement Trends (2024)" exportable>
                <BarChart data={monthlyTrends} height={300} />
              </ChartContainer>

              {/* Industry Analysis */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Industry Growth Analysis</h3>
                <div className="space-y-4">
                  {industryTrends.map((industry, index) => (
                    <div
                      key={industry.industry}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 mb-1">{industry.industry}</div>
                        <div className="text-sm text-gray-600">
                          {industry.hires.toLocaleString()} hires • {industry.avgPackage} avg
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${getTrendColor(industry.trend)}`}>
                          {industry.growth} {getTrendIcon(industry.trend)}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">{industry.trend}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Insights & Predictions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Key Insights */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Insights</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Peak Hiring Season',
                      description: 'March-April shows highest placement activity with 85%+ success rate',
                      impact: 'High',
                    },
                    {
                      title: 'IT Sector Dominance',
                      description: 'Technology sector accounts for 45% of all placements with growing demand',
                      impact: 'High',
                    },
                    {
                      title: 'Package Growth',
                      description: 'Average packages increased by 18% YoY, outpacing inflation',
                      impact: 'Medium',
                    },
                    {
                      title: 'Emerging Sectors',
                      description: 'Healthcare and Fintech showing rapid growth in hiring',
                      impact: 'Medium',
                    },
                  ].map((insight, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-primary-50 border border-primary-200 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{insight.title}</h4>
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          insight.impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {insight.impact} Impact
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{insight.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Predictions */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">2025 Predictions</h3>
                <div className="space-y-4">
                  {[
                    {
                      metric: 'Overall Placement Rate',
                      current: '80.0%',
                      predicted: '83.5%',
                      confidence: '92%',
                    },
                    {
                      metric: 'Average Package',
                      current: '₹8.2L',
                      predicted: '₹9.8L',
                      confidence: '88%',
                    },
                    {
                      metric: 'Total Placements',
                      current: '12,336',
                      predicted: '14,200',
                      confidence: '85%',
                    },
                    {
                      metric: 'New Industry Partners',
                      current: '245',
                      predicted: '290',
                      confidence: '78%',
                    },
                  ].map((prediction, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-gray-200 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{prediction.metric}</h4>
                        <span className="text-xs text-gray-500">Confidence: {prediction.confidence}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          Current: <span className="font-semibold">{prediction.current}</span>
                        </div>
                        <div className="text-sm text-green-600">
                          Predicted: <span className="font-semibold">{prediction.predicted}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Sidebar currentPage="analytics" />
      </div>
    </div>
  );
}