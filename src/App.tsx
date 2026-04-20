import { useEffect } from 'react';
import './App.css';
import { useNameStore } from './store/nameStore';
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

export default function App() {
  const step = useNameStore((s) => s.step);
  const StepComponent = STEP_COMPONENTS[step];
  const { preload } = useTossInterstitialAd();

  // 앱 최초 진입 시 즉시 광고 로드 시작 — 사용자가 입력하는 동안 백그라운드에서 준비됩니다.
  useEffect(() => {
    preload();
  }, [preload]);

  return (
    <div className="app">
      <div className="app-inner">
        <StepComponent />
      </div>
    </div>
  );
}
