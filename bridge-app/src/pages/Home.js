import React from 'react';
import Hero from '../components/Hero';
import FeaturedUpdates from '../components/FeaturedUpdates';
import JobsSection from '../components/JobsSection';
import CoursesSection from '../components/CoursesSection';
import InternshipsSection from '../components/InternshipsSection';
import NetworkingSection from '../components/NetworkingSection';
import MockPracticeSection from '../components/MockPracticeSection';

function Home() {
  return (
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
  );
}

export default Home;