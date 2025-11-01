'use client';

import { Users, GraduationCap, Building2, TrendingUp, Award, MapPin } from 'lucide-react';
import { SummaryCard } from '@/components/university/cards/SummaryCard';
import { ChartContainer } from '@/components/university/charts/ChartContainer';
import { PieChart } from '@/components/university/charts/PieChart';
import { BarChart } from '@/components/university/charts/BarChart';
import { LineChart } from '@/components/university/charts/LineChart';
import { HeatMap } from '@/components/university/charts/HeatMap';
import { LoadingSpinner } from '@/components/university/ui/LoadingSpinner';
import type { UniversitySummary } from '@/types/university';

interface UniversityOverviewProps {
  data?: UniversitySummary;
  isLoading: boolean;
}

export function UniversityOverview({ data, isLoading }: UniversityOverviewProps) {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }

  const summaryCards = [
    {
      title: 'Total Students Analyzed',
      value: data.totalStudentsAnalyzed.toLocaleString(),
      icon: <Users className="w-6 h-6" />,
      trend: { value: 12, isPositive: true },
    },
    {
      title: 'Students Placed',
      value: data.totalPlacedStudents.toLocaleString(),
      icon: <GraduationCap className="w-6 h-6" />,
      trend: { value: 8.5, isPositive: true },
    },
    {
      title: 'Active Employers',
      value: data.totalActiveEmployers.toString(),
      icon: <Building2 className="w-6 h-6" />,
      trend: { value: 15, isPositive: true },
    },
    {
      title: 'Avg Employability Score',
      value: `${data.averageEmployabilityScore}%`,
      icon: <Award className="w-6 h-6" />,
      trend: { value: 5.2, isPositive: true },
    },
    {
      title: 'Skill Gap Index',
      value: `${data.skillGapIndex}%`,
      icon: <TrendingUp className="w-6 h-6" />,
      trend: { value: -3.1, isPositive: false },
    },
    {
      title: 'Placement Rate',
      value: `${((data.totalPlacedStudents / data.totalStudentsAnalyzed) * 100).toFixed(1)}%`,
      icon: <MapPin className="w-6 h-6" />,
      trend: { value: 4.8, isPositive: true },
    },
  ];

  // Mock data for charts
  const placementByBranch = [
    { branch: 'CSE', placed: 1250, total: 1400, percentage: 89.3 },
    { branch: 'ECE', placed: 980, total: 1200, percentage: 81.7 },
    { branch: 'ME', placed: 720, total: 1000, percentage: 72.0 },
    { branch: 'EE', placed: 650, total: 900, percentage: 72.2 },
    { branch: 'CE', placed: 580, total: 850, percentage: 68.2 },
  ];

  const districtWisePlacement = [
    { district: 'Bhubaneswar', colleges: 12, placed: 3200, total: 4100 },
    { district: 'Cuttack', colleges: 8, placed: 2100, total: 2800 },
    { district: 'Rourkela', colleges: 6, placed: 1800, total: 2300 },
    { district: 'Berhampur', colleges: 5, placed: 1200, total: 1600 },
  ];

  const yearlyTrends = [
    { year: 2019, placed: 8500, total: 12000 },
    { year: 2020, placed: 9200, total: 12800 },
    { year: 2021, placed: 10100, total: 13500 },
    { year: 2022, placed: 11200, total: 14200 },
    { year: 2023, placed: 12000, total: 14800 },
    { year: 2024, placed: 12336, total: 15420 },
  ];

  const employabilityHeatMap = [
    { college: 'Gandhi Engineering College (GEC)', district: 'Bhubaneswar', score: 96 },
    { college: 'Gandhi Institute for Education & Technology (GIET)', district: 'Bhubaneswar', score: 80 },
    { college: 'Konark Institute of Science & Technology (KIST)', district: 'Bhubaneswar', score: 86 },
    { college: 'C. V. Raman College of Engineering', district: 'Bhubaneswar', score: 80 },
    { college: 'Trident Academy of Technology (TAT)', district: 'Bhubaneswar', score: 80 },
  ];

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 dashboard-grid">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Placement by Branch - Pie Chart */}
        <ChartContainer title="Placement Distribution by Branch" exportable>
          <PieChart
            data={placementByBranch.map(item => ({
              name: item.branch,
              value: item.placed,
              percentage: item.percentage,
            }))}
            height={300}
          />
        </ChartContainer>

        {/* District-wise Placement - Bar Chart */}
        <ChartContainer title="District-wise Placement Overview" exportable>
          <BarChart
            data={districtWisePlacement.map(item => ({
              name: item.district,
              placed: item.placed,
              total: item.total,
              rate: ((item.placed / item.total) * 100).toFixed(1),
            }))}
            height={300}
          />
        </ChartContainer>

        {/* Yearly Trends - Line Chart */}
        <ChartContainer title="Placement Trends (2019-2024)" exportable>
          <LineChart
            data={yearlyTrends.map(item => ({
              year: item.year.toString(),
              placed: item.placed,
              total: item.total,
              rate: ((item.placed / item.total) * 100).toFixed(1),
            }))}
            height={300}
          />
        </ChartContainer>

        {/* Employability Heat Map */}
        <ChartContainer title="College Employability Index" exportable>
          <HeatMap
            data={employabilityHeatMap}
            height={300}
          />
        </ChartContainer>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { type: 'placement', message: 'New placement record: 15 students placed at TCS', time: '2 hours ago' },
              { type: 'verification', message: 'College verification completed for Gandhi Engineering College (GEC)', time: '4 hours ago' },
              { type: 'report', message: 'Monthly placement report generated', time: '1 day ago' },
              { type: 'registration', message: '5 new employers registered on platform', time: '2 days ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Alerts</h3>
          <div className="space-y-4">
            {[
              { type: 'warning', title: 'Skill Gap Alert', message: 'High demand for AI/ML skills detected', priority: 'high' },
              { type: 'info', title: 'New Industry Partner', message: 'Microsoft has joined as placement partner', priority: 'medium' },
              { type: 'success', title: 'Target Achieved', message: 'Monthly placement target exceeded by 15%', priority: 'low' },
            ].map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200">
                <div className={`w-3 h-3 rounded-full mt-1 ${
                  alert.type === 'warning' ? 'bg-yellow-500' :
                  alert.type === 'info' ? 'bg-blue-500' : 'bg-green-500'
                }`}></div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">{alert.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}