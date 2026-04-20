export type Gender = 'M' | 'F' | 'U';
export type Vibe = '지적' | '강렬한' | '부드러운' | '활발한' | '클래식';

export interface NameEntry {
  initial: string;
  gender: Gender;
  vibe: Vibe;
  english_name: string;
  meaning: string;
  description: string;
}

// 쌍자음 → 단자음 매핑 (fallback용)
export const DOUBLE_TO_SINGLE: Record<string, string> = {
  ㄲ: 'ㄱ',
  ㄸ: 'ㄷ',
  ㅃ: 'ㅂ',
  ㅆ: 'ㅅ',
  ㅉ: 'ㅈ',
};

// CSV 데이터를 TypeScript 상수로 정의
export const NAME_DATA: NameEntry[] = [
  // ㄱ
  { initial: 'ㄱ', gender: 'M', vibe: '지적', english_name: 'Gabriel', meaning: '신의 전령', description: '지성과 영성을 겸비한 이름으로 깊은 사색과 분석력을 상징해요.' },
  { initial: 'ㄱ', gender: 'M', vibe: '활발한', english_name: 'Gavin', meaning: '흰 매', description: '에너지가 넘치고 자유로운 영혼을 가진 이름이에요.' },
  { initial: 'ㄱ', gender: 'M', vibe: '강렬한', english_name: 'Grant', meaning: '위대한', description: '강한 의지와 카리스마를 지닌 리더십을 상징해요.' },
  { initial: 'ㄱ', gender: 'M', vibe: '부드러운', english_name: 'Glen', meaning: '계곡', description: '자연처럼 포용력 있고 따뜻한 마음을 담은 이름이에요.' },
  { initial: 'ㄱ', gender: 'M', vibe: '클래식', english_name: 'George', meaning: '땅을 경작하는 자', description: '시대를 초월한 품격과 신뢰감을 지닌 이름이에요.' },
  { initial: 'ㄱ', gender: 'F', vibe: '지적', english_name: 'Grace', meaning: '은총', description: '우아한 지성과 내면의 아름다움을 상징해요.' },
  { initial: 'ㄱ', gender: 'F', vibe: '활발한', english_name: 'Gia', meaning: '하나님의 은혜', description: '활기차고 생동감 넘치는 매력을 가진 이름이에요.' },
  { initial: 'ㄱ', gender: 'F', vibe: '강렬한', english_name: 'Gemma', meaning: '보석', description: '빛나는 존재감과 강인한 아름다움을 상징해요.' },
  { initial: 'ㄱ', gender: 'F', vibe: '부드러운', english_name: 'Gloria', meaning: '영광', description: '따뜻한 빛처럼 주변을 밝히는 이름이에요.' },
  { initial: 'ㄱ', gender: 'F', vibe: '클래식', english_name: 'Gwendolyn', meaning: '흰 반지', description: '클래식한 품격과 신비로운 매력을 지닌 이름이에요.' },
  { initial: 'ㄱ', gender: 'U', vibe: '강렬한', english_name: 'Genesis', meaning: '시작', description: '새로운 시작의 강인한 에너지를 담은 이름이에요.' },

  // ㄴ
  { initial: 'ㄴ', gender: 'M', vibe: '지적', english_name: 'Nathan', meaning: '하나님이 주신', description: '깊은 사고와 지혜를 상징하는 이름이에요.' },
  { initial: 'ㄴ', gender: 'M', vibe: '활발한', english_name: 'Noah', meaning: '위안', description: '따뜻하고 긍정적인 에너지를 발산하는 이름이에요.' },
  { initial: 'ㄴ', gender: 'M', vibe: '강렬한', english_name: 'Nero', meaning: '강인한', description: '강렬한 존재감과 불굴의 의지를 상징해요.' },
  { initial: 'ㄴ', gender: 'M', vibe: '부드러운', english_name: 'Neil', meaning: '열정', description: '부드러운 카리스마와 진실된 마음을 담은 이름이에요.' },
  { initial: 'ㄴ', gender: 'M', vibe: '클래식', english_name: 'Norman', meaning: '북쪽 사람', description: '전통적인 신뢰감과 안정감을 주는 이름이에요.' },
  { initial: 'ㄴ', gender: 'F', vibe: '지적', english_name: 'Nora', meaning: '명예', description: '지적이고 독립적인 정신을 상징하는 이름이에요.' },
  { initial: 'ㄴ', gender: 'F', vibe: '활발한', english_name: 'Naomi', meaning: '기쁨', description: '밝고 활기찬 에너지로 주변을 물들이는 이름이에요.' },
  { initial: 'ㄴ', gender: 'F', vibe: '강렬한', english_name: 'Nina', meaning: '불굴의', description: '강렬한 개성과 뚜렷한 존재감을 지닌 이름이에요.' },
  { initial: 'ㄴ', gender: 'F', vibe: '부드러운', english_name: 'Nicole', meaning: '승리', description: '우아하고 섬세한 아름다움을 가진 이름이에요.' },
  { initial: 'ㄴ', gender: 'F', vibe: '클래식', english_name: 'Natalie', meaning: '크리스마스에 태어난', description: '클래식한 아름다움과 따뜻함을 담은 이름이에요.' },
  { initial: 'ㄴ', gender: 'U', vibe: '지적', english_name: 'Nova', meaning: '새로운 별', description: '지적이고 빛나는 존재감을 상징하는 이름이에요.' },

  // ㄷ
  { initial: 'ㄷ', gender: 'M', vibe: '지적', english_name: 'Daniel', meaning: '하나님의 재판관', description: '깊은 통찰력과 지혜를 상징하는 이름이에요.' },
  { initial: 'ㄷ', gender: 'M', vibe: '활발한', english_name: 'Dylan', meaning: '바다의 아들', description: '자유롭고 창의적인 에너지를 가진 이름이에요.' },
  { initial: 'ㄷ', gender: 'M', vibe: '강렬한', english_name: 'Drake', meaning: '용', description: '강인하고 카리스마 넘치는 존재감을 상징해요.' },
  { initial: 'ㄷ', gender: 'M', vibe: '부드러운', english_name: 'Dean', meaning: '계곡', description: '차분하고 신뢰감 있는 따뜻한 이름이에요.' },
  { initial: 'ㄷ', gender: 'M', vibe: '클래식', english_name: 'Donald', meaning: '위대한 족장', description: '전통적인 권위와 신뢰를 담은 이름이에요.' },
  { initial: 'ㄷ', gender: 'F', vibe: '지적', english_name: 'Diana', meaning: '달의 여신', description: '지적이고 독립적인 강인함을 상징하는 이름이에요.' },
  { initial: 'ㄷ', gender: 'F', vibe: '활발한', english_name: 'Daisy', meaning: '낮의 눈', description: '순수하고 밝은 에너지로 가득한 이름이에요.' },
  { initial: 'ㄷ', gender: 'F', vibe: '강렬한', english_name: 'Demi', meaning: '강렬한', description: '강렬한 개성과 매력적인 카리스마를 지닌 이름이에요.' },
  { initial: 'ㄷ', gender: 'F', vibe: '부드러운', english_name: 'Delilah', meaning: '섬세한', description: '부드럽고 섬세한 아름다움을 담은 이름이에요.' },
  { initial: 'ㄷ', gender: 'F', vibe: '클래식', english_name: 'Dorothy', meaning: '하나님의 선물', description: '클래식한 품격과 따뜻한 마음을 가진 이름이에요.' },
  { initial: 'ㄷ', gender: 'U', vibe: '활발한', english_name: 'Devon', meaning: '시인', description: '창의적이고 활기찬 에너지를 담은 이름이에요.' },

  // ㄹ
  { initial: 'ㄹ', gender: 'M', vibe: '지적', english_name: 'Ryan', meaning: '작은 왕', description: '지적이고 리더십 있는 존재감을 상징해요.' },
  { initial: 'ㄹ', gender: 'M', vibe: '활발한', english_name: 'Robin', meaning: '밝은 명성', description: '활기차고 친근한 에너지를 가진 이름이에요.' },
  { initial: 'ㄹ', gender: 'M', vibe: '강렬한', english_name: 'Rex', meaning: '왕', description: '강렬한 왕의 기운과 카리스마를 상징하는 이름이에요.' },
  { initial: 'ㄹ', gender: 'M', vibe: '부드러운', english_name: 'Leo', meaning: '사자', description: '따뜻하고 용감한 마음을 담은 이름이에요.' },
  { initial: 'ㄹ', gender: 'M', vibe: '클래식', english_name: 'Lawrence', meaning: '명예', description: '전통적인 품격과 고귀함을 지닌 이름이에요.' },
  { initial: 'ㄹ', gender: 'F', vibe: '지적', english_name: 'Rachel', meaning: '어린 암양', description: '따뜻한 지성과 섬세한 감성을 상징하는 이름이에요.' },
  { initial: 'ㄹ', gender: 'F', vibe: '활발한', english_name: 'Riley', meaning: '용감한', description: '활발하고 독립적인 에너지를 가진 이름이에요.' },
  { initial: 'ㄹ', gender: 'F', vibe: '강렬한', english_name: 'Rosa', meaning: '장미', description: '강렬한 아름다움과 열정을 상징하는 이름이에요.' },
  { initial: 'ㄹ', gender: 'F', vibe: '부드러운', english_name: 'Luna', meaning: '달', description: '신비롭고 부드러운 아름다움을 지닌 이름이에요.' },
  { initial: 'ㄹ', gender: 'F', vibe: '클래식', english_name: 'Laura', meaning: '월계수', description: '클래식한 우아함과 지성을 담은 이름이에요.' },
  { initial: 'ㄹ', gender: 'U', vibe: '강렬한', english_name: 'Raven', meaning: '까마귀', description: '신비롭고 강렬한 존재감을 상징하는 이름이에요.' },

  // ㅁ
  { initial: 'ㅁ', gender: 'M', vibe: '지적', english_name: 'Marcus', meaning: '전쟁의 신', description: '깊은 사고력과 전략적 지성을 상징해요.' },
  { initial: 'ㅁ', gender: 'M', vibe: '활발한', english_name: 'Max', meaning: '위대한', description: '에너지 넘치고 긍정적인 존재감을 가진 이름이에요.' },
  { initial: 'ㅁ', gender: 'M', vibe: '강렬한', english_name: 'Maverick', meaning: '독불장군', description: '강렬한 독립심과 개성을 상징하는 이름이에요.' },
  { initial: 'ㅁ', gender: 'M', vibe: '부드러운', english_name: 'Miles', meaning: '자비로운', description: '부드럽고 섬세한 감성을 가진 이름이에요.' },
  { initial: 'ㅁ', gender: 'M', vibe: '클래식', english_name: 'Michael', meaning: '하나님과 같은 자', description: '시대를 초월한 강인함과 신뢰를 지닌 이름이에요.' },
  { initial: 'ㅁ', gender: 'F', vibe: '지적', english_name: 'Mia', meaning: '사랑받는', description: '지적이고 세련된 아름다움을 상징하는 이름이에요.' },
  { initial: 'ㅁ', gender: 'F', vibe: '활발한', english_name: 'Maya', meaning: '환상', description: '밝고 창의적인 에너지로 가득한 이름이에요.' },
  { initial: 'ㅁ', gender: 'F', vibe: '강렬한', english_name: 'Morgan', meaning: '바다 전사', description: '강인하고 독립적인 존재감을 지닌 이름이에요.' },
  { initial: 'ㅁ', gender: 'F', vibe: '부드러운', english_name: 'Molly', meaning: '바다의 별', description: '따뜻하고 포용적인 아름다움을 담은 이름이에요.' },
  { initial: 'ㅁ', gender: 'F', vibe: '클래식', english_name: 'Margaret', meaning: '진주', description: '클래식한 품격과 고귀함을 상징하는 이름이에요.' },
  { initial: 'ㅁ', gender: 'U', vibe: '지적', english_name: 'Monroe', meaning: '강의 입구', description: '지적이고 세련된 존재감을 상징하는 이름이에요.' },

  // ㅂ
  { initial: 'ㅂ', gender: 'M', vibe: '지적', english_name: 'Benjamin', meaning: '오른손의 아들', description: '지적이고 신뢰받는 존재감을 상징해요.' },
  { initial: 'ㅂ', gender: 'M', vibe: '활발한', english_name: 'Blake', meaning: '빛나는', description: '활기차고 개성 있는 에너지를 가진 이름이에요.' },
  { initial: 'ㅂ', gender: 'M', vibe: '강렬한', english_name: 'Blaze', meaning: '불꽃', description: '강렬하고 열정적인 존재감을 상징하는 이름이에요.' },
  { initial: 'ㅂ', gender: 'M', vibe: '부드러운', english_name: 'Bradley', meaning: '넓은 잔디밭', description: '차분하고 안정적인 따뜻함을 지닌 이름이에요.' },
  { initial: 'ㅂ', gender: 'M', vibe: '클래식', english_name: 'Bernard', meaning: '곰처럼 용감한', description: '전통적인 강인함과 신뢰를 담은 이름이에요.' },
  { initial: 'ㅂ', gender: 'F', vibe: '지적', english_name: 'Bridget', meaning: '강한', description: '지적이고 강인한 독립심을 상징하는 이름이에요.' },
  { initial: 'ㅂ', gender: 'F', vibe: '활발한', english_name: 'Brooke', meaning: '작은 시냇물', description: '자유롭고 활기찬 에너지를 가진 이름이에요.' },
  { initial: 'ㅂ', gender: 'F', vibe: '강렬한', english_name: 'Bella', meaning: '아름다운', description: '강렬한 아름다움과 매력을 상징하는 이름이에요.' },
  { initial: 'ㅂ', gender: 'F', vibe: '부드러운', english_name: 'Beth', meaning: '하나님의 맹세', description: '따뜻하고 진실된 마음을 담은 이름이에요.' },
  { initial: 'ㅂ', gender: 'F', vibe: '클래식', english_name: 'Barbara', meaning: '고귀한', description: '클래식한 존재감과 강인한 품격을 지닌 이름이에요.' },
  { initial: 'ㅂ', gender: 'U', vibe: '강렬한', english_name: 'Bryce', meaning: '점박이', description: '강렬하고 독특한 존재감을 상징하는 이름이에요.' },

  // ㅅ
  { initial: 'ㅅ', gender: 'M', vibe: '지적', english_name: 'Sebastian', meaning: '존경받는', description: '깊은 지성과 고귀한 품격을 상징해요.' },
  { initial: 'ㅅ', gender: 'M', vibe: '활발한', english_name: 'Samuel', meaning: '하나님이 들으신', description: '따뜻하고 활기찬 긍정 에너지를 가진 이름이에요.' },
  { initial: 'ㅅ', gender: 'M', vibe: '강렬한', english_name: 'Steele', meaning: '강철', description: '강렬하고 불굴의 의지를 상징하는 이름이에요.' },
  { initial: 'ㅅ', gender: 'M', vibe: '부드러운', english_name: 'Simon', meaning: '듣는 자', description: '부드럽고 섬세한 감성을 담은 이름이에요.' },
  { initial: 'ㅅ', gender: 'M', vibe: '클래식', english_name: 'Stephen', meaning: '왕관', description: '시대를 초월한 권위와 신뢰를 지닌 이름이에요.' },
  { initial: 'ㅅ', gender: 'F', vibe: '지적', english_name: 'Sophia', meaning: '지혜', description: '지적이고 우아한 아름다움을 상징하는 이름이에요.' },
  { initial: 'ㅅ', gender: 'F', vibe: '활발한', english_name: 'Sunny', meaning: '햇빛', description: '밝고 긍정적인 에너지로 가득한 이름이에요.' },
  { initial: 'ㅅ', gender: 'F', vibe: '강렬한', english_name: 'Stella', meaning: '별', description: '강렬하게 빛나는 존재감을 상징하는 이름이에요.' },
  { initial: 'ㅅ', gender: 'F', vibe: '부드러운', english_name: 'Sage', meaning: '현명한', description: '고요하고 지혜로운 아름다움을 담은 이름이에요.' },
  { initial: 'ㅅ', gender: 'F', vibe: '클래식', english_name: 'Susan', meaning: '백합', description: '클래식한 우아함과 순수함을 상징하는 이름이에요.' },
  { initial: 'ㅅ', gender: 'U', vibe: '지적', english_name: 'Sterling', meaning: '순수한 별', description: '지적이고 빛나는 존재감을 상징하는 이름이에요.' },

  // ㅇ
  { initial: 'ㅇ', gender: 'M', vibe: '지적', english_name: 'Ethan', meaning: '강한', description: '강인한 지성과 의지를 상징하는 이름이에요.' },
  { initial: 'ㅇ', gender: 'M', vibe: '활발한', english_name: 'Owen', meaning: '어린 전사', description: '활기차고 열정적인 에너지를 가진 이름이에요.' },
  { initial: 'ㅇ', gender: 'M', vibe: '강렬한', english_name: 'Abel', meaning: '숨결', description: '강렬한 존재감과 깊은 영혼을 상징해요.' },
  { initial: 'ㅇ', gender: 'M', vibe: '부드러운', english_name: 'Alan', meaning: '조화', description: '따뜻하고 조화로운 마음을 담은 이름이에요.' },
  { initial: 'ㅇ', gender: 'M', vibe: '클래식', english_name: 'Arthur', meaning: '곰', description: '시대를 초월한 강인한 품격을 지닌 이름이에요.' },
  { initial: 'ㅇ', gender: 'F', vibe: '지적', english_name: 'Alice', meaning: '고귀한', description: '지적이고 독립적인 지성미를 상징하는 이름이에요.' },
  { initial: 'ㅇ', gender: 'F', vibe: '활발한', english_name: 'Aurora', meaning: '새벽', description: '빛나고 활기찬 아름다움을 가진 이름이에요.' },
  { initial: 'ㅇ', gender: 'F', vibe: '강렬한', english_name: 'Eva', meaning: '생명', description: '강렬한 생명력과 존재감을 상징하는 이름이에요.' },
  { initial: 'ㅇ', gender: 'F', vibe: '부드러운', english_name: 'Amy', meaning: '사랑받는', description: '따뜻하고 포용적인 아름다움을 담은 이름이에요.' },
  { initial: 'ㅇ', gender: 'F', vibe: '클래식', english_name: 'Eleanor', meaning: '밝은 빛', description: '클래식한 우아함과 지성을 상징하는 이름이에요.' },
  { initial: 'ㅇ', gender: 'U', vibe: '강렬한', english_name: 'Axel', meaning: '아버지의 평화', description: '강렬하고 독립적인 존재감을 상징하는 이름이에요.' },

  // ㅈ
  { initial: 'ㅈ', gender: 'M', vibe: '지적', english_name: 'Julian', meaning: '빛나는', description: '깊은 사색과 지성을 상징하는 이름이에요.' },
  { initial: 'ㅈ', gender: 'M', vibe: '활발한', english_name: 'Jesse', meaning: '하나님의 선물', description: '자유롭고 활기찬 에너지를 가진 이름이에요.' },
  { initial: 'ㅈ', gender: 'M', vibe: '강렬한', english_name: 'Jax', meaning: '강인한', description: '강렬하고 카리스마 넘치는 이름이에요.' },
  { initial: 'ㅈ', gender: 'M', vibe: '부드러운', english_name: 'Jasper', meaning: '보물', description: '고요하고 따뜻한 존재감을 담은 이름이에요.' },
  { initial: 'ㅈ', gender: 'M', vibe: '클래식', english_name: 'James', meaning: '대체하는 자', description: '시대를 초월한 신뢰와 권위를 지닌 이름이에요.' },
  { initial: 'ㅈ', gender: 'F', vibe: '지적', english_name: 'Julia', meaning: '빛나는', description: '우아한 지성과 독립적인 정신을 상징해요.' },
  { initial: 'ㅈ', gender: 'F', vibe: '활발한', english_name: 'Joy', meaning: '기쁨', description: '밝고 긍정적인 에너지가 넘치는 이름이에요.' },
  { initial: 'ㅈ', gender: 'F', vibe: '강렬한', english_name: 'Jade', meaning: '녹옥', description: '강렬한 아름다움과 귀한 존재감을 상징해요.' },
  { initial: 'ㅈ', gender: 'F', vibe: '부드러운', english_name: 'Jasmine', meaning: '재스민 꽃', description: '우아하고 향기로운 아름다움을 담은 이름이에요.' },
  { initial: 'ㅈ', gender: 'F', vibe: '클래식', english_name: 'Jane', meaning: '하나님은 자비로우신', description: '클래식한 우아함과 진실됨을 지닌 이름이에요.' },
  { initial: 'ㅈ', gender: 'U', vibe: '지적', english_name: 'Jordan', meaning: '내려가는 강', description: '지적이고 유연한 존재감을 상징하는 이름이에요.' },

  // ㅊ
  { initial: 'ㅊ', gender: 'M', vibe: '지적', english_name: 'Charles', meaning: '자유인', description: '깊은 지성과 클래식한 권위를 상징해요.' },
  { initial: 'ㅊ', gender: 'M', vibe: '활발한', english_name: 'Chase', meaning: '사냥꾼', description: '활기차고 적극적인 에너지를 가진 이름이에요.' },
  { initial: 'ㅊ', gender: 'M', vibe: '강렬한', english_name: 'Cruz', meaning: '십자가', description: '강렬한 신념과 존재감을 상징하는 이름이에요.' },
  { initial: 'ㅊ', gender: 'M', vibe: '부드러운', english_name: 'Colin', meaning: '비둘기', description: '따뜻하고 부드러운 마음을 담은 이름이에요.' },
  { initial: 'ㅊ', gender: 'M', vibe: '클래식', english_name: 'Christopher', meaning: '그리스도를 품은 자', description: '시대를 초월한 품격과 신뢰를 지닌 이름이에요.' },
  { initial: 'ㅊ', gender: 'F', vibe: '지적', english_name: 'Claire', meaning: '밝은', description: '지적이고 명석한 아름다움을 상징하는 이름이에요.' },
  { initial: 'ㅊ', gender: 'F', vibe: '활발한', english_name: 'Chloe', meaning: '새싹', description: '활기차고 신선한 에너지를 가진 이름이에요.' },
  { initial: 'ㅊ', gender: 'F', vibe: '강렬한', english_name: 'Carmen', meaning: '노래', description: '강렬한 열정과 예술적 감성을 지닌 이름이에요.' },
  { initial: 'ㅊ', gender: 'F', vibe: '부드러운', english_name: 'Cleo', meaning: '영광', description: '우아하고 신비로운 아름다움을 담은 이름이에요.' },
  { initial: 'ㅊ', gender: 'F', vibe: '클래식', english_name: 'Catherine', meaning: '순수한', description: '클래식한 품격과 고귀함을 상징하는 이름이에요.' },
  { initial: 'ㅊ', gender: 'U', vibe: '강렬한', english_name: 'Cyan', meaning: '파란 하늘', description: '강렬하고 선명한 존재감을 상징하는 이름이에요.' },

  // ㅋ
  { initial: 'ㅋ', gender: 'M', vibe: '지적', english_name: 'Kenneth', meaning: '영리한', description: '지적이고 명석한 존재감을 상징하는 이름이에요.' },
  { initial: 'ㅋ', gender: 'M', vibe: '활발한', english_name: 'Kai', meaning: '바다', description: '자유롭고 활기찬 에너지를 가진 이름이에요.' },
  { initial: 'ㅋ', gender: 'M', vibe: '강렬한', english_name: 'Knox', meaning: '언덕', description: '강인하고 불굴의 의지를 상징하는 이름이에요.' },
  { initial: 'ㅋ', gender: 'M', vibe: '부드러운', english_name: 'Kyle', meaning: '해협', description: '차분하고 신뢰감 있는 마음을 담은 이름이에요.' },
  { initial: 'ㅋ', gender: 'M', vibe: '클래식', english_name: 'Kevin', meaning: '온화한', description: '전통적인 친근함과 신뢰를 지닌 이름이에요.' },
  { initial: 'ㅋ', gender: 'F', vibe: '지적', english_name: 'Kate', meaning: '순수한', description: '지적이고 세련된 존재감을 상징하는 이름이에요.' },
  { initial: 'ㅋ', gender: 'F', vibe: '활발한', english_name: 'Kylie', meaning: '부메랑', description: '활기차고 독립적인 에너지를 가진 이름이에요.' },
  { initial: 'ㅋ', gender: 'F', vibe: '강렬한', english_name: 'Kira', meaning: '태양', description: '강렬하게 빛나는 존재감을 상징하는 이름이에요.' },
  { initial: 'ㅋ', gender: 'F', vibe: '부드러운', english_name: 'Kim', meaning: '초원', description: '따뜻하고 친근한 아름다움을 담은 이름이에요.' },
  { initial: 'ㅋ', gender: 'F', vibe: '클래식', english_name: 'Karen', meaning: '순수한', description: '클래식하고 친근한 신뢰감을 지닌 이름이에요.' },
  { initial: 'ㅋ', gender: 'U', vibe: '지적', english_name: 'Kenji', meaning: '건강한 지성', description: '지적이고 균형 잡힌 존재감을 상징하는 이름이에요.' },

  // ㅌ
  { initial: 'ㅌ', gender: 'M', vibe: '지적', english_name: 'Theodore', meaning: '하나님의 선물', description: '깊은 사고와 고귀한 지성을 상징해요.' },
  { initial: 'ㅌ', gender: 'M', vibe: '활발한', english_name: 'Tyler', meaning: '지붕 타일 장인', description: '활기차고 실용적인 에너지를 가진 이름이에요.' },
  { initial: 'ㅌ', gender: 'M', vibe: '강렬한', english_name: 'Titan', meaning: '거인', description: '강렬하고 압도적인 존재감을 상징하는 이름이에요.' },
  { initial: 'ㅌ', gender: 'M', vibe: '부드러운', english_name: 'Tim', meaning: '하나님을 공경하는', description: '따뜻하고 겸손한 마음을 담은 이름이에요.' },
  { initial: 'ㅌ', gender: 'M', vibe: '클래식', english_name: 'Thomas', meaning: '쌍둥이', description: '시대를 초월한 신뢰와 안정을 지닌 이름이에요.' },
  { initial: 'ㅌ', gender: 'F', vibe: '지적', english_name: 'Tessa', meaning: '수확하는 자', description: '지적이고 실용적인 아름다움을 상징하는 이름이에요.' },
  { initial: 'ㅌ', gender: 'F', vibe: '활발한', english_name: 'Taylor', meaning: '재단사', description: '자유롭고 개성 있는 에너지를 가진 이름이에요.' },
  { initial: 'ㅌ', gender: 'F', vibe: '강렬한', english_name: 'Tempest', meaning: '폭풍', description: '강렬하고 역동적인 존재감을 상징하는 이름이에요.' },
  { initial: 'ㅌ', gender: 'F', vibe: '부드러운', english_name: 'Tara', meaning: '언덕', description: '고요하고 안정적인 아름다움을 담은 이름이에요.' },
  { initial: 'ㅌ', gender: 'F', vibe: '클래식', english_name: 'Teresa', meaning: '수확', description: '클래식한 헌신과 따뜻함을 지닌 이름이에요.' },
  { initial: 'ㅌ', gender: 'U', vibe: '강렬한', english_name: 'Trace', meaning: '흔적', description: '강렬한 인상과 독특한 존재감을 상징하는 이름이에요.' },

  // ㅍ
  { initial: 'ㅍ', gender: 'M', vibe: '지적', english_name: 'Philip', meaning: '말을 사랑하는', description: '깊은 지식과 탐구 정신을 상징하는 이름이에요.' },
  { initial: 'ㅍ', gender: 'M', vibe: '활발한', english_name: 'Parker', meaning: '공원 관리인', description: '활기차고 자유로운 에너지를 가진 이름이에요.' },
  { initial: 'ㅍ', gender: 'M', vibe: '강렬한', english_name: 'Phoenix', meaning: '불사조', description: '강렬한 재생과 불굴의 의지를 상징해요.' },
  { initial: 'ㅍ', gender: 'M', vibe: '부드러운', english_name: 'Percy', meaning: '계곡', description: '따뜻하고 섬세한 감성을 담은 이름이에요.' },
  { initial: 'ㅍ', gender: 'M', vibe: '클래식', english_name: 'Patrick', meaning: '귀족', description: '전통적인 고귀함과 신뢰를 지닌 이름이에요.' },
  { initial: 'ㅍ', gender: 'F', vibe: '지적', english_name: 'Penelope', meaning: '베를 짜는 자', description: '지혜롭고 인내력 있는 지성을 상징하는 이름이에요.' },
  { initial: 'ㅍ', gender: 'F', vibe: '활발한', english_name: 'Piper', meaning: '피리 부는 자', description: '활기차고 음악적인 에너지를 가진 이름이에요.' },
  { initial: 'ㅍ', gender: 'F', vibe: '강렬한', english_name: 'Petra', meaning: '바위', description: '강인하고 불굴의 존재감을 상징하는 이름이에요.' },
  { initial: 'ㅍ', gender: 'F', vibe: '부드러운', english_name: 'Paige', meaning: '어린 학생', description: '섬세하고 배움을 사랑하는 마음을 담은 이름이에요.' },
  { initial: 'ㅍ', gender: 'F', vibe: '클래식', english_name: 'Patricia', meaning: '귀족', description: '클래식한 품격과 고귀함을 상징하는 이름이에요.' },
  { initial: 'ㅍ', gender: 'U', vibe: '강렬한', english_name: 'Pierce', meaning: '바위', description: '강렬하고 날카로운 존재감을 상징하는 이름이에요.' },

  // ㅎ
  { initial: 'ㅎ', gender: 'M', vibe: '지적', english_name: 'Harvey', meaning: '불타는 전투', description: '깊은 사고와 열정적인 지성을 상징하는 이름이에요.' },
  { initial: 'ㅎ', gender: 'M', vibe: '활발한', english_name: 'Hunter', meaning: '사냥꾼', description: '활기차고 목표 지향적인 에너지를 가진 이름이에요.' },
  { initial: 'ㅎ', gender: 'M', vibe: '강렬한', english_name: 'Hawk', meaning: '매', description: '강렬하고 예리한 존재감을 상징하는 이름이에요.' },
  { initial: 'ㅎ', gender: 'M', vibe: '부드러운', english_name: 'Hugh', meaning: '지성', description: '따뜻하고 사려 깊은 마음을 담은 이름이에요.' },
  { initial: 'ㅎ', gender: 'M', vibe: '클래식', english_name: 'Henry', meaning: '집의 주인', description: '시대를 초월한 권위와 신뢰를 지닌 이름이에요.' },
  { initial: 'ㅎ', gender: 'F', vibe: '지적', english_name: 'Helena', meaning: '밝은 빛', description: '지적이고 빛나는 아름다움을 상징하는 이름이에요.' },
  { initial: 'ㅎ', gender: 'F', vibe: '활발한', english_name: 'Harper', meaning: '하프 연주자', description: '창의적이고 활기찬 에너지를 가진 이름이에요.' },
  { initial: 'ㅎ', gender: 'F', vibe: '강렬한', english_name: 'Haven', meaning: '피난처', description: '강인하고 보호적인 존재감을 상징하는 이름이에요.' },
  { initial: 'ㅎ', gender: 'F', vibe: '부드러운', english_name: 'Hannah', meaning: '은혜', description: '따뜻하고 포용적인 아름다움을 담은 이름이에요.' },
  { initial: 'ㅎ', gender: 'F', vibe: '클래식', english_name: 'Helen', meaning: '밝은 빛', description: '클래식한 아름다움과 지성을 상징하는 이름이에요.' },
  { initial: 'ㅎ', gender: 'U', vibe: '강렬한', english_name: 'Harley', meaning: '산 토끼', description: '강렬하고 자유로운 존재감을 상징하는 이름이에요.' },
];

export const VIBES: Vibe[] = ['지적', '강렬한', '부드러운', '활발한', '클래식'];
