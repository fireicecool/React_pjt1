import apiConfig from '../config/apiConfig';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const API_BASE_URL = apiConfig.apiUrl;
const ENDPOINTS = apiConfig.endpoints;
const DEFAULT_LIMIT = apiConfig.defaultParams.limit;

/**
 * Todo 목록을 가져오는 함수
 * @param limit 가져올 Todo 항목 수 (기본값: config 설정값)
 */
export async function fetchTodos(limit: number = DEFAULT_LIMIT): Promise<Todo[]> {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.todos}?_limit=${limit}`);
  
  if (!response.ok) {
    throw new Error('API 요청에 실패했습니다');
  }
  
  return response.json();
}

/**
 * 특정 ID의 Todo를 가져오는 함수
 * @param id Todo ID
 */
export async function fetchTodoById(id: number): Promise<Todo> {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.todos}/${id}`);
  
  if (!response.ok) {
    throw new Error(`ID가 ${id}인 Todo를 찾을 수 없습니다`);
  }
  
  return response.json();
}

/**
 * 사용자 목록을 가져오는 함수
 */
export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.users}`);
  
  if (!response.ok) {
    throw new Error('사용자 목록을 가져오는데 실패했습니다');
  }
  
  return response.json();
}

/**
 * 새로운 Todo를 생성하는 함수
 * @param todo 생성할 Todo 객체
 */
export async function createTodo(todo: Omit<Todo, 'id'>): Promise<Todo> {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.todos}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  
  if (!response.ok) {
    throw new Error('Todo 생성에 실패했습니다');
  }
  
  return response.json();
}

/**
 * Todo의 완료 상태를 업데이트하는 함수
 * @param id Todo ID
 * @param completed 완료 상태
 */
export async function updateTodoStatus(id: number, completed: boolean): Promise<Todo> {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.todos}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed }),
  });
  
  if (!response.ok) {
    throw new Error(`ID가 ${id}인 Todo 업데이트에 실패했습니다`);
  }
  
  return response.json();
} 