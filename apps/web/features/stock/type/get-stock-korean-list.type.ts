import { StockCategoryValue } from '@packages/shared/constant';

import { StockKoreanCompanyModel } from '../model';

export interface GetStockKoreanListReq {
  page: number;
  kind?: StockCategoryValue;
  text?: string;
}

export interface GetStockKoreanListRes {
  stockKoreanList: StockKoreanCompanyModel[];
  total: number;
  nextPage: number | null;
}
