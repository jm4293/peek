'use server';

import { apiFetch } from '@app/web/lib';
import { ERROR_CODE, ResponseType } from '@app/web/shared';

import { NoticeModel } from '../model';
import { GetNoticeDetailResponse } from '../type/get-notice-detail.type';

export const getNoticeDetail = async (noticeId: string): Promise<ResponseType<NoticeModel | null>> => {
  try {
    // apiFetch가 자동으로 NestJS 응답에서 data를 추출
    const { notice } = await apiFetch<GetNoticeDetailResponse>(`/notice/${noticeId}`);

    return { success: true, data: notice };
  } catch {
    return { success: false, data: null, code: ERROR_CODE.INTERNAL_ERROR };
  }
};
