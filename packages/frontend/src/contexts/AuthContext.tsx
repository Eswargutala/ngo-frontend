'use client';

import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
const BASE_URL = API_URL.endsWith('/api/v1') ? API_URL : `${API_URL}/api/v1`;

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send/receive httpOnly refresh-token cookie
});

// Attach access token to every request
api.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// On 401 try to silently refresh once
api.interceptors.response.use(
  res => res,
  async error => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      try {
        const { data } = await axios.post(
          `${BASE_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        );
        localStorage.setItem('accessToken', data.accessToken);
        original.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(original);
      } catch {
        localStorage.removeItem('accessToken');
      }
    }
    return Promise.reject(error);
  }
);

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string | null;
  emailVerified: boolean;
  phone?: string;
  // convenience shim so existing views don't break
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (emailOrPhone: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  googleLogin: () => void;
  setTokenAndFetch: (token: string) => Promise<void>;
  sendOtp: (email: string) => Promise<void>;
  loginWithOtp: (email: string, otp: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMe = useCallback(async () => {
    try {
      const { data } = await api.get('/auth/me');
      setUser({ ...data.user, isAdmin: data.user.role === 'ADMIN' || data.user.role === 'admin' });
    } catch {
      setUser(null);
      localStorage.removeItem('accessToken');
    }
  }, []);

  useEffect(() => {
    // Always attempt to restore session — the 401 interceptor will silently
    // use the httpOnly refresh-token cookie even when no access token exists
    // in localStorage (e.g. after the 15-min access token expired and was cleared).
    fetchMe().finally(() => setIsLoading(false));
  }, [fetchMe]);

  // Proactively refresh the access token every 13 min so it never expires
  // while the admin is actively using the panel.
  useEffect(() => {
    if (!user) return;
    const id = setInterval(
      async () => {
        try {
          const { data } = await axios.post(
            `${BASE_URL}/auth/refresh`,
            {},
            { withCredentials: true }
          );
          localStorage.setItem('accessToken', data.accessToken);
        } catch {
          // Refresh failed (e.g. cookie expired) — next API call will handle it
        }
      },
      13 * 60 * 1000
    ); // 13 minutes
    return () => clearInterval(id);
  }, [user]);

  const login = async (email: string, password: string) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('accessToken', data.accessToken);
    setUser({ ...data.user, isAdmin: data.user.role === 'ADMIN' || data.user.role === 'admin' });
  };

  const sendOtp = async (email: string) => {
    await api.post('/auth/send-otp', { email });
  };

  const loginWithOtp = async (email: string, otp: string) => {
    const { data } = await api.post('/auth/verify-otp', { email, otp });
    localStorage.setItem('accessToken', data.accessToken);
    setUser({ ...data.user, isAdmin: data.user.role === 'ADMIN' || data.user.role === 'admin' });
  };

  const forgotPassword = async (email: string) => {
    await api.post('/auth/forgot-password', { email });
  };

  const register = async (name: string, email: string, password: string) => {
    const { data } = await api.post('/auth/register', { name, email, password });
    // We do NOT log the user in immediately. They need to verify their email.
    return data;
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch {
      /* ignore */
    }
    localStorage.removeItem('accessToken');
    setUser(null);
  };

  const googleLogin = () => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname + window.location.search;
      // Do not store '/login' or '/signup' as the return path, fallback to '/'
      if (!currentPath.includes('/login') && !currentPath.includes('/signup')) {
        sessionStorage.setItem('returnTo', currentPath);
      }
    }
    window.location.href = `${BASE_URL}/auth/google`;
  };

  /** Called by the /auth/callback page after Google redirect */
  const setTokenAndFetch = async (token: string) => {
    localStorage.setItem('accessToken', token);
    await fetchMe();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        googleLogin,
        setTokenAndFetch,        sendOtp,
        loginWithOtp,
        forgotPassword,        isAuthenticated: user !== null,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}

export { api };
