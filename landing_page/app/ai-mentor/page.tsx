'use client';

import './ai-mentor.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import LearningPanel from './components/LearningPanel';
import ChatAssistant from './components/ChatAssistant';
import SkillTracker from './components/SkillTracker';
import PlanBuilder from './components/PlanBuilder';
import ReflectionSection from './components/ReflectionSection';
import Footer from './components/Footer';

export default function AIMentorPage() {
  return (
    <main className="ai-mentor-page min-h-screen gradient-bg">
      <NavBar />
      <HeroSection />
      <LearningPanel />
      <ChatAssistant />
      <SkillTracker />
      <PlanBuilder />
      <ReflectionSection />
      <Footer />
    </main>
  );
}