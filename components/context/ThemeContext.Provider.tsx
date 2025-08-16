'use client'

import React, { createContext, useState, ReactNode } from 'react';

// Define the theme type
type Theme = 'light' | 'dark';

// Define the context value type
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create context with undefined as default (will be provided by ThemeProvider)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define props type for ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = React.useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={`${theme}`} >{children}</div>
      
    </ThemeContext.Provider>
  );
}

// Custom hook for using theme context
export function useTheme(): ThemeContextType {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeContext;