'use client';

import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { Eye, EyeOff, Check } from 'lucide-react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
const BASE_URL = API_URL.endsWith('/api/v1') ? API_URL : `${API_URL}/api/v1`;

export default function ResetPassword() {
  const { language } = useThemeLanguage();
  const { isAuthenticated, isLoading } = useAuth();
  
  const [token, setToken] = useState('');
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get('token');
    if (urlToken) {
      setToken(urlToken);
    }
  }, []);

  useEffect(() => {
    setPasswordValid(formData.password.length >= 8);
  }, [formData.password]);

  if (isLoading || isAuthenticated) {
    if (isAuthenticated) {
      window.location.href = '/';
    }
    return (
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#7A4A2E] dark:border-[#4F7C6A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordValid) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      await axios.post(`${BASE_URL}/auth/reset-password`, {
        token,
        password: formData.password
      });
      setSuccess(true);
    } catch (err: any) {
      const data = err?.response?.data;
      setError(data?.message || 'Failed to reset password. Token may be invalid or expired.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <StoreNavbar cartCount={0} />

      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-12 px-4 flex items-center justify-center">
        <div className="w-full max-w-[420px]">
          <div className="text-center mb-8">
            <h1 className="text-[32px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
              Create New Password
            </h1>
            <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
              Please enter your new password below.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-8 border border-[#E5E5E5] dark:border-[#3A3A3A]">
            {!token ? (
              <div className="text-center py-4">
                <p className="text-red-500 font-['Inter',sans-serif] mb-4">Invalid or missing reset token.</p>
                <a href="/login" className="text-[#7A4A2E] dark:text-[#4F7C6A] hover:underline">Return to Login</a>
              </div>
            ) : success ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">Password Reset Successful</h3>
                <p className="text-[#6B6B6B] dark:text-[#9CA3AF] mb-6 text-[14px]">You can now login with your new password.</p>
                <a href="/login" className="w-full inline-block px-6 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[15px] hover:shadow-lg transition-all">
                  Go to Login
                </a>
              </div>
            ) : (
              <form onSubmit={handleReset} className="space-y-5">
                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    New Password
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
                  <div className="flex items-center gap-2 mt-2">
                    {passwordValid ? <Check className="w-3 h-3 text-[#4F7C6A]" /> : <div className="w-3 h-3" />}
                    <p className={`text-[11px] font-['Inter',sans-serif] ${passwordValid ? 'text-[#4F7C6A]' : 'text-[#6B6B6B] dark:text-[#9CA3AF]'}`}>
                      Min 8 characters
                    </p>
                  </div>
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    Confirm New Password
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={e => {
                      setFormData({ ...formData, confirmPassword: e.target.value });
                      setError('');
                    }}
                    required
                    placeholder="••••••••"
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
                  disabled={submitting || !passwordValid}
                  className="w-full px-6 py-3.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[15px] hover:shadow-lg transition-all font-['Inter',sans-serif] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Resetting...' : 'Reset Password'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <StoreFooter />
    </>
  );
}
