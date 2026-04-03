'use client';

import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { supportTranslations } from '../translations/supportTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const { language } = useThemeLanguage();
  const { login, googleLogin, sendOtp, loginWithOtp, forgotPassword, isAuthenticated, isLoading, user } = useAuth();
  const t = (key: string) => supportTranslations[key]?.[language] || key;

  const [mode, setMode] = useState<'login' | 'otp-request' | 'otp-verify' | 'forgot-request'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', otp: '' });
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await login(formData.email, formData.password);
      // redirect handled by useEffect above after user state updates
    } catch (err: any) {
      const data = err?.response?.data;
      const msg = data?.errors?.[0]?.message || data?.message || 'Invalid credentials';
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await sendOtp(formData.email);
      setMode('otp-verify');
      setSuccessMsg('OTP has been sent to your email.');
    } catch (err: any) {
      const data = err?.response?.data;
      setError(data?.message || 'Failed to send OTP');
    } finally {
      setSubmitting(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await loginWithOtp(formData.email, formData.otp);
    } catch (err: any) {
      const data = err?.response?.data;
      setError(data?.message || 'Invalid OTP');
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setSubmitting(true);
    try {
      await forgotPassword(formData.email);
      setSuccessMsg('If an account exists, a reset link was sent to your email.');
    } catch (err: any) {
      const data = err?.response?.data;
      setError(data?.message || 'Failed to request reset');
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

  return (
    <>
      <StoreNavbar cartCount={0} />

      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-12 px-4 flex items-center justify-center">
        <div className="w-full max-w-[420px]">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[32px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
              {t('login.title')}
            </h1>
            <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
              {t('login.subtitle')}
            </p>
          </div>

          {/* Login Form */}
          {mode === 'login' && (
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-8 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              {/* Google Login moved below the form */}


              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('login.email')}
                  </label>
                  <input
                    type="text"
                    value={formData.email}
                    onChange={e => {
                      setFormData({ ...formData, email: e.target.value });
                      setError('');
                    }}
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
                      onChange={e => {
                        setFormData({ ...formData, password: e.target.value });
                        setError('');
                      }}
                      required
                      placeholder="••••••••"
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
                </div>

                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('forgot-request');
                      setError('');
                      setSuccessMsg('');
                    }}
                    className="text-[12px] text-[#7A4A2E] dark:text-[#4F7C6A] hover:underline font-['Inter',sans-serif]"
                  >
                    {t('login.forgotPassword')}
                  </button>
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
                  {submitting ? 'Signing in…' : t('login.button')}
                </button>
              </form>

              <>
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 border-t border-[#E5E5E5] dark:border-[#3A3A3A]" />
                  <span className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                    {t('login.or')}
                  </span>
                  <div className="flex-1 border-t border-[#E5E5E5] dark:border-[#3A3A3A]" />
                </div>

                <button
                  type="button"
                  onClick={googleLogin}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] hover:bg-gray-50 dark:hover:bg-[#222] transition-all font-['Inter',sans-serif] mb-4"
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
                  Continue with Google
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMode('otp-request');
                    setError('');
                    setSuccessMsg('');
                  }}
                  className="w-full px-6 py-3 bg-white dark:bg-[#0F0F0F] text-[#7A4A2E] dark:text-[#4F7C6A] border-2 border-[#7A4A2E] dark:border-[#4F7C6A] rounded-lg font-semibold text-[14px] hover:bg-[#7A4A2E] hover:text-white dark:hover:bg-[#4F7C6A] dark:hover:text-white transition-all font-['Inter',sans-serif]"
                >
                  {t('login.otpLogin')}
                </button>

                <p className="text-[13px] text-center text-[#6B6B6B] dark:text-[#9CA3AF] mt-6 font-['Inter',sans-serif]">
                  {t('login.noAccount')}{' '}
                  <a
                    href="/signup"
                    className="text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold hover:underline"
                  >
                    {t('login.signup')}
                  </a>
                </p>
              </>
            </div>
          )}

          {mode === 'otp-request' && (
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-8 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <button
                onClick={() => setMode('login')}
                className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] mb-4 font-['Inter',sans-serif]"
              >
                ← Back to login
              </button>
              <form onSubmit={handleSendOtp} className="space-y-5">
                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('login.email')}
                  </label>
                  <input
                    type="text"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
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
                  {submitting ? 'Sending...' : 'Send OTP'}
                </button>
              </form>
            </div>
          )}

          {mode === 'otp-verify' && (
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-8 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <button
                onClick={() => setMode('login')}
                className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] mb-4 font-['Inter',sans-serif]"
              >
                ← Back to login
              </button>

              {successMsg && (
                <div className="px-4 py-3 mb-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-[13px] text-green-600 dark:text-green-400 font-['Inter',sans-serif]">
                    {successMsg}
                  </p>
                </div>
              )}

              <form onSubmit={handleVerifyOtp} className="space-y-5">
                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    value={formData.otp}
                    onChange={e => setFormData({ ...formData, otp: e.target.value })}
                    required
                    placeholder="123456"
                    maxLength={6}
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                  <p className="text-[11px] text-[#6B6B6B] dark:text-[#9CA3AF] mt-2 font-['Inter',sans-serif]">
                    OTP sent to your email
                  </p>
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
                  {submitting ? 'Verifying...' : 'Verify & Login'}
                </button>

                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="text-[12px] text-[#7A4A2E] dark:text-[#4F7C6A] hover:underline font-['Inter',sans-serif] w-full"
                >
                  Resend OTP
                </button>
              </form>
            </div>
          )}

          {mode === 'forgot-request' && (
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-8 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <button
                onClick={() => setMode('login')}
                className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] mb-4 font-['Inter',sans-serif]"
              >
                ← Back to login
              </button>

              <h2 className="text-[20px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Inter',sans-serif]">
                Reset Password
              </h2>

              {successMsg ? (
                <div className="px-4 py-3 mb-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-[13px] text-green-600 dark:text-green-400 font-['Inter',sans-serif]">
                    {successMsg}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleForgotPassword} className="space-y-5">
                  <div>
                    <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                      {t('login.email')}
                    </label>
                    <input
                      type="text"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                    />
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
                    {submitting ? 'Requesting...' : 'Send Reset Link'}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>

      <StoreFooter />
    </>
  );
}
