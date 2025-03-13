/**
 * 날짜 형식을 포맷팅하는 함수
 * @param date 날짜 객체 또는 날짜 문자열
 * @param locale 지역 설정 (기본값: 'ko-KR')
 * @returns 포맷팅된 날짜 문자열
 */
export const formatDate = (
  date: Date | string,
  locale: string = 'ko-KR'
): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * 숫자에 천 단위 구분자를 추가하는 함수
 * @param num 숫자
 * @param locale 지역 설정 (기본값: 'ko-KR')
 * @returns 포맷팅된 숫자 문자열
 */
export const formatNumber = (
  num: number,
  locale: string = 'ko-KR'
): string => {
  return num.toLocaleString(locale);
};

/**
 * 금액을 통화 형식으로 포맷팅하는 함수
 * @param amount 금액
 * @param currency 통화 코드 (기본값: 'KRW')
 * @param locale 지역 설정 (기본값: 'ko-KR')
 * @returns 포맷팅된 통화 문자열
 */
export const formatCurrency = (
  amount: number,
  currency: string = 'KRW',
  locale: string = 'ko-KR'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * 문자열 길이를 제한하고 말줄임표를 추가하는 함수
 * @param text 원본 문자열
 * @param maxLength 최대 길이
 * @returns 제한된 길이의 문자열
 */
export const truncateText = (
  text: string,
  maxLength: number
): string => {
  if (text.length <= maxLength) {
    return text;
  }
  
  return text.slice(0, maxLength) + '...';
};

export default {
  formatDate,
  formatNumber,
  formatCurrency,
  truncateText,
}; 