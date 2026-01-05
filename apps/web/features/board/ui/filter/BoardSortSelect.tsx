'use client';

import { Select } from '@app/web/components';
import { useQueryParams } from '@app/web/hooks';

import { BoardSortType } from '../../type';

const SORT_OPTIONS = [
  { value: 'newest', label: '최신순' },
  { value: 'oldest', label: '오래된순' },
  // { value: 'popular', label: '인기순' },
];

export const BoardSortSelect = () => {
  const { getQuery, setQueries } = useQueryParams();
  const value = getQuery('sort');

  const handleSortChange = (newValue: string) => {
    setQueries({ sort: newValue as BoardSortType, page: 1 });
  };

  return <Select name="sort" options={SORT_OPTIONS} value={value} onChange={handleSortChange} className="w-32" />;
};
