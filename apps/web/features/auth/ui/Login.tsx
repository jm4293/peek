'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { Text } from '@app/web/components';
import { LocalStorageKey } from '@app/web/shared';
import { LocalStorageUtil } from '@app/web/utils';

import { UserAccountType, UserAccountTypeValue } from '@packages/shared/constant';

import { ButtonGoogle } from './ButtonGoogle';
import { ButtonKakao } from './ButtonKakao';
import { ButtonNaver } from './ButtonNaver';
import { LastLoginBadge } from './LastLoginBadge';

gsap.registerPlugin(useGSAP);

export function Login() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);

  const [lastLoginMethod, setLastLoginMethod] = useState<UserAccountTypeValue | null>(null);

  useGSAP(
    () => {
      if (!buttonsRef.current || !backButtonRef.current) {
        return;
      }

      const tl = gsap.timeline();

      const buttonElements = Array.from(buttonsRef.current.children);

      tl.from(
        buttonElements,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.15,
          ease: 'power2.out',
        },
        0.3,
      );

      tl.from(
        backButtonRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.2',
      );

      return () => {
        tl.kill();
      };
    },
    {
      scope: containerRef,
    },
  );

  useEffect(() => {
    const lastMethod = LocalStorageUtil.getItem(LocalStorageKey.lastLoginMethod);

    if (lastMethod) {
      setLastLoginMethod(JSON.parse(lastMethod));
    }
  }, []);

  return (
    <div className="relative w-screen h-screen flex justify-center items-center bg-theme-bg-main overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-md" ref={containerRef}>
        <div ref={textRef} className="flex flex-col gap-2">
          <p className="text-center font-bold text-2xl">안녕하세요!</p>
        </div>

        <div className="flex flex-col gap-8 w-full px-8" ref={buttonsRef}>
          <div className="relative w-full">
            {lastLoginMethod === UserAccountType.GOOGLE && <LastLoginBadge />}
            <ButtonGoogle />
          </div>

          <div className="relative w-full">
            {lastLoginMethod === UserAccountType.NAVER && <LastLoginBadge />}
            <ButtonNaver />
          </div>

          <div className="relative w-full">
            {lastLoginMethod === UserAccountType.KAKAO && <LastLoginBadge />}
            <ButtonKakao />
          </div>

          <Text.PARAGRAPH
            text="계속 진행하면 PEEK의 이용약관 및 개인정보처리방침에 동의하는 것입니다."
            className="text-center"
          />
        </div>

        <button ref={backButtonRef} onClick={() => router.back()}>
          <Text.PARAGRAPH text="뒤로가기" className="underline" />
        </button>
      </div>
    </div>
  );
}
