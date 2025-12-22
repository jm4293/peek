'use server';

import { cookies } from 'next/headers';

import { apiFetch } from '@app/web/lib';
import { ACCESS_TOKEN_NAME, ERROR_CODE, REFRESH_TOKEN_NAME, ResponseType } from '@app/web/shared';
import { getOrRefreshAccessToken } from '@app/web/utils';

import { UserAccountModel } from '../model';
import { GetUserInfoRes } from '../type';

export const getUserInfo = async (): Promise<ResponseType<UserAccountModel>> => {
  const cookieStore = await cookies();

  const tkn = cookieStore.get(ACCESS_TOKEN_NAME);
  const rtkn = cookieStore.get(REFRESH_TOKEN_NAME);

  try {
    const validTkn = await getOrRefreshAccessToken(tkn?.value, rtkn?.value);

    if (!validTkn) {
      return { success: false, data: null, code: ERROR_CODE.UNAUTHORIZED };
    }

    // apiFetch가 자동으로 NestJS 응답에서 data를 추출
    const { userInfo } = await apiFetch<GetUserInfoRes>('/user', {
      credentials: 'include',
      headers: {
        cookie: `${ACCESS_TOKEN_NAME}=${validTkn}`,
      },
    });

    return { success: true, data: userInfo };
  } catch (error) {
    return { success: false, data: null, code: ERROR_CODE.INTERNAL_ERROR };
  }
};
