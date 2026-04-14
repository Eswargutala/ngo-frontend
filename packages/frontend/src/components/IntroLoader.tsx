'use client';

import { useEffect, useState } from 'react';

export default function IntroLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('seenLoader');

    // If already seen → skip loader
    if (hasSeenLoader) {
      setLoading(false);
      return;
    }

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const endTimer = setTimeout(() => {
      sessionStorage.setItem('seenLoader', 'true');
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, []);

  if (!loading) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        transition: 'opacity 0.8s ease',
        opacity: fadeOut ? 0 : 1,
      }}
    >
      <img
        src="/images/lgo1.png"
        alt="logo"
        style={{
          width: '200px',
          animation: 'zoomIn 2.5s ease forwards',
        }}
      />

      <style>
        {`
          @keyframes zoomIn {
            0% {
              transform: scale(0.6);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}
