import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import { useNameStore } from './store/nameStore';
import StepIntro from './components/StepIntro';
import StepInput from './components/StepInput';
import StepSelect from './components/StepSelect';
import StepAnalyzing from './components/StepAnalyzing';
import StepResult from './components/StepResult';
import { useTossInterstitialAd } from './hooks/useTossInterstitialAd';

const STEP_COMPONENTS = {
  1: StepInput,
  2: StepSelect,
  3: StepAnalyzing,
  4: StepResult,
} as const;

// 스텝 전환 공통 애니메이션
const stepVariants = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit:    { opacity: 0, x: -24, transition: { duration: 0.2, ease: 'easeIn' } },
};

export default function App() {
  const isIntro = useNameStore((s) => s.isIntro);
  const step    = useNameStore((s) => s.step);
  const StepComponent = STEP_COMPONENTS[step];
  const { preload } = useTossInterstitialAd();

  // 앱 최초 진입 시 즉시 광고 로드 시작
  useEffect(() => {
    preload();
  }, [preload]);

  return (
    <div className="app">
      <div className="app-inner">
        <AnimatePresence mode="wait">
          {isIntro ? (
            <StepIntro key="intro" />
          ) : (
            <motion.div
              key={`step-${step}`}
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
            >
              <StepComponent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
