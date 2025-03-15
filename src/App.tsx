import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

// CSS 파일 임포트
import './styles/globals.css';
import './styles/styleguide.css';
import './styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* 추가 라우트는 여기에 정의 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
