import { useNameStore } from '../store/nameStore';
import type { Gender, Vibe } from '../data/nameData';
import { VIBES } from '../data/nameData';
import { useTossInterstitialAd } from '../hooks/useTossInterstitialAd';

const GENDER_OPTIONS: { value: Gender; label: string; emoji: string; color: string }[] = [
  { value: 'M', label: '남성스러운', emoji: '♂', color: '#5b9cf6' },
  { value: 'F', label: '여성스러운', emoji: '♀', color: '#f472b6' },
  { value: 'U', label: '중성적인', emoji: '✦', color: '#c084fc' },
];

const VIBE_EMOJI: Record<Vibe, string> = {
  지적: '📚',
  강렬한: '🔥',
  부드러운: '🌿',
  활발한: '⚡',
  클래식: '👑',
};

export default function StepSelect() {
  const { koreanName, gender, vibe, setGender, setVibe, goToStep, pickName } = useNameStore();
  const { showAd } = useTossInterstitialAd();

  const handleAnalyze = () => {
    if (!gender || !vibe) return;
    // 광고 노출 → 광고가 닫힌 후 이름 생성 + 분석 화면 전환
    showAd(() => {
      pickName();
      goToStep(3);
    });
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <div className="step-badge">STEP 2</div>
        <h1 className="step-title">
          어떤 분위기를<br />원하세요?
        </h1>
        <p className="step-desc">
          <span className="highlight">{koreanName}</span>님에게 맞는 영어 이름을 골라드릴게요.
        </p>
      </div>

      <div className="select-section">
        <p className="select-label">성별 느낌</p>
        <div className="chip-group">
          {GENDER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              className={`chip${gender === opt.value ? ' chip--active' : ''}`}
              onClick={() => setGender(opt.value)}
            >
              <span className="chip-emoji" style={{ color: opt.color }}>{opt.emoji}</span>
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="select-section">
        <p className="select-label">분위기 태그</p>
        <div className="chip-group">
          {VIBES.map((v) => (
            <button
              key={v}
              className={`chip chip--vibe${vibe === v ? ' chip--active' : ''}`}
              onClick={() => setVibe(v)}
            >
              <span className="chip-emoji">{VIBE_EMOJI[v]}</span>#{v}
            </button>
          ))}
        </div>
      </div>

      <div className="step-footer">
        <button className="btn btn--ghost" onClick={() => goToStep(1)}>
          이전
        </button>
        <button
          className="btn btn--primary"
          onClick={handleAnalyze}
          disabled={!gender || !vibe}
        >
          내 이름 분석하기
        </button>
      </div>
    </div>
  );
}
