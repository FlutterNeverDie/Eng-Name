import { GoogleAdMob } from '@apps-in-toss/web-framework';
import { useRef, useCallback } from 'react';
import { AD_CONFIG } from '../constants/adConfig';

export const useTossInterstitialAd = () => {
  const isLoaded = useRef(false);
  const isLoading = useRef(false);

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

  // 광고를 미리 로드 — 사용자가 버튼을 누르기 전에 최대한 일찍 호출해야 합니다.
  // 로드 완료 후 isLoaded.current = true 가 되어 showAd에서 즉시 사용 가능합니다.
  const preload = useCallback(() => {
    if (!isTossApp() || !isSupported()) return;
    if (isLoaded.current || isLoading.current) return;

    isLoading.current = true;

    try {
      GoogleAdMob.loadAppsInTossAdMob({
        options: { adGroupId: AD_CONFIG.INTERSTITIAL },
        onEvent: (event: any) => {
          if (event.type === 'loaded') {
            isLoaded.current = true;
            isLoading.current = false;
          } else if (event.type === 'failedToLoad') {
            isLoading.current = false;
          }
        },
        onError: () => {
          isLoading.current = false;
        },
      });
    } catch {
      isLoading.current = false;
    }
  }, []);

  // 광고 노출 — 광고가 닫히거나 로드 실패 시 onClose 콜백으로 다음 로직을 실행합니다.
  const showAd = useCallback(
    (onClose: () => void) => {
      if (!isTossApp()) {
        // 토스 앱 외부(개발 환경 등)에서는 광고를 건너뜀
        console.log('[Ad] 토스 앱 외부 환경 → 전면 광고 스킵');
        onClose();
        return;
      }

      if (!isSupported() || !isLoaded.current) {
        // 광고가 아직 로드되지 않았으면 광고 없이 진행
        onClose();
        return;
      }

      isLoaded.current = false;
      let isDone = false;
      let unsubscribe: (() => void) | undefined;

      const handleNext = () => {
        if (isDone) return;
        isDone = true;
        unsubscribe?.();
        onClose();       // 광고 닫힌 직후 다음 액션 실행
        preload();       // 다음 광고를 위해 즉시 재로드
      };

      try {
        unsubscribe = GoogleAdMob.showAppsInTossAdMob({
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
    },
    [preload],
  );

  return { preload, showAd };
};
