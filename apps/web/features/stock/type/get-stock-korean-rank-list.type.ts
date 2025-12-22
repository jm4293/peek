import { StockRankValue } from '@packages/shared/constant';

import { StockKoreanCompanyModel } from '../model';

export interface GetStockKoreanRankListReq {
  page: number;
  type: StockRankValue;
}

export interface GetStockKoreanRankListRes {
  stockKoreanList: StockKoreanCompanyModel[];
  total: number;
  nextPage: number | null;
}
