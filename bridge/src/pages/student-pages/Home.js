import React from 'react';
import Hero from '../../components/student-components/Hero';
import FeaturedUpdates from '../../components/student-components/FeaturedUpdates';
import JobsSection from '../../components/student-components/JobsSection';
import CoursesSection from '../../components/student-components/CoursesSection';
import InternshipsSection from '../../components/student-components/InternshipsSection';
import NetworkingSection from '../../components/student-components/NetworkingSection';
import MockPracticeSection from '../../components/student-components/MockPracticeSection';
import StudentAppWrapper from '../../components/StudentAppWrapper';

function Home() {
  return (
    <StudentAppWrapper>
      <div className="home">
        <Hero />
        <div className="content-sections">
          <FeaturedUpdates />
          <JobsSection />
          <CoursesSection />
          <InternshipsSection />
          <NetworkingSection />
          <MockPracticeSection />
        </div>
      </div>
    </StudentAppWrapper>
  );
}

export default Home;