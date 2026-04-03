'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
const BASE_URL = API_URL.endsWith('/api/v1') ? API_URL : `${API_URL}/api/v1`;

export default function VerifyEmail() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      setStatus('error');
      return;
    }

    axios.post(`${BASE_URL}/auth/verify-email`, { token })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'));
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F7] dark:bg-[#0F0F0F]">
      <div className="p-8 bg-white dark:bg-[#1A1A1A] shadow rounded-lg max-w-md w-full text-center">
        {status === 'loading' && <p>Verifying your email...</p>}
        {status === 'success' && (
          <>
            <h2 className="text-2xl font-bold text-green-600 mb-4">Email Verified!</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">You can now use your account seamlessly.</p>
            <a href="/login" className="px-4 py-2 bg-[#7A4A2E] text-white rounded hover:bg-[#633a23] transition-colors">Go to Login</a>
          </>
        )}
        {status === 'error' && (
          <>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Verification Failed</h2>
            <p className="text-gray-600 dark:text-gray-300">The link is invalid or has expired.</p>
          </>
        )}
      </div>
    </div>
  );
}