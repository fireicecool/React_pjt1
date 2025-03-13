import React, { useState } from 'react';
import styled from 'styled-components';

interface DateRange {
  startDate: string;
  endDate: string;
}

interface SearchFormProps {
  onSearch?: (params: { term: string; dateRange: DateRange }) => void;
}

/**
 * 검색 폼 컴포넌트
 * 키워드 검색 및 날짜 범위 선택 기능 제공
 */
function SearchForm({ onSearch }: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: '2024-12-12',
    endDate: '2024-12-12'
  });

  // 검색 submit 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ term: searchTerm, dateRange });
    }
  };

  // 검색어 변경 핸들러
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchFormContainer>
      <FormComponent>
        <FormWrapper>
          <InputBox>
            <SearchInputWrapper>
              <SearchPlaceholder 
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <SearchIcon src="https://c.animaapp.com/tZAM44r5/img/magnifying-glass-1.svg" alt="Search" />
            </SearchInputWrapper>
            
            <Divider src="https://c.animaapp.com/tZAM44r5/img/line-393.svg" alt="Divider" />
            
            <DatePickerWrapper>
              <DateLabel>ETA</DateLabel>
              <DateSelector>
                <CalendarIcon src="https://c.animaapp.com/tZAM44r5/img/calendar.svg" alt="Calendar" />
                <DatePickerContent>
                  <DateRangeText>
                    <DateText>{dateRange.startDate}</DateText>
                    <DateSeparator>~</DateSeparator>
                    <DateText>{dateRange.endDate}</DateText>
                  </DateRangeText>
                </DatePickerContent>
              </DateSelector>
            </DatePickerWrapper>
          </InputBox>
          
          <FormButtons>
            <SearchButton type="submit" onClick={handleSubmit}>
              검색
            </SearchButton>
            <ResetButton type="button" onClick={() => {
              setSearchTerm('');
              setDateRange({
                startDate: '2024-12-12',
                endDate: '2024-12-12'
              });
            }}>
              초기화
            </ResetButton>
          </FormButtons>
        </FormWrapper>
      </FormComponent>
    </SearchFormContainer>
  );
}

const SearchFormContainer = styled.div`
  margin-bottom: 16px;
`;

const FormComponent = styled.div`
  position: relative;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #ececec;
  background-color: #ffffff;
  padding: 0 12px;
  height: 48px;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;
`;

const SearchPlaceholder = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-family: 'Roboto', Helvetica;
  font-size: 14px;
  color: #4b5763;
  
  &::placeholder {
    color: #bbc0be;
  }
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Divider = styled.img`
  height: 24px;
  margin: 0 12px;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DateLabel = styled.div`
  color: #4b5763;
  font-family: 'Roboto', Helvetica;
  font-weight: 400;
  font-size: 14px;
`;

const DateSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const CalendarIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const DatePickerContent = styled.div`
  display: flex;
  align-items: center;
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

const FormButtons = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
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

const SearchButton = styled(Button)`
  background-color: #243844;
  color: #ffffff;
  border: none;
  
  &:hover {
    background-color: #1a2a34;
  }
`;

const ResetButton = styled(Button)`
  background-color: transparent;
  color: #4b5763;
  border: 1px solid #ececec;
  
  &:hover {
    background-color: #f9f9f9;
  }
`;

export default SearchForm; 