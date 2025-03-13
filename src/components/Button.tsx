import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * 재사용 가능한 버튼 컴포넌트
 */
const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  label,
  onClick,
}) => {
  return (
    <StyledButton
      type="button"
      $primary={primary}
      $size={size}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

// 스타일드 컴포넌트를 사용한 스타일링
const StyledButton = styled.button<{ $primary: boolean; $size: string }>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  
  /* primary 여부에 따른 스타일 변경 */
  background-color: ${(props) => (props.$primary ? '#1ea7fd' : '#ffffff')};
  color: ${(props) => (props.$primary ? '#ffffff' : '#333333')};
  border: 1px solid ${(props) => (props.$primary ? '#1ea7fd' : '#cccccc')};
  
  /* 사이즈에 따른 스타일 변경 */
  font-size: ${(props) => {
    switch (props.$size) {
      case 'small':
        return '12px';
      case 'large':
        return '16px';
      default:
        return '14px';
    }
  }};
  padding: ${(props) => {
    switch (props.$size) {
      case 'small':
        return '10px 16px';
      case 'large':
        return '14px 24px';
      default:
        return '12px 20px';
    }
  }};
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    opacity: 0.9;
  }
`;

export default Button; 