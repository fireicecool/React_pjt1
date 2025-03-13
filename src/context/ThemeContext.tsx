import React, { createContext, useState, useContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// 테마 타입 정의
type Theme = 'light' | 'dark';

// 컨텍스트 타입 정의
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 초기 컨텍스트 값
const initialContext: ThemeContextType = {
  theme: 'light',
  toggleTheme: () => {},
};

// 테마 컨텍스트 생성
const ThemeContext = createContext<ThemeContextType>(initialContext);

// 컨텍스트 사용을 위한 훅
export const useTheme = () => useContext(ThemeContext);

// 테마 제공자 props 타입
interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * 테마 제공자 컴포넌트
 * 애플리케이션에 테마 관련 상태와 함수를 제공
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // 로컬 스토리지에 테마 저장
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light');

  // 테마 토글 함수
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 컨텍스트 값
  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 