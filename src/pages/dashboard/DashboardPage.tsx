import React from 'react';
import styled from 'styled-components';
import Header from '../../components/dashboard/Header';
import Sidebar from '../../components/dashboard/Sidebar';
import DashboardContent from '../../components/dashboard/DashboardContent';
import { useDashboardData } from '../../hooks/dashboard/useDashboardData';
import { DashboardProvider } from '../../context/dashboard/DashboardContext';

interface DashboardPageProps {
  pageTitle?: string;
}

/**
 * 대시보드 페이지 컴포넌트
 * 헤더, 사이드바, 메인 콘텐츠로 구성됨
 */
function DashboardPage({ pageTitle = '대시보드' }: DashboardPageProps) {
  const { loading, error } = useDashboardData();

  return (
    <DashboardProvider>
      <DashboardContainer>
        <Header searchPlaceholder="Search resources..." />
        <MainContent>
          <Sidebar />
          <DashboardContent 
            title={pageTitle}
            isLoading={loading}
            hasError={!!error}
          />
        </MainContent>
      </DashboardContainer>
    </DashboardProvider>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: flex-start;
  position: relative;
  background-color: #ffffff;
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

export default DashboardPage; 