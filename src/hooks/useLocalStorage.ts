import { useState, useEffect } from 'react';

/**
 * 로컬 스토리지에 상태를 저장하고 불러오는 커스텀 훅
 * @param key 로컬 스토리지에 저장할 키
 * @param initialValue 초기값
 * @returns [저장된 값, 값을 설정하는 함수]
 */
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  // 로컬 스토리지에서 값을 가져오거나 초기값을 사용
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

  // 상태 저장
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // 값을 로컬 스토리지와 상태에 저장하는 함수
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // 함수가 전달된 경우 이전 상태를 인자로 전달
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

  // 다른 탭에서 로컬 스토리지가 변경되면 동기화
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        setStoredValue(JSON.parse(event.newValue));
      }
    };

    // 이벤트 리스너 등록
    window.addEventListener('storage', handleStorageChange);
    
    // 클린업 함수
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}

export default useLocalStorage; 