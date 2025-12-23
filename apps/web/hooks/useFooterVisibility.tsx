'use client';

import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';

import { footerVisibilityAtom } from '../stores';
import { useDeviceLayout } from './useDeviceLayout';

export const useFooterVisibility = () => {
  const lastScrollY = useRef(0);

  const [isVisible, setIsVisible] = useAtom(footerVisibilityAtom);
  const { isMobile } = useDeviceLayout();

  useEffect(() => {
    if (!isMobile) {
      return;
    }

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 48) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, setIsVisible]);

  return { isVisible };
};
