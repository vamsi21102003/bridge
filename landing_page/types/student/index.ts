export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  level: number;
  xp: number;
  badges: Badge[];
  skills: string[];
  profileCompletion?: number;
  rank?: number;
  joinDate?: string;
  location?: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  preferences?: {
    jobTypes: string[];
    locations: string[];
    salaryRange?: {
      min: number;
      max: number;
    };
  };
  stats?: {
    applicationsSubmitted: number;
    interviewsAttended: number;
    offersReceived: number;
    coursesCompleted: number;
    mentoringSessions: number;
    networkConnections: number;
  };
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  type: 'job' | 'internship' | 'hackathon' | 'competition';
  location: string;
  skills: string[];
  description: string;
  logo?: string;
  deadline?: string;
  salary?: string;
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  rating: number;
  reviews: number;
  avatar?: string;
  price?: number;
  availability: boolean;
  description?: string;
}

export interface Game {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  xpReward: number;
  players: number;
  icon: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  progress?: number;
  xpReward: number;
}

export interface Course {
  id: string;
  title: string;
  provider: 'youtube' | 'coursera';
  instructor: string;
  duration: string;
  level: string;
  thumbnail: string;
  rating: number;
  students: number;
}

export type Language = 'en' | 'hi' | 'od';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}