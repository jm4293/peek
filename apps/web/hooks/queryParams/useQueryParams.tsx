'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type QueryValue = string | number | boolean | null | undefined;
type QueryObject = Record<string, QueryValue>;

export const useQueryParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getQuery = useCallback(
    (key: string): string | null => {
      return searchParams.get(key);
    },
    [searchParams],
  );

  const hasQuery = useCallback(
    (key: string): boolean => {
      return searchParams.has(key);
    },
    [searchParams],
  );

  const setQuery = useCallback(
    (key: string, value: QueryValue): void => {
      const params = new URLSearchParams(searchParams);

      if (value !== null && value !== undefined && value !== '') {
        params.set(key, String(value));
      } else {
        params.delete(key);
      }

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router],
  );

  const setQueries = useCallback(
    (queryObject: QueryObject): void => {
      const params = new URLSearchParams(searchParams);

      Object.entries(queryObject).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          params.set(key, String(value));
        } else {
          params.delete(key);
        }
      });

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router],
  );

  return {
    getQuery,
    hasQuery,
    setQuery,
    setQueries,
  };
};
