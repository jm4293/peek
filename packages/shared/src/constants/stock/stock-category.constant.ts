export const StockCategory = {
  KOSPI: 1,
  KOSDAQ: 2,
  STOCK_US: 3,
} as const;

export type StockCategoryKey = keyof typeof StockCategory;
export type StockCategoryValue = (typeof StockCategory)[keyof typeof StockCategory];
