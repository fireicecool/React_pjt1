# 모던 React Todo 앱

Vite, React, TypeScript, Styled Components를 사용한 모던 할 일 관리 애플리케이션입니다.

## 기술 스택

- **React** - UI 라이브러리
- **TypeScript** - 정적 타입 지원
- **Vite** - 빌드 도구
- **React Router** - 라우팅
- **React Query** - 서버 상태 관리
- **Styled Components** - 스타일링
- **ESLint & Prettier** - 코드 품질 관리

## 프로젝트 구조

```
src/
├── components/   # 재사용 가능한 UI 컴포넌트
├── pages/        # 페이지 레벨 컴포넌트
├── hooks/        # 커스텀 훅
├── context/      # 전역 상태 관리
├── utils/        # 유틸리티 함수
└── config/       # 프로젝트 설정
```

## 시작하기

### 개발 환경 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

## 주요 기능

- **할 일 관리**: 할 일 추가, 삭제, 완료 상태 변경
- **로컬 저장소**: 브라우저 로컬 스토리지를 이용한 할 일 데이터 영구 저장
- **API 연동**: JSONPlaceholder API를 통한 샘플 할 일 데이터 조회

## 컴포넌트

### 재사용 가능한 컴포넌트

- **Button**: 다양한 크기와 스타일을 지원하는 버튼 컴포넌트
- **Card**: 여러 스타일 변형을 지원하는 카드 컴포넌트

### 커스텀 훅

- **useLocalStorage**: 로컬 스토리지를 React 상태와 동기화하는 커스텀 훅

## 라이센스

MIT
