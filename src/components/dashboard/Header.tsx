import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

interface HeaderProps {
  searchPlaceholder: string;
}

/**
 * 헤더 컴포넌트
 * 로고, 검색바, 사용자 메뉴를 포함
 * 검색 및 사용자 메뉴 아이콘을 포함
 */
function Header({ searchPlaceholder }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoImage src="https://c.animaapp.com/tZAM44r5/img/---icon--heart-@2x.png" alt="Logo" />
        <SearchBar placeholder={searchPlaceholder} />
        <HeaderMenuBox>
          <ButtonTypeA>
            <LeftBox>
              <IconImage src="https://c.animaapp.com/tZAM44r5/img/frame-2608566.svg" alt="Notification" />
            </LeftBox>
          </ButtonTypeA>
          <Badge />
          <ButtonTypeA>
            <AvatarWrapper>
              <IconImage src="https://c.animaapp.com/tZAM44r5/img/avatar.svg" alt="User avatar" />
            </AvatarWrapper>
          </ButtonTypeA>
        </HeaderMenuBox>
      </HeaderContent>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: inline-flex;
  height: 60px;
  align-items: flex-start;
  position: relative;
  z-index: 1;
  width: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 14px 0 rgba(36, 56, 68, 0.05);
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
`;

const HeaderMenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ButtonTypeA = styled.button`
  background: none;
  border: none;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(36, 56, 68, 0.04);
    border-radius: 4px;
  }
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Badge = styled.div`
  width: 8px;
  height: 8px;
  background-color: #f44336;
  border-radius: 50%;
  position: relative;
  right: 12px;
  top: -8px;
`;

export default Header; 