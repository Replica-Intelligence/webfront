'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import LoginPromptModal from '@/components/LoginPromptModal';

interface ArticleClientWrapperProps {
  children: React.ReactNode;
}

export default function ArticleClientWrapper({ children }: ArticleClientWrapperProps) {
  const { status } = useSession();
  const params = useParams();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const slug = params?.slug as string;

  useEffect(() => {
    if (status === 'unauthenticated') {
      // Show modal after a brief delay to allow page to load
      const timer = setTimeout(() => {
        setShowLoginModal(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      {children}
      <LoginPromptModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        returnUrl={`/knowledge-base/${slug}`}
      />
    </>
  );
}
