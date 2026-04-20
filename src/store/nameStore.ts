import { create } from 'zustand';
import type { Gender, NameEntry, Vibe } from '../data/nameData';
import { NAME_DATA } from '../data/nameData';
import { romanizeSurname } from '../data/surnameMap';
import { parseKoreanName } from '../utils/korean';

export type Step = 1 | 2 | 3 | 4;

interface NameStore {
  step: Step;
  koreanName: string;
  surname: string;
  firstName: string;
  firstNameChar: string;
  initial: string;
  surnameRoman: string;
  gender: Gender | null;
  vibe: Vibe | null;
  selectedName: NameEntry | null;
  usedNames: Set<string>;

  setKoreanName: (name: string) => void;
  setGender: (gender: Gender) => void;
  setVibe: (vibe: Vibe) => void;
  goToStep: (step: Step) => void;
  pickName: () => void;
  pickAnotherName: () => void;
  reset: () => void;
}

function findName(
  initial: string,
  gender: Gender | null,
  vibe: Vibe | null,
  exclude: Set<string>,
): NameEntry | null {
  // 1순위: initial + gender + vibe 정확 매칭
  // 2순위: initial + gender (vibe 무관)
  // 3순위: initial + U (universal) gender
  // 4순위: initial 만 매칭 (어떤 이름이든)
  // 5순위: 전체 랜덤 (초성이 없을 때 fallback)

  const pool = NAME_DATA.filter((e) => !exclude.has(e.english_name));

  const strategies: Array<(e: NameEntry) => boolean> = [
    (e) => e.initial === initial && e.gender === gender && e.vibe === vibe,
    (e) => e.initial === initial && e.gender === gender,
    (e) => e.initial === initial && e.vibe === vibe,
    (e) => e.initial === initial && e.gender === 'U',
    (e) => e.initial === initial,
    (_e) => true,
  ];

  for (const match of strategies) {
    const candidates = pool.filter(match);
    if (candidates.length > 0) {
      return candidates[Math.floor(Math.random() * candidates.length)];
    }
  }

  // exclude 제거 후 재시도 (모든 이름을 다 쓴 경우)
  return NAME_DATA[Math.floor(Math.random() * NAME_DATA.length)];
}

export const useNameStore = create<NameStore>((set, get) => ({
  step: 1,
  koreanName: '',
  surname: '',
  firstName: '',
  firstNameChar: '',
  initial: '',
  surnameRoman: '',
  gender: null,
  vibe: null,
  selectedName: null,
  usedNames: new Set(),

  setKoreanName: (name) => {
    const parsed = parseKoreanName(name);
    set({
      koreanName: name,
      surname: parsed.surname,
      firstName: parsed.firstName,
      firstNameChar: parsed.firstNameChar,
      initial: parsed.initial,
      surnameRoman: romanizeSurname(parsed.surname),
    });
  },

  setGender: (gender) => set({ gender }),
  setVibe: (vibe) => set({ vibe }),

  goToStep: (step) => set({ step }),

  pickName: () => {
    const { initial, gender, vibe, usedNames } = get();
    const found = findName(initial, gender, vibe, usedNames);
    if (found) {
      set((state) => ({
        selectedName: found,
        usedNames: new Set([...state.usedNames, found.english_name]),
      }));
    }
  },

  pickAnotherName: () => {
    const { initial, gender, vibe, usedNames } = get();
    const found = findName(initial, gender, vibe, usedNames);
    if (found) {
      set((state) => ({
        selectedName: found,
        usedNames: new Set([...state.usedNames, found.english_name]),
      }));
    }
  },

  reset: () =>
    set({
      step: 1,
      koreanName: '',
      surname: '',
      firstName: '',
      firstNameChar: '',
      initial: '',
      surnameRoman: '',
      gender: null,
      vibe: null,
      selectedName: null,
      usedNames: new Set(),
    }),
}));
