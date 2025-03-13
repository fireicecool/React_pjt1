import React from 'react';
import styled from 'styled-components';
import { useDashboardContext } from '../../context/dashboard/DashboardContext';

/**
 * 사이드바 컴포넌트
 * 대시보드 내비게이션 메뉴 제공
 */
function Sidebar() {
  const { activeSidebarItem, setActiveSidebarItem } = useDashboardContext();

  const handleItemClick = (itemId: string) => {
    setActiveSidebarItem(itemId);
  };

  return (
    <SidebarContainer>
      <SidebarMain>
        <Avatar>
          <AvatarGroup>
            <UserLargeAvatar>
              <UserAvatarInner />
            </UserLargeAvatar>
          </AvatarGroup>
        </Avatar>
        <Divider src="https://c.animaapp.com/tZAM44r5/img/line-1.svg" alt="Divider" />
        
        <ButtonGroup>
          <SidebarButton 
            $active={activeSidebarItem === 'home'}
            onClick={() => handleItemClick('home')}
          >
            <IconImage src="https://c.animaapp.com/tZAM44r5/img/icon.svg" alt="Home" />
          </SidebarButton>
          
          <SidebarButton 
            $active={activeSidebarItem === 'stats'}
            onClick={() => handleItemClick('stats')}
          >
            <IconImage src="https://c.animaapp.com/tZAM44r5/img/frame-2608575.svg" alt="Statistics" />
          </SidebarButton>
        </ButtonGroup>
        
        <Divider src="https://c.animaapp.com/tZAM44r5/img/line-1.svg" alt="Divider" />
        
        <ButtonGroup>
          <SidebarDropdownButton 
            $active={activeSidebarItem === 'storage'}
            onClick={() => handleItemClick('storage')}
          >
            <IconImage src="https://c.animaapp.com/tZAM44r5/img/container-storage.svg" alt="Container Storage" />
          </SidebarDropdownButton>
          
          <SidebarDropdownButton 
            $active={activeSidebarItem === 'frame'}
            onClick={() => handleItemClick('frame')}
          >
            <IconImage src="https://c.animaapp.com/tZAM44r5/img/frame-2608569.svg" alt="Frame" />
          </SidebarDropdownButton>
          
          <SidebarDropdownButton 
            $active={activeSidebarItem === 'port'}
            onClick={() => handleItemClick('port')}
          >
            <IconImage src="https://c.animaapp.com/tZAM44r5/img/port.svg" alt="Port" />
          </SidebarDropdownButton>
          
          <SidebarDropdownButton 
            $active={activeSidebarItem === 'services'}
            onClick={() => handleItemClick('services')}
          >
            <IconImage src="https://c.animaapp.com/tZAM44r5/img/services.svg" alt="Services" />
          </SidebarDropdownButton>
          
          <SidebarDropdownButton 
            $active={activeSidebarItem === 'stowages'}
            onClick={() => handleItemClick('stowages')}
          >
            <IconImage src="https://c.animaapp.com/tZAM44r5/img/stowages.svg" alt="Stowages" />
          </SidebarDropdownButton>
          
          <SidebarButton 
            $active={activeSidebarItem === 'frame2'}
            onClick={() => handleItemClick('frame2')}
          >
            <IconImage src="https://c.animaapp.com/tZAM44r5/img/frame-2608573.svg" alt="Frame 2" />
          </SidebarButton>
          
          <SidebarButton 
            $active={activeSidebarItem === 'icon1'}
            onClick={() => handleItemClick('icon1')}
          >
            <IconImage src="https://c.animaapp.com/tZAM44r5/img/icon-1.svg" alt="Icon 1" />
          </SidebarButton>
        </ButtonGroup>
      </SidebarMain>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 80px;
  height: calc(100vh - 60px); /* 헤더 높이 제외 */
  background-color: #ffffff;
  box-shadow: 2px 0 14px 0 rgba(36, 56, 68, 0.05);
  z-index: 2;
`;

const SidebarMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  gap: 16px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const AvatarGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserLargeAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #4b5763;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserAvatarInner = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f9f9f9;
  opacity: 0.3;
`;

const Divider = styled.img`
  width: 40px;
  height: 1px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SidebarButton = styled.button<{ $active?: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-color: ${props => props.$active ? '#f9f9f9' : 'transparent'};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f3f3f3;
  }
`;

const SidebarDropdownButton = styled(SidebarButton)`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.$active ? '#4b5763' : 'transparent'};
    display: ${props => props.$active ? 'block' : 'none'};
  }
`;

const IconImage = styled.img`
  width: 48px;
  height: 48px;
`;

export default Sidebar; 