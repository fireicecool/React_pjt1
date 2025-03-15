/**
 * API 설정 정보
 */
export const apiConfig = {
  apiUrl: "https://jsonplaceholder.typicode.com",
  endpoints: {
    todos: "/todos",
    users: "/users",
    posts: "/posts",
    comments: "/comments"
  },
  defaultParams: {
    limit: 10
  }
};

export default apiConfig; 