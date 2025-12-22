import { Card } from '@app/web/components';

import MineBoardList from './MineBoardList';

export default function UserBoardPage() {
  return (
    <Card.MAIN text="작성한 게시글">
      <MineBoardList />
    </Card.MAIN>
  );
}
