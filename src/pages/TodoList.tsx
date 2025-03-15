import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos, Todo } from '../utils/api';
import { useTodoContext } from '../context/TodoContext';
import Button from '../components/Button';
import Card from '../components/Card';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 24px;
`;

const TodoItem = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: ${(props) => (props.completed ? '#f0f8ff' : 'white')};
  border: 1px solid #e0e0e0;
`;

const TodoTitle = styled.span<{ completed: boolean }>`
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: ${(props) => (props.completed ? '#888' : '#333')};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Form = styled.form`
  display: flex;
  margin-bottom: 24px;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #444;
  margin: 24px 0 16px;
`;

function TodoList() {
  const { todos, addTodo, removeTodo, toggleTodoStatus } = useTodoContext();
  const [newTodoTitle, setNewTodoTitle] = useState('');
  
  const { data: apiTodos, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetchTodos(5),
  });

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newTodoTitle.trim() === '') return;
    
    const newTodo: Todo = {
      id: Date.now(),
      title: newTodoTitle,
      completed: false,
    };
    
    addTodo(newTodo);
    setNewTodoTitle('');
  };

  return (
    <Container>
      <Title>할 일 관리</Title>
      
      <Card variant="elevated" title="새 할 일 추가">
        <Form onSubmit={handleAddTodo}>
          <Input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="할 일을 입력하세요"
          />
          <Button primary label="추가" />
        </Form>
      </Card>
      
      <SectionTitle>내 할 일 목록</SectionTitle>
      {todos.length === 0 ? (
        <Card variant="outlined">
          <p>등록된 할 일이 없습니다. 새로운 할 일을 추가해보세요!</p>
        </Card>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} completed={todo.completed}>
            <TodoTitle completed={todo.completed}>{todo.title}</TodoTitle>
            <ButtonGroup>
              <Button
                size="small"
                label={todo.completed ? '미완료' : '완료'}
                onClick={() => toggleTodoStatus(todo.id)}
              />
              <Button
                size="small"
                label="삭제"
                onClick={() => removeTodo(todo.id)}
              />
            </ButtonGroup>
          </TodoItem>
        ))
      )}
      
      <SectionTitle>API에서 불러온 할 일</SectionTitle>
      {isLoading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p>에러가 발생했습니다.</p>
      ) : (
        apiTodos?.map((todo) => (
          <TodoItem key={todo.id} completed={todo.completed}>
            <TodoTitle completed={todo.completed}>{todo.title}</TodoTitle>
            <Button
              size="small"
              label="내 목록에 추가"
              onClick={() => addTodo(todo)}
            />
          </TodoItem>
        ))
      )}
    </Container>
  );
}

export default TodoList; 