import { useQuery } from '@tanstack/react-query';

import { QUERY_CACHE_TIME_SIX, QueryKeys } from '@app/web/shared';

import stockApi from '../api/stock.api';
import { GetStockKoreanDetailRequest } from '../type';

interface Props extends GetStockKoreanDetailRequest {}

export const useStockKorean = (props: Props) => {
  const { code } = props;

  return useQuery({
    queryKey: QueryKeys.stock.stockKorean(code),
    queryFn: () => stockApi.getStockKorean(props),
    select: (res) => res.data.stockKoreanCompany,
    staleTime: QUERY_CACHE_TIME_SIX,
  });
};
