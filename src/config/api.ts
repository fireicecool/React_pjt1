/**
 * API 엔드포인트 및 관련 설정
 */

// 기본 API URL (실제 환경에서는 .env 파일에서 관리할 수 있음)
const BASE_URL = 'https://api.github.com';

// API 엔드포인트
export const API_ENDPOINTS = {
  GITHUB: {
    REPOS: `${BASE_URL}/repos`,
    USERS: `${BASE_URL}/users`,
  },
};

/**
 * API 요청 타임아웃 (밀리초)
 */
export const API_TIMEOUT = 10000;

/**
 * API 요청에 사용될 기본 옵션
 */
export const DEFAULT_API_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * API 에러 핸들링을 위한 함수
 */
export const handleApiError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return '알 수 없는 오류가 발생했습니다';
};

export default {
  API_ENDPOINTS,
  API_TIMEOUT,
  DEFAULT_API_OPTIONS,
  handleApiError,
}; 