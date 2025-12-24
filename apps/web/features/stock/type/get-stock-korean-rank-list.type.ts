import { StockRankValue } from '@packages/shared/constant';

import { StockKoreanCompanyModel } from '../model';

export type GetStockKoreanRankListRequest = {
  page: number;
  type: StockRankValue;
};

export type GetStockKoreanRankListResponse = {
  stockKoreanList: StockKoreanCompanyModel[];
  total: number;
  nextPage: number | null;
};
