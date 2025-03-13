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
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <SearchIcon src="https://c.animaapp.com/tZAM44r5/img/frame.svg" alt="Search icon" />
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

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  opacity: 0.7;
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