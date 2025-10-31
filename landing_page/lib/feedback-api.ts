// Simulated API for Student Feedback CRUD operations
// In a real application, this would connect to PostgreSQL database

export interface StudentFeedback {
  id?: number;
  fullName: string;
  collegeName: string;
  jobRole: string;
  companyName: string;
  skillsGained: string[];
  experience: string;
  profilePicture?: string;
  dateSubmitted?: string;
  likes?: number;
  verified?: boolean;
}

// Simulated database storage (in real app, this would be PostgreSQL)
let feedbackDatabase: StudentFeedback[] = [
  {
    id: 1,
    fullName: "Rohit Sahu",
    collegeName: "ITER (Institute of Technical Education and Research), Bhubaneswar",
    jobRole: "Software Developer",
    companyName: "Infosys Limited",
    skillsGained: ["Python Programming", "Communication Skills", "Resume Building", "Interview Preparation"],
    experience: "BriDGe platform transformed my career journey completely! The AI-powered job matching connected me with Infosys, and the skill development modules helped me crack the technical interviews. The mentorship program was exceptional, and I gained confidence in both technical and soft skills. Highly recommend to all engineering students in Odisha!",
    profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    dateSubmitted: "2024-10-20",
    likes: 45,
    verified: true
  },
  {
    id: 2,
    fullName: "Priya Das",
    collegeName: "CV Raman Global University, Bhubaneswar",
    jobRole: "Data Analyst",
    companyName: "Tata Consultancy Services (TCS)",
    skillsGained: ["AI/ML Basics", "Data Structures & Algorithms", "Technical Writing", "Problem Solving"],
    experience: "Amazing experience with BriDGe! The platform's career guidance helped me transition from a confused final year student to a confident data analyst at TCS. The AI/ML modules were comprehensive, and the mock interviews prepared me well. The placement support team was always available to help. Grateful for this opportunity!",
    profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    dateSubmitted: "2024-10-15",
    likes: 38,
    verified: true
  }
];

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// CRUD Operations

// CREATE - Add new feedback
export async function createFeedback(feedback: Omit<StudentFeedback, 'id' | 'dateSubmitted' | 'likes' | 'verified'>): Promise<StudentFeedback> {
  await delay(500); // Simulate network delay
  
  const newFeedback: StudentFeedback = {
    ...feedback,
    id: feedbackDatabase.length + 1,
    dateSubmitted: new Date().toISOString().split('T')[0],
    likes: 0,
    verified: true,
    profilePicture: feedback.profilePicture || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  };
  
  feedbackDatabase.unshift(newFeedback);
  return newFeedback;
}

// READ - Get all feedback
export async function getAllFeedback(): Promise<StudentFeedback[]> {
  await delay(300);
  return [...feedbackDatabase];
}

// READ - Get feedback by ID
export async function getFeedbackById(id: number): Promise<StudentFeedback | null> {
  await delay(200);
  return feedbackDatabase.find(feedback => feedback.id === id) || null;
}

// UPDATE - Update existing feedback
export async function updateFeedback(id: number, updates: Partial<StudentFeedback>): Promise<StudentFeedback | null> {
  await delay(400);
  
  const index = feedbackDatabase.findIndex(feedback => feedback.id === id);
  if (index === -1) return null;
  
  feedbackDatabase[index] = { ...feedbackDatabase[index], ...updates };
  return feedbackDatabase[index];
}

// DELETE - Delete feedback
export async function deleteFeedback(id: number): Promise<boolean> {
  await delay(300);
  
  const index = feedbackDatabase.findIndex(feedback => feedback.id === id);
  if (index === -1) return false;
  
  feedbackDatabase.splice(index, 1);
  return true;
}

// SEARCH - Search feedback by query
export async function searchFeedback(query: string): Promise<StudentFeedback[]> {
  await delay(250);
  
  const lowercaseQuery = query.toLowerCase();
  return feedbackDatabase.filter(feedback =>
    feedback.fullName.toLowerCase().includes(lowercaseQuery) ||
    feedback.collegeName.toLowerCase().includes(lowercaseQuery) ||
    feedback.jobRole.toLowerCase().includes(lowercaseQuery) ||
    feedback.companyName.toLowerCase().includes(lowercaseQuery) ||
    feedback.experience.toLowerCase().includes(lowercaseQuery)
  );
}

// FILTER - Filter feedback by college
export async function filterFeedbackByCollege(collegeName: string): Promise<StudentFeedback[]> {
  await delay(200);
  
  if (collegeName === 'all') return [...feedbackDatabase];
  
  return feedbackDatabase.filter(feedback =>
    feedback.collegeName === collegeName
  );
}

// LIKE - Increment likes for feedback
export async function likeFeedback(id: number): Promise<StudentFeedback | null> {
  await delay(150);
  
  const index = feedbackDatabase.findIndex(feedback => feedback.id === id);
  if (index === -1) return null;
  
  feedbackDatabase[index].likes = (feedbackDatabase[index].likes || 0) + 1;
  return feedbackDatabase[index];
}

// STATS - Get feedback statistics
export async function getFeedbackStats(): Promise<{
  totalFeedbacks: number;
  averageRating: number;
  collegeCount: number;
  companyCount: number;
  totalLikes: number;
}> {
  await delay(200);
  
  const totalFeedbacks = feedbackDatabase.length;
  const collegeCount = new Set(feedbackDatabase.map(f => f.collegeName)).size;
  const companyCount = new Set(feedbackDatabase.map(f => f.companyName)).size;
  const totalLikes = feedbackDatabase.reduce((sum, f) => sum + (f.likes || 0), 0);
  
  // For demo purposes, assuming all feedback has 4-5 star rating
  const averageRating = 4.8;
  
  return {
    totalFeedbacks,
    averageRating,
    collegeCount,
    companyCount,
    totalLikes
  };
}

// VALIDATION - Validate feedback data
export function validateFeedback(feedback: Partial<StudentFeedback>): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!feedback.fullName || feedback.fullName.trim().length < 2) {
    errors.push('Full name must be at least 2 characters long');
  }
  
  if (!feedback.collegeName) {
    errors.push('College name is required');
  }
  
  if (!feedback.jobRole || feedback.jobRole.trim().length < 2) {
    errors.push('Job role is required');
  }
  
  if (!feedback.companyName || feedback.companyName.trim().length < 2) {
    errors.push('Company name is required');
  }
  
  if (!feedback.skillsGained || feedback.skillsGained.length === 0) {
    errors.push('At least one skill must be selected');
  }
  
  if (!feedback.experience || feedback.experience.trim().length < 50) {
    errors.push('Experience must be at least 50 characters long');
  }
  
  if (feedback.experience && feedback.experience.length > 1000) {
    errors.push('Experience must not exceed 1000 characters');
  }
  
  // Validate profile picture URL if provided
  if (feedback.profilePicture && feedback.profilePicture.trim()) {
    try {
      new URL(feedback.profilePicture);
    } catch {
      errors.push('Profile picture must be a valid URL');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// EXPORT - Export feedback data (for admin use)
export async function exportFeedbackData(): Promise<string> {
  await delay(500);
  
  const data = {
    exportDate: new Date().toISOString(),
    totalRecords: feedbackDatabase.length,
    feedbacks: feedbackDatabase
  };
  
  return JSON.stringify(data, null, 2);
}

// BULK OPERATIONS - Add multiple feedbacks (for seeding)
export async function bulkCreateFeedback(feedbacks: Omit<StudentFeedback, 'id' | 'dateSubmitted' | 'likes' | 'verified'>[]): Promise<StudentFeedback[]> {
  await delay(800);
  
  const newFeedbacks: StudentFeedback[] = feedbacks.map((feedback, index) => ({
    ...feedback,
    id: feedbackDatabase.length + index + 1,
    dateSubmitted: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Random date within last 30 days
    likes: Math.floor(Math.random() * 50),
    verified: true,
    profilePicture: feedback.profilePicture || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }));
  
  feedbackDatabase.unshift(...newFeedbacks);
  return newFeedbacks;
}