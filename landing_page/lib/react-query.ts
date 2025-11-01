import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
})

// Query keys for consistent caching
export const QUERY_KEYS = {
  JOBS: 'jobs',
  JOB_DETAILS: 'job-details',
  USER_PROFILE: 'user-profile',
  DASHBOARD: 'dashboard',
  OPPORTUNITIES: 'opportunities',
  FEATURED_OPPORTUNITIES: 'featured-opportunities',
}