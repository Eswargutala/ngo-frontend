'use client';

import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { supportTranslations } from '../translations/supportTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { Eye, EyeOff, Check } from 'lucide-react';

export default function Signup() {
  const { language } = useThemeLanguage();
  const { register, googleLogin, isAuthenticated, isLoading, user } = useAuth();
  const t = (key: any) => supportTranslations[key]?.[language] || key;

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [passwordValid, setPasswordValid] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const returnTo = new URLSearchParams(window.location.search).get('returnTo');
      const sessionReturnTo = sessionStorage.getItem('returnTo');
      if (sessionReturnTo) sessionStorage.removeItem('returnTo');
      
      window.location.href = user?.isAdmin ? '/admin' : (returnTo || sessionReturnTo || '/');
    }
  }, [isAuthenticated, isLoading, user]);

  useEffect(() => {
    setPasswordValid(formData.password.length >= 8);
  }, [formData.password]);

const [verificationSent, setVerificationSent] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const returnTo = urlParams.get('returnTo');
    if (returnTo) {
      sessionStorage.setItem('returnTo', returnTo);
    }
  }, []);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordValid) {
      setError('Password must be at least 8 characters');
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      await register(formData.name, formData.email, formData.password);
      setVerificationSent(true);
    } catch (err: any) {
      const data = err?.response?.data;
      const msg = data?.errors?.[0]?.message || data?.message || 'Registration failed. Please try again.';
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoading || isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#7A4A2E] dark:border-[#4F7C6A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (verificationSent) {
    return (
      <>
        <StoreNavbar cartCount={0} />
        <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-12 px-4 flex items-center justify-center">
          <div className="w-full max-w-[420px] text-center bg-white dark:bg-[#1A1A1A] p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4">Check Your Email</h2>
            <p className="text-[#6B6B6B] dark:text-[#9CA3AF] mb-6">
              We've sent a verification link to <strong>{formData.email}</strong>. Please check your inbox and confirm your email to sign in.
            </p>
            <a href="/login" className="inline-block py-2 px-6 bg-[#7A4A2E] text-white rounded-lg text-sm font-medium hover:bg-[#633a23] transition-colors">
              Go to Login
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <StoreNavbar cartCount={0} />

      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-12 px-4 flex items-center justify-center">
        <div className="w-full max-w-[420px]">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[32px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
              {t('signup.title')}
            </h1>
            <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
              Join us in supporting women artisans
            </p>
          </div>

          {/* Signup Form */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-8 border border-[#E5E5E5] dark:border-[#3A3A3A]">
            <form onSubmit={handleSignup} className="space-y-5">
              <div>
                <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                  {t('signup.fullName')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                />
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                  {t('login.email')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                />
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                  {t('login.password')}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                    required
                    placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A] pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {passwordValid ? (
                    <Check className="w-3 h-3 text-[#4F7C6A]" />
                  ) : (
                    <div className="w-3 h-3" />
                  )}
                  <p
                    className={`text-[11px] font-['Inter',sans-serif] ${passwordValid ? 'text-[#4F7C6A]' : 'text-[#6B6B6B] dark:text-[#9CA3AF]'}`}
                  >
                    {t('signup.passwordHelper')}
                  </p>
                </div>
              </div>

              {error && (
                <div className="px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-[13px] text-red-600 dark:text-red-400 font-['Inter',sans-serif]">
                    {error}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-3.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[15px] hover:shadow-lg transition-all font-['Inter',sans-serif] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Creating accountâ€¦' : t('signup.button')}
              </button>

              <p className="text-[11px] text-center text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                {t('signup.terms')}
              </p>
            </form>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 border-t border-[#E5E5E5] dark:border-[#3A3A3A]" />
              <span className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                or
              </span>
              <div className="flex-1 border-t border-[#E5E5E5] dark:border-[#3A3A3A]" />
            </div>

            <button
              type="button"
              onClick={googleLogin}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] hover:bg-gray-50 dark:hover:bg-[#222] transition-all font-['Inter',sans-serif] mb-6"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path
                  fill="#4285F4"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 29.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                />
                <path
                  fill="#34A853"
                  d="M6.3 14.7l7 5.1C15 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2c-7.6 0-14.2 4.1-17.7 10.2z"
                  transform="translate(0,1)"
                />
                <path
                  fill="#FBBC05"
                  d="M24 46c5.4 0 10.3-1.8 14.1-4.9l-6.5-5.3C29.6 37.5 27 38.5 24 38.5c-5 0-9.3-3.4-10.8-8l-7 5.4C9.7 41.8 16.5 46 24 46z"
                  transform="translate(0,-1)"
                />
                <path
                  fill="#EA4335"
                  d="M44.5 20H24v8.5h11.8c-.8 2.2-2.1 4-3.8 5.3l6.5 5.3c3.8-3.6 6-8.8 6-15.1 0-1.3-.2-2.7-.5-4z"
                  transform="translate(0,0)"
                />
              </svg>
              Sign up with Google
            </button>

            {/* Login Link */}
            <p className="text-[13px] text-center text-[#6B6B6B] dark:text-[#9CA3AF] mt-6 font-['Inter',sans-serif]">
              {t('signup.hasAccount')}{' '}
              <a
                href="/login"
                className="text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold hover:underline"
              >
                {t('signup.login')}
              </a>
            </p>
          </div>
        </div>
      </div>

      <StoreFooter />
    </>
  );
}
