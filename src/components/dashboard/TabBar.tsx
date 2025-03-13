import React from 'react';
import styled from 'styled-components';
import { useDashboardContext } from '../../context/dashboard/DashboardContext';

/**
 * 대시보드 탭 바 컴포넌트
 * 서비스 카테고리별 탭 전환 기능 제공
 */
function TabBar() {
  const { activeTab, setActiveTab } = useDashboardContext();

  return (
    <TabBarContainer>
      <Tab 
        $active={activeTab === 'ts-management'}
        onClick={() => setActiveTab('ts-management')}
        $darkBackground
      >
        <TabIcon src="https://c.animaapp.com/tZAM44r5/img/vector.svg" alt="T/S Management icon" />
        <TabText $active={true} $white>T/S Management</TabText>
      </Tab>
      
      <Tab 
        $active={activeTab === 'service-allocation'}
        onClick={() => setActiveTab('service-allocation')}
      >
        <TabIcon src="https://c.animaapp.com/tZAM44r5/img/arrow-progress.svg" alt="Service allocation icon" />
        <TabText $active={false}>Service Allocation</TabText>
        <CloseIcon src="https://c.animaapp.com/tZAM44r5/img/xmark-1.svg" alt="Close" />
      </Tab>
    </TabBarContainer>
  );
}

const TabBarContainer = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
  align-self: stretch;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
`;

const Tab = styled.div<{ $active?: boolean; $darkBackground?: boolean }>`
  display: flex;
  height: 36px;
  padding: 0px 16px;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background-color: ${props => props.$darkBackground ? '#243844' : '#ffffff'};
  border-right: 1px solid #e0e0e0;
`;

const TabIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const TabText = styled.div<{ $active?: boolean; $white?: boolean }>`
  color: ${props => props.$white ? '#ffffff' : '#4b5763'};
  font-family: 'Roboto', Helvetica;
  font-weight: ${props => props.$active ? '600' : '400'};
  font-size: 14px;
  line-height: normal;
`;

const CloseIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 8px;
`;

export default TabBar; 