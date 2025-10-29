import axios from 'axios';
import { API_BASE_URL } from '@/constants/student';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const api = {
  // Opportunities
  getOpportunities: async () => {
    const response = await axiosInstance.get('/opportunities');
    return response.data;
  },
  getOpportunityById: async (id: string) => {
    const response = await axiosInstance.get(`/opportunities/${id}`);
    return response.data;
  },
  
  // Mentors
  getMentors: async () => {
    const response = await axiosInstance.get('/mentors');
    return response.data;
  },
  getMentorById: async (id: string) => {
    const response = await axiosInstance.get(`/mentors/${id}`);
    return response.data;
  },
  
  // Games
  getGames: async () => {
    const response = await axiosInstance.get('/games');
    return response.data;
  },
  getGameById: async (id: string) => {
    const response = await axiosInstance.get(`/games/${id}`);
    return response.data;
  },
  
  // Badges
  getBadges: async () => {
    const response = await axiosInstance.get('/badges');
    return response.data;
  },
  getUserBadges: async (userId: string) => {
    const response = await axiosInstance.get(`/users/${userId}/badges`);
    return response.data;
  },
  
  // Courses
  getCourses: async () => {
    const response = await axiosInstance.get('/courses');
    return response.data;
  },
  getCoursesByProvider: async (provider: string) => {
    const response = await axiosInstance.get(`/courses?provider=${provider}`);
    return response.data;
  },
  
  // User
  getProfile: async () => {
    const response = await axiosInstance.get('/profile');
    return response.data;
  },
  updateProfile: async (data: any) => {
    const response = await axiosInstance.put('/profile', data);
    return response.data;
  },
};