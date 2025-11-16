'use client';

import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

interface LoginPromptModalProps {
  show: boolean;
  onClose: () => void;
  returnUrl?: string;
}

export default function LoginPromptModal({ show, onClose, returnUrl }: LoginPromptModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    }
  }, [show]);

  const handleLogin = () => {
    signIn('google', { callbackUrl: returnUrl || '/knowledge-base' });
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation to finish
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-gray-800/95 border border-gray-700 rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-2xl font-bold text-white text-center mb-3">
          Login to Explore
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Sign in to access the full persona explorer, knowledge base, and interactive tools.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleLogin}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Sign in with Google
          </button>
          <button
            onClick={handleClose}
            className="w-full px-6 py-3 bg-gray-700/50 text-gray-300 rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-600"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
