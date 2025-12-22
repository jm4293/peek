'use client';

import { Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

import {
  InfinityList,
  Card,
  EmptyDataView,
  InternalErrorView,
  LoadingView,
  Text,
  Thumbnail,
} from '@app/web/components';
import { BoardModel, useBoardList } from '@app/web/features';
import { useQueryParams } from '@app/web/hooks';
import { DayjsUtil } from '@app/web/utils';

export default function BoardList() {
  const { getQuery } = useQueryParams();
  const stockCategory = getQuery('stockCategory');

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isPending, isSuccess } = useBoardList({
    stockCategory: stockCategory ? Number(stockCategory) : undefined,
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
    <InfinityList hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} fetchNextPage={fetchNextPage}>
      {data.boardList.map(renderItem)}
    </InfinityList>
  );
}
