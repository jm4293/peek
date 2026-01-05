import { Card, NotAuthView } from '@app/web/components';
import { BoardRegister, getUserInfo } from '@app/web/features';

export default async function BoardRegisterPage() {
  const { data: userInfo } = await getUserInfo();

  if (!userInfo) {
    return <NotAuthView />;
  }

  return (
    <Card.MAIN>
      <BoardRegister />
    </Card.MAIN>
  );
}
