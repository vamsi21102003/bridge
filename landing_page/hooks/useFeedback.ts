import { useState, useEffect, useCallback } from 'react';
import {
  StudentFeedback,
  getAllFeedback,
  createFeedback,
  updateFeedback,
  deleteFeedback,
  searchFeedback,
  filterFeedbackByCollege,
  likeFeedback,
  getFeedbackStats,
  validateFeedback
} from '@/lib/feedback-api';

interface UseFeedbackReturn {
  // Data
  feedbacks: StudentFeedback[];
  filteredFeedbacks: StudentFeedback[];
  stats: {
    totalFeedbacks: number;
    averageRating: number;
    collegeCount: number;
    companyCount: number;
    totalLikes: number;
  } | null;
  
  // Loading states
  loading: boolean;
  submitting: boolean;
  
  // Error handling
  error: string | null;
  
  // Actions
  loadFeedbacks: () => Promise<void>;
  addFeedback: (feedback: Omit<StudentFeedback, 'id' | 'dateSubmitted' | 'likes' | 'verified'>) => Promise<StudentFeedback | null>;
  editFeedback: (id: number, updates: Partial<StudentFeedback>) => Promise<StudentFeedback | null>;
  removeFeedback: (id: number) => Promise<boolean>;
  searchFeedbacks: (query: string) => Promise<void>;
  filterByCollege: (collegeName: string) => Promise<void>;
  likeFeedbackItem: (id: number) => Promise<void>;
  loadStats: () => Promise<void>;
  clearError: () => void;
  
  // Validation
  validateFeedbackData: (feedback: Partial<StudentFeedback>) => { isValid: boolean; errors: string[] };
}

export function useFeedback(): UseFeedbackReturn {
  const [feedbacks, setFeedbacks] = useState<StudentFeedback[]>([]);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState<StudentFeedback[]>([]);
  const [stats, setStats] = useState<{
    totalFeedbacks: number;
    averageRating: number;
    collegeCount: number;
    companyCount: number;
    totalLikes: number;
  } | null>(null);
  
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load all feedbacks
  const loadFeedbacks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllFeedback();
      setFeedbacks(data);
      setFilteredFeedbacks(data);
    } catch (err) {
      setError('Failed to load feedbacks. Please try again.');
      console.error('Error loading feedbacks:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Add new feedback
  const addFeedback = useCallback(async (
    feedback: Omit<StudentFeedback, 'id' | 'dateSubmitted' | 'likes' | 'verified'>
  ): Promise<StudentFeedback | null> => {
    try {
      setSubmitting(true);
      setError(null);
      
      // Validate feedback data
      const validation = validateFeedback(feedback);
      if (!validation.isValid) {
        setError(validation.errors.join(', '));
        return null;
      }
      
      const newFeedback = await createFeedback(feedback);
      setFeedbacks(prev => [newFeedback, ...prev]);
      setFilteredFeedbacks(prev => [newFeedback, ...prev]);
      return newFeedback;
    } catch (err) {
      setError('Failed to submit feedback. Please try again.');
      console.error('Error adding feedback:', err);
      return null;
    } finally {
      setSubmitting(false);
    }
  }, []);

  // Edit existing feedback
  const editFeedback = useCallback(async (
    id: number, 
    updates: Partial<StudentFeedback>
  ): Promise<StudentFeedback | null> => {
    try {
      setSubmitting(true);
      setError(null);
      
      // Validate updated data
      const validation = validateFeedback(updates);
      if (!validation.isValid) {
        setError(validation.errors.join(', '));
        return null;
      }
      
      const updatedFeedback = await updateFeedback(id, updates);
      if (updatedFeedback) {
        setFeedbacks(prev => prev.map(f => f.id === id ? updatedFeedback : f));
        setFilteredFeedbacks(prev => prev.map(f => f.id === id ? updatedFeedback : f));
      }
      return updatedFeedback;
    } catch (err) {
      setError('Failed to update feedback. Please try again.');
      console.error('Error updating feedback:', err);
      return null;
    } finally {
      setSubmitting(false);
    }
  }, []);

  // Remove feedback
  const removeFeedback = useCallback(async (id: number): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      
      const success = await deleteFeedback(id);
      if (success) {
        setFeedbacks(prev => prev.filter(f => f.id !== id));
        setFilteredFeedbacks(prev => prev.filter(f => f.id !== id));
      }
      return success;
    } catch (err) {
      setError('Failed to delete feedback. Please try again.');
      console.error('Error deleting feedback:', err);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Search feedbacks
  const searchFeedbacks = useCallback(async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      
      if (query.trim() === '') {
        setFilteredFeedbacks(feedbacks);
      } else {
        const results = await searchFeedback(query);
        setFilteredFeedbacks(results);
      }
    } catch (err) {
      setError('Search failed. Please try again.');
      console.error('Error searching feedbacks:', err);
    } finally {
      setLoading(false);
    }
  }, [feedbacks]);

  // Filter by college
  const filterByCollege = useCallback(async (collegeName: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const results = await filterFeedbackByCollege(collegeName);
      setFilteredFeedbacks(results);
    } catch (err) {
      setError('Filter failed. Please try again.');
      console.error('Error filtering feedbacks:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Like feedback
  const likeFeedbackItem = useCallback(async (id: number) => {
    try {
      const updatedFeedback = await likeFeedback(id);
      if (updatedFeedback) {
        setFeedbacks(prev => prev.map(f => f.id === id ? updatedFeedback : f));
        setFilteredFeedbacks(prev => prev.map(f => f.id === id ? updatedFeedback : f));
      }
    } catch (err) {
      console.error('Error liking feedback:', err);
      // Don't show error for likes as it's not critical
    }
  }, []);

  // Load statistics
  const loadStats = useCallback(async () => {
    try {
      const statsData = await getFeedbackStats();
      setStats(statsData);
    } catch (err) {
      console.error('Error loading stats:', err);
      // Don't show error for stats as it's not critical
    }
  }, []);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Validate feedback data
  const validateFeedbackData = useCallback((feedback: Partial<StudentFeedback>) => {
    return validateFeedback(feedback);
  }, []);

  // Load initial data
  useEffect(() => {
    loadFeedbacks();
    loadStats();
  }, [loadFeedbacks, loadStats]);

  return {
    // Data
    feedbacks,
    filteredFeedbacks,
    stats,
    
    // Loading states
    loading,
    submitting,
    
    // Error handling
    error,
    
    // Actions
    loadFeedbacks,
    addFeedback,
    editFeedback,
    removeFeedback,
    searchFeedbacks,
    filterByCollege,
    likeFeedbackItem,
    loadStats,
    clearError,
    
    // Validation
    validateFeedbackData
  };
}