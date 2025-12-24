import { useQuery } from '@tanstack/react-query';

import { QUERY_CACHE_TIME_SIX, QueryKeys } from '@app/web/shared';

import stockApi from '../api/stock.api';
import { GetStockKoreanIndexCandleListRequest } from '../type';

interface Props extends GetStockKoreanIndexCandleListRequest {}

export const useStockKoreanIndexCandleList = (props: Props) => {
  const { code, ...rest } = props;

  return useQuery({
    queryKey: QueryKeys.stock.stockKoreanIndexCandleList(code),
    queryFn: () => stockApi.getStockKoreanIndexCandleList(props),
    select: (res) => ({
      code,
      candleList: res.data.candleList,
      count: res.data.count,
    }),
    staleTime: QUERY_CACHE_TIME_SIX,
  });
};
