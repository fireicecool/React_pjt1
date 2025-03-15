import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // 로컬 스토리지에서 초기값 불러오기
  const readValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  // 값을 로컬 스토리지에 저장하는 함수
  const setValue = (value: T) => {
    try {
      // 함수를 통해 값 업데이트 지원
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // 상태 업데이트
      setStoredValue(valueToStore);
      
      // 로컬 스토리지에 저장
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  // 첫 렌더링시 로컬 스토리지 동기화
  useEffect(() => {
    setStoredValue(readValue());
  }, []);

  // 다른 창/탭에서 발생하는 변경 사항을 감지
  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return [storedValue, setValue];
}

export default useLocalStorage; 