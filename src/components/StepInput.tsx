import { useState } from 'react';
import { useNameStore } from '../store/nameStore';
import { isValidKoreanName } from '../utils/korean';

function getInlineError(value: string): string {
  if (!value) return '';
  if (/[a-zA-Z]/.test(value)) return '영어는 입력할 수 없어요. 한글 이름을 입력해 주세요.';
  if (/[^가-힣]/.test(value)) return '특수문자나 숫자는 사용할 수 없어요.';
  return '';
}

export default function StepInput() {
  const { setKoreanName, goToStep } = useNameStore();
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const inlineError = getInlineError(input);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError('');
  };

  const handleNext = () => {
    if (inlineError) {
      setError(inlineError);
      return;
    }
    if (!isValidKoreanName(input)) {
      setError('한글 이름을 2글자 이상 입력해 주세요.');
      return;
    }
    setKoreanName(input);
    goToStep(2);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleNext();
  };

  const displayError = error || inlineError;

  return (
    <div className="step-container">
      <div className="step-header">
        <div className="step-badge">STEP 1</div>
        <h1 className="step-title">
          당신의 이름을<br />알려주세요
        </h1>
        <p className="step-desc">한글 성명을 입력하면 가장 나다운 영어 이름을 찾아드려요.</p>
      </div>

      <div className="input-wrap">
        <input
          className={`name-input${displayError ? ' name-input--error' : ''}`}
          type="text"
          placeholder="예) 홍길동"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          maxLength={10}
          autoFocus
        />
        {displayError && <p className="input-error">{displayError}</p>}
      </div>

      <div className="step-footer">
        <button
          className="btn btn--primary"
          onClick={handleNext}
          disabled={!input.trim() || !!inlineError}
        >
          다음
        </button>
      </div>
    </div>
  );
}
