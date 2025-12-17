import { Card, NotAuthView } from '@/components/card';

import { getUserInfo } from '@/services/user';

import BoardRegister from './BoardRegister';

export default async function BoardRegisterPage() {
  const { data: userInfo } = await getUserInfo();

  if (!userInfo) {
    return <NotAuthView text="게시글 등록" />;
  }

  return (
    <Card.MAIN text="게시글 등록">
      <BoardRegister />
    </Card.MAIN>
  );
}
