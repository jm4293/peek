'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuthMutation } from '@app/web/features';
import { useToast } from '@app/web/hooks';

import { UserAccountType } from '@packages/shared/constant';

export const GoogleOauth = () => {
  const router = useRouter();

  const { openToast } = useToast();
  const { oauthSignInMutation } = useAuthMutation();

  useEffect(() => {
    const hash = window.location.hash;

    const params = new URLSearchParams(hash.substring(1));

    const token = params.get('access_token');
    const tokenType = params.get('token_type');
    const expire = params.get('expires_in');

    if (!token) {
      openToast({ type: 'error', message: '구글 로그인에 실패했습니다. 다시 시도해주세요.' });
      router.replace('/auth/login');
      return;
    }

    oauthSignInMutation.mutate({
      token,
      userAccountType: UserAccountType.GOOGLE,
      tokenType,
      expire: expire ? Number(expire) : null,
    });
  }, []);

  return null;
};
