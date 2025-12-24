import { CurrencyHistoryModel } from '../model';

export type GetCurrencyListRequest = {};

export type GetCurrencyListResponse = {
  currencyList: CurrencyHistoryModel[];
  total: number;
};
