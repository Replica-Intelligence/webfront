'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import LoginPromptModal from '@/components/LoginPromptModal';
import ExplorerDashboard from '@/components/Demo/Explorer/ExplorerDashboard';

export default function ExplorerClientWrapper() {
  const { status } = useSession();
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      // Show modal after a brief delay to allow page to load
      const timer = setTimeout(() => {
        setShowLoginModal(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-slate-700 border-t-cyan-400 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <ExplorerDashboard />
      <LoginPromptModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        returnUrl="/demo/e-commerce/explorer"
      />
    </>
  );
}
