'use client';

import { useQuery } from 'react-query';
import { api } from '@/lib/student/api';
import { Game } from '@/types/student';

export const useGames = () => {
  return useQuery<Game[]>('games', api.getGames, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useGame = (id: string) => {
  return useQuery<Game>(
    ['game', id],
    () => api.getGameById(id),
    {
      enabled: !!id,
      staleTime: 5 * 60 * 1000,
    }
  );
};