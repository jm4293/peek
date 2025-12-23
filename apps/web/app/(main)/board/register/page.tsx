import { Card, NotAuthView } from '@app/web/components';
import { getUserInfo } from '@app/web/features';

import BoardRegister from './BoardRegister';

export default async function BoardRegisterPage() {
  const { data: userInfo } = await getUserInfo();

  if (!userInfo) {
    return <NotAuthView text="게시글 등록" />;
  }

  return (
    <Card.MAIN>
      <BoardRegister />
    </Card.MAIN>
  );
}
