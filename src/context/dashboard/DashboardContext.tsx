import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DashboardContextProps {
  activeSidebarItem: string;
  setActiveSidebarItem: (item: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
  addSelectedItem: (item: string) => void;
  removeSelectedItem: (item: string) => void;
  clearSelectedItems: () => void;
}

// 기본 컨텍스트 값
const defaultContextValue: DashboardContextProps = {
  activeSidebarItem: 'home',
  setActiveSidebarItem: () => {},
  activeTab: 'all',
  setActiveTab: () => {},
  selectedItems: [],
  setSelectedItems: () => {},
  addSelectedItem: () => {},
  removeSelectedItem: () => {},
  clearSelectedItems: () => {},
};

// 컨텍스트 생성
const DashboardContext = createContext<DashboardContextProps>(defaultContextValue);

// 타입 정의
interface DashboardProviderProps {
  children: ReactNode;
}

/**
 * 대시보드 컨텍스트 제공자 컴포넌트
 * 대시보드 관련 상태 및 함수를 제공
 */
function DashboardProvider({ children }: DashboardProviderProps) {
  const [activeSidebarItem, setActiveSidebarItem] = useState<string>('home');
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // 선택 항목 추가
  const addSelectedItem = (item: string) => {
    setSelectedItems(prev => {
      if (prev.includes(item)) return prev;
      return [...prev, item];
    });
  };

  // 선택 항목 제거
  const removeSelectedItem = (item: string) => {
    setSelectedItems(prev => prev.filter(i => i !== item));
  };

  // 선택 항목 모두 제거
  const clearSelectedItems = () => {
    setSelectedItems([]);
  };

  // 제공할 컨텍스트 값
  const value = {
    activeSidebarItem,
    setActiveSidebarItem,
    activeTab,
    setActiveTab,
    selectedItems,
    setSelectedItems,
    addSelectedItem,
    removeSelectedItem,
    clearSelectedItems,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

/**
 * 대시보드 컨텍스트 사용 훅
 */
function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboardContext must be used within a DashboardProvider');
  }
  return context;
}

export { DashboardProvider, useDashboardContext }; 