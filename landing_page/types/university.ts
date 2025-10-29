export interface UniversitySummary {
  totalStudentsAnalyzed: number;
  totalPlacedStudents: number;
  averageEmployabilityScore: number;
  totalActiveEmployers: number;
  skillGapIndex: number;
}

export interface College {
  id: string;
  name: string;
  affiliationId: string;
  location: string;
  establishedYear: number;
  totalStudents: number;
  placementRate: number;
  averagePackage: number;
  departments: Department[];
  status: 'active' | 'inactive' | 'pending';
}

export interface Department {
  id: string;
  name: string;
  code: string;
  totalStudents: number;
  placedStudents: number;
  averagePackage: number;
  topSkills: string[];
}

export interface CollegeMetrics {
  collegeName: string;
  affiliationId: string;
  overallEmployabilityScore: number;
  universityAverageComparison: number;
  departmentWiseData: DepartmentData[];
  placementRatio: PlacementRatio;
  topHiringCompanies: Company[];
  genderWiseStats: GenderStats;
}

export interface DepartmentData {
  department: string;
  totalStudents: number;
  placedStudents: number;
  placementPercentage: number;
  averagePackage: number;
  skillGapScore: number;
}

export interface PlacementRatio {
  placed: number;
  unplaced: number;
  percentage: number;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  industry: string;
  hiringCount: number;
  averagePackage: number;
  lastHired: Date;
}

export interface GenderStats {
  male: {
    total: number;
    placed: number;
    percentage: number;
  };
  female: {
    total: number;
    placed: number;
    percentage: number;
  };
}

export interface SkillAnalytics {
  skillGapDistribution: SkillCategory[];
  departmentalSkillMap: SkillMap[][];
  topSkillsInDemand: IndustrySkill[];
  aiRecommendations: TrainingRecommendation[];
}

export interface SkillCategory {
  category: string;
  gapPercentage: number;
  studentsAffected: number;
  priority: 'high' | 'medium' | 'low';
}

export interface SkillMap {
  department: string;
  skill: string;
  proficiencyLevel: number;
  demandLevel: number;
  gap: number;
}

export interface IndustrySkill {
  skill: string;
  industry: string;
  demandScore: number;
  growthRate: number;
  averageSalary: number;
}

export interface TrainingRecommendation {
  department: string;
  skill: string;
  priority: number;
  estimatedImpact: number;
  trainingDuration: string;
  cost: number;
}

export interface PlacementTrends {
  yearlyTrends: YearlyData[];
  districtWiseDensity: DistrictData[];
  industryForecast: IndustryForecast[];
  companyHiringFrequency: CompanyFrequency[];
}

export interface YearlyData {
  year: number;
  totalStudents: number;
  placedStudents: number;
  placementRate: number;
  averagePackage: number;
}

export interface DistrictData {
  district: string;
  colleges: number;
  totalStudents: number;
  placedStudents: number;
  placementDensity: number;
}

export interface IndustryForecast {
  industry: string;
  currentDemand: number;
  projectedDemand: number;
  growthRate: number;
  keySkills: string[];
}

export interface CompanyFrequency {
  company: string;
  hiringYears: number[];
  totalHires: number;
  consistency: number;
}

export interface UniversityDashboard {
  quickStats: UniversitySummary;
  recentActivity: Activity[];
  alerts: Alert[];
  systemHealth: SystemStatus;
  shortcuts: QuickAction[];
}

export interface Activity {
  id: string;
  type: 'placement' | 'registration' | 'verification' | 'report';
  description: string;
  timestamp: Date;
  user?: string;
  college?: string;
}

export interface Alert {
  id: string;
  type: 'warning' | 'error' | 'info' | 'success';
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  actionRequired?: boolean;
}

export interface SystemStatus {
  overall: 'healthy' | 'warning' | 'critical';
  apiStatus: 'online' | 'offline' | 'degraded';
  databaseStatus: 'online' | 'offline' | 'slow';
  lastUpdated: Date;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}