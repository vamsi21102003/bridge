// Demo resume generator for showcasing
export const generateDemoResumeUrl = (applicantName: string): string => {
  // Convert name to URL-friendly format
  const urlName = applicantName.toLowerCase().replace(/\s+/g, '-');
  
  // Generate a realistic Google Drive-style URL for demo purposes
  const baseUrl = 'https://drive.google.com/file/d/';
  const fileId = `1${Math.random().toString(36).substr(2, 9)}-${urlName}`;
  
  return `${baseUrl}${fileId}/view`;
};

// Demo resume content for different roles
export const getDemoResumeContent = (applicantName: string, skills: string[], position: string) => {
  return {
    name: applicantName,
    position: position,
    skills: skills,
    experience: getExperienceByRole(position),
    education: getEducationByRole(position),
    projects: getProjectsBySkills(skills)
  };
};

const getExperienceByRole = (position: string) => {
  if (position.includes('Senior')) {
    return [
      'Software Engineer at TechCorp (2021-2023)',
      'Junior Developer at StartupXYZ (2019-2021)',
      'Intern at DevCompany (2018-2019)'
    ];
  } else if (position.includes('Intern')) {
    return [
      'Freelance Projects (2023)',
      'College Projects and Hackathons',
      'Open Source Contributions'
    ];
  } else {
    return [
      'Software Developer at MidTech (2020-2023)',
      'Junior Developer at SmallCorp (2018-2020)'
    ];
  }
};

const getEducationByRole = (position: string) => {
  if (position.includes('Data Science')) {
    return 'M.Sc. Data Science, IIT Delhi (2022)';
  } else if (position.includes('Design')) {
    return 'B.Des. Interaction Design, NID Ahmedabad (2023)';
  } else {
    return 'B.Tech Computer Science, VIT Vellore (2022)';
  }
};

const getProjectsBySkills = (skills: string[]) => {
  const projects = [];
  
  if (skills.includes('React')) {
    projects.push('E-commerce Web App using React & Node.js');
  }
  if (skills.includes('Python')) {
    projects.push('Machine Learning Model for Price Prediction');
  }
  if (skills.includes('Figma')) {
    projects.push('Mobile App UI/UX Design for Food Delivery');
  }
  if (skills.includes('Flutter')) {
    projects.push('Cross-platform Chat Application');
  }
  
  return projects.length > 0 ? projects : ['Portfolio Website', 'College Management System'];
};