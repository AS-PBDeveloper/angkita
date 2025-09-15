import { useEffect } from 'react';
import { useDarkContext } from '../Contexts/DarkModeContext';

const ThemeManager = () => {
  const { mode } = useDarkContext();

  useEffect(() => {
    const htmlElement = document.documentElement;
    
    if (mode) {
      // Dark mode
      htmlElement.setAttribute('data-theme', 'dark');
    } else {
      // Light mode
      htmlElement.removeAttribute('data-theme');
    }
  }, [mode]);

  // This component doesn't render anything
  return null;
};

export default ThemeManager;