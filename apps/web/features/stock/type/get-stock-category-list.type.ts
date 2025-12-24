import { StockCategoryModel } from '../model';

export type GetStockCategoryListRequest = {};

export type GetStockCategoryListResponse = {
  stockCategoryList: StockCategoryModel[];
};
