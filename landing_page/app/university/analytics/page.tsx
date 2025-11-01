'use client';

import { Header } from '@/components/university-layout/Header';
import { Sidebar } from '@/components/university-layout/Sidebar';
import { ChartContainer } from '@/components/university/charts/ChartContainer';
import { BarChart } from '@/components/university/charts/BarChart';
import { LineChart } from '@/components/university/charts/LineChart';
import { PieChart } from '@/components/university/charts/PieChart';
import { SummaryCard } from '@/components/university/cards/SummaryCard';
import { TrendingUp, Users, Target, AlertTriangle } from 'lucide-react';

export default function AnalyticsPage() {
  // Mock data for skill gap analysis
  const skillGapData = [
    { name: 'AI/ML', placed: 450, total: 800, rate: '56.3' },
    { name: 'Cloud Computing', placed: 320, total: 600, rate: '53.3' },
    { name: 'Data Science', placed: 280, total: 500, rate: '56.0' },
    { name: 'Cybersecurity', placed: 180, total: 400, rate: '45.0' },
    { name: 'DevOps', placed: 150, total: 350, rate: '42.9' },
  ];

  const departmentSkillGap = [
    { name: 'CSE', value: 1200, percentage: 35.2 },
    { name: 'ECE', value: 800, percentage: 23.5 },
    { name: 'ME', value: 600, percentage: 17.6 },
    { name: 'EE', value: 500, percentage: 14.7 },
    { name: 'CE', value: 300, percentage: 8.8 },
  ];

  const trendData = [
    { year: '2020', placed: 2800, total: 4000, rate: '70.0' },
    { year: '2021', placed: 3200, total: 4200, rate: '76.2' },
    { year: '2022', placed: 3600, total: 4500, rate: '80.0' },
    { year: '2023', placed: 3900, total: 4800, rate: '81.3' },
    { year: '2024', placed: 4200, total: 5000, rate: '84.0' },
  ];

  const summaryCards = [
    {
      title: 'Overall Skill Gap',
      value: '23.5%',
      icon: <Target className="w-6 h-6" />,
      trend: { value: -2.1, isPositive: true },
    },
    {
      title: 'Students Needing Upskilling',
      value: '3,420',
      icon: <Users className="w-6 h-6" />,
      trend: { value: 5.2, isPositive: false },
    },
    {
      title: 'High-Demand Skills',
      value: '12',
      icon: <TrendingUp className="w-6 h-6" />,
      trend: { value: 8.3, isPositive: true },
    },
    {
      title: 'Critical Skill Gaps',
      value: '5',
      icon: <AlertTriangle className="w-6 h-6" />,
      trend: { value: -1.2, isPositive: true },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 university-dashboard-layout dashboard-layout university-website particle-bg">
      <Header userRole="university_admin" currentPage="analytics" />
      
      <div className="flex">
        <main className="main-content-with-sidebar-right p-6">
          <div className="page-enter">
            {/* Enhanced Header */}
            <div className="mb-8 slide-in-left">
              <div className="relative">
                <h1 className="text-4xl font-bold gradient-text mb-4 float-animation">
                  📊 Skill Gap Analysis
                </h1>
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-indigo-400 to-cyan-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              </div>
              <p className="text-lg text-gray-700 slide-in-right stagger-2 font-medium">
                🔍 Comprehensive analysis of skill gaps and industry demands
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

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Skill Gap by Technology */}
              <ChartContainer title="Skill Gap by Technology" exportable>
                <BarChart data={skillGapData} height={300} />
              </ChartContainer>

              {/* Department-wise Skill Gap Distribution */}
              <ChartContainer title="Department-wise Skill Gap Distribution" exportable>
                <PieChart data={departmentSkillGap} height={300} />
              </ChartContainer>

              {/* Skill Development Trends */}
              <div className="lg:col-span-2">
                <ChartContainer title="Skill Development Trends (2020-2024)" exportable>
                  <LineChart data={trendData} height={300} />
                </ChartContainer>
              </div>
            </div>

            {/* Recommendations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Skill Gaps */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Skill Gaps</h3>
                <div className="space-y-4">
                  {[
                    { skill: 'Machine Learning', gap: '45%', priority: 'High', color: 'bg-red-100 text-red-800' },
                    { skill: 'Cloud Architecture', gap: '38%', priority: 'High', color: 'bg-red-100 text-red-800' },
                    { skill: 'Data Analytics', gap: '32%', priority: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
                    { skill: 'Cybersecurity', gap: '28%', priority: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
                    { skill: 'DevOps', gap: '25%', priority: 'Low', color: 'bg-green-100 text-green-800' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{item.skill}</div>
                        <div className="text-sm text-gray-600">Gap: {item.gap}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.color}`}>
                        {item.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Recommendations */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Recommendations</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Implement AI/ML Bootcamp',
                      description: 'Focus on practical machine learning applications',
                      impact: 'High',
                      duration: '3 months',
                    },
                    {
                      title: 'Cloud Certification Program',
                      description: 'AWS/Azure certification training for students',
                      impact: 'High',
                      duration: '2 months',
                    },
                    {
                      title: 'Industry Partnership',
                      description: 'Collaborate with tech companies for skill training',
                      impact: 'Medium',
                      duration: '6 months',
                    },
                    {
                      title: 'Curriculum Update',
                      description: 'Integrate modern technologies in coursework',
                      impact: 'Medium',
                      duration: '1 year',
                    },
                  ].map((rec, index) => (
                    <div key={index} className="p-4 rounded-lg bg-primary-50 border border-primary-200">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{rec.title}</h4>
                        <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded">
                          {rec.impact} Impact
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
                      <div className="text-xs text-gray-500">Duration: {rec.duration}</div>
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