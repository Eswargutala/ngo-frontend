'use client';

import { ThemeLanguageProvider } from '../contexts/ThemeLanguageContext';
import { AuthProvider } from '../contexts/AuthContext';
import { StoreDataProvider } from '../contexts/StoreDataContext';
import ThemeLanguagePopup from '../components/ThemeLanguagePopup';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeLanguageProvider>
      <AuthProvider>
        <StoreDataProvider>
          {children}
          <ThemeLanguagePopup />
        </StoreDataProvider>
      </AuthProvider>
    </ThemeLanguageProvider>
  );
}
