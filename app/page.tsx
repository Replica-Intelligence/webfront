'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative">
        <h1 className="text-[20vw] font-bold text-white pulse-text select-none">
          RI
        </h1>
        <div className="sparks-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="spark" style={{ '--delay': `${i * 0.3}s` } as React.CSSProperties} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        .pulse-text {
          animation: pulse 2s ease-in-out infinite;
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
            opacity: 1;
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
          width: 4px;
          height: 4px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 10px #fff, 0 0 20px #fff;
          animation: spark 3s ease-out infinite;
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
  );
}
