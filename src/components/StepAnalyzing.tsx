import { useEffect, useState } from 'react';
import { useNameStore } from '../store/nameStore';

const MESSAGES = [
  (surname: string) => `성씨 '${surname}' 분석 중...`,
  (initial: string) => `초성 '${initial}' 매핑 중...`,
  () => '최적의 영어 이름 탐색 중...',
  () => '분석 완료!',
];

export default function StepAnalyzing() {
  const { surname, initial, goToStep } = useNameStore();
  const [msgIndex, setMsgIndex] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const dotTimer = setInterval(() => {
      setDots((d) => (d.length >= 3 ? '' : d + '.'));
    }, 400);

    const timings = [800, 1600, 2400, 3200];
    const timers = timings.map((delay, i) =>
      setTimeout(() => setMsgIndex(i), delay),
    );

    const done = setTimeout(() => {
      goToStep(4);
    }, 4000);

    return () => {
      clearInterval(dotTimer);
      timers.forEach(clearTimeout);
      clearTimeout(done);
    };
  }, [goToStep]);

  const getMessage = () => {
    const fn = MESSAGES[msgIndex];
    if (msgIndex === 0) return fn(surname);
    if (msgIndex === 1) return fn(initial || '?');
    return fn('');
  };

  const progress = ((msgIndex + 1) / MESSAGES.length) * 100;

  return (
    <div className="step-container step-container--center">
      <div className="analyzing-orb">
        <div className="orb-ring orb-ring--1" />
        <div className="orb-ring orb-ring--2" />
        <div className="orb-ring orb-ring--3" />
        <div className="orb-core">✦</div>
      </div>

      <div className="analyzing-text">
        <p className="analyzing-msg">
          {getMessage()}
          {msgIndex < 3 && <span className="dots">{dots}</span>}
        </p>
      </div>

      <div className="progress-bar-wrap">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%`, transition: 'width 0.6s ease' }}
        />
      </div>
    </div>
  );
}
