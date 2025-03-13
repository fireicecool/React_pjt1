import React from 'react'; // 'react' 패키지가 설치되어 있지 않아 발생하는 에러입니다
import styled from 'styled-components'; // 'styled-components' 패키지가 설치되어 있지 않아 발생하는 에러입니다
import { Link } from 'react-router-dom'; // 'react-router-dom' 패키지가 설치되어 있지 않아 발생하는 에러입니다
import Button from '../components/Button'; // '@components/Button' 경로 설정이 잘못되었거나 파일이 없어 발생하는 에러입니다
import { useTheme } from '../context/ThemeContext'; // '@context/ThemeContext' 경로 설정이 잘못되었거나 파일이 없어 발생하는 에러입니다

/**
 * 페이지를 찾을 수 없을 때 표시되는 404 페이지 컴포넌트
 */
const NotFoundPage: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <Container $theme={theme}>
      <Content>
        <Title>404</Title>
        <Subtitle>페이지를 찾을 수 없습니다</Subtitle>
        <Description>
          찾으시는 페이지가 삭제되었거나, 이름이 변경되었거나, 일시적으로 사용이 불가능합니다.
        </Description>
        <ButtonContainer>
          <StyledLink to="/">
            <Button label="홈으로 돌아가기" primary size="large" />
          </StyledLink>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

// 스타일 컴포넌트 정의
const Container = styled.div<{ $theme: string }>`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: ${props => props.$theme === 'light' ? '#f5f5f5' : '#333'};
  color: ${props => props.$theme === 'light' ? '#333' : '#f5f5f5'};
  transition: all 0.3s ease;
`;

const Content = styled.div`
  text-align: center;
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  margin: 0;
  color: #3498db;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default NotFoundPage; 