import { GoogleAdMob } from '@apps-in-toss/web-framework';
import { useCallback } from 'react';
import { AD_CONFIG } from '../constants/adConfig';

// 모듈 레벨 싱글톤 — 어느 컴포넌트에서 호출해도 같은 상태를 공유합니다.
// (useRef는 컴포넌트 인스턴스마다 독립적이라 preload/showAd가 엇갈리는 버그 발생)
let adIsLoaded = false;
let adIsLoading = false;

const isTossApp = () => /Toss/i.test(navigator.userAgent);

const isSupported = () => {
  try {
    return (
      GoogleAdMob.loadAppsInTossAdMob.isSupported() &&
      GoogleAdMob.showAppsInTossAdMob.isSupported()
    );
  } catch {
    return false;
  }
};

// 모듈 레벨 preload — showAd 내부에서도 동일 함수를 재사용합니다.
const loadAd = () => {
  if (!isTossApp() || !isSupported()) return;
  if (adIsLoaded || adIsLoading) return;

  adIsLoading = true;

  try {
    GoogleAdMob.loadAppsInTossAdMob({
      options: { adGroupId: AD_CONFIG.INTERSTITIAL },
      onEvent: (event: any) => {
        if (event.type === 'loaded') {
          adIsLoaded = true;
          adIsLoading = false;
        } else if (event.type === 'failedToLoad') {
          adIsLoading = false;
        }
      },
      onError: () => {
        adIsLoading = false;
      },
    });
  } catch {
    adIsLoading = false;
  }
};

export const useTossInterstitialAd = () => {
  // preload는 App.tsx 진입 시 호출 — 모듈 레벨 loadAd를 그대로 래핑
  const preload = useCallback(() => {
    loadAd();
  }, []);

  // 광고 노출 — 광고가 닫히거나 실패하면 onClose 콜백으로 다음 로직을 실행합니다.
  const showAd = useCallback((onClose: () => void) => {
    if (!isTossApp()) {
      console.log('[Ad] 토스 앱 외부 환경 → 전면 광고 스킵');
      onClose();
      return;
    }

    if (!isSupported() || !adIsLoaded) {
      console.log('[Ad] 광고 미로드 상태 → 스킵');
      onClose();
      return;
    }

    adIsLoaded = false;
    let isDone = false;
    let unsubscribeShow: (() => void) | undefined;

    const handleNext = () => {
      if (isDone) return;
      isDone = true;
      if (unsubscribeShow) unsubscribeShow();
      onClose();   // 광고 닫힌 직후 다음 액션 실행
      loadAd();    // 다음 광고를 위해 즉시 재로드
    };

    try {
      unsubscribeShow = GoogleAdMob.showAppsInTossAdMob({
        options: { adGroupId: AD_CONFIG.INTERSTITIAL },
        onEvent: (event: any) => {
          if (
            event.type === 'adClosed' ||
            event.type === 'adFailedToShow' ||
            event.type === 'dismissed'
          ) {
            handleNext();
          }
        },
        onError: () => handleNext(),
      });
    } catch {
      handleNext();
    }
  }, []);

  return { preload, showAd };
};
