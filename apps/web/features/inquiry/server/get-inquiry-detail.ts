'use server';

import { cookies } from 'next/headers';

import { apiFetch } from '@app/web/lib';
import { ACCESS_TOKEN_NAME, ERROR_CODE, REFRESH_TOKEN_NAME, ResponseType } from '@app/web/shared';
import { getOrRefreshAccessToken } from '@app/web/utils';

import { InquiryModel } from '../model';

export const getInquiryDetail = async (inquiryId: string): Promise<ResponseType<InquiryModel | null>> => {
  const cookieStore = await cookies();

  const tkn = cookieStore.get(ACCESS_TOKEN_NAME);
  const rtkn = cookieStore.get(REFRESH_TOKEN_NAME);

  try {
    const validTkn = await getOrRefreshAccessToken(tkn?.value, rtkn?.value);

    if (!validTkn) {
      return { success: false, data: null, code: ERROR_CODE.UNAUTHORIZED };
    }

    // apiFetch가 자동으로 NestJS 응답에서 data를 추출
    const { inquiry } = await apiFetch<{ inquiry: InquiryModel }>(`/inquiry/${inquiryId}`, {
      credentials: 'include',
      headers: {
        cookie: `${ACCESS_TOKEN_NAME}=${validTkn}`,
      },
    });

    return { success: true, data: inquiry };
  } catch {
    return { success: false, data: null };
  }
};
