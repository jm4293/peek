import { Card } from '@app/web/components';
import { getUserInfo } from '@app/web/features';

import BoardCategory from './BoardCategory';
import BoardList from './BoardList';
import BoardRegisterButton from './BoardRegisterButton';

export default async function BoardPage() {
  const { data: userInfo } = await getUserInfo();

  return (
    <Card.MAIN>
      <div className="flex flex-col gap-4">
        <BoardCategory />
        <BoardList />
        <BoardRegisterButton userInfo={userInfo} />
      </div>
    </Card.MAIN>
  );
}
