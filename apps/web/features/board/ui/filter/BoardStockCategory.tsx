'use client';

import { useRouter } from 'next/navigation';

import { Tab } from '@app/web/components';
import { useQueryParams } from '@app/web/hooks';
import { LocalStorageKey } from '@app/web/shared';
import { LocalStorageUtil } from '@app/web/utils';

import { StockCategoryModel } from '../../../stock';

interface BoardCategoryProps {
  data: StockCategoryModel[];
}

export const BoardStockCategory = ({ data }: BoardCategoryProps) => {
  const router = useRouter();

  const { getQuery } = useQueryParams();
  const stockCategory = getQuery('category');

  const handleCategoryChange = (value: string | number) => {
    LocalStorageUtil.setItem(LocalStorageKey.boardStockCategory, value.toString());
    router.push(`/board?category=${value}`);
  };

  const tabItems = data.map((category) => ({
    value: category.enName,
    label: category.name,
  }));

  return <Tab items={tabItems} value={stockCategory} onChange={handleCategoryChange} />;
};
