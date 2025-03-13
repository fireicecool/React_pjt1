import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

/**
 * 홈페이지 컴포넌트
 */
const HomePage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Container $theme={theme}>
      <Header>
        <Title>React 모던 애플리케이션</Title>
        <Description>
          TypeScript, Vite, Styled Components, React Router, React Query를 활용한 모던 React 애플리케이션
        </Description>
        <ThemeToggle>
          <Button 
            label={`${theme === 'light' ? '다크' : '라이트'} 모드로 전환`} 
            onClick={toggleTheme} 
            primary
          />
        </ThemeToggle>
      </Header>
      
      <Main>
        <Section>
          <SectionTitle>기능</SectionTitle>
          <FeatureList>
            <FeatureItem>🚀 Vite를 사용한 빠른 개발 환경</FeatureItem>
            <FeatureItem>📱 반응형 디자인</FeatureItem>
            <FeatureItem>🎨 테마 지원 (라이트/다크 모드)</FeatureItem>
            <FeatureItem>⚛️ React 최신 기능 활용</FeatureItem>
            <FeatureItem>🔄 React Query를 사용한 데이터 관리</FeatureItem>
          </FeatureList>
        </Section>
        
        <ButtonContainer>
          <StyledLink to="/about">
            <Button label="About 페이지로 이동" size="large" />
          </StyledLink>
        </ButtonContainer>
      </Main>
    </Container>
  );
};

// 스타일 컴포넌트 정의
const Container = styled.div<{ $theme: string }>`
  min-height: 100vh;
  padding: 2rem;
  background-color: ${props => props.$theme === 'light' ? '#f5f5f5' : '#333'};
  color: ${props => props.$theme === 'light' ? '#333' : '#f5f5f5'};
  transition: all 0.3s ease;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const ThemeToggle = styled.div`
  margin: 2rem 0;
`;

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
`;

const FeatureList = styled.ul`
  padding-left: 1.5rem;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default HomePage; 