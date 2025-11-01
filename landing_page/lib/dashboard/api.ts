import axiosInstance from './axiosInstance';
import { Job, Applicant, Profile, DashboardStats, AnalyticsData } from '@/types/dashboard';
import { API_ROUTES } from '@/constants/dashboard';

// Mock data for development
const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    role: 'Full-time',
    description: 'Looking for an experienced React developer to join our dynamic team',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    salary: '₹8-12 LPA',
    location: 'Bangalore',
    createdAt: '2024-01-15',
    status: 'active'
  },
  {
    id: '2',
    title: 'Backend Engineer',
    role: 'Full-time',
    description: 'Node.js and MongoDB expert needed for scalable backend systems',
    skills: ['Node.js', 'MongoDB', 'Express', 'AWS'],
    salary: '₹6-10 LPA',
    location: 'Mumbai',
    createdAt: '2024-01-10',
    status: 'active'
  },
  {
    id: '3',
    title: 'UI/UX Design Intern',
    role: 'Internship',
    description: 'Great opportunity for design students to work on real projects',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    salary: '₹15,000/month',
    location: 'Remote',
    createdAt: '2024-01-08',
    status: 'active'
  },
];

const mockApplicants: Applicant[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@email.com',
    skills: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'CSS', 'Tailwind CSS'],
    appliedPosition: 'Senior Frontend Developer',
    resumeLink: 'https://drive.google.com/file/d/1example-rahul-sharma/view',
    status: 'pending',
    appliedAt: '2024-01-16'
  },
  {
    id: '2',
    name: 'Priya Patel',
    email: 'priya.patel@email.com',
    skills: ['React', 'Vue.js', 'Angular', 'TypeScript', 'SASS', 'Redux'],
    appliedPosition: 'Senior Frontend Developer',
    resumeLink: 'https://drive.google.com/file/d/1example-priya-patel/view',
    status: 'shortlisted',
    appliedAt: '2024-01-15'
  },
];

// Jobs API
export const jobsApi = {
  getAll: async (): Promise<Job[]> => {
    try {
      const response = await axiosInstance.get(API_ROUTES.JOBS);
      return response.data;
    } catch (error) {
      // Return mock data for development
      return mockJobs;
    }
  },

  create: async (jobData: Omit<Job, 'id' | 'createdAt' | 'status'>): Promise<Job> => {
    try {
      const response = await axiosInstance.post(API_ROUTES.JOBS, jobData);
      return response.data;
    } catch (error) {
      // Mock creation for development
      const newJob: Job = {
        ...jobData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString().split('T')[0],
        status: 'active'
      };
      return newJob;
    }
  },

  update: async (id: string, jobData: Partial<Job>): Promise<Job> => {
    try {
      const response = await axiosInstance.put(`${API_ROUTES.JOBS}/${id}`, jobData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update job');
    }
  },

  delete: async (id: string): Promise<void> => {
    try {
      await axiosInstance.delete(`${API_ROUTES.JOBS}/${id}`);
    } catch (error) {
      throw new Error('Failed to delete job');
    }
  }
};

// Applicants API
export const applicantsApi = {
  getAll: async (): Promise<Applicant[]> => {
    try {
      const response = await axiosInstance.get(API_ROUTES.APPLICANTS);
      return response.data;
    } catch (error) {
      // Return mock data for development
      return mockApplicants;
    }
  },

  updateStatus: async (id: string, status: Applicant['status']): Promise<Applicant> => {
    try {
      const response = await axiosInstance.patch(`${API_ROUTES.APPLICANTS}/${id}`, { status });
      return response.data;
    } catch (error) {
      throw new Error('Failed to update applicant status');
    }
  }
};

// Dashboard API
export const dashboardApi = {
  getStats: async (): Promise<DashboardStats> => {
    try {
      const response = await axiosInstance.get('/api/dashboard/stats');
      return response.data;
    } catch (error) {
      // Return mock data for development
      return {
        totalJobs: 8,
        totalApplicants: 23,
        activePositions: 6,
        shortlistedCandidates: 6
      };
    }
  }
};

// Analytics API
export const analyticsApi = {
  getData: async (): Promise<AnalyticsData> => {
    try {
      const response = await axiosInstance.get(API_ROUTES.ANALYTICS);
      return response.data;
    } catch (error) {
      // Return mock data for development
      return {
        totalJobPosts: 12,
        totalApplicants: 45,
        conversionRate: 33.3,
        engagement: 78.5,
        employabilityInsights: {
          highDemandSkills: ['React', 'Node.js', 'Python', 'TypeScript'],
          averageTimeToHire: 21,
          topPerformingJobs: mockJobs.slice(0, 2)
        }
      };
    }
  }
};