'use client';

import { useState } from 'react';
import { ScrollTriggeredModal } from '@/components/ui/ScrollTriggeredModal';
import { AnimatePresence } from 'framer-motion';

export const ScrollModalDemo = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSignIn = (data: any) => {
    console.log('Sign in data:', data);
    alert(`Sign in successful!\nRole: ${data.role}\nEmail: ${data.email}`);
    setShowModal(false);
  };

  const handleSocialLogin = (provider: string) => {
    console.log('Social login with:', provider);
    alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login initiated!`);
    setShowModal(false);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        🎯 Scroll-Triggered Modal Demo
      </h3>
      <p className="text-gray-600 mb-4">
        Click the button below to preview the modal that appears when users scroll to the bottom of the page.
      </p>
      <button
        onClick={handleShowModal}
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Preview Modal
      </button>

      <div className="mt-4 text-sm text-gray-500">
        <p>✅ Matches your existing authentication design</p>
        <p>✅ Smooth animations with Framer Motion</p>
        <p>✅ Social login buttons with hover effects</p>
        <p>✅ Role selection (Student/Employer/Institution)</p>
        <p>✅ Form validation and responsive design</p>
      </div>

      <AnimatePresence>
        {showModal && (
          <ScrollTriggeredModal
            onClose={handleModalClose}
            onSubmit={handleSignIn}
            onSocialLogin={handleSocialLogin}
          />
        )}
      </AnimatePresence>
    </div>
  );
};