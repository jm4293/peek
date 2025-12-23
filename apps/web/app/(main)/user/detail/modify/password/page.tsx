import { Card, InternalErrorView, NotAuthView, Text } from '@app/web/components';
import { getUserInfo } from '@app/web/features';
import { ERROR_CODE } from '@app/web/shared';

import { UserAccountType } from '@packages/shared/constant';

import ModifyPassword from './ModifyPassword';

export default async function ModifyPasswordPage() {
  const { success, data, code } = await getUserInfo();

  if (!success && code === ERROR_CODE.UNAUTHORIZED) {
    return <NotAuthView text="비밀번호 변경" />;
  }

  if (!data) {
    return (
      <Card.MAIN>
        <InternalErrorView />
      </Card.MAIN>
    );
  }

  if (data.userAccountType !== UserAccountType.EMAIL) {
    return (
      <Card.MAIN>
        <Card.SECTION>
          <Text.HEADING text="이메일 회원만 비밀번호 변경이 가능합니다." />
        </Card.SECTION>
      </Card.MAIN>
    );
  }

  return (
    <Card.MAIN>
      <ModifyPassword />
    </Card.MAIN>
  );
}
