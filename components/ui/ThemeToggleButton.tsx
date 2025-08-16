'use client'

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.Provider';

interface ThemeToggleButtonProps {
  className?: string;
}

export function ThemeToggleButton({ className = '' }: Readonly<ThemeToggleButtonProps>) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        inline-flex items-center justify-center
        p-2 rounded-lg
        bg-[#E1E0D3] dark:bg-[#152033] 
        text-[#0D1321] dark:text-[#F0EBD8]
        transition-colors duration-200
        focus:outline-gray-500 outline-[1px] outline-none cursor-pointer
        ${className}
      `}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  );
}

export default ThemeToggleButton;