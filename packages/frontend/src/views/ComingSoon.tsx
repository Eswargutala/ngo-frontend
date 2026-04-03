'use client';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface ComingSoonProps {
  title: string;
  description?: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B1F1D] flex flex-col transition-colors duration-200">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-[#1E7A6E] dark:text-[#4FD1C5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
              />
            </svg>
          </div>
          <h1 className="text-[28px] font-bold text-[#111827] dark:text-[#F9FAFB] font-['Poppins',sans-serif] mb-3">
            {title}
          </h1>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] mb-8 leading-relaxed">
            {description || 'This page is currently being built. Check back soon for updates.'}
          </p>
          <a
            href="/"
            className="inline-block bg-[#1E7A6E] text-white px-6 py-2.5 rounded-lg hover:bg-[#176b60] transition-colors font-semibold text-[14px]"
          >
            Back to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
