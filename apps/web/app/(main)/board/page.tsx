import { Card } from '@app/web/components';
import { BoardFilterWrapper, BoardList, BoardRegisterButton, getUserInfo } from '@app/web/features';

export default async function BoardPage() {
  const { data: userInfo } = await getUserInfo();

  return (
    <Card.MAIN>
      <BoardFilterWrapper />
      <BoardList />

      <BoardRegisterButton userInfo={userInfo} />
    </Card.MAIN>
  );
}
