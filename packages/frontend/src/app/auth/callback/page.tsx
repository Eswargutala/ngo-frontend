'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '../../../contexts/AuthContext';

export default function AuthCallback() {
  const searchParams = useSearchParams();
  const { setTokenAndFetch } = useAuth();
  const [status, setStatus] = useState<'loading' | 'error'>('loading');

  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    if (error || !token) {
      setStatus('error');
      setTimeout(() => {
        window.location.href = '/login?error=google_failed';
      }, 2000);
      return;
    }

    setTokenAndFetch(token)
      .then(() => {
        const returnUrl = searchParams.get('returnTo');
        const sessionReturnTo = typeof window !== 'undefined' ? sessionStorage.getItem('returnTo') : null;
        if (sessionReturnTo) {
          sessionStorage.removeItem('returnTo');
        }
        window.location.href = returnUrl ? decodeURIComponent(returnUrl) : (sessionReturnTo || '/');
      })
      .catch((e: any) => {
        setStatus('error');
        setTimeout(() => {
          window.location.href = '/login?error=google_failed';
        }, 2000);
      });
  }, [searchParams, setTokenAndFetch]);

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F7] dark:bg-[#0F0F0F]">
        <div className="text-center">
          <p className="text-red-600 font-['Inter',sans-serif] text-[15px]">
            Authentication failed. Redirecting…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F7] dark:bg-[#0F0F0F]">
      <div className="text-center space-y-4">
        <div className="w-10 h-10 border-4 border-[#7A4A2E] border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif] text-[14px]">
          Signing you in…
        </p>
      </div>
    </div>
  );
}
