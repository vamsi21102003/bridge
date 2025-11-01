'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

export type Language = 'en' | 'hi' | 'od'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('bridge-language') as Language
    if (savedLanguage && ['en', 'hi', 'od'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when changed
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('bridge-language', lang)
  }

  // Translation function
  const t = (key: string): string => {
    return getTranslation(key, language)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Translation helper function
function getTranslation(key: string, language: Language): string {
  const translations = getTranslations()
  const keys = key.split('.')
  let value: any = translations[language]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}

// All translations
function getTranslations() {
  return {
    en: {
      header: {
        home: 'Home',
        opportunities: 'Opportunities',
        skills: 'Skills',
        guidance: 'Guidance',
        dashboard: 'Dashboard',
        login: 'Login',
        signUp: 'Sign Up',
        tagline: 'Bridge the gap. Build the future'
      },
      hero: {
        title: 'BriDGe',
        tagline: 'Where Intelligence Meets Opportunity',
        description: 'Experience the power of BriDGe - our revolutionary Real-time Intelligent Digital Guidance Engine that transforms career discovery. Get AI-powered job recommendations, structured career paths, and personalized guidance that adapts to your unique journey in real-time.',
        getStarted: 'Get Started',
        watchDemo: 'Watch Demo'
      },
      jobs: {
        title: 'AI Recommended Jobs & Internships',
        subtitle: 'Personalized opportunities matched to your profile through advanced AI analysis',
        filters: {
          all: 'All Opportunities',
          internships: 'Internships',
          fulltime: 'Full-time Jobs',
          urgent: 'Urgent',
          featured: 'Featured'
        },
        showing: 'Showing',
        opportunity: 'opportunity',
        opportunities: 'opportunities',
        for: 'for',
        noJobs: 'No jobs found',
        noJobsDesc: 'No opportunities match the selected filter. Try selecting a different filter.',
        applyNow: 'APPLY NOW',
        applyBy: 'Apply by'
      },
      skills: {
        title: 'Develop In-Demand Skills',
        subtitle: 'Stay ahead of the curve with skills that employers are actively seeking. Build your expertise with our curated learning paths.',
        exploreSkills: 'Explore Skills',
        startLearning: 'Start Learning Today'
      },
      guidance: {
        title: 'Expert Career Guidance',
        subtitle: 'Get personalized support from industry professionals to accelerate your career growth and achieve your goals.',
        learnMore: 'Learn More',
        scheduleConsultation: 'Schedule Free Consultation'
      },
      career: {
        title: 'Discover Your Career Potential',
        subtitle: 'AI-powered insights, structured career paths, and personalized recommendations to guide your professional journey',
        learnMore: 'Learn More',
        getStartedFree: 'Get Started Free',
        watchDemo: 'Watch Demo'
      },
      language: {
        english: 'English',
        hindi: 'हिंदी',
        odia: 'ଓଡ଼ିଆ',
        selectLanguage: 'Select Language'
      }
    },  
  hi: {
      header: {
        home: 'होम',
        opportunities: 'अवसर',
        skills: 'कौशल',
        guidance: 'मार्गदर्शन',
        dashboard: 'डैशबोर्ड',
        login: 'लॉगिन',
        signUp: 'साइन अप',
        tagline: 'अंतर को पाटें। भविष्य का निर्माण करें'
      },
      hero: {
        title: 'BriDGe',
        tagline: 'जहाँ बुद्धिमत्ता अवसर से मिलती है',
        description: 'BriDGe की शक्ति का अनुभव करें - हमारा क्रांतिकारी रियल-टाइम इंटेलिजेंट डिजिटल गाइडेंस इंजन जो करियर खोज को बदल देता है। AI-संचालित नौकरी सिफारिशें, संरचित करियर पथ, और व्यक्तिगत मार्गदर्शन प्राप्त करें जो रियल-टाइम में आपकी अनूठी यात्रा के अनुकूल होता है।',
        getStarted: 'शुरू करें',
        watchDemo: 'डेमो देखें'
      },
      jobs: {
        title: 'AI अनुशंसित नौकरियां और इंटर्नशिप',
        subtitle: 'उन्नत AI विश्लेषण के माध्यम से आपकी प्रोफाइल से मेल खाने वाले व्यक्तिगत अवसर',
        filters: {
          all: 'सभी अवसर',
          internships: 'इंटर्नशिप',
          fulltime: 'पूर्णकालिक नौकरियां',
          urgent: 'तत्काल',
          featured: 'फीचर्ड'
        },
        showing: 'दिखा रहे हैं',
        opportunity: 'अवसर',
        opportunities: 'अवसर',
        for: 'के लिए',
        noJobs: 'कोई नौकरी नहीं मिली',
        noJobsDesc: 'चयनित फिल्टर से कोई अवसर मेल नहीं खाता। एक अलग फिल्टर चुनने का प्रयास करें।',
        applyNow: 'अभी आवेदन करें',
        applyBy: 'तक आवेदन करें'
      },
      skills: {
        title: 'मांग में कौशल विकसित करें',
        subtitle: 'उन कौशलों के साथ आगे रहें जिनकी नियोक्ता सक्रिय रूप से तलाश कर रहे हैं। हमारे क्यूरेटेड लर्निंग पाथ के साथ अपनी विशेषज्ञता बनाएं।',
        exploreSkills: 'कौशल एक्सप्लोर करें',
        startLearning: 'आज ही सीखना शुरू करें'
      },
      guidance: {
        title: 'विशेषज्ञ करियर मार्गदर्शन',
        subtitle: 'अपने करियर की वृद्धि को तेज करने और अपने लक्ष्यों को प्राप्त करने के लिए उद्योग के पेशेवरों से व्यक्तिगत सहायता प्राप्त करें।',
        learnMore: 'और जानें',
        scheduleConsultation: 'मुफ्त परामर्श शेड्यूल करें'
      },
      career: {
        title: 'अपनी करियर क्षमता की खोज करें',
        subtitle: 'AI-संचालित अंतर्दृष्टि, संरचित करियर पथ, और आपकी पेशेवर यात्रा का मार्गदर्शन करने के लिए व्यक्तिगत सिफारिशें',
        learnMore: 'और जानें',
        getStartedFree: 'मुफ्त में शुरू करें',
        watchDemo: 'डेमो देखें'
      },
      language: {
        english: 'English',
        hindi: 'हिंदी',
        odia: 'ଓଡ଼ିଆ',
        selectLanguage: 'भाषा चुनें'
      }
    },  
  od: {
      header: {
        home: 'ଘର',
        opportunities: 'ସୁଯୋଗ',
        skills: 'କୌଶଳ',
        guidance: 'ମାର୍ଗଦର୍ଶନ',
        dashboard: 'ଡ୍ୟାସବୋର୍ଡ',
        login: 'ଲଗଇନ୍',
        signUp: 'ସାଇନ୍ ଅପ୍',
        tagline: 'ଫାଙ୍କ ପୂରଣ କରନ୍ତୁ। ଭବିଷ୍ୟତ ଗଢ଼ନ୍ତୁ'
      },
      hero: {
        title: 'BriDGe',
        tagline: 'ଯେଉଁଠାରେ ବୁଦ୍ଧିମତା ସୁଯୋଗ ସହିତ ମିଳେ',
        description: 'BriDGe ର ଶକ୍ତି ଅନୁଭବ କରନ୍ତୁ - ଆମର ବିପ୍ଳବୀ ରିଅଲ୍-ଟାଇମ୍ ଇଣ୍ଟେଲିଜେଣ୍ଟ ଡିଜିଟାଲ୍ ଗାଇଡେନ୍ସ ଇଞ୍ଜିନ୍ ଯାହା କ୍ୟାରିୟର ଆବିଷ୍କାରକୁ ପରିବର୍ତ୍ତନ କରେ। AI-ଚାଳିତ ଚାକିରି ସୁପାରିଶ, ସଂରଚିତ କ୍ୟାରିୟର ପଥ ଏବଂ ବ୍ୟକ୍ତିଗତ ମାର୍ଗଦର୍ଶନ ପାଆନ୍ତୁ ଯାହା ରିଅଲ୍-ଟାଇମ୍ରେ ଆପଣଙ୍କର ଅନନ୍ୟ ଯାତ୍ରା ସହିତ ଖାପ ଖାଏ।',
        getStarted: 'ଆରମ୍ଭ କରନ୍ତୁ',
        watchDemo: 'ଡେମୋ ଦେଖନ୍ତୁ'
      },
      jobs: {
        title: 'AI ସୁପାରିଶିତ ଚାକିରି ଏବଂ ଇଣ୍ଟର୍ନସିପ୍',
        subtitle: 'ଉନ୍ନତ AI ବିଶ୍ଳେଷଣ ମାଧ୍ୟମରେ ଆପଣଙ୍କର ପ୍ରୋଫାଇଲ୍ ସହିତ ମେଳ ଖାଉଥିବା ବ୍ୟକ୍ତିଗତ ସୁଯୋଗ',
        filters: {
          all: 'ସମସ୍ତ ସୁଯୋଗ',
          internships: 'ଇଣ୍ଟର୍ନସିପ୍',
          fulltime: 'ପୂର୍ଣ୍ଣକାଳୀନ ଚାକିରି',
          urgent: 'ତତ୍କାଳ',
          featured: 'ବିଶେଷ'
        },
        showing: 'ଦେଖାଉଛି',
        opportunity: 'ସୁଯୋଗ',
        opportunities: 'ସୁଯୋଗ',
        for: 'ପାଇଁ',
        noJobs: 'କୌଣସି ଚାକିରି ମିଳିଲା ନାହିଁ',
        noJobsDesc: 'ଚୟନିତ ଫିଲ୍ଟର ସହିତ କୌଣସି ସୁଯୋଗ ମେଳ ଖାଉନାହିଁ। ଏକ ଭିନ୍ନ ଫିଲ୍ଟର ଚୟନ କରିବାକୁ ଚେଷ୍ଟା କରନ୍ତୁ।',
        applyNow: 'ବର୍ତ୍ତମାନ ଆବେଦନ କରନ୍ତୁ',
        applyBy: 'ଦ୍ୱାରା ଆବେଦନ କରନ୍ତୁ'
      },
      skills: {
        title: 'ଚାହିଦା ଥିବା କୌଶଳ ବିକାଶ କରନ୍ତୁ',
        subtitle: 'ନିଯୁକ୍ତିଦାତାମାନେ ସକ୍ରିୟ ଭାବରେ ଖୋଜୁଥିବା କୌଶଳ ସହିତ ଆଗରେ ରୁହନ୍ତୁ। ଆମର କ୍ୟୁରେଟେଡ୍ ଲର୍ନିଂ ପାଥ୍ ସହିତ ଆପଣଙ୍କର ଦକ୍ଷତା ଗଢ଼ନ୍ତୁ।',
        exploreSkills: 'କୌଶଳ ଅନୁସନ୍ଧାନ କରନ୍ତୁ',
        startLearning: 'ଆଜି ଶିଖିବା ଆରମ୍ଭ କରନ୍ତୁ'
      },
      guidance: {
        title: 'ବିଶେଷଜ୍ଞ କ୍ୟାରିୟର ମାର୍ଗଦର୍ଶନ',
        subtitle: 'ଆପଣଙ୍କର କ୍ୟାରିୟର ବୃଦ୍ଧିକୁ ତ୍ୱରାନ୍ୱିତ କରିବା ଏବଂ ଆପଣଙ୍କର ଲକ୍ଷ୍ୟ ହାସଲ କରିବା ପାଇଁ ଇଣ୍ଡଷ୍ଟ୍ରି ପ୍ରଫେସନାଲମାନଙ୍କଠାରୁ ବ୍ୟକ୍ତିଗତ ସହାୟତା ପାଆନ୍ତୁ।',
        learnMore: 'ଅଧିକ ଜାଣନ୍ତୁ',
        scheduleConsultation: 'ମାଗଣା ପରାମର୍ଶ ସମୟ ନିର୍ଧାରଣ କରନ୍ତୁ'
      },
      career: {
        title: 'ଆପଣଙ୍କର କ୍ୟାରିୟର ସାମର୍ଥ୍ୟ ଆବିଷ୍କାର କରନ୍ତୁ',
        subtitle: 'AI-ଚାଳିତ ଅନ୍ତର୍ଦୃଷ୍ଟି, ସଂରଚିତ କ୍ୟାରିୟର ପଥ ଏବଂ ଆପଣଙ୍କର ପେସାଦାର ଯାତ୍ରାକୁ ମାର୍ଗଦର୍ଶନ କରିବା ପାଇଁ ବ୍ୟକ୍ତିଗତ ସୁପାରିଶ',
        learnMore: 'ଅଧିକ ଜାଣନ୍ତୁ',
        getStartedFree: 'ମାଗଣାରେ ଆରମ୍ଭ କରନ୍ତୁ',
        watchDemo: 'ଡେମୋ ଦେଖନ୍ତୁ'
      },
      language: {
        english: 'English',
        hindi: 'हिंदी',
        odia: 'ଓଡ଼ିଆ',
        selectLanguage: 'ଭାଷା ବାଛନ୍ତୁ'
      }
    }
  }
}