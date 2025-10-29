export type Language = 'en' | 'hi' | 'od';

export interface User {
  id: string;
  email: string;
  companyName: string;
  isSubscribed: boolean;
}

export interface Job {
  id: string;
  title: string;
  company?: string;
  location: string;
  type?: string;
  status: 'active' | 'closed' | 'draft';
  applications?: number;
  posted?: string;
  role?: string;
  salary?: string;
  createdAt?: string;
  description?: string;
  skills?: string[];
}

export interface Applicant {
  id: string;
  name: string;
  email: string;
  skills: string[];
  appliedPosition: string;
  resumeLink: string;
  status: 'pending' | 'shortlisted' | 'rejected' | 'hired';
  appliedAt: string;
}

export interface Profile {
  id: string;
  name: string;
  email: string;
  company: string;
}

export interface DashboardStats {
  totalJobs: number;
  activeJobs?: number;
  activePositions?: number;
  totalApplications?: number;
  totalApplicants?: number;
  newApplications?: number;
  shortlistedCandidates?: number;
}

export interface AnalyticsData {
  jobViews?: number;
  applications?: number;
  hires?: number;
  conversionRate: number;
  totalJobPosts?: number;
  totalApplicants?: number;
  engagement?: number;
  employabilityInsights?: {
    highDemandSkills: string[];
    averageTimeToHire: number;
    topPerformingJobs: Job[];
  };
}