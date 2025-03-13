import React, { useState } from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  placeholder: string;
  onSearch?: (query: string) => void;
}

/**
 * 검색 바 컴포넌트
 * 사용자가 리소스를 검색할 수 있는 입력 필드 제공
 */
function SearchBar({ placeholder, onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <SearchContainer>
      <SearchIconWrapper>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#9ea9b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="#9ea9b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </SearchIconWrapper>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  width: 480px;
  height: 40px;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  border: 1px solid rgba(31, 36, 49, 0.12);
  background-color: #ffffff;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #4b5763;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #9ea9b2;
  }
`;

export default SearchBar; 