import { useState } from 'react';
import { useNameStore } from '../store/nameStore';
import type { Gender, Vibe } from '../data/nameData';
import { VIBES } from '../data/nameData';
import { useTossInterstitialAd } from '../hooks/useTossInterstitialAd';

const VIBE_EMOJI: Record<string, string> = {
  지적: '📚',
  강렬한: '🔥',
  부드러운: '🌿',
  활발한: '⚡',
  클래식: '👑',
};

const GENDER_OPTIONS: { value: Gender; label: string; emoji: string; color: string }[] = [
  { value: 'M', label: '남성스러운', emoji: '♂', color: '#5b9cf6' },
  { value: 'F', label: '여성스러운', emoji: '♀', color: '#f472b6' },
  { value: 'U', label: '중성적인', emoji: '✦', color: '#c084fc' },
];

const GENDER_LABEL: Record<string, string> = {
  M: '남성스러운',
  F: '여성스러운',
  U: '중성적인',
};

export default function StepResult() {
  const {
    koreanName,
    surnameRoman,
    selectedName,
    vibe: currentVibe,
    gender: currentGender,
    pickAnotherName,
    setVibe,
    setGender,
    reset,
  } = useNameStore();

  const { showAd } = useTossInterstitialAd();

  // "다른 이름 더 보기" 패널 로컬 상태
  const [showPicker, setShowPicker] = useState(false);
  const [pickerVibe, setPickerVibe] = useState<Vibe | null>(currentVibe);
  const [pickerGender, setPickerGender] = useState<Gender | null>(currentGender);

  if (!selectedName) return null;

  const fullEnglishName = `${selectedName.english_name} ${surnameRoman}`;

  const handleOpenPicker = () => {
    // 광고 노출 없이 바로 스타일 선택 패널 오픈
    setPickerVibe(currentVibe);
    setPickerGender(currentGender);
    setShowPicker(true);
  };

  const handlePickWithStyle = () => {
    if (!pickerGender || !pickerVibe) return;

    // 광고 노출 후 결과 적용
    showAd(() => {
      setGender(pickerGender);
      setVibe(pickerVibe);
      pickAnotherName();
      setShowPicker(false);
    });
  };

  const drawNameCard = (): HTMLCanvasElement | null => {
    const canvas = document.createElement('canvas');
    const DPR = 2;
    const W = 360;
    const H = 520;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.scale(DPR, DPR);

    ctx.fillStyle = '#13131f';
    ctx.roundRect(0, 0, W, H, 24);
    ctx.fill();

    const grd = ctx.createRadialGradient(W - 40, 40, 0, W - 40, 40, 160);
    grd.addColorStop(0, 'rgba(242,201,76,0.1)');
    grd.addColorStop(1, 'transparent');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = '#8888aa';
    ctx.font = '600 13px -apple-system, sans-serif';
    ctx.fillText(`${koreanName}  →`, 28, 60);

    ctx.fillStyle = '#f2c94c';
    ctx.font = '900 52px -apple-system, sans-serif';
    ctx.fillText(selectedName.english_name, 28, 140);

    ctx.fillStyle = '#f0f0f8';
    ctx.font = '600 26px -apple-system, sans-serif';
    ctx.fillText(surnameRoman, 28, 178);

    ctx.strokeStyle = '#2a2a40';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(28, 206);
    ctx.lineTo(W - 28, 206);
    ctx.stroke();

    ctx.fillStyle = '#f0f0f8';
    ctx.font = '700 16px -apple-system, sans-serif';
    ctx.fillText(selectedName.meaning, 28, 242);

    ctx.fillStyle = '#8888aa';
    ctx.font = '400 13px -apple-system, sans-serif';
    let line = '';
    let y = 268;
    for (const ch of selectedName.description.split('')) {
      const testLine = line + ch;
      if (ctx.measureText(testLine).width > W - 56) {
        ctx.fillText(line, 28, y);
        line = ch;
        y += 22;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 28, y);

    const tags = [
      currentVibe ? `#${currentVibe}` : '',
      currentGender ? `#${GENDER_LABEL[currentGender]}` : '',
      `#${selectedName.initial}초성`,
    ].filter(Boolean);

    let tagX = 28;
    const tagY = H - 80;
    ctx.font = '600 12px -apple-system, sans-serif';
    for (const tag of tags) {
      const tw = ctx.measureText(tag).width;
      ctx.fillStyle = 'rgba(242,201,76,0.12)';
      ctx.strokeStyle = 'rgba(242,201,76,0.3)';
      ctx.lineWidth = 1;
      const r = { x: tagX, y: tagY - 16, w: tw + 20, h: 24, r: 12 };
      ctx.beginPath();
      ctx.roundRect(r.x, r.y, r.w, r.h, r.r);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#f2c94c';
      ctx.fillText(tag, tagX + 10, tagY);
      tagX += tw + 32;
    }

    ctx.fillStyle = '#55556a';
    ctx.font = '400 11px -apple-system, sans-serif';
    const wmText = '영어 이름 만들기';
    ctx.fillText(wmText, W - 28 - ctx.measureText(wmText).width, H - 28);

    return canvas;
  };

  const handleShare = () => {
    const canvas = drawNameCard();
    if (!canvas) return;

    const fileName = `${fullEnglishName.replace(/\s/g, '_')}_name_card.png`;

    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], fileName, { type: 'image/png' });

      try {
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: `${koreanName}의 영어 이름: ${fullEnglishName}`,
          });
        } else {
          // 공유 미지원 환경에서는 이미지 다운로드로 fallback
          const url = canvas.toDataURL('image/png');
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          a.click();
        }
      } catch {
        // 사용자가 공유를 취소한 경우 등 무시
      }
    }, 'image/png');
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <div className="step-badge">결과</div>
        <p className="step-desc">
          <span className="highlight">{koreanName}</span>님을 위한 영어 이름이에요.
        </p>
      </div>

      {/* 이름 카드 */}
      <div className="name-card">
        <div className="card-top">
          <p className="card-korean">{koreanName}</p>
          <span className="card-arrow">→</span>
        </div>

        <div className="card-name-main">
          <span className="card-english-name">{selectedName.english_name}</span>
          <span className="card-surname">{surnameRoman}</span>
        </div>

        <div className="card-divider" />

        <div className="card-meaning">
          <p className="card-meaning-title">{selectedName.meaning}</p>
          <p className="card-meaning-desc">{selectedName.description}</p>
        </div>

        <div className="card-tags">
          {currentVibe && (
            <span className="card-tag">
              {VIBE_EMOJI[currentVibe]} #{currentVibe}
            </span>
          )}
          {currentGender && <span className="card-tag">#{GENDER_LABEL[currentGender]}</span>}
          <span className="card-tag">#{selectedName.initial}초성</span>
        </div>

        <div className="card-watermark">영어 이름 만들기</div>
      </div>

      {/* 스타일 선택 패널 (다른 이름 더 보기) */}
      {showPicker && (
        <div className="picker-panel">
          <p className="picker-title">어떤 스타일로 볼까요?</p>

          <div className="picker-section">
            <p className="picker-label">성별 느낌</p>
            <div className="chip-group">
              {GENDER_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  className={`chip chip--sm${pickerGender === opt.value ? ' chip--active' : ''}`}
                  onClick={() => setPickerGender(opt.value)}
                >
                  <span className="chip-emoji" style={{ color: opt.color }}>{opt.emoji}</span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="picker-section">
            <p className="picker-label">분위기</p>
            <div className="chip-group">
              {VIBES.map((v) => (
                <button
                  key={v}
                  className={`chip chip--sm${pickerVibe === v ? ' chip--active' : ''}`}
                  onClick={() => setPickerVibe(v)}
                >
                  <span className="chip-emoji">{VIBE_EMOJI[v]}</span>#{v}
                </button>
              ))}
            </div>
          </div>

          <div className="picker-actions">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <button
                className="btn btn--primary"
                onClick={handlePickWithStyle}
                disabled={!pickerGender || !pickerVibe}
                style={{ width: '100%' }}
              >
                이 스타일로 보기
              </button>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 500, textAlign: 'center' }}>
                광고 5초 노출
              </span>
            </div>
            <button className="btn btn--ghost" onClick={() => setShowPicker(false)}>
              취소
            </button>
          </div>
        </div>
      )}

      {/* 액션 버튼 */}
      {!showPicker && (
        <div className="result-actions">
          <button className="btn btn--primary" onClick={handleShare}>
            공유하기
          </button>
          <button className="btn btn--secondary" onClick={handleOpenPicker}>
            다른 이름 더 보기
          </button>
          <button className="btn btn--ghost" onClick={reset}>
            다시 시작
          </button>
        </div>
      )}
    </div>
  );
}
