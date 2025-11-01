import { useState } from 'react';

type Language = 'en' | 'hi' | 'od';

const translations = {
  en: {
    dashboard: 'Dashboard',
    applicants: 'Applicants',
    analytics: 'Analytics',
    postNewJob: 'Post New Job',
  },
  hi: {
    dashboard: 'डैशबोर्ड',
    applicants: 'आवेदक',
    analytics: 'विश्लेषण',
    postNewJob: 'नई नौकरी पोस्ट करें',
  },
  od: {
    dashboard: 'ଡ୍ୟାସବୋର୍ଡ',
    applicants: 'ଆବେଦନକାରୀ',
    analytics: 'ବିଶ୍ଳେଷଣ',
    postNewJob: 'ନୂତନ ଚାକିରି ପୋଷ୍ଟ କରନ୍ତୁ',
  },
};

export const useTranslation = () => {
  const [language] = useState<Language>('en');

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || key;
  };

  return { t, language };
};