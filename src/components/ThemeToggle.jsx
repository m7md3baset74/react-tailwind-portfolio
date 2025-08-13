import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { cn } from '@/lip/utils';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }else {
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    }
    }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
      }else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setIsDarkMode(true);
        }
      }
 
  return <>
  <button onClick={toggleTheme} className={cn(
    'fixed right-2 top-5 z-50 pt-11 rounded-full transition-colors duration-300',
    )}>
    {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300 hover:text-yellow-500'/> : 
    <Moon className='h-6 w-6 text-blue-900 hover:text-blue-700'/>}</button>
  
  </>
  
}

