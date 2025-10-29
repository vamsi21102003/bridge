import { useState, useEffect } from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  status: 'active' | 'closed' | 'draft';
  applications: number;
  posted: string;
}

export const useJobs = () => {
  const [data, setData] = useState<Job[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock API call
    const fetchJobs = async () => {
      setIsLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setData([
        {
          id: 1,
          title: 'Senior Software Engineer',
          company: 'TechCorp',
          location: 'San Francisco, CA',
          type: 'Full-time',
          status: 'active',
          applications: 24,
          posted: '2 days ago',
        },
        {
          id: 2,
          title: 'Product Manager',
          company: 'StartupXYZ',
          location: 'New York, NY',
          type: 'Full-time',
          status: 'active',
          applications: 18,
          posted: '1 week ago',
        },
        {
          id: 3,
          title: 'UX Designer',
          company: 'DesignStudio',
          location: 'Remote',
          type: 'Contract',
          status: 'closed',
          applications: 45,
          posted: '2 weeks ago',
        },
      ]);
      setIsLoading(false);
    };

    fetchJobs();
  }, []);

  return { data, isLoading };
};