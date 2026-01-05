'use client';

import { ChevronLeft, ChevronRight, Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

import { Card, EmptyDataView, InternalErrorView, LoadingView, Text, Thumbnail } from '@app/web/components';
import { useQueryParams } from '@app/web/hooks';
import { DayjsUtil } from '@app/web/utils';

import { BoardModel } from '../../model';
import { useBoardListPaginated } from '../../query';
import { BoardSortType } from '../../type';

export const BoardList = () => {
  const { getQuery, setQuery } = useQueryParams();
  const stockCategory = getQuery('category') || undefined;
  const page = Number(getQuery('page')) || 1;
  const sort = (getQuery('sort') as BoardSortType) || 'newest';
  const searchText = getQuery('text') || undefined;

  const { data, isPending, isSuccess } = useBoardListPaginated({
    page,
    stockCategory,
    sort,
    text: searchText,
  });

  const renderItem = (item: BoardModel) => {
    const { id, stockCategory, title, createdAt, commentCount, likeCount, userAccount } = item;

    return (
      <li key={id}>
        <Card.SECTION>
          <Link href={`/board/${id}`} className="flex flex-col gap-2">
            <div className="w-full flex justify-between items-center">
              <div className="w-full flex items-center gap-2">
                <Text.PARAGRAPH text={`[${stockCategory.name}]`} className="whitespace-nowrap" />
                <Text.HEADING text={title} className="truncate" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Thumbnail thumbnail={userAccount.user.thumbnail} size={16} />
                  <Text.PARAGRAPH text={userAccount.user.nickname} className="whitespace-nowrap" />
                </div>
                <Text.CAPTION text={DayjsUtil.of(createdAt).formatRelative()} color="gray" />
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Heart size={16} color="gray" />
                  <Text.PARAGRAPH text={String(likeCount)} color="gray" />
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={16} color="gray" />
                  <Text.PARAGRAPH text={String(commentCount)} color="gray" />
                </div>
              </div>
            </div>
          </Link>
        </Card.SECTION>
      </li>
    );
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setQuery('page', String(page - 1));
    }
  };

  const handleNextPage = () => {
    if (data?.nextPage) {
      setQuery('page', String(page + 1));
    }
  };

  if (isPending) {
    return <LoadingView />;
  }

  if (!isSuccess) {
    return <InternalErrorView />;
  }

  if (data.boardList.length === 0) {
    return <EmptyDataView text="게시글" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <ol className="flex flex-col gap-2">{data.boardList.map(renderItem)}</ol>

      <Card.SECTION className="grid grid-cols-9">
        <div className="col-span-3">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="p-2 rounded-lg bg-layer-1/80 border border-border-0 disabled:opacity-50 transition-all hover:bg-layer-2 flex justify-center">
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <Text.PARAGRAPH text={`${page} / ${data.totalPages || 1}`} />
        </div>
        <div className="col-span-3 flex justify-end">
          <button
            onClick={handleNextPage}
            disabled={!data.nextPage}
            className="p-2 rounded-lg bg-layer-1/80 border border-border-0 disabled:opacity-50 transition-all hover:bg-layer-2 flex justify-center">
            <ChevronRight size={20} />
          </button>
        </div>
      </Card.SECTION>
    </div>
  );
};
