'use client';

import { Card, InternalErrorView, LoadingView } from '@app/web/components';

import { useStockCategoryList } from '../../../stock';
import { BoardFilter } from './BoardFilter';
import { BoardStockCategory } from './BoardStockCategory';

export const BoardFilterWrapper = () => {
  const { data, isPending, isSuccess } = useStockCategoryList();

  if (isPending) {
    return <LoadingView />;
  }

  if (!isSuccess) {
    return <InternalErrorView />;
  }

  return (
    <Card.SECTION>
      <BoardStockCategory data={data} />
      <BoardFilter />
    </Card.SECTION>
  );
};
