'use server';

import { apiFetch } from '@app/web/lib';
import { ResponseType } from '@app/web/shared';

import { StockKoreanModel } from '../model/stock-korean.model';
import { GetStockKoreanDetailRequest } from '../type';

export const getStockKoreanDetail = async (
  dto: GetStockKoreanDetailRequest,
): Promise<ResponseType<StockKoreanModel | null>> => {
  const { code } = dto;

  try {
    // apiFetch가 자동으로 NestJS 응답에서 data를 추출
    const { stockKorean } = await apiFetch<{ stockKorean: StockKoreanModel }>(`/stock/korean/detail/${code}`);

    return { success: true, data: stockKorean };
  } catch {
    return { success: false, data: null };
  }
};
