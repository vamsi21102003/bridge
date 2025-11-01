export const ROUTES = {
  HOME: '/',
  AUTH: '/auth',
  DASHBOARD: '/dashboard/employer',
  ANALYTICS: '/dashboard/employer/analytics',
  APPLICANTS: '/dashboard/employer/applicants',
  FEEDBACK: '/dashboard/employer/feedback',
  STUDENT_DASHBOARD: '/dashboard/student',
} as const

export const COMPANY_INFO = {
  NAME: 'BriDGe',
  TAGLINE: 'Bridging the gap between talent and opportunity',
  EMAIL: 'hello@bridge-career.com',
  PHONE: '+1 (555) 123-4567',
} as const

// Job-related constants (used in job filtering components)
export const JOB_TYPES = [
  'Full-time',
  'Part-time',
  'Contract',
  'Freelance',
  'Internship',
] as const

export const EXPERIENCE_LEVELS = [
  'Entry Level',
  'Mid Level',
  'Senior Level',
  'Executive',
] as const

export const SALARY_RANGES = [
  { label: 'Under $50k', min: 0, max: 50000 },
  { label: '$50k - $75k', min: 50000, max: 75000 },
  { label: '$75k - $100k', min: 75000, max: 100000 },
  { label: '$100k - $150k', min: 100000, max: 150000 },
  { label: '$150k+', min: 150000, max: 999999 },
] as const