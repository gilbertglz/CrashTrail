import React, { createContext, useState, useContext, ReactNode } from 'react';
import { lightColors, darkColors } from '../constants/colors'; // Import themes

interface ThemeContextType {
  theme: typeof lightColors | typeof darkColors;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(darkColors);

  const toggleTheme = () => {
    setTheme( darkColors);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
