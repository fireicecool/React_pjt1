import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const StyledButton = styled.button<Omit<ButtonProps, 'label'>>`
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  border: 0;
  padding: ${(props) => 
    props.size === 'small' ? '8px 16px' : 
    props.size === 'large' ? '16px 24px' : '12px 20px'
  };
  font-size: ${(props) => 
    props.size === 'small' ? '12px' : 
    props.size === 'large' ? '16px' : '14px'
  };
  background-color: ${(props) => (props.primary ? '#0070f3' : '#f4f4f4')};
  color: ${(props) => (props.primary ? 'white' : '#333')};

  &:hover {
    background-color: ${(props) => (props.primary ? '#0060df' : '#e4e4e4')};
  }
`;

function Button({ primary = false, size = 'medium', label, onClick }: ButtonProps) {
  return (
    <StyledButton primary={primary} size={size} onClick={onClick}>
      {label}
    </StyledButton>
  );
}

export default Button; 