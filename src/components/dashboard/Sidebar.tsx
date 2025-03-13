import React, { useState } from 'react';
import styled from 'styled-components';
import { useDashboardContext } from '../../context/dashboard/DashboardContext';

/**
 * 사이드바 컴포넌트
 * 대시보드 내비게이션 메뉴 제공
 */
function Sidebar() {
  const { activeSidebarItem, setActiveSidebarItem } = useDashboardContext();
  const [expanded, setExpanded] = useState(false);

  const handleItemClick = (itemId: string) => {
    setActiveSidebarItem(itemId);
  };

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <SidebarContainer $expanded={expanded}>
      <SidebarMain>
        <Avatar>
          <AvatarGroup>
            <UserLargeAvatar>
              <UserAvatarInner />
            </UserLargeAvatar>
          </AvatarGroup>
        </Avatar>
        <Divider />
        
        <ButtonGroup>
          <SidebarButton 
            $active={activeSidebarItem === 'home'}
            onClick={() => handleItemClick('home')}
          >
            <IconImage 
              src="/img/icon.svg" 
              alt="Home" 
              $active={activeSidebarItem === 'home'} 
            />
          </SidebarButton>
          
          <SidebarButton 
            $active={activeSidebarItem === 'stats'}
            onClick={() => handleItemClick('stats')}
          >
            <IconImage 
              src="/img/vector-1.svg" 
              alt="Statistics" 
              $active={activeSidebarItem === 'stats'} 
            />
          </SidebarButton>
        </ButtonGroup>
        
        <Divider />
        
        <ButtonGroup>
          <SidebarDropdownButton 
            $active={activeSidebarItem === 'storage'}
            onClick={() => handleItemClick('storage')}
          >
            <IconImage 
              src="/img/container-storage.svg" 
              alt="Container Storage" 
              $active={activeSidebarItem === 'storage'} 
            />
          </SidebarDropdownButton>
          
          <SidebarDropdownButton 
            $active={activeSidebarItem === 'frame'}
            onClick={() => handleItemClick('frame')}
          >
            <IconImage 
              src="/img/frame-2608566.svg" 
              alt="Frame" 
              $active={activeSidebarItem === 'frame'} 
            />
          </SidebarDropdownButton>
          
          <SidebarDropdownButton 
            $active={activeSidebarItem === 'port'}
            onClick={() => handleItemClick('port')}
          >
            <IconImage 
              src="/img/port.svg" 
              alt="Port" 
              $active={activeSidebarItem === 'port'} 
            />
          </SidebarDropdownButton>
          
          <SidebarDropdownButton 
            $active={activeSidebarItem === 'services'}
            onClick={() => handleItemClick('services')}
          >
            <IconImage 
              src="/img/services.svg" 
              alt="Services" 
              $active={activeSidebarItem === 'services'} 
            />
          </SidebarDropdownButton>
          
          <SidebarDropdownButton 
            $active={activeSidebarItem === 'stowages'}
            onClick={() => handleItemClick('stowages')}
          >
            <IconImage 
              src="/img/stowages.svg" 
              alt="Stowages" 
              $active={activeSidebarItem === 'stowages'} 
            />
          </SidebarDropdownButton>
          
          <SidebarButton 
            $active={activeSidebarItem === 'frame2'}
            onClick={() => handleItemClick('frame2')}
          >
            <IconImage 
              src="/img/vector-2.svg" 
              alt="Frame 2" 
              $active={activeSidebarItem === 'frame2'} 
            />
          </SidebarButton>
          
          <SidebarButton 
            $active={activeSidebarItem === 'icon1'}
            onClick={() => handleItemClick('icon1')}
          >
            <IconImage 
              src="/img/icon-1.svg" 
              alt="Computer" 
              $active={activeSidebarItem === 'icon1'} 
            />
          </SidebarButton>
        </ButtonGroup>
      </SidebarMain>
      
      <ToggleButton onClick={toggleSidebar}>
        <IconImage 
          src="/img/chevrons-right.svg" 
          alt="Toggle" 
          style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
        />
      </ToggleButton>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div<{ $expanded?: boolean }>`
  width: ${props => props.$expanded ? '240px' : '60px'};
  height: calc(100vh - 60px); /* 헤더 높이 제외 */
  background-color: #ffffff;
  box-shadow: 2px 0 14px 0 rgba(36, 56, 68, 0.05);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease;
`;

const SidebarMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  gap: 16px;
  overflow-y: auto;
  flex: 1;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;

const AvatarGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserLargeAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #4b5763;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserAvatarInner = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #f9f9f9;
  opacity: 0.3;
`;

const Divider = styled.div`
  width: 40px;
  height: 1px;
  background-color: #e9ecef;
  margin: 4px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const SidebarButton = styled.button<{ $active?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: ${props => props.$active ? '#f8f9fa' : 'transparent'};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

const SidebarDropdownButton = styled(SidebarButton)`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${props => props.$active ? '#1a73e8' : 'transparent'};
    display: block;
  }
`;

const IconImage = styled.img<{ $active?: boolean }>`
  width: 20px;
  height: 20px;
  filter: ${props => props.$active ? 'invert(42%) sepia(94%) saturate(2069%) hue-rotate(205deg) brightness(96%) contrast(98%)' : 'none'};
  transition: filter 0.2s;
`;

const ToggleButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 8px auto;
  border-radius: 4px;
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  img {
    transition: transform 0.3s ease;
  }
`;

export default Sidebar; 