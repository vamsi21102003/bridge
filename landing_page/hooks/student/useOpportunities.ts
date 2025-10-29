'use client';

import { useQuery } from 'react-query';
import { api } from '@/lib/student/api';
import { Opportunity } from '@/types/student';

export const useOpportunities = () => {
  return useQuery<Opportunity[]>('opportunities', api.getOpportunities, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useOpportunity = (id: string) => {
  return useQuery<Opportunity>(
    ['opportunity', id],
    () => api.getOpportunityById(id),
    {
      enabled: !!id,
      staleTime: 5 * 60 * 1000,
    }
  );
};