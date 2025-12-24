export type GetStockKoreanIndexCandleListRequest = {
  code: string;
  startDate?: string;
  endDate?: string;
  limit?: number;
};

export type GetStockKoreanIndexCandleListResponse = {
  code: string;
  candleList: {
    open: number;
    high: number;
    low: number;
    close: number;
    time: number;
  }[];
  count: number;
};
