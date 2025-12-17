'use client';

import { DayjsUtil } from '@/utils';
import Link from 'next/link';

import { Card, EmptyDataView, InternalErrorView, LoadingView } from '@/components/card';
import { InfinityList } from '@/components/infinity-list';
import { Text } from '@/components/text';

import { BoardCommentModel, useBoardCommentListMine } from '@/services/board';

export default function MineBoardCommentList() {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isPending, isSuccess } = useBoardCommentListMine();

  const renderItem = (item: BoardCommentModel) => {
    const { id, content, createdAt, board } = item;

    return (
      <li key={id}>
        <Card.SECTION>
          <Link href={`/board/${board.id}`} className="flex flex-col gap-1">
            <div className="w-full flex justify-between items-center">
              <div className="w-full flex items-center gap-2">
                <Text.PARAGRAPH text={`[${board.stockCategory.name}]`} color="gray" className="whitespace-nowrap" />
                <Text.PARAGRAPH text={board.title} className="truncate" />
              </div>

              <Text.CAPTION
                text={DayjsUtil.of(createdAt).formatYYMMDDHHmm()}
                color="gray"
                className="whitespace-nowrap"
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <Text.PARAGRAPH text="댓글:" className="whitespace-nowrap" />
              <Text.PARAGRAPH text={content} className="truncate" />
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

  if (data.boardCommentList.length === 0) {
    return <EmptyDataView text="작성한 댓글" />;
  }

  return (
    <InfinityList hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} fetchNextPage={fetchNextPage}>
      {data.boardCommentList.map(renderItem)}
    </InfinityList>
  );
}
