'use client';

import { Header } from '@/components/university-layout/Header';
import { Footer } from '@/components/university-layout/Footer';
import { HeroSection } from '@/components/university/landing/HeroSection';
import { FeaturesSection } from '@/components/university/landing/FeaturesSection';
import { StatsSection } from '@/components/university/landing/StatsSection';
import { TestimonialsSection } from '@/components/university/landing/TestimonialsSection';
import { CTASection } from '@/components/university/landing/CTASection';

export default function UniversityHomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="home" />
      
      <main className="page-enter">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}