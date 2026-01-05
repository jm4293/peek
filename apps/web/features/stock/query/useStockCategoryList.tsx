import { useQuery } from '@tanstack/react-query';

import { QUERY_CACHE_TIME_SIX, QueryKeys } from '@app/web/shared';

import { stockApi } from '../api';

export const useStockCategoryList = () => {
  return useQuery({
    queryKey: QueryKeys.stock.stockCategoryList(),
    queryFn: () => stockApi.getStockCategoryList(),
    select: (res) => res.data.stockCategoryList,
    staleTime: QUERY_CACHE_TIME_SIX,
  });
};
