import React, { useState } from 'react';
import styled from 'styled-components';

interface DateRangePickerProps {
  onChange: (range: [Date | null, Date | null]) => void;
  initialRange?: [Date | null, Date | null];
}

/**
 * 날짜 범위 선택 컴포넌트
 * 시작일과 종료일을 선택할 수 있는 UI 제공
 */
function DateRangePicker({ onChange, initialRange = [null, null] }: DateRangePickerProps) {
  const [range, setRange] = useState<[Date | null, Date | null]>(initialRange);
  const [isOpen, setIsOpen] = useState(false);

  // 실제 구현에서는 캘린더 UI를 표시하고 날짜 선택 처리를 구현
  // 여기서는 간단히 텍스트로만 표시
  
  // 날짜 포맷 함수
  const formatDate = (date: Date | null): string => {
    if (!date) return 'YYYY-MM-DD';
    return date.toISOString().split('T')[0];
  };

  // 드롭다운 토글
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DateRangeContainer onClick={toggleDropdown}>
      <DateRangeText>
        <DateText>{formatDate(range[0])}</DateText>
        <DateSeparator>~</DateSeparator>
        <DateText>{formatDate(range[1])}</DateText>
      </DateRangeText>
      
      {isOpen && (
        <CalendarDropdown>
          <DropdownContent>
            {/* 실제 구현에서는 캘린더 UI가 여기에 들어갑니다 */}
            <CalendarMessage>날짜 선택 UI는 실제 구현 시 캘린더 라이브러리 사용</CalendarMessage>
            
            <ButtonGroup>
              <ApplyButton onClick={(e) => {
                e.stopPropagation();
                // 예시: 오늘과 7일 후 날짜로 설정
                const today = new Date();
                const nextWeek = new Date();
                nextWeek.setDate(today.getDate() + 7);
                
                const newRange: [Date, Date] = [today, nextWeek];
                setRange(newRange);
                onChange(newRange);
                setIsOpen(false);
              }}>
                적용
              </ApplyButton>
              
              <CancelButton onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}>
                취소
              </CancelButton>
            </ButtonGroup>
          </DropdownContent>
        </CalendarDropdown>
      )}
    </DateRangeContainer>
  );
}

const DateRangeContainer = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const DateRangeText = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const DateText = styled.div`
  color: #4b5763;
  font-family: 'Roboto', Helvetica;
  font-weight: 400;
  font-size: 14px;
`;

const DateSeparator = styled.div`
  color: #4b5763;
  font-family: 'Roboto', Helvetica;
  font-weight: 400;
  font-size: 14px;
`;

const CalendarDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 280px;
  z-index: 10;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const CalendarMessage = styled.div`
  padding: 20px 0;
  text-align: center;
  color: #4b5763;
  font-family: 'Roboto', Helvetica;
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-family: 'Roboto', Helvetica;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
`;

const ApplyButton = styled(Button)`
  background-color: #243844;
  color: #ffffff;
  border: none;
  
  &:hover {
    background-color: #1a2a34;
  }
`;

const CancelButton = styled(Button)`
  background-color: transparent;
  color: #4b5763;
  border: 1px solid #ececec;
  
  &:hover {
    background-color: #f9f9f9;
  }
`;

export default DateRangePicker; 