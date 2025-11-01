'use client';

import React, { useState } from 'react';
import Navbar from '@/components/dashboard/Navbar';
import SidebarProfile from '@/components/dashboard/SidebarProfile';
import Footer from '@/components/dashboard/Footer';
import '@/styles/empbridge-dashboard.css';

export default function EmployerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="bridge-dashboard-page min-h-screen flex flex-col">
      <Navbar onProfileClick={() => setIsProfileOpen(true)} />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
      <SidebarProfile 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
      />
    </div>
  );
}