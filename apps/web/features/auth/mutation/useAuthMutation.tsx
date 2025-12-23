'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

import { useToast } from '@app/web/hooks';
import { LocalStorageKey } from '@app/web/shared';
import { notificationTokenAtom } from '@app/web/stores';
import { LocalStorageUtil, SessionStorageUtil } from '@app/web/utils';

import { userAccountTypeDescription } from '@packages/shared/constant';

import { authApi } from '../api';
import {
  CheckEmailCodeRequest,
  CheckEmailRequest,
  SignInEmailRequest,
  SignInOAuthRequest,
  SignUpEmailRequest,
} from '../type';

export const useAuthMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const notificationToken = useAtomValue(notificationTokenAtom);

  const { openToast } = useToast();
  // const { notificationTokenMutation } = useUserMutation();

  const signInMutation = useMutation({
    mutationFn: (dto: SignInEmailRequest) => authApi.signInEmail(dto),
    onSuccess: async () => {
      // if (notificationToken) {
      //   await notificationTokenMutation.mutateAsync(notificationToken);
      // }

      openToast({ type: 'success', message: '로그인에 성공했습니다.' });
      router.push('/home');
      router.refresh();
    },
    onError: (err: any) => {
      const { message } = err.response.data;

      openToast({ type: 'error', message: message || '로그인에 실패했습니다. 다시 시도해주세요.' });
    },
  });

  const oauthSignInMutation = useMutation({
    mutationFn: (dto: SignInOAuthRequest) => authApi.signInOauth(dto),
    onSuccess: async (_, variables) => {
      const { userAccountType } = variables;

      // if (notificationToken) {
      //   await notificationTokenMutation.mutateAsync(notificationToken);
      // }

      LocalStorageUtil.setItem(LocalStorageKey.lastLoginMethod, JSON.stringify(userAccountType));
      openToast({ type: 'success', message: `${userAccountTypeDescription[userAccountType]} 로그인에 성공했습니다.` });
      router.replace('/home');
      // router.refresh();
    },
    onError: () => {
      router.replace('/auth/login');
    },
  });

  const checkEmailMutation = useMutation({
    mutationFn: (dto: CheckEmailRequest) => authApi.checkEmail(dto),
  });

  const checkEmailCodeMutation = useMutation({
    mutationFn: (dto: CheckEmailCodeRequest) => authApi.checkEmailCode(dto),
  });

  const signUpMutation = useMutation({
    mutationFn: (dto: SignUpEmailRequest) => authApi.signUp(dto),
    onSuccess: (res) => {
      const { email } = res.data;

      openToast({ type: 'success', message: '회원가입이 완료되었습니다.' });
      router.push(`/auth/login?email=${email}`);
    },
    onError: () => {
      openToast({ type: 'error', message: '회원가입에 실패했습니다. 다시 시도해주세요.' });
    },
  });

  const signoutMutation = useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      // const firebase_messaging = getMessaging();
      // await deleteToken(firebase_messaging);

      // if ('serviceWorker' in navigator) {
      //   const registrations = await navigator.serviceWorker.getRegistrations();
      //
      //   navigator.serviceWorker.addEventListener('message', (event) => {
      //     if (event.data && event.data.type === 'TERMINATED') {
      //     }
      //   });
      //
      //   for (const registration of registrations) {
      //     if (registration.active) {
      //       registration.active.postMessage({ type: 'TERMINATE' });
      //     }
      //     await registration.unregister();
      //   }
      // }

      queryClient.clear();
      // LocalStorageUtil.clear();
      SessionStorageUtil.clear();
      openToast({ type: 'success', message: '로그아웃에 성공했습니다.' });
      router.push('/home');
      // router.refresh();
    },
    onError: () => {
      openToast({ type: 'error', message: '로그아웃에 실패했습니다. 다시 시도해주세요.' });
    },
  });

  return {
    signInMutation,
    oauthSignInMutation,
    checkEmailMutation,
    checkEmailCodeMutation,
    signUpMutation,
    signoutMutation,
  };
};
