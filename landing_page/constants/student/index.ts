export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.bridge-platform.com';

export const ROUTES = {
  HOME: '/',
  OPPORTUNITIES: '/opportunities',
  MENTORS: '/mentors',
  GAMES: '/games',
  BADGES: '/badges',
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile',
  AI_PRO: '/ai-pro',
} as const;

export const LANGUAGES = {
  en: { name: 'English', flag: '🇺🇸', icon: '🌐' },
  hi: { name: 'हिंदी', flag: '🇮🇳', icon: '🌐' },
  od: { name: 'ଓଡ଼ିଆ', flag: '🇮🇳', icon: '🌐' },
} as const;

export const TRANSLATIONS = {
  en: {
    // Navigation
    'nav.opportunities': 'Opportunities',
    'nav.mentors': 'Mentors',
    'nav.games': 'Games',
    'nav.badges': 'Badges',
    'nav.ai_pro': 'AI Pro',
    'nav.profile': 'Profile',
    'nav.search': 'Search opportunities, mentors, courses...',

    // Hero Section
    'hero.title': 'Bridge the Gap, Build the Future',
    'hero.subtitle': 'Connect with opportunities, mentors, and skill-building resources',
    'stats.opportunities': 'Opportunities',
    'stats.mentors': 'Mentors',
    'stats.students': 'Students',
    'cta.get_started': 'Get Started',
    'cta.explore': 'Explore Now',

    // Sections
    'section.featured_updates': 'Featured Updates',
    'section.featured_updates_desc': 'Stay updated with the latest opportunities, courses, and community highlights',
    'section.jobs_internships': 'Jobs & Internships',
    'section.jobs_desc': 'Discover amazing career opportunities from top companies worldwide and kickstart your dream career',
    'section.connect_mentors': 'Connect with Mentors',
    'section.mentors_desc': 'Get personalized guidance from industry experts and accelerate your career growth with 1-on-1 mentorship sessions',
    'section.skill_games': 'Skill Games',
    'section.games_desc': 'Level up your skills through interactive games, challenges, and compete with developers worldwide',
    'section.learning_resources': 'Learning Resources',
    'section.learning_desc': 'Curated courses and tutorials to boost your skills and accelerate your learning journey',

    // Buttons & Actions
    'btn.available': 'Available',
    'btn.recommended': 'Recommended',
    'btn.try_ai_mentor': 'Try AI Mentor',
    'btn.book_session': 'Book Session',
    'btn.apply_now': 'Apply Now',
    'btn.start_learning': 'Start Learning',
    'btn.play_now': 'Play Now',
    'btn.view_rankings': 'View Rankings',
    'btn.get_started_free': 'Get Started Free',
    'btn.watch_demo': 'Watch Demo',

    // AI Mentor
    'ai.mentor': 'AI Mentor',
    'ai.always_available': 'Always Available',
    'ai.free': 'FREE',
    'ai.per_session': 'per session',
    'ai.try_now': 'Try Now',

    // Status
    'status.available_now': 'Available Now',
    'status.busy': 'Busy',
    'status.whats_new': "What's New",
    'status.expert_guidance': 'Expert Guidance',
    'status.career_opportunities': 'Career Opportunities',
    'status.gamified_learning': 'Gamified Learning',
    'status.knowledge_hub': 'Knowledge Hub',

    // Footer
    'footer.ready_bridge': 'Ready to Bridge Your Future?',
    'footer.join_thousands': 'Join thousands of students who are already building their careers with Bridge.',
    'footer.start_journey': 'Start your journey today and unlock endless opportunities in tech.',
  },
  hi: {
    // Navigation
    'nav.opportunities': 'अवसर',
    'nav.mentors': 'मार्गदर्शक',
    'nav.games': 'खेल',
    'nav.badges': 'बैज',
    'nav.ai_pro': 'AI प्रो',
    'nav.profile': 'प्रोफ़ाइल',
    'nav.search': 'अवसर, मार्गदर्शक, कोर्स खोजें...',

    // Hero Section
    'hero.title': 'अंतर को पाटें, भविष्य का निर्माण करें',
    'hero.subtitle': 'अवसरों, मार्गदर्शकों और कौशल निर्माण संसाधनों से जुड़ें',
    'stats.opportunities': 'अवसर',
    'stats.mentors': 'मार्गदर्शक',
    'stats.students': 'छात्र',
    'cta.get_started': 'शुरू करें',
    'cta.explore': 'अभी देखें',

    // Sections
    'section.featured_updates': 'विशेष अपडेट',
    'section.featured_updates_desc': 'नवीनतम अवसरों, कोर्सों और समुदायिक हाइलाइट्स के साथ अपडेट रहें',
    'section.jobs_internships': 'नौकरियां और इंटर्नशिप',
    'section.jobs_desc': 'दुनिया भर की शीर्ष कंपनियों से अद्भुत करियर अवसरों की खोज करें और अपना सपनों का करियर शुरू करें',
    'section.connect_mentors': 'मार्गदर्शकों से जुड़ें',
    'section.mentors_desc': 'उद्योग विशेषज्ञों से व्यक्तिगत मार्गदर्शन प्राप्त करें और 1-ऑन-1 मेंटरशिप सत्रों के साथ अपने करियर की वृद्धि को तेज़ करें',
    'section.skill_games': 'कौशल खेल',
    'section.games_desc': 'इंटरैक्टिव गेम्स, चुनौतियों के माध्यम से अपने कौशल को बढ़ाएं और दुनिया भर के डेवलपर्स के साथ प्रतिस्पर्धा करें',
    'section.learning_resources': 'शिक्षण संसाधन',
    'section.learning_desc': 'अपने कौशल को बढ़ाने और अपनी सीखने की यात्रा को तेज़ करने के लिए चुनिंदा कोर्स और ट्यूटोरियल',

    // Buttons & Actions
    'btn.available': 'उपलब्ध',
    'btn.recommended': 'अनुशंसित',
    'btn.try_ai_mentor': 'AI मेंटर आज़माएं',
    'btn.book_session': 'सत्र बुक करें',
    'btn.apply_now': 'अभी आवेदन करें',
    'btn.start_learning': 'सीखना शुरू करें',
    'btn.play_now': 'अभी खेलें',
    'btn.view_rankings': 'रैंकिंग देखें',
    'btn.get_started_free': 'मुफ्त में शुरू करें',
    'btn.watch_demo': 'डेमो देखें',

    // AI Mentor
    'ai.mentor': 'AI मेंटर',
    'ai.always_available': 'हमेशा उपलब्ध',
    'ai.free': 'मुफ्त',
    'ai.per_session': 'प्रति सत्र',
    'ai.try_now': 'अभी आज़माएं',

    // Status
    'status.available_now': 'अभी उपलब्ध',
    'status.busy': 'व्यस्त',
    'status.whats_new': 'नया क्या है',
    'status.expert_guidance': 'विशेषज्ञ मार्गदर्शन',
    'status.career_opportunities': 'करियर अवसर',
    'status.gamified_learning': 'गेमिफाइड लर्निंग',
    'status.knowledge_hub': 'ज्ञान केंद्र',

    // Footer
    'footer.ready_bridge': 'अपना भविष्य पाटने के लिए तैयार हैं?',
    'footer.join_thousands': 'हजारों छात्रों में शामिल हों जो पहले से ही ब्रिज के साथ अपना करियर बना रहे हैं।',
    'footer.start_journey': 'आज ही अपनी यात्रा शुरू करें और तकनीक में अनंत अवसरों को अनलॉक करें।',
  },
  od: {
    // Navigation
    'nav.opportunities': 'ସୁଯୋଗ',
    'nav.mentors': 'ପରାମର୍ଶଦାତା',
    'nav.games': 'ଖେଳ',
    'nav.badges': 'ବ୍ୟାଜ୍',
    'nav.ai_pro': 'AI ପ୍ରୋ',
    'nav.profile': 'ପ୍ରୋଫାଇଲ୍',
    'nav.search': 'ସୁଯୋଗ, ପରାମର୍ଶଦାତା, କୋର୍ସ ଖୋଜନ୍ତୁ...',

    // Hero Section
    'hero.title': 'ଫାଙ୍କ ପୂରଣ କରନ୍ତୁ, ଭବିଷ୍ୟତ ଗଢ଼ନ୍ତୁ',
    'hero.subtitle': 'ସୁଯୋଗ, ପରାମର୍ଶଦାତା ଏବଂ ଦକ୍ଷତା ବିକାଶ ସମ୍ବଳ ସହିତ ସଂଯୁକ୍ତ ହୁଅନ୍ତୁ',
    'stats.opportunities': 'ସୁଯୋଗ',
    'stats.mentors': 'ପରାମର୍ଶଦାତା',
    'stats.students': 'ଛାତ୍ର',
    'cta.get_started': 'ଆରମ୍ଭ କରନ୍ତୁ',
    'cta.explore': 'ବର୍ତ୍ତମାନ ଅନ୍ବେଷଣ କରନ୍ତୁ',

    // Sections
    'section.featured_updates': 'ବିଶେଷ ଅପଡେଟ୍',
    'section.featured_updates_desc': 'ସର୍ବଶେଷ ସୁଯୋଗ, କୋର୍ସ ଏବଂ ସମ୍ପ୍ରଦାୟ ହାଇଲାଇଟ୍ ସହିତ ଅପଡେଟ୍ ରହନ୍ତୁ',
    'section.jobs_internships': 'ଚାକିରି ଏବଂ ଇଣ୍ଟର୍ନସିପ୍',
    'section.jobs_desc': 'ବିଶ୍ୱବ୍ୟାପୀ ଶୀର୍ଷ କମ୍ପାନୀଗୁଡ଼ିକରୁ ଅଦ୍ଭୁତ କ୍ୟାରିୟର ସୁଯୋଗ ଆବିଷ୍କାର କରନ୍ତୁ ଏବଂ ଆପଣଙ୍କ ସ୍ୱପ୍ନର କ୍ୟାରିୟର ଆରମ୍ଭ କରନ୍ତୁ',
    'section.connect_mentors': 'ପରାମର୍ଶଦାତାଙ୍କ ସହିତ ସଂଯୋଗ କରନ୍ତୁ',
    'section.mentors_desc': 'ଇଣ୍ଡଷ୍ଟ୍ରି ବିଶେଷଜ୍ଞଙ୍କଠାରୁ ବ୍ୟକ୍ତିଗତ ମାର୍ଗଦର୍ଶନ ପାଆନ୍ତୁ ଏବଂ 1-ଅନ୍-1 ମେଣ୍ଟରସିପ୍ ସେସନ୍ ସହିତ ଆପଣଙ୍କ କ୍ୟାରିୟର ବୃଦ୍ଧିକୁ ତ୍ୱରାନ୍ୱିତ କରନ୍ତୁ',
    'section.skill_games': 'ଦକ୍ଷତା ଖେଳ',
    'section.games_desc': 'ଇଣ୍ଟରାକ୍ଟିଭ୍ ଗେମ୍, ଚ୍ୟାଲେଞ୍ଜ ମାଧ୍ୟମରେ ଆପଣଙ୍କ ଦକ୍ଷତା ବୃଦ୍ଧି କରନ୍ତୁ ଏବଂ ବିଶ୍ୱବ୍ୟାପୀ ଡେଭେଲପରଙ୍କ ସହିତ ପ୍ରତିଯୋଗିତା କରନ୍ତୁ',
    'section.learning_resources': 'ଶିକ୍ଷଣ ସମ୍ବଳ',
    'section.learning_desc': 'ଆପଣଙ୍କ ଦକ୍ଷତା ବୃଦ୍ଧି ଏବଂ ଶିକ୍ଷଣ ଯାତ୍ରାକୁ ତ୍ୱରାନ୍ୱିତ କରିବା ପାଇଁ ମନୋନୀତ କୋର୍ସ ଏବଂ ଟ୍ୟୁଟୋରିଆଲ୍',

    // Buttons & Actions
    'btn.available': 'ଉପଲବ୍ଧ',
    'btn.recommended': 'ସୁପାରିଶିତ',
    'btn.try_ai_mentor': 'AI ମେଣ୍ଟର ଚେଷ୍ଟା କରନ୍ତୁ',
    'btn.book_session': 'ସେସନ୍ ବୁକ୍ କରନ୍ତୁ',
    'btn.apply_now': 'ବର୍ତ୍ତମାନ ଆବେଦନ କରନ୍ତୁ',
    'btn.start_learning': 'ଶିଖିବା ଆରମ୍ଭ କରନ୍ତୁ',
    'btn.play_now': 'ବର୍ତ୍ତମାନ ଖେଳନ୍ତୁ',
    'btn.view_rankings': 'ର୍ୟାଙ୍କିଂ ଦେଖନ୍ତୁ',
    'btn.get_started_free': 'ମାଗଣାରେ ଆରମ୍ଭ କରନ୍ତୁ',
    'btn.watch_demo': 'ଡେମୋ ଦେଖନ୍ତୁ',

    // AI Mentor
    'ai.mentor': 'AI ମେଣ୍ଟର',
    'ai.always_available': 'ସର୍ବଦା ଉପଲବ୍ଧ',
    'ai.free': 'ମାଗଣା',
    'ai.per_session': 'ପ୍ରତି ସେସନ୍',
    'ai.try_now': 'ବର୍ତ୍ତମାନ ଚେଷ୍ଟା କରନ୍ତୁ',

    // Status
    'status.available_now': 'ବର୍ତ୍ତମାନ ଉପଲବ୍ଧ',
    'status.busy': 'ବ୍ୟସ୍ତ',
    'status.whats_new': 'ନୂଆ କଣ',
    'status.expert_guidance': 'ବିଶେଷଜ୍ଞ ମାର୍ଗଦର୍ଶନ',
    'status.career_opportunities': 'କ୍ୟାରିୟର ସୁଯୋଗ',
    'status.gamified_learning': 'ଗେମିଫାଇଡ୍ ଲର୍ନିଂ',
    'status.knowledge_hub': 'ଜ୍ଞାନ କେନ୍ଦ୍ର',

    // Footer
    'footer.ready_bridge': 'ଆପଣଙ୍କ ଭବିଷ୍ୟତ ପାଟିବା ପାଇଁ ପ୍ରସ୍ତୁତ?',
    'footer.join_thousands': 'ହଜାରେ ଛାତ୍ରଙ୍କ ସହିତ ଯୋଗ ଦିଅନ୍ତୁ ଯେଉଁମାନେ ପୂର୍ବରୁ ବ୍ରିଜ୍ ସହିତ ସେମାନଙ୍କ କ୍ୟାରିୟର ଗଢ଼ୁଛନ୍ତି।',
    'footer.start_journey': 'ଆଜି ଆପଣଙ୍କ ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ ଏବଂ ଟେକ୍ନୋଲୋଜିରେ ଅସୀମ ସୁଯୋଗ ଅନଲକ୍ କରନ୍ତୁ।',
  },
} as const;

export const SAMPLE_DATA = {
  stats: {
    opportunities: '10K+',
    mentors: '5K+',
    students: '50K+',
  },
  companies: ['Google', 'Microsoft', 'Amazon', 'Adobe', 'NVIDIA', 'Meta', 'Apple', 'Netflix', 'Flipkart', 'Zomato', 'Paytm', 'Swiggy'],
  skills: ['React', 'Python', 'Machine Learning', 'UI/UX', 'System Design', 'JavaScript', 'Node.js', 'AWS'],
  games: [
    { name: 'LogicLoop', icon: '🧠', category: 'Coding' },
    { name: 'CareerXP', icon: '🚀', category: 'Simulation' },
    { name: 'HackQuest', icon: '⚔️', category: 'Hackathons' },
  ],
};