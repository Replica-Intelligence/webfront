'use client';

import { useState } from 'react';
import TopBar from './TopBar';
import LeftNav from './LeftNav';

interface AppShellProps {
  children: React.ReactNode;
  showLeftNav?: boolean;
}

export default function AppShell({ children, showLeftNav = true }: AppShellProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <TopBar />
      <div className="flex">
        {showLeftNav && (
          <>
            {/* Desktop Left Nav */}
            <div className="hidden lg:block">
              <LeftNav />
            </div>

            {/* Mobile Left Nav Overlay */}
            {mobileNavOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setMobileNavOpen(false)}
              >
                <div
                  className="fixed inset-y-0 left-0 w-64 bg-slate-950 border-r border-slate-800 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between p-4 border-b border-slate-800">
                    <span className="text-lg font-semibold">Menu</span>
                    <button
                      onClick={() => setMobileNavOpen(false)}
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <LeftNav />
                </div>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="fixed bottom-4 left-4 z-30 lg:hidden flex items-center gap-2 px-4 py-3 bg-cyan-400 text-slate-950 rounded-full shadow-lg hover:bg-cyan-300 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="text-sm">Menu</span>
            </button>
          </>
        )}
        <main className={`flex-1 ${showLeftNav ? 'lg:ml-64' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  );
}
