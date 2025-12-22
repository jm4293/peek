'use client';

import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@app/web/shared';

import currencyApi from '../api/currency.api';

export const useCurrencyList = () => {
  return useQuery({
    queryKey: QueryKeys.currency.list(),
    queryFn: () => currencyApi.getCurrencyList(),
    select: (res) => res.data.currencyList,
    refetchInterval: 1000 * 10,
  });
};
