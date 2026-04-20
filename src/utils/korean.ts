import { DOUBLE_TO_SINGLE } from '../data/nameData';

// 한글 초성 목록 (인덱스 순서 고정)
const INITIALS = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ',
  'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
];

/**
 * 한글 음절에서 초성을 추출합니다.
 * 매핑 테이블에 없는 쌍자음(ㄲ, ㄸ, ㅃ, ㅆ, ㅉ)은 단자음으로 변환합니다.
 * 한글이 아닌 문자는 '' 를 반환합니다.
 */
export function extractInitial(char: string): string {
  const code = char.charCodeAt(0);

  // 한글 음절 범위 (가~힣)
  if (code < 0xac00 || code > 0xd7a3) {
    return '';
  }

  const initialIndex = Math.floor((code - 0xac00) / 28 / 21);
  const initial = INITIALS[initialIndex];

  // 쌍자음이면 단자음으로 변환 (fallback)
  return DOUBLE_TO_SINGLE[initial] ?? initial;
}

/**
 * 한글 성명에서 성씨와 이름 첫 글자를 분리합니다.
 * - 두 글자: 성(1) + 이름 첫 글자(1)
 * - 세 글자: 성(1) + 이름(2)
 * - 네 글자 이상: 성(2) + 이름(나머지)  ← 복성 처리 (남궁, 선우 등)
 * - 한 글자: 성만 존재
 */
export function parseKoreanName(fullName: string): {
  surname: string;
  firstName: string;
  firstNameChar: string;
  initial: string;
} {
  const trimmed = fullName.trim();

  if (trimmed.length === 0) {
    return { surname: '', firstName: '', firstNameChar: '', initial: '' };
  }

  // 복성 목록 (두 글자 성씨)
  const COMPOUND_SURNAMES = ['남궁', '선우', '황보', '독고', '제갈', '사공', '어금', '장곡'];
  const isCompound = COMPOUND_SURNAMES.some((cs) => trimmed.startsWith(cs));

  let surname: string;
  let firstName: string;

  if (isCompound && trimmed.length >= 3) {
    surname = trimmed.slice(0, 2);
    firstName = trimmed.slice(2);
  } else {
    surname = trimmed.slice(0, 1);
    firstName = trimmed.slice(1);
  }

  const firstNameChar = firstName.length > 0 ? firstName[0] : '';
  const initial = firstNameChar ? extractInitial(firstNameChar) : '';

  return { surname, firstName, firstNameChar, initial };
}

/**
 * 입력값이 한글 이름인지 검증합니다.
 */
export function isValidKoreanName(name: string): boolean {
  const trimmed = name.trim();
  if (trimmed.length < 2) return false;

  // 모든 글자가 한글 음절이어야 함
  return [...trimmed].every((char) => {
    const code = char.charCodeAt(0);
    return code >= 0xac00 && code <= 0xd7a3;
  });
}
