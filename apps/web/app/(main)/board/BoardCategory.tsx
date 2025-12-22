'use client';

import { useRouter } from 'next/navigation';

import { InternalErrorView, LoadingView, Tab } from '@app/web/components';
import { useStockCategoryList } from '@app/web/features';
import { useDeviceLayout, useQueryParams } from '@app/web/hooks';
import { LocalStorageKey } from '@app/web/shared';
import { LocalStorageUtil } from '@app/web/utils';

export default function BoardCategory() {
  const router = useRouter();

  const { getQuery } = useQueryParams();
  const stockCategory = getQuery('stockCategory');

  const { isMobile } = useDeviceLayout();

  const { data, isPending, isSuccess } = useStockCategoryList();

  if (isPending) {
    return <LoadingView />;
  }

  if (!isSuccess) {
    return <InternalErrorView />;
  }

  const handleCategoryChange = (value: string | number) => {
    LocalStorageUtil.setItem(LocalStorageKey.boardStockCategory, value.toString());

    window.dispatchEvent(new Event('stockCategoryChange'));
    router.push(`/board?stockCategory=${value}`);
  };

  const tabItems = data.map((category) => ({
    value: category.id.toString(),
    label: category.name,
  }));

  return (
    <div className={`sticky z-40 flex flex-col gap-4 ${isMobile ? 'top-12' : 'top-16'}`}>
      <Tab items={tabItems} value={stockCategory || undefined} onChange={handleCategoryChange} size="sm" />
    </div>
  );
}
