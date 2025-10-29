import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { applicantsApi } from '@/lib/dashboard/api';
import { Applicant } from '@/types/dashboard';

export const useApplicants = () => {
  return useQuery({
    queryKey: ['applicants'],
    queryFn: applicantsApi.getAll,
  });
};

export const useUpdateApplicantStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: Applicant['status'] }) => 
      applicantsApi.updateStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applicants'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard-stats'] });
    },
  });
};