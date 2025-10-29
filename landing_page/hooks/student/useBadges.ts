'use client';

import { useQuery } from 'react-query';
import { api } from '@/lib/student/api';
import { Badge } from '@/types/student';

export const useBadges = () => {
  return useQuery<Badge[]>('badges', api.getBadges, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useUserBadges = (userId: string) => {
  return useQuery<Badge[]>(
    ['userBadges', userId],
    () => api.getUserBadges(userId),
    {
      enabled: !!userId,
      staleTime: 5 * 60 * 1000,
    }
  );
};