import { Suspense } from 'react';

import { Card } from '@/components/card';
import { SkeletonSuspense } from '@/components/skeleton';

import { getBoardDetail } from '@/services/board';
import { getUserInfo } from '@/services/user';

import BoardComment from './BoardComment';
import BoardCommentRegister from './BoardCommentRegister';
import BoardDetail from './BoardDetail';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function BoardDetailPage(props: Props) {
  const { id } = await props.params;

  const { data: userInfo, success } = await getUserInfo();

  const board = getBoardDetail(id);

  return (
    <Card.MAIN text="게시글">
      <Suspense fallback={<SkeletonSuspense />}>
        <BoardDetail board={board} userInfo={userInfo} />
      </Suspense>

      <BoardComment id={id} userInfo={userInfo} />
      <BoardCommentRegister id={id} userInfo={userInfo} />
    </Card.MAIN>
  );
}
