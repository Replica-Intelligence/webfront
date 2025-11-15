'use client';

import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AppShell from '@/components/AppShell/AppShell';

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  const handleKnowledgeBase = () => {
    if (status === 'authenticated') {
      router.push('/knowledge-base');
    } else {
      signIn('google', { callbackUrl: '/knowledge-base' });
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-slate-700 border-t-cyan-400 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <AppShell showLeftNav={false}>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden relative">
        <button
          onClick={handleKnowledgeBase}
          className="absolute top-8 right-8 text-slate-300 text-lg hover:text-white transition-colors z-10"
        >
          Knowledge Base
        </button>

        <div className="relative px-4">
          <h1
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent pulse-text select-none cursor-pointer"
            onClick={() => signIn('google', { callbackUrl: '/knowledge-base' })}
          >
            RI
          </h1>
          <p className="text-center mt-6 text-slate-400 text-base sm:text-lg md:text-xl">
            Replica Intelligence
          </p>
          <div className="sparks-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="spark" style={{ '--delay': `${i * 0.3}s` } as React.CSSProperties} />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.02); }
          }

          .pulse-text {
            animation: pulse 3s ease-in-out infinite;
          }

          .sparks-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          @keyframes spark {
            0% {
              opacity: 0;
              transform: translate(0, 0) scale(0);
            }
            10% {
              opacity: 0.6;
            }
            100% {
              opacity: 0;
              transform: translate(var(--tx), var(--ty)) scale(0);
            }
          }

          .spark {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 3px;
            height: 3px;
            background: linear-gradient(135deg, #22d3ee, #3b82f6);
            border-radius: 50%;
            box-shadow: 0 0 8px #22d3ee, 0 0 15px #22d3ee;
            animation: spark 4s ease-out infinite;
            animation-delay: var(--delay);
          }

          .spark:nth-child(1) { --tx: 80px; --ty: -60px; }
          .spark:nth-child(2) { --tx: -70px; --ty: 90px; }
          .spark:nth-child(3) { --tx: 100px; --ty: 40px; }
          .spark:nth-child(4) { --tx: -90px; --ty: -80px; }
          .spark:nth-child(5) { --tx: 50px; --ty: 110px; }
          .spark:nth-child(6) { --tx: -110px; --ty: 30px; }
          .spark:nth-child(7) { --tx: 95px; --ty: -85px; }
          .spark:nth-child(8) { --tx: -55px; --ty: -95px; }
          .spark:nth-child(9) { --tx: 120px; --ty: 10px; }
          .spark:nth-child(10) { --tx: -100px; --ty: -50px; }
          .spark:nth-child(11) { --tx: 65px; --ty: 105px; }
          .spark:nth-child(12) { --tx: -85px; --ty: 75px; }
          .spark:nth-child(13) { --tx: 110px; --ty: -40px; }
          .spark:nth-child(14) { --tx: -75px; --ty: -105px; }
          .spark:nth-child(15) { --tx: 90px; --ty: 85px; }
          .spark:nth-child(16) { --tx: -95px; --ty: 55px; }
          .spark:nth-child(17) { --tx: 75px; --ty: -75px; }
          .spark:nth-child(18) { --tx: -105px; --ty: -25px; }
          .spark:nth-child(19) { --tx: 105px; --ty: 65px; }
          .spark:nth-child(20) { --tx: -60px; --ty: 100px; }
        `}</style>
      </div>
    </AppShell>
  );
}
