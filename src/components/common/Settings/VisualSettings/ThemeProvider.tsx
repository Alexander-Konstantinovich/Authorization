import { createContext, useContext, useState } from "react";

interface ThemeContextType {
	currentTheme: Theme,
	toggleTheme: (newTheme: Theme) => void
}
type Theme = 'light' | 'dark'

const ThemeContext = createContext<ThemeContextType>({
	currentTheme: 'light',
	toggleTheme: () => {}
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  const toggleTheme = (newTheme: Theme) => {
    setCurrentTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);