import React from 'react';
import styled from 'styled-components';
import TabBar from './TabBar';
import TableView from './TableView';

interface DashboardContentProps {
  title?: string;
  isLoading?: boolean;
  hasError?: boolean;
}

/**
 * 대시보드 컨텐츠 컴포넌트
 * 탭바, 검색폼, 테이블 등을 포함한 메인 콘텐츠 영역
 */
function DashboardContent({ title = 'T/S PORT', isLoading = false, hasError = false }: DashboardContentProps) {
  return (
    <ContentContainer>
      <TabBar />
      <MainContent>
        <PortSection>
          <PortIcon src="https://c.animaapp.com/tZAM44r5/img/vessel.svg" alt="Port icon" />
          <PortTitle>{title}</PortTitle>
          <PortButtonActive>
            <ButtonText>KRPUS ABC</ButtonText>
          </PortButtonActive>
          <PortButtonInactive>
            <ButtonText>KRPUS DEF</ButtonText>
          </PortButtonInactive>
        </PortSection>
        
        <ActionContainer>
          <SearchSection>
            <SearchInputWrapper>
              <SearchInput placeholder="Search" />
              <SearchButton>
                <SearchIcon src="https://c.animaapp.com/tZAM44r5/img/magnifying-glass-1.svg" alt="Search" />
              </SearchButton>
            </SearchInputWrapper>
            <EtaLabel>ETA</EtaLabel>
            <DatePicker>
              <CalendarIcon src="https://c.animaapp.com/tZAM44r5/img/calendar.svg" alt="Calendar" />
              <DateText>2024. 12. 12 ~ 2024. 12. 12</DateText>
            </DatePicker>
          </SearchSection>
          
          <WorkflowSection>
            <WorkflowStep $active data-active="true">
              <StepText>Assign</StepText>
            </WorkflowStep>
            <WorkflowStep>
              <StepText>BKRQ</StepText>
            </WorkflowStep>
            <WorkflowStep>
              <StepText>LDPL</StepText>
            </WorkflowStep>
            <WorkflowStep>
              <StepText>Confirm</StepText>
            </WorkflowStep>
            <WorkflowStep>
              <StepText>S/O</StepText>
            </WorkflowStep>
            <WorkflowStep>
              <StepText>Loaded</StepText>
            </WorkflowStep>
          </WorkflowSection>
        </ActionContainer>
        
        <TotalSection>
          <TotalLabel>Total : 2,500</TotalLabel>
        </TotalSection>
        
        {isLoading ? (
          <LoadingIndicator>로딩 중...</LoadingIndicator>
        ) : hasError ? (
          <ErrorMessage>데이터를 불러오는 중 오류가 발생했습니다.</ErrorMessage>
        ) : (
          <TableContainer>
            <TableView />
          </TableContainer>
        )}
      </MainContent>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background-color: #f5f5f5;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 32px;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const PortSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PortIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const PortTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
`;

const PortButtonActive = styled.div`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  border-radius: 4px;
  background-color: #243844;
  cursor: pointer;
`;

const PortButtonInactive = styled.div`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(187, 192, 190, 0.2);
  cursor: pointer;
`;

const ButtonText = styled.div`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 12px;
  
  ${PortButtonInactive} & {
    color: #4b5763;
  }
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 200px;
  height: 36px;
  padding: 0 36px 0 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #243844;
  }
`;

const SearchButton = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const EtaLabel = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #4b5763;
  margin-left: 16px;
`;

const DatePicker = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  height: 36px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
`;

const CalendarIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const DateText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #4b5763;
`;

const WorkflowSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const WorkflowStep = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 24px;
  background-color: ${props => props.$active ? '#243844' : '#e0e0e0'};
  position: relative;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    right: -15px;
    top: 0;
    width: 0;
    height: 0;
    border-top: 18px solid transparent;
    border-bottom: 18px solid transparent;
    border-left: 15px solid ${props => props.$active ? '#243844' : '#e0e0e0'};
    z-index: 1;
  }
  
  &:not(:last-child) {
    margin-right: 15px;
  }
  
  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

const StepText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  
  ${WorkflowStep}:not([data-active="true"]) & {
    color: #4b5763;
  }
`;

const TotalSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const TotalLabel = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
`;

const TableContainer = styled.div`
  margin-top: 16px;
  background-color: #ffffff;
  border-radius: 4px;
  overflow: hidden;
`;

const LoadingIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #4b5763;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #f44336;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default DashboardContent; 