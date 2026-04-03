'use client';

import React, { useState, useEffect } from 'react';
import { useThemeLanguage, languageNames } from '../contexts/ThemeLanguageContext';
import { X } from 'lucide-react';

export default function ThemeLanguagePopup() {
  const { theme, toggleTheme, language, setLanguage } = useThemeLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;

    // Check if we've already shown the popup in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenThemeLanguagePopup');
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      // Hide popup automatically after 15 seconds
      hideTimer = setTimeout(() => {
        closePopup();
      }, 16000);
    }
    
    // Always return a cleanup function to satisfy TypeScript strict mode
    return () => {
      if (showTimer) clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenThemeLanguagePopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-5 w-80 md:w-96 animate-fade-in-up">
      <button 
        onClick={closePopup}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        aria-label="Close popup"
      >
        <X size={20} />
      </button>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pr-6">
        Customize Your Experience
      </h3>
      
      <div className="space-y-4">
        {/* Theme Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode?
          </span>
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
        
        <hr className="border-gray-200 dark:border-gray-700" />
        
        {/* Language Selection */}
        <div>
          <label htmlFor="popup-lang-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Change Language:
          </label>
          <select
            id="popup-lang-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            {Object.entries(languageNames).map(([langCode, langName]) => (
              <option key={langCode} value={langCode}>
                {langName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}