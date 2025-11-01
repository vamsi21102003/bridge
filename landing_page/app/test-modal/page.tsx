'use client';

import { ScrollTriggeredModal } from '@/components/ui/ScrollTriggeredModal';
import { useScrollToBottom } from '@/hooks/useScrollToBottom';
import { AnimatePresence } from 'framer-motion';

export default function TestModalPage() {
  const { isTriggered, resetTrigger } = useScrollToBottom({
    threshold: 80, // Trigger when 80% scrolled for easier testing
    delay: 500,
    onlyOnce: false // Allow multiple triggers for testing
  });

  const handleModalClose = () => {
    resetTrigger();
  };

  const handleSignIn = (data: any) => {
    console.log('Sign in data:', data);
    alert(`Sign in successful!\nRole: ${data.role}\nEmail: ${data.email}`);
    resetTrigger();
  };

  const handleSocialLogin = (provider: string) => {
    console.log('Social login with:', provider);
    alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login initiated!`);
    resetTrigger();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Scroll-Triggered Modal Test Page
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Scroll down to 80% to trigger the modal
        </p>
      </div>

      {/* Content sections to create scrollable content */}
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className="p-8 m-4 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Section {i + 1}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">Feature {i * 2 + 1}</h3>
              <p className="text-purple-700 text-sm">
                This is a sample feature description that demonstrates the content layout.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Feature {i * 2 + 2}</h3>
              <p className="text-indigo-700 text-sm">
                Another feature description to show how the content flows in the layout.
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Final section */}
      <div className="p-8 m-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          🎉 You've reached the end!
        </h2>
        <p className="text-center text-purple-100 mb-4">
          The modal should have appeared when you scrolled to 80% of the page.
        </p>
        <div className="text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Scroll to Top
          </button>
        </div>
      </div>

      {/* Scroll-triggered modal */}
      <AnimatePresence>
        {isTriggered && (
          <ScrollTriggeredModal
            onClose={handleModalClose}
            onSubmit={handleSignIn}
            onSocialLogin={handleSocialLogin}
          />
        )}
      </AnimatePresence>
    </div>
  );
}