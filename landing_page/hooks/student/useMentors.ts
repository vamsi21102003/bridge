'use client';

import { useQuery } from 'react-query';
import { api } from '@/lib/student/api';
import { Mentor } from '@/types/student';

export const useMentors = () => {
  return useQuery<Mentor[]>('mentors', api.getMentors, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useMentor = (id: string) => {
  return useQuery<Mentor>(
    ['mentor', id],
    () => api.getMentorById(id),
    {
      enabled: !!id,
      staleTime: 5 * 60 * 1000,
    }
  );
};