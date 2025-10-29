export const DASHBOARD_ROUTES = {
  HOME: '/dashboard/employer',
  APPLICANTS: '/dashboard/employer/applicants',
  ANALYTICS: '/dashboard/employer/analytics',
  PROFILE: '/profile',
  JOB_POSTING: '/job-posting',
} as const;

export const API_ROUTES = {
  JOBS: '/api/jobs',
  APPLICANTS: '/api/applicants',
  PROFILE: '/api/profile',
  ANALYTICS: '/api/analytics',
  SUBSCRIPTION: '/api/subscription',
} as const;

export const TRANSLATIONS = {
  en: {
    // Navigation
    home: "Home",
    dashboard: "Dashboard",
    applicants: "Applicants",
    analytics: "Analytics",
    profile: "Profile",
    
    // Dashboard
    totalJobs: "Total Jobs Posted",
    totalApplicants: "Total Applicants",
    activePositions: "Active Positions",
    shortlistedCandidates: "Shortlisted Candidates",
    postNewJob: "Post New Job",
    recentActivity: "Recent Activity",
    
    // Job Form
    jobTitle: "Job Title",
    role: "Role",
    description: "Description",
    skills: "Skills",
    salary: "Salary",
    location: "Location",
    submit: "Submit",
    cancel: "Cancel",
    
    // Applicants
    name: "Name",
    appliedPosition: "Applied Position",
    resumeLink: "Resume",
    shortlist: "Shortlist",
    reject: "Reject",
    message: "Message",
    
    // Analytics
    conversionRate: "Conversion Rate",
    engagement: "Engagement",
    employabilityInsights: "Employability Insights",
    
    // Profile
    companyName: "Company Name",
    website: "Website",
    saveProfile: "Save Profile",
    subscribeNow: "Subscribe Now",
    
    // Subscription Features
    collaborationCentre: "Employer Collaboration Centre",
    candidateAnalytics: "Candidate Analytics Dashboard",
    predictiveInsights: "Predictive Employability Insights",
    brandingPortal: "Employer Engagement & Branding Portal",
    verifiedBadge: "Verified Badge",
  },
  hi: {
    // Navigation
    home: "होम",
    dashboard: "डैशबोर्ड",
    applicants: "आवेदक",
    analytics: "विश्लेषण",
    profile: "प्रोफ़ाइल",
    
    // Dashboard
    totalJobs: "कुल नौकरियां पोस्ट की गईं",
    totalApplicants: "कुल आवेदक",
    activePositions: "सक्रिय पद",
    shortlistedCandidates: "शॉर्टलिस्ट किए गए उम्मीदवार",
    postNewJob: "नई नौकरी पोस्ट करें",
    recentActivity: "हाल की गतिविधि",
    
    // Job Form
    jobTitle: "नौकरी का शीर्षक",
    role: "भूमिका",
    description: "विवरण",
    skills: "कौशल",
    salary: "वेतन",
    location: "स्थान",
    submit: "जमा करें",
    cancel: "रद्द करें",
    
    // Applicants
    name: "नाम",
    appliedPosition: "आवेदित पद",
    resumeLink: "रिज्यूमे",
    shortlist: "शॉर्टलिस्ट",
    reject: "अस्वीकार",
    message: "संदेश",
    
    // Analytics
    conversionRate: "रूपांतरण दर",
    engagement: "सहभागिता",
    employabilityInsights: "रोजगार क्षमता अंतर्दृष्टि",
    
    // Profile
    companyName: "कंपनी का नाम",
    website: "वेबसाइट",
    saveProfile: "प्रोफ़ाइल सहेजें",
    subscribeNow: "अभी सब्सक्राइब करें",
    
    // Subscription Features
    collaborationCentre: "नियोक्ता सहयोग केंद्र",
    candidateAnalytics: "उम्मीदवार विश्लेषण डैशबोर्ड",
    predictiveInsights: "भविष्यसूचक रोजगार क्षमता अंतर्दृष्टि",
    brandingPortal: "नियोक्ता सहभागिता और ब्रांडिंग पोर्टल",
    verifiedBadge: "सत्यापित बैज",
  },
  od: {
    // Navigation
    home: "ମୂଳ ପୃଷ୍ଠା",
    dashboard: "ଡ୍ୟାସବୋର୍ଡ",
    applicants: "ଆବେଦକ",
    analytics: "ବିଶ୍ଳେଷଣ",
    profile: "ପ୍ରୋଫାଇଲ୍",
    
    // Dashboard
    totalJobs: "ମୋଟ ଚାକିରି ପୋଷ୍ଟ",
    totalApplicants: "ମୋଟ ଆବେଦକ",
    activePositions: "ସକ୍ରିୟ ପଦବୀ",
    shortlistedCandidates: "ସର୍ଟଲିଷ୍ଟ ପ୍ରାର୍ଥୀ",
    postNewJob: "ନୂଆ ଚାକିରି ପୋଷ୍ଟ କରନ୍ତୁ",
    recentActivity: "ସାମ୍ପ୍ରତିକ କାର୍ଯ୍ୟକଳାପ",
    
    // Job Form
    jobTitle: "ଚାକିରି ଶୀର୍ଷକ",
    role: "ଭୂମିକା",
    description: "ବର୍ଣ୍ଣନା",
    skills: "କୌଶଳ",
    salary: "ବେତନ",
    location: "ସ୍ଥାନ",
    submit: "ଦାଖଲ କରନ୍ତୁ",
    cancel: "ବାତିଲ୍",
    
    // Applicants
    name: "ନାମ",
    appliedPosition: "ଆବେଦନ କରିଥିବା ପଦବୀ",
    resumeLink: "ରିଜ୍ୟୁମ୍",
    shortlist: "ସର୍ଟଲିଷ୍ଟ",
    reject: "ପ୍ରତ୍ୟାଖ୍ୟାନ",
    message: "ସନ୍ଦେଶ",
    
    // Analytics
    conversionRate: "ରୂପାନ୍ତର ହାର",
    engagement: "ସହଭାଗିତା",
    employabilityInsights: "ନିଯୁକ୍ତି ଯୋଗ୍ୟତା ଅନ୍ତର୍ଦୃଷ୍ଟି",
    
    // Profile
    companyName: "କମ୍ପାନୀ ନାମ",
    website: "ୱେବସାଇଟ୍",
    saveProfile: "ପ୍ରୋଫାଇଲ୍ ସେଭ୍ କରନ୍ତୁ",
    subscribeNow: "ବର୍ତ୍ତମାନ ସବସ୍କ୍ରାଇବ୍ କରନ୍ତୁ",
    
    // Subscription Features
    collaborationCentre: "ନିଯୁକ୍ତିଦାତା ସହଯୋଗ କେନ୍ଦ୍ର",
    candidateAnalytics: "ପ୍ରାର୍ଥୀ ବିଶ୍ଳେଷଣ ଡ୍ୟାସବୋର୍ଡ",
    predictiveInsights: "ଭବିଷ୍ୟତ ନିଯୁକ୍ତି ଯୋଗ୍ୟତା ଅନ୍ତର୍ଦୃଷ୍ଟି",
    brandingPortal: "ନିଯୁକ୍ତିଦାତା ସହଭାଗିତା ଏବଂ ବ୍ରାଣ୍ଡିଂ ପୋର୍ଟାଲ୍",
    verifiedBadge: "ଯାଞ୍ଚିତ ବ୍ୟାଜ୍",
  },
} as const;