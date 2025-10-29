# 🎓 Complete University Website Development Prompt

## 🎯 Project Overview
You are an expert React + Next.js frontend architect developing a **Complete University Website** for BPUT (Biju Patnaik University of Technology). This is a comprehensive AI-powered Career Recommendation and Internship Matching Platform that includes:

1. **University Landing Page** - Public-facing website with information and features
2. **University Admin Dashboard** - Analytics and management for university administrators
3. **Authentication System** - Login/signup for different user roles
4. **Student Integration** - Connection points with student profiles and data
5. **Employer Integration** - Interface for employers to post jobs and view analytics
6. **AI-Powered Matching System** - Career recommendations and internship matching
7. **Reporting & Analytics** - Comprehensive data visualization and export features

## 🔧 Tech Stack Requirements

### Core Technologies
- **React + Next.js 14** (App Router — `/app` directory)
- **Tailwind CSS** only (NO external CSS overrides, NO inline/global CSS except globals.css)
- **React Query (@tanstack/react-query)** for all API calls
- **React Hook Form** for forms only
- **Next.js Router** for navigation
- **Axios** via centralized `axiosInstance` in `/lib/api.ts`
- **Lucide React** for icons
- **TypeScript** for type safety

### Existing Project Dependencies
```json
{
  "@tanstack/react-query": "^5.0.0",
  "axios": "^1.6.0",
  "clsx": "^2.0.0",
  "lucide-react": "^0.292.0",
  "next": "14.0.0",
  "react": "^18",
  "react-dom": "^18",
  "react-hook-form": "^7.47.0"
}
```

## 🏗️ Architecture & Integration Rules

### Team Parallel Development Rules (CRITICAL)
✅ **Each team member builds isolated page modules — NO global side effects**
✅ **NO global CSS overrides** like `body`, `button`, `a` — ONLY Tailwind classes
✅ **Each page MUST live in its own folder** inside `/app/<page-name>/page.tsx`
✅ **All reusable UI goes to `/components`**
✅ **NO business logic, API calls, or state inside components** — ONLY pure UI
✅ **If state is needed** → use `/hooks/useSomething.ts`
✅ **If API needed** → use `/lib/api.ts` + React Query
✅ **NO hardcoded absolute URLs** — use variables from `/constants`
✅ **NO mixing of authentication or layout logic** — that will go in `/layout.tsx` later

### Integration Safety Checklist
- ✔ 100% Tailwind utility classes → ZERO CSS conflicts when merging
- ✔ No touching global styles → no design override
- ✔ No hardcoded routes or URLs → easy merge
- ✔ Components are stateless → reusable everywhere
- ✔ API logic & auth centralized → consistent behavior
- ✔ Folder structure SAME for all developers → smooth final integration

## 📁 Complete Website Folder Structure

```
/app/
├── page.tsx                           # Main Landing Page
├── about/
│   └── page.tsx                      # About University/Platform
├── programs/
│   └── page.tsx                      # Academic Programs
├── admissions/
│   └── page.tsx                      # Admission Information
├── placements/
│   └── page.tsx                      # Placement Statistics (Public)
├── contact/
│   └── page.tsx                      # Contact Information
├── auth/
│   ├── page.tsx                      # Login/Signup Hub
│   ├── login/
│   │   └── page.tsx                  # Login Page
│   ├── signup/
│   │   └── page.tsx                  # Signup Page
│   └── forgot-password/
│       └── page.tsx                  # Password Recovery
├── university/
│   ├── page.tsx                      # University Dashboard Home
│   ├── colleges/
│   │   ├── page.tsx                  # All Colleges Overview
│   │   └── [id]/
│   │       └── page.tsx              # Individual College Dashboard
│   ├── analytics/
│   │   ├── page.tsx                  # Skill Gap Analytics
│   │   ├── placement-trends/
│   │   │   └── page.tsx              # Placement Trends & Forecasts
│   │   ├── industry-insights/
│   │   │   └── page.tsx              # Industry Demand Analysis
│   │   └── reports/
│   │       └── page.tsx              # Policy & Report Section
│   ├── students/
│   │   ├── page.tsx                  # Student Management
│   │   ├── profiles/
│   │   │   └── page.tsx              # Student Profile Analytics
│   │   └── verification/
│   │       └── page.tsx              # Student Verification
│   ├── employers/
│   │   ├── page.tsx                  # Employer Management
│   │   ├── partnerships/
│   │   │   └── page.tsx              # Industry Partnerships
│   │   └── job-postings/
│   │       └── page.tsx              # Job Posting Management
│   ├── ai-insights/
│   │   ├── page.tsx                  # AI Recommendations Hub
│   │   ├── career-matching/
│   │   │   └── page.tsx              # Career Matching Analytics
│   │   └── skill-predictions/
│   │       └── page.tsx              # Skill Demand Predictions
│   └── admin/
│       ├── page.tsx                  # University Admin Panel
│       ├── settings/
│       │   └── page.tsx              # System Settings
│       └── users/
│           └── page.tsx              # User Management

/components/
├── layout/
│   ├── Header.tsx                    # Main Navigation
│   ├── Footer.tsx                    # Site Footer
│   ├── Sidebar.tsx                   # Dashboard Sidebar
│   └── MobileNav.tsx                 # Mobile Navigation
├── university/
│   ├── landing/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   ├── dashboard/
│   │   ├── UniversityOverview.tsx
│   │   ├── CollegeDashboard.tsx
│   │   ├── SkillGapAnalytics.tsx
│   │   ├── PlacementTrends.tsx
│   │   ├── AIInsights.tsx
│   │   └── PolicyReports.tsx
│   ├── charts/
│   │   ├── PieChart.tsx
│   │   ├── BarChart.tsx
│   │   ├── LineChart.tsx
│   │   ├── HeatMap.tsx
│   │   ├── RadarChart.tsx
│   │   ├── GeoMap.tsx
│   │   └── TreeMap.tsx
│   ├── cards/
│   │   ├── SummaryCard.tsx
│   │   ├── MetricCard.tsx
│   │   ├── InsightCard.tsx
│   │   ├── CollegeCard.tsx
│   │   └── EmployerCard.tsx
│   ├── forms/
│   │   ├── LoginForm.tsx
│   │   ├── SignupForm.tsx
│   │   ├── CollegeRegistrationForm.tsx
│   │   └── EmployerVerificationForm.tsx
│   └── ui/
│       ├── DataTable.tsx
│       ├── ExportButton.tsx
│       ├── FilterPanel.tsx
│       ├── SearchBar.tsx
│       ├── Pagination.tsx
│       └── LoadingSpinner.tsx
├── shared/
│   ├── Modal.tsx
│   ├── Tooltip.tsx
│   ├── Dropdown.tsx
│   ├── Tabs.tsx
│   └── Breadcrumb.tsx
└── providers/
    ├── QueryProvider.tsx
    ├── AuthProvider.tsx
    └── ThemeProvider.tsx

/hooks/
├── university/
│   ├── useUniversityStats.ts
│   ├── useCollegeData.ts
│   ├── useSkillAnalytics.ts
│   ├── usePlacementTrends.ts
│   ├── useAIInsights.ts
│   └── useReportGeneration.ts
├── auth/
│   ├── useAuth.ts
│   ├── useLogin.ts
│   └── useSignup.ts
└── shared/
    ├── useLocalStorage.ts
    ├── useDebounce.ts
    └── useInfiniteScroll.ts

/lib/
├── university/
│   ├── api.ts                        # University API calls
│   ├── types.ts                      # TypeScript interfaces
│   └── utils.ts                      # Utility functions
├── auth/
│   ├── api.ts                        # Authentication API
│   └── utils.ts                      # Auth utilities
└── shared/
    ├── axiosInstance.ts              # Axios configuration
    ├── constants.ts                  # Global constants
    └── helpers.ts                    # Helper functions

/constants/
├── university/
│   ├── routes.ts                     # University routes
│   ├── analytics.ts                  # Analytics constants
│   ├── colleges.ts                   # College data constants
│   └── mockData.ts                   # Mock data for development
├── auth/
│   └── routes.ts                     # Auth routes
└── shared/
    ├── navigation.ts                 # Navigation constants
    └── api.ts                        # API endpoints

/types/
├── university.ts                     # University-related types
├── auth.ts                          # Authentication types
├── student.ts                       # Student-related types
├── employer.ts                      # Employer-related types
└── shared.ts                        # Shared types
```

## � Comploete Website Components & Features

### 1. Landing Page (`/app/page.tsx`)

#### Hero Section
```typescript
interface HeroContent {
  title: string;
  subtitle: string;
  ctaButtons: CTAButton[];
  backgroundVideo?: string;
  statistics: QuickStat[];
}
```

#### Key Sections
- **Hero Section**: University branding, mission, key statistics
- **Features Section**: AI-powered matching, career guidance, placement support
- **Statistics Section**: Live placement data, student success stories
- **Programs Section**: Academic programs and departments
- **Testimonials**: Student and employer testimonials
- **News & Updates**: Latest university news and achievements
- **Contact Section**: Contact information and quick links

### 2. About Page (`/app/about/page.tsx`)

#### University Information
```typescript
interface UniversityInfo {
  history: string;
  mission: string;
  vision: string;
  leadership: LeadershipTeam[];
  achievements: Achievement[];
  accreditations: Accreditation[];
}
```

#### Features
- University history and milestones
- Leadership team profiles
- Academic achievements and rankings
- Infrastructure and facilities
- Research and innovation highlights

### 3. Programs Page (`/app/programs/page.tsx`)

#### Academic Programs
```typescript
interface AcademicProgram {
  id: string;
  name: string;
  department: string;
  duration: string;
  eligibility: string[];
  curriculum: string[];
  careerProspects: string[];
  placementStats: PlacementStats;
}
```

#### Features
- Comprehensive program listings
- Department-wise course details
- Admission requirements
- Career prospects and placement statistics
- Faculty information

### 4. Admissions Page (`/app/admissions/page.tsx`)

#### Admission Information
```typescript
interface AdmissionInfo {
  eligibilityCriteria: Criteria[];
  applicationProcess: ProcessStep[];
  importantDates: ImportantDate[];
  feeStructure: FeeDetails[];
  scholarships: Scholarship[];
}
```

#### Features
- Admission process and requirements
- Important dates and deadlines
- Fee structure and payment options
- Scholarship information
- Online application portal integration

### 5. Public Placements Page (`/app/placements/page.tsx`)

#### Public Placement Statistics
```typescript
interface PublicPlacementData {
  overallStats: PlacementOverview;
  departmentWise: DepartmentPlacement[];
  topRecruiters: Recruiter[];
  salaryTrends: SalaryData[];
  successStories: SuccessStory[];
}
```

#### Features
- Overall placement statistics
- Department-wise placement data
- Top recruiting companies
- Salary trends and packages
- Student success stories
- Alumni network information

### 6. Authentication System (`/app/auth/`)

#### Login/Signup Hub (`/app/auth/page.tsx`)
```typescript
interface AuthOptions {
  userTypes: UserType[];
  loginMethods: LoginMethod[];
  signupOptions: SignupOption[];
}

type UserType = 'student' | 'university_admin' | 'college_admin' | 'employer';
```

#### Features
- Multi-role authentication (Student, University Admin, College Admin, Employer)
- Social login integration
- Two-factor authentication
- Password recovery system
- Account verification workflow

### 7. University Dashboard System (`/app/university/`)

#### Main Dashboard (`/app/university/page.tsx`)

#### Top Summary Cards
```typescript
interface UniversitySummary {
  totalStudentsAnalyzed: number;
  totalPlacedStudents: number;
  averageEmployabilityScore: number;
  totalActiveEmployers: number;
  skillGapIndex: number;
}
```

#### Key Visualizations
- **Pie Chart**: Placement distribution by branch (CSE, ECE, ME, etc.)
- **Bar Graph**: Placement trends by district (Bhubaneswar, Cuttack, Rourkela, etc.)
- **Line Chart**: Year-over-year placement growth (2019-2025)
- **Heat Map**: Employability index by college/district
- **Donut Chart**: Industry demand forecast (IT, Core Engineering, Finance, etc.)

### 2. Individual College Dashboard (`/app/university/colleges/page.tsx`)

#### College-Specific Metrics
```typescript
interface CollegeMetrics {
  collegeName: string;
  affiliationId: string;
  overallEmployabilityScore: number;
  bputAverageComparison: number;
  departmentWiseData: DepartmentData[];
  placementRatio: PlacementRatio;
  topHiringCompanies: Company[];
  genderWiseStats: GenderStats;
}
```

#### Visualizations
- **Radar Chart**: Skill gap analysis by department
- **Stacked Bar Graph**: Placement ratio per branch (placed vs. unplaced)
- **Horizontal Bar Chart**: Top hiring companies with logos
- **Pie Chart**: Gender-wise placement statistics
- **Line Chart**: Department-wise career readiness score trends

### 3. Skill Gap Analytics (`/app/university/analytics/page.tsx`)

#### Analytics Components
```typescript
interface SkillAnalytics {
  skillGapDistribution: SkillCategory[];
  departmentalSkillMap: SkillMap[][];
  topSkillsInDemand: IndustrySkill[];
  aiRecommendations: TrainingRecommendation[];
}
```

#### Features
- **Bar Graph**: Skill gap distribution by category (Technical, Communication, Aptitude, Management)
- **Heat Map**: Departmental skill deficiency intensity
- **Word Cloud/Bar Chart**: Top 10 skills in demand by industry
- **AI Insight Panel**: Top 3 training interventions per department

### 4. Placement Trends & Forecasts (`/app/university/analytics/placement-trends/page.tsx`)

#### Trend Analysis
```typescript
interface PlacementTrends {
  yearlyTrends: YearlyData[];
  districtWiseDensity: DistrictData[];
  industryForecast: IndustryForecast[];
  companyHiringFrequency: CompanyFrequency[];
}
```

#### Visualizations
- **Multi-line Graph**: Placement trends over years (2019–2025)
- **Geo Map**: District-wise placement density
- **Predictive Analytics Chart**: Industry-wise demand forecast
- **Bar Chart**: Company hiring frequency (repeat recruiters)

### 5. Policy & Report Section (`/app/university/analytics/reports/page.tsx`)

#### Report Generation
```typescript
interface ReportGeneration {
  skillGapSummary: Report;
  placementTrendReport: Report;
  industryDemandForecast: Report;
  policyRecommendations: PolicyAction[];
}
```

#### Export Features
- **PDF Export**: Comprehensive reports with charts
- **Excel Export**: Raw data for further analysis
- **PowerPoint Export**: Presentation-ready slides
- **Insight Cards**: Actionable policy recommendations

## 🎭 Animation & Visual Enhancements

### CSS Animations (Add to globals.css)
```css
/* Smooth transitions for all interactive elements */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-out;
}

.animate-bounce-subtle {
  animation: bounceSubtle 2s infinite;
}

.animate-pulse-glow {
  animation: pulseGlow 2s ease-in-out infinite alternate;
}

/* Chart animations */
.chart-enter {
  animation: chartEnter 1.2s ease-out;
}

.metric-counter {
  animation: countUp 2s ease-out;
}

/* Hover effects */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
}

/* Loading animations */
.skeleton-pulse {
  animation: skeletonPulse 1.5s ease-in-out infinite;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes scaleIn {
  from { 
    opacity: 0; 
    transform: scale(0.9); 
  }
  to { 
    opacity: 1; 
    transform: scale(1); 
  }
}

@keyframes bounceSubtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes pulseGlow {
  from { box-shadow: 0 0 5px rgba(59, 130, 246, 0.4); }
  to { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
}

@keyframes chartEnter {
  from { 
    opacity: 0; 
    transform: scale(0.8) rotate(-5deg); 
  }
  to { 
    opacity: 1; 
    transform: scale(1) rotate(0deg); 
  }
}

@keyframes countUp {
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes skeletonPulse {
  0% { background-color: #e2e8f0; }
  50% { background-color: #cbd5e1; }
  100% { background-color: #e2e8f0; }
}
```

### Tailwind Animation Classes
```typescript
// Use these classes for enhanced interactivity
const animationClasses = {
  // Cards and containers
  card: "hover-lift transition-all duration-300 hover:shadow-xl",
  
  // Buttons
  button: "transform transition-all duration-200 hover:scale-105 active:scale-95",
  
  // Charts
  chart: "chart-enter opacity-0 animate-fade-in",
  
  // Metrics
  metric: "metric-counter font-bold text-2xl",
  
  // Interactive elements
  interactive: "cursor-pointer hover-glow transition-all duration-300",
  
  // Loading states
  loading: "skeleton-pulse rounded-md bg-gray-200",
}
```

## 🔗 API Integration Structure

### University API (`/lib/university/api.ts`)
```typescript
import axiosInstance from '../axiosInstance';

export const universityApi = {
  // University Overview
  getUniversityStats: async (): Promise<UniversitySummary> => {
    const response = await axiosInstance.get('/api/university/stats');
    return response.data;
  },

  // College Data
  getCollegeData: async (collegeId?: string): Promise<CollegeMetrics[]> => {
    const url = collegeId ? `/api/colleges/${collegeId}` : '/api/colleges';
    const response = await axiosInstance.get(url);
    return response.data;
  },

  // Skill Analytics
  getSkillAnalytics: async (): Promise<SkillAnalytics> => {
    const response = await axiosInstance.get('/api/university/skills');
    return response.data;
  },

  // Placement Trends
  getPlacementTrends: async (): Promise<PlacementTrends> => {
    const response = await axiosInstance.get('/api/university/placement-trends');
    return response.data;
  },

  // Report Generation
  generateReport: async (reportType: string): Promise<Blob> => {
    const response = await axiosInstance.get(`/api/university/reports/${reportType}`, {
      responseType: 'blob'
    });
    return response.data;
  },
};
```

### React Query Hooks (`/hooks/university/`)
```typescript
// useUniversityStats.ts
import { useQuery } from '@tanstack/react-query';
import { universityApi } from '@/lib/university/api';

export const useUniversityStats = () => {
  return useQuery({
    queryKey: ['university-stats'],
    queryFn: universityApi.getUniversityStats,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// useCollegeData.ts
export const useCollegeData = (collegeId?: string) => {
  return useQuery({
    queryKey: ['college-data', collegeId],
    queryFn: () => universityApi.getCollegeData(collegeId),
    enabled: !!collegeId || collegeId === undefined,
  });
};
```

## 🎨 UI Component Examples

### Summary Card Component
```typescript
// /components/university/cards/SummaryCard.tsx
interface SummaryCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  icon,
  trend,
  className = ""
}) => {
  return (
    <div className={`
      bg-white rounded-xl p-6 shadow-lg hover-lift
      border border-gray-100 animate-fade-in
      ${className}
    `}>
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          {icon}
        </div>
        {trend && (
          <div className={`
            flex items-center text-sm font-medium
            ${trend.isPositive ? 'text-green-600' : 'text-red-600'}
          `}>
            <TrendingUp className="w-4 h-4 mr-1" />
            {trend.value}%
          </div>
        )}
      </div>
      
      <div className="metric-counter text-3xl font-bold text-gray-900 mb-2">
        {value}
      </div>
      
      <p className="text-gray-600 text-sm font-medium">
        {title}
      </p>
    </div>
  );
};
```

### Chart Container Component
```typescript
// /components/university/charts/ChartContainer.tsx
interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
  exportable?: boolean;
  className?: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  children,
  exportable = false,
  className = ""
}) => {
  return (
    <div className={`
      bg-white rounded-xl p-6 shadow-lg hover-lift
      border border-gray-100 chart-enter
      ${className}
    `}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>
        {exportable && (
          <button className="
            px-4 py-2 bg-blue-600 text-white rounded-lg
            hover:bg-blue-700 transition-colors duration-200
            flex items-center space-x-2
          ">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        )}
      </div>
      
      <div className="chart-container">
        {children}
      </div>
    </div>
  );
};
```

## 🔐 Admin Access & Verification Features

### University Admin Panel (`/app/university/admin/page.tsx`)
```typescript
// Admin-level features for university verification
interface AdminFeatures {
  collegeVerification: CollegeVerification[];
  dataValidation: DataValidation;
  systemHealth: SystemHealth;
  userManagement: UserManagement;
}

// Admin verification workflow
const adminVerificationFlow = {
  verifyCollege: async (collegeId: string) => {
    // Verify college data and credentials
  },
  validatePlacementData: async (data: PlacementData) => {
    // Validate placement statistics
  },
  approveReports: async (reportId: string) => {
    // Approve generated reports
  },
};
```

## 📊 Mock Data Structure

### Sample University Data
```typescript
// Mock data for development and demonstration
export const mockUniversityData = {
  summary: {
    totalStudentsAnalyzed: 15420,
    totalPlacedStudents: 12336,
    averageEmployabilityScore: 78.5,
    totalActiveEmployers: 245,
    skillGapIndex: 23.4
  },
  
  placementByBranch: [
    { branch: 'CSE', placed: 1250, total: 1400, percentage: 89.3 },
    { branch: 'ECE', placed: 980, total: 1200, percentage: 81.7 },
    { branch: 'ME', placed: 720, total: 1000, percentage: 72.0 },
    { branch: 'EE', placed: 650, total: 900, percentage: 72.2 },
    { branch: 'CE', placed: 580, total: 850, percentage: 68.2 }
  ],
  
  districtWisePlacement: [
    { district: 'Bhubaneswar', colleges: 12, placed: 3200, total: 4100 },
    { district: 'Cuttack', colleges: 8, placed: 2100, total: 2800 },
    { district: 'Rourkela', colleges: 6, placed: 1800, total: 2300 },
    { district: 'Berhampur', colleges: 5, placed: 1200, total: 1600 }
  ],
  
  industryDemand: [
    { industry: 'IT & Software', demand: 35, growth: 12 },
    { industry: 'Core Engineering', demand: 25, growth: 8 },
    { industry: 'Finance & Banking', demand: 15, growth: 15 },
    { industry: 'Data Science & AI', demand: 12, growth: 25 },
    { industry: 'Manufacturing', demand: 13, growth: 5 }
  ]
};
```

## 🚀 Development Guidelines

### Output Format Requirements
1. **Start with correct folder path** (e.g., `/app/university/page.tsx`)
2. **Use Tailwind only** for styling
3. **Use `<Link>` or `router.push()`** — DO NOT hardcode `<a href="">`
4. **DO NOT write axios directly** — show it via custom hook + React Query
5. **Follow folder structure** strictly for team integration

### Performance Optimizations
- Use React.memo for chart components
- Implement virtual scrolling for large data tables
- Lazy load chart libraries
- Optimize image assets with Next.js Image component
- Use React Query for efficient data caching

### Accessibility Features
- ARIA labels for all interactive elements
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Focus management for modals and dropdowns

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Touch-friendly interface for tablets
- Collapsible sidebar for mobile navigation
- Responsive chart scaling
- Adaptive typography

## 🎯 Expected Deliverables

1. **Functional University Dashboard** with all specified components
2. **Interactive Charts and Visualizations** using modern libraries
3. **Export Functionality** for reports (PDF, Excel, PowerPoint)
4. **Admin Verification System** with proper access controls
5. **Responsive Design** working across all devices
6. **Performance Optimized** code with proper loading states
7. **Type-Safe Implementation** with comprehensive TypeScript interfaces

## 🔄 Integration with Existing System

### Connection Points
- **Student Profiles**: Connect with existing student data from `/app/profile`
- **Employer Data**: Integrate with employer dashboard from `/app/dashboard`
- **Authentication**: Use existing auth system from `/context/dashboard/AuthContext`
- **API Layer**: Extend existing API structure in `/lib/dashboard/api.ts`

### Data Flow
```
Student Data → University Analytics → Employer Insights
     ↓              ↓                    ↓
Profile System → Dashboard → Placement Matching
```

This comprehensive dashboard will serve as the central hub for BPUT's employability analytics, providing actionable insights for students, colleges, and policymakers while maintaining seamless integration with the existing career platform ecosystem.
####
 University Dashboard Overview
```typescript
interface UniversityDashboard {
  quickStats: UniversitySummary;
  recentActivity: Activity[];
  alerts: Alert[];
  systemHealth: SystemStatus;
  shortcuts: QuickAction[];
}
```

#### Key Features
- Real-time university statistics
- System health monitoring
- Quick action shortcuts
- Recent activity feed
- Alert notifications

### 8. College Management (`/app/university/colleges/`)

#### All Colleges Overview (`/app/university/colleges/page.tsx`)
```typescript
interface CollegeManagement {
  collegeList: College[];
  verificationStatus: VerificationStatus[];
  performanceMetrics: CollegePerformance[];
  comparisonTools: ComparisonTool[];
}
```

#### Individual College Dashboard (`/app/university/colleges/[id]/page.tsx`)
- College-specific analytics
- Department performance
- Faculty management
- Student enrollment data
- Placement tracking

### 9. Student Management (`/app/university/students/`)

#### Student Analytics (`/app/university/students/page.tsx`)
```typescript
interface StudentManagement {
  enrollmentStats: EnrollmentData;
  academicPerformance: AcademicMetrics;
  skillAssessments: SkillData[];
  careerReadiness: ReadinessScore[];
  placementTracking: PlacementTracking;
}
```

#### Features
- Student enrollment analytics
- Academic performance tracking
- Skill assessment results
- Career readiness scores
- Placement outcome tracking

### 10. Employer Management (`/app/university/employers/`)

#### Employer Partnership (`/app/university/employers/page.tsx`)
```typescript
interface EmployerManagement {
  partnerCompanies: Company[];
  jobPostings: JobPosting[];
  hiringTrends: HiringTrend[];
  feedbackAnalysis: EmployerFeedback[];
  collaborationMetrics: CollaborationData;
}
```

#### Features
- Industry partnership management
- Job posting analytics
- Hiring trend analysis
- Employer feedback system
- Collaboration tracking

### 11. AI Insights Hub (`/app/university/ai-insights/`)

#### AI-Powered Analytics (`/app/university/ai-insights/page.tsx`)
```typescript
interface AIInsights {
  careerRecommendations: CareerRecommendation[];
  skillGapAnalysis: SkillGap[];
  industryPredictions: IndustryForecast[];
  matchingAccuracy: MatchingMetrics;
  aiPerformance: AIPerformanceData;
}
```

#### Features
- Career matching analytics
- Skill demand predictions
- Industry trend forecasting
- AI model performance metrics
- Recommendation accuracy tracking

### 12. Analytics & Reports (`/app/university/analytics/`)

#### Comprehensive Analytics Suite
- **Skill Gap Analytics**: Department-wise skill analysis
- **Placement Trends**: Historical and predictive placement data
- **Industry Insights**: Market demand and salary trends
- **Policy Reports**: Actionable insights for decision-making

### 13. Admin Panel (`/app/university/admin/`)

#### System Administration
```typescript
interface AdminPanel {
  userManagement: UserManagement;
  systemSettings: SystemSettings;
  dataManagement: DataManagement;
  securitySettings: SecuritySettings;
  auditLogs: AuditLog[];
}
```

#### Features
- User role management
- System configuration
- Data backup and recovery
- Security monitoring
- Audit trail tracking

## 🎨 Enhanced UI Components Library

### Navigation Components
```typescript
// /components/layout/Header.tsx
interface HeaderProps {
  userRole?: 'guest' | 'student' | 'university_admin' | 'employer';
  currentPage: string;
}

// Features:
// - Role-based navigation menu
// - Search functionality
// - Notification center
// - User profile dropdown
// - Language selector (English, Hindi, Odia)
```

### Landing Page Components
```typescript
// /components/university/landing/HeroSection.tsx
interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaButtons: CTAButton[];
  statistics: QuickStat[];
}

// /components/university/landing/FeaturesSection.tsx
interface FeaturesSectionProps {
  features: Feature[];
  layout: 'grid' | 'carousel' | 'tabs';
}

// /components/university/landing/StatsSection.tsx
interface StatsSectionProps {
  stats: Statistic[];
  animationType: 'counter' | 'progress' | 'chart';
}
```

### Form Components
```typescript
// /components/university/forms/LoginForm.tsx
interface LoginFormProps {
  userType: UserType;
  onSuccess: (user: User) => void;
  redirectUrl?: string;
}

// /components/university/forms/CollegeRegistrationForm.tsx
interface CollegeRegistrationProps {
  onSubmit: (data: CollegeData) => void;
  validationRules: ValidationRule[];
}
```

### Dashboard Components
```typescript
// /components/university/dashboard/UniversityOverview.tsx
interface UniversityOverviewProps {
  data: UniversityData;
  timeRange: TimeRange;
  filters: FilterOptions;
}

// /components/university/cards/MetricCard.tsx
interface MetricCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  trend?: TrendData;
  clickable?: boolean;
  onClick?: () => void;
}
```

## 🔗 Complete API Integration Structure

### Authentication API (`/lib/auth/api.ts`)
```typescript
export const authApi = {
  // Multi-role login
  login: async (credentials: LoginCredentials, userType: UserType) => {
    const response = await axiosInstance.post(`/api/auth/login/${userType}`, credentials);
    return response.data;
  },

  // Registration for different user types
  register: async (userData: RegistrationData, userType: UserType) => {
    const response = await axiosInstance.post(`/api/auth/register/${userType}`, userData);
    return response.data;
  },

  // Password recovery
  forgotPassword: async (email: string, userType: UserType) => {
    const response = await axiosInstance.post('/api/auth/forgot-password', { email, userType });
    return response.data;
  },

  // Email verification
  verifyEmail: async (token: string) => {
    const response = await axiosInstance.post('/api/auth/verify-email', { token });
    return response.data;
  },
};
```

### University API (`/lib/university/api.ts`)
```typescript
export const universityApi = {
  // Public APIs (no auth required)
  getPublicStats: async (): Promise<PublicStats> => {
    const response = await axiosInstance.get('/api/public/university/stats');
    return response.data;
  },

  getPrograms: async (): Promise<AcademicProgram[]> => {
    const response = await axiosInstance.get('/api/public/programs');
    return response.data;
  },

  getAdmissionInfo: async (): Promise<AdmissionInfo> => {
    const response = await axiosInstance.get('/api/public/admissions');
    return response.data;
  },

  // Protected APIs (auth required)
  getUniversityDashboard: async (): Promise<UniversityDashboard> => {
    const response = await axiosInstance.get('/api/university/dashboard');
    return response.data;
  },

  getColleges: async (): Promise<College[]> => {
    const response = await axiosInstance.get('/api/university/colleges');
    return response.data;
  },

  getStudentAnalytics: async (): Promise<StudentAnalytics> => {
    const response = await axiosInstance.get('/api/university/students/analytics');
    return response.data;
  },

  getEmployerPartners: async (): Promise<EmployerPartner[]> => {
    const response = await axiosInstance.get('/api/university/employers');
    return response.data;
  },

  getAIInsights: async (): Promise<AIInsights> => {
    const response = await axiosInstance.get('/api/university/ai-insights');
    return response.data;
  },
};
```

## 🎭 Advanced Animation & Interaction Library

### Page Transitions
```css
/* Add to globals.css */

/* Page transition animations */
.page-enter {
  animation: pageEnter 0.6s ease-out;
}

.page-exit {
  animation: pageExit 0.4s ease-in;
}

/* Hero section animations */
.hero-title {
  animation: heroTitleEnter 1s ease-out;
}

.hero-subtitle {
  animation: heroSubtitleEnter 1s ease-out 0.2s both;
}

.hero-cta {
  animation: heroCTAEnter 1s ease-out 0.4s both;
}

/* Dashboard animations */
.dashboard-grid {
  animation: dashboardGridEnter 0.8s ease-out;
}

.metric-card {
  animation: metricCardEnter 0.6s ease-out;
}

.chart-container {
  animation: chartContainerEnter 1s ease-out;
}

/* Form animations */
.form-field {
  transition: all 0.3s ease;
}

.form-field:focus-within {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
}

/* Interactive elements */
.interactive-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.interactive-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Loading animations */
.skeleton-loader {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeletonLoading 1.5s infinite;
}

/* Micro-interactions */
.button-primary {
  position: relative;
  overflow: hidden;
}

.button-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.button-primary:hover::before {
  left: 100%;
}

/* Keyframe definitions */
@keyframes pageEnter {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes heroTitleEnter {
  from { opacity: 0; transform: translateY(30px) scale(0.9); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes dashboardGridEnter {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes skeletonLoading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Interactive Component Classes
```typescript
// Enhanced Tailwind classes for interactions
export const interactionClasses = {
  // Cards
  card: "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
  
  // Buttons
  primaryButton: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl",
  
  secondaryButton: "bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105",
  
  // Form elements
  input: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
  
  // Navigation
  navLink: "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-blue-50",
  
  // Charts and data visualization
  chart: "bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300",
  
  // Interactive elements
  clickable: "cursor-pointer hover:bg-gray-50 transition-colors duration-200",
  
  // Loading states
  loading: "animate-pulse bg-gray-200 rounded",
};
```

## 🔐 Role-Based Access Control

### User Roles and Permissions
```typescript
// /types/auth.ts
export type UserRole = 'guest' | 'student' | 'university_admin' | 'college_admin' | 'employer' | 'super_admin';

export interface Permission {
  resource: string;
  actions: ('create' | 'read' | 'update' | 'delete')[];
}

export interface RolePermissions {
  [key: string]: Permission[];
}

export const rolePermissions: RolePermissions = {
  guest: [
    { resource: 'public_pages', actions: ['read'] },
    { resource: 'programs', actions: ['read'] },
    { resource: 'admissions', actions: ['read'] },
  ],
  
  student: [
    { resource: 'profile', actions: ['read', 'update'] },
    { resource: 'opportunities', actions: ['read'] },
    { resource: 'applications', actions: ['create', 'read'] },
  ],
  
  university_admin: [
    { resource: 'university_dashboard', actions: ['read'] },
    { resource: 'colleges', actions: ['read', 'update'] },
    { resource: 'students', actions: ['read'] },
    { resource: 'analytics', actions: ['read'] },
    { resource: 'reports', actions: ['create', 'read'] },
  ],
  
  college_admin: [
    { resource: 'college_dashboard', actions: ['read'] },
    { resource: 'college_students', actions: ['read', 'update'] },
    { resource: 'college_analytics', actions: ['read'] },
  ],
  
  employer: [
    { resource: 'employer_dashboard', actions: ['read'] },
    { resource: 'job_postings', actions: ['create', 'read', 'update', 'delete'] },
    { resource: 'applications', actions: ['read', 'update'] },
  ],
  
  super_admin: [
    { resource: '*', actions: ['create', 'read', 'update', 'delete'] },
  ],
};
```

### Route Protection
```typescript
// /components/auth/ProtectedRoute.tsx
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole: UserRole[];
  fallback?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
  fallback
}) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  if (!user || !requiredRole.includes(user.role)) {
    return fallback || <UnauthorizedPage />;
  }
  
  return <>{children}</>;
};
```

## 📱 Responsive Design System

### Breakpoint Strategy
```typescript
// Tailwind breakpoints for responsive design
export const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px' // Extra large desktop
};

// Responsive component patterns
export const responsiveClasses = {
  // Grid layouts
  dashboardGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
  
  // Typography
  heroTitle: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold",
  sectionTitle: "text-2xl md:text-3xl lg:text-4xl font-semibold",
  
  // Spacing
  sectionPadding: "px-4 md:px-6 lg:px-8 xl:px-12",
  containerMargin: "mx-auto max-w-7xl",
  
  // Navigation
  mobileNav: "block md:hidden",
  desktopNav: "hidden md:block",
};
```

## 🚀 Performance Optimization Strategy

### Code Splitting and Lazy Loading
```typescript
// Lazy load heavy components
const UniversityDashboard = lazy(() => import('@/components/university/dashboard/UniversityOverview'));
const AnalyticsCharts = lazy(() => import('@/components/university/charts/AnalyticsCharts'));
const ReportGenerator = lazy(() => import('@/components/university/reports/ReportGenerator'));

// Lazy load pages
const CollegeDashboard = lazy(() => import('@/app/university/colleges/[id]/page'));
const AIInsights = lazy(() => import('@/app/university/ai-insights/page'));
```

### Image Optimization
```typescript
// Use Next.js Image component with optimization
import Image from 'next/image';

const OptimizedImage: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  return (
    <Image
      src={src}
      alt={alt}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
      {...props}
    />
  );
};
```

## 🎯 Complete Development Checklist

### Phase 1: Foundation (Week 1-2)
- [ ] Set up project structure and routing
- [ ] Implement authentication system
- [ ] Create base components and layouts
- [ ] Set up API integration layer

### Phase 2: Public Pages (Week 3-4)
- [ ] Landing page with hero and features
- [ ] About page with university information
- [ ] Programs page with course details
- [ ] Admissions page with application process
- [ ] Public placements page with statistics

### Phase 3: Dashboard System (Week 5-7)
- [ ] University admin dashboard
- [ ] College management system
- [ ] Student analytics and management
- [ ] Employer partnership portal
- [ ] AI insights and recommendations

### Phase 4: Analytics & Reports (Week 8-9)
- [ ] Comprehensive analytics suite
- [ ] Interactive charts and visualizations
- [ ] Report generation and export
- [ ] Policy recommendations system

### Phase 5: Enhancement & Testing (Week 10)
- [ ] Performance optimization
- [ ] Mobile responsiveness
- [ ] Accessibility compliance
- [ ] User testing and feedback integration

## 🔄 Integration Points with Existing System

### Student Platform Integration
```typescript
// Connect with existing student profiles
export const studentIntegration = {
  getStudentProfile: async (studentId: string) => {
    // Integrate with existing student API
    return await studentApi.getProfile(studentId);
  },
  
  updateCareerRecommendations: async (studentId: string, recommendations: CareerRecommendation[]) => {
    // Update student's career recommendations
    return await studentApi.updateRecommendations(studentId, recommendations);
  },
};
```

### Employer Platform Integration
```typescript
// Connect with existing employer dashboard
export const employerIntegration = {
  getEmployerJobs: async (employerId: string) => {
    // Get jobs from existing employer system
    return await employerApi.getJobs(employerId);
  },
  
  syncApplications: async (jobId: string) => {
    // Sync applications between systems
    return await employerApi.syncApplications(jobId);
  },
};
```

This comprehensive website will serve as the complete digital ecosystem for BPUT's AI-powered career platform, seamlessly integrating all stakeholders while providing powerful analytics and insights for data-driven decision making.