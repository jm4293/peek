import { Card, InternalErrorView, NotAuthView } from '@app/web/components';
import { getUserInfo } from '@app/web/features';
import { ERROR_CODE } from '@app/web/shared';

import ModifyUser from './ModifyUser';

export default async function ModifyUserPage() {
  const { success, data, code } = await getUserInfo();

  if (!success && code === ERROR_CODE.UNAUTHORIZED) {
    return <NotAuthView />;
  }

  if (!data) {
    return (
      <Card.MAIN>
        <InternalErrorView />
      </Card.MAIN>
    );
  }

  return (
    <Card.MAIN>
      <ModifyUser userInfo={data} />
    </Card.MAIN>
  );
}
