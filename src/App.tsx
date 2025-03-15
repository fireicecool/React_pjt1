import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TodoProvider } from './context/TodoContext';
import TodoList from './pages/TodoList';

// React Query 클라이언트 설정
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5분
      gcTime: 1000 * 60 * 10, // 10분
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoList />} />
            {/* 추가 라우트는 여기에 정의 */}
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </QueryClientProvider>
  );
}

export default App;
