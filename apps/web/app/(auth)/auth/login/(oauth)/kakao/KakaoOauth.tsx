'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuthMutation } from '@app/web/features';
import { useToast } from '@app/web/hooks';

import { UserAccountType } from '@packages/shared/constant';

export default function KakaoOauth() {
  const router = useRouter();

  const { openToast } = useToast();
  const { oauthSignInMutation } = useAuthMutation();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    const token = queryParams.get('code');

    if (!token) {
      openToast({ type: 'error', message: '카카오 로그인에 실패했습니다. 다시 시도해주세요.' });
      router.replace('/auth/login');
      return;
    }

    oauthSignInMutation.mutate({
      token,
      userAccountType: UserAccountType.KAKAO,
      tokenType: null,
      expire: null,
    });
  }, []);

  return null;
}
