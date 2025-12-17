import { Card } from '@/components/card';

import MineBoardCommentList from './MineBoardCommentList';

export default function UserBoardCommentPage() {
  return (
    <Card.MAIN text="작성한 게시글 댓글">
      <MineBoardCommentList />
    </Card.MAIN>
  );
}
