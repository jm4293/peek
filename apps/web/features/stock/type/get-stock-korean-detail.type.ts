import { StockKoreanCompanyModel } from '../model';

export type GetStockKoreanDetailRequest = {
  code: string;
};

export type GetStockKoreanDetailResponse = {
  stockKoreanCompany: StockKoreanCompanyModel;
};
