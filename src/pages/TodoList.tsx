import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos, Todo } from '../utils/api';
import { useTodoContext } from '../context/TodoContext';
import Button from '../components/Button';
import Card from '../components/Card';
import '../styles/todo.css';

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
    <div className="todo-container">
      <h1 className="todo-title">할 일 관리</h1>
      
      <Card variant="elevated" title="새 할 일 추가">
        <form className="todo-form" onSubmit={handleAddTodo}>
          <input
            className="todo-input"
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="할 일을 입력하세요"
          />
          <Button primary label="추가" />
        </form>
      </Card>
      
      <h2 className="section-title">내 할 일 목록</h2>
      {todos.length === 0 ? (
        <Card variant="outlined">
          <p>등록된 할 일이 없습니다. 새로운 할 일을 추가해보세요!</p>
        </Card>
      ) : (
        todos.map((todo) => (
          <div 
            key={todo.id} 
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <span className={`todo-title-text ${todo.completed ? 'completed' : ''}`}>
              {todo.title}
            </span>
            <div className="button-group">
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
            </div>
          </div>
        ))
      )}
      
      <h2 className="section-title">API에서 불러온 할 일</h2>
      {isLoading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p>에러가 발생했습니다.</p>
      ) : (
        apiTodos?.map((todo) => (
          <div
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <span className={`todo-title-text ${todo.completed ? 'completed' : ''}`}>
              {todo.title}
            </span>
            <Button
              size="small"
              label="내 목록에 추가"
              onClick={() => addTodo(todo)}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default TodoList; 