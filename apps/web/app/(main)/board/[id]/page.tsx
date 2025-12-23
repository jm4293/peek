import { Suspense } from 'react';

import { Card, SkeletonSuspense } from '@app/web/components';
import { getBoardDetail, getUserInfo } from '@app/web/features';

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
    <Card.MAIN>
      <Suspense fallback={<SkeletonSuspense />}>
        <BoardDetail board={board} userInfo={userInfo} />
      </Suspense>

      <BoardComment id={id} userInfo={userInfo} />
      <BoardCommentRegister id={id} userInfo={userInfo} />
    </Card.MAIN>
  );
}
