import { StockCategoryValue } from '@packages/shared/constant';

import { StockKoreanCompanyModel } from '../model';

export type GetStockKoreanListRequest = {
  page: number;
  kind?: StockCategoryValue;
  text?: string;
};

export type GetStockKoreanListResponse = {
  stockKoreanList: StockKoreanCompanyModel[];
  total: number;
  nextPage: number | null;
};
