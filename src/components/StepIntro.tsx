import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNameStore } from '../store/nameStore';

// 인트로에서 순환 표시할 예시 이름 쌍
const DEMO_NAMES = [
  { korean: '홍길동', english: 'James', surname: 'Hong' },
  { korean: '김서연', english: 'Sophia', surname: 'Kim' },
  { korean: '이준혁', english: 'Julian', surname: 'Lee' },
  { korean: '박지민', english: 'Jasmine', surname: 'Park' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function StepIntro() {
  const startApp = useNameStore((s) => s.startApp);
  const [demoIdx, setDemoIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  // 2.5초마다 예시 이름 전환
  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setDemoIdx((i) => (i + 1) % DEMO_NAMES.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const demo = DEMO_NAMES[demoIdx];

  return (
    <motion.div
      key="intro"
      className="intro-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -24, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="intro-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* 타이틀 */}
        <motion.div variants={item}>
          <h1 className="intro-title">
            영어 이름<br />만들기
          </h1>
        </motion.div>

        {/* 서브 카피 */}
        <motion.p variants={item} className="intro-sub">
          가장 나다운 영어 이름의 발견
        </motion.p>

        {/* 예시 카드 */}
        <motion.div variants={item} className="intro-demo-card">
          <div
            className="intro-demo-inner"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.28s ease, transform 0.28s ease',
            }}
          >
            <span className="intro-demo-korean">{demo.korean}</span>
            <span className="intro-demo-arrow">→</span>
            <div className="intro-demo-english">
              <span className="intro-demo-name">{demo.english}</span>
              <span className="intro-demo-surname">{demo.surname}</span>
            </div>
          </div>
        </motion.div>

        {/* 설명 */}
        <motion.p variants={item} className="intro-desc">
          성씨와 초성을 분석해<br />당신만의 영어 이름을 추천해드려요
        </motion.p>
      </motion.div>

      {/* 하단 버튼 */}
      <motion.div
        className="intro-footer"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.5, ease: 'easeOut' } }}
      >
        <motion.button
          className="btn btn--primary"
          onClick={startApp}
          whileTap={{ scale: 0.96 }}
        >
          시작하기
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
