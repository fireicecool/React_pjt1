# React 변환 시 반드시 주의해야 할 사항

## 🚨 원본 HTML 구조 변경 금지

### 실수 1: 입력 필드 구현 방식 변경
- **원본 HTML 구조**:
  ```html
  <div class="text-wrapper-4">2024. 12. 12</div>
  <div class="placeholder">Search</div>
  ```
- **잘못된 React 구현**:
  ```jsx
  <input type="text" className="text-wrapper-4" value={startDate} onChange={handleStartDateChange}/>
  <input type="text" className="placeholder" placeholder="Search" value={searchTerm} onChange={handleSearchChange}/>
  ```
- **올바른 접근 방법**:
  ```jsx
  {/* 숨겨진 입력 필드 */}
  <input 
    type="text" 
    value={startDate} 
    onChange={handleStartDateChange}
    style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'text', zIndex: 1 }}
    aria-label="Start date"
  />
  {/* 원본 HTML 구조를 그대로 유지 */}
  <div className="text-wrapper-4">{startDate}</div>
  ```

### 실수 2: 테이블 구조 및 클래스명 변경
- **원본 HTML 구조**:
  - div 기반 테이블 구조 (약 18개 열)
  - 특정 클래스명과 중첩 구조 유지
- **잘못된 React 구현**:
  - 열 개수 불일치
  - 클래스명 변경
  - 구조 단순화
- **올바른 접근 방법**:
  - 원본 HTML의 테이블 구조를 1:1로 정확히 복제
  - 모든 div, 클래스명, 중첩 구조를 그대로 유지
  - 동적 기능은 내부적으로만 추가 (시각적 변화 없이)

## 🚨 핵심 지침

1. **원본 HTML 태그 구조 100% 유지**
   - HTML 태그를 변경하지 않음 (div는 div로, span은 span으로 유지)
   - 클래스명 절대 변경 금지
   - 중첩 구조 정확히 복제

2. **동적 기능 추가 방법**
   - 숨겨진 input 필드를 추가하고 시각적인 요소는 div로 표시
   - 이벤트 핸들러는 눈에 보이지 않게 내부적으로만 추가
   - onClick, onChange 등의 이벤트는 원본 HTML 구조를 변경하지 않고 추가

3. **CSS 수정 금지**
   - 원본 style.css 파일 그대로 사용
   - 인라인 스타일은 숨겨진 요소에만 제한적으로 사용

## 🚨 변환 과정 체크리스트

1. 원본 HTML 먼저 완전히 이해하기
2. 각 HTML 요소에 해당하는 React 구조 1:1 매핑
3. 동적 기능 추가 시 원본 구조 보존하기
4. 변환 후 원본과 픽셀 단위로 비교 확인

## 마무리

위 지침을 엄격히 따르면 원본 HTML과 시각적으로 100% 동일한 React 애플리케이션을 만들 수 있습니다. 가장 중요한 원칙은 "원본 HTML 구조를 절대 변경하지 않는다"입니다.
