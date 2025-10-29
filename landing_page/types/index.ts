// Core types for EMPBriDGe Landing Page
export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  description: string
  tags: string[]
  urgent: boolean
  featured: boolean
  gradient: string
  applyBy: string
}

export interface Opportunity {
  id: string
  title: string
  company: string
  type: 'job' | 'internship' | 'freelance'
  location: string
  description: string
  salary: string
  duration?: string
  team?: string
}

// Future integration types can be added here
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  // Add more fields as needed for future integration
}

export interface AuthResponse {
  user: User
  token: string
  // Add more fields as needed for future integration
}