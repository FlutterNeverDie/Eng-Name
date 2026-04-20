import './App.css';
import { useNameStore } from './store/nameStore';
import StepInput from './components/StepInput';
import StepSelect from './components/StepSelect';
import StepAnalyzing from './components/StepAnalyzing';
import StepResult from './components/StepResult';

const STEP_COMPONENTS = {
  1: StepInput,
  2: StepSelect,
  3: StepAnalyzing,
  4: StepResult,
} as const;

export default function App() {
  const step = useNameStore((s) => s.step);
  const StepComponent = STEP_COMPONENTS[step];

  return (
    <div className="app">
      <div className="app-inner">
        <StepComponent />
      </div>
    </div>
  );
}
