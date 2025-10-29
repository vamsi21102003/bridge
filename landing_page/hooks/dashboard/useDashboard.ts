import { useState, useEffect } from 'react';

interface DashboardStats {
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  interviewsScheduled: number;
  hiredThisMonth: number;
}

export const useDashboardStats = () => {
  const [data, setData] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock API call
    const fetchStats = async () => {
      setIsLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setData({
        totalJobs: 12,
        activeJobs: 8,
        totalApplications: 248,
        interviewsScheduled: 8,
        hiredThisMonth: 5,
      });
      setIsLoading(false);
    };

    fetchStats();
  }, []);

  return { data, isLoading };
};