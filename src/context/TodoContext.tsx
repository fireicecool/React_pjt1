import React, { createContext, useContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Todo } from '../utils/api';

interface TodoContextProps {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  toggleTodoStatus: (id: number) => void;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoStatus = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodoStatus }}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodoContext() {
  const context = useContext(TodoContext);
  
  if (context === undefined) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  
  return context;
}

export { TodoProvider, useTodoContext }; 