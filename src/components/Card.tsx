import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  title?: string;
  children: ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
}

const CardContainer = styled.div<{ variant: CardProps['variant'] }>`
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
  width: 100%;
  
  ${({ variant }) => {
    switch (variant) {
      case 'outlined':
        return `
          border: 1px solid #e0e0e0;
          box-shadow: none;
        `;
      case 'elevated':
        return `
          border: none;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        `;
      default:
        return `
          border: none;
          background-color: #f9f9f9;
        `;
    }
  }}
`;

const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

function Card({ title, children, variant = 'default' }: CardProps) {
  return (
    <CardContainer variant={variant}>
      {title && <CardTitle>{title}</CardTitle>}
      {children}
    </CardContainer>
  );
}

export default Card; 