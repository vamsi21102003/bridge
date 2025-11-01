'use client';

import { useState, useEffect } from 'react';
import type { UniversitySummary } from '@/types/university';

export function useUniversityStats() {
  const [data, setData] = useState<UniversitySummary | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockData: UniversitySummary = {
          totalStudentsAnalyzed: 15420,
          totalPlacedStudents: 12336,
          averageEmployabilityScore: 78.5,
          totalActiveEmployers: 245,
          skillGapIndex: 23.2,
        };
        
        setData(mockData);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}