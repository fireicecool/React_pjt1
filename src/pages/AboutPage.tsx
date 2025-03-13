import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useTheme } from '../context/ThemeContext';
import { useQuery } from '@tanstack/react-query';

// 샘플 API 호출 함수
const fetchRepositoryInfo = async () => {
  const response = await fetch('https://api.github.com/repos/facebook/react');
  if (!response.ok) {
    throw new Error('GitHub API 호출에 실패했습니다');
  }
  return response.json();
};

/**
 * About 페이지 컴포넌트
 * React Query를 사용한 API 호출 예제 포함
 */
const AboutPage: React.FC = () => {
  const { theme } = useTheme();
  
  // React Query를 사용한 데이터 페칭
  const { data, isLoading, error } = useQuery({
    queryKey: ['reactRepo'],
    queryFn: fetchRepositoryInfo,
  });
  
  return (
    <Container $theme={theme}>
      <Header>
        <Title>About</Title>
        <Description>
          이 프로젝트는 React와 관련 최신 기술을 사용한 모던 웹 애플리케이션 개발 예제입니다.
        </Description>
      </Header>
      
      <Main>
        <Section>
          <SectionTitle>사용된 기술</SectionTitle>
          <List>
            <ListItem>React 20+</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>Vite</ListItem>
            <ListItem>Styled Components</ListItem>
            <ListItem>React Router DOM</ListItem>
            <ListItem>React Query</ListItem>
            <ListItem>ESLint & Prettier</ListItem>
          </List>
        </Section>
        
        <Section>
          <SectionTitle>React GitHub 저장소 정보</SectionTitle>
          {isLoading ? (
            <LoadingText>로딩 중...</LoadingText>
          ) : error ? (
            <ErrorText>데이터를 불러오는 데 문제가 발생했습니다</ErrorText>
          ) : (
            <RepoInfo>
              <RepoItem>
                <strong>이름:</strong> {data?.name}
              </RepoItem>
              <RepoItem>
                <strong>소유자:</strong> {data?.owner?.login}
              </RepoItem>
              <RepoItem>
                <strong>스타:</strong> {data?.stargazers_count.toLocaleString()}
              </RepoItem>
              <RepoItem>
                <strong>포크:</strong> {data?.forks_count.toLocaleString()}
              </RepoItem>
              <RepoItem>
                <strong>이슈:</strong> {data?.open_issues_count.toLocaleString()}
              </RepoItem>
              <RepoItem>
                <strong>설명:</strong> {data?.description}
              </RepoItem>
            </RepoInfo>
          )}
        </Section>
        
        <ButtonContainer>
          <StyledLink to="/">
            <Button label="홈으로 돌아가기" size="large" />
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

const List = styled.ul`
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
`;

const LoadingText = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
`;

const ErrorText = styled.p`
  font-size: 1.1rem;
  color: #e74c3c;
  text-align: center;
`;

const RepoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const RepoItem = styled.div`
  font-size: 1.1rem;
  
  strong {
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default AboutPage; 