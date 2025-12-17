import { Card, InternalErrorView, NotAuthView } from '@/components/card';
import { Text } from '@/components/text';

import { getUserInfo } from '@/services/user';

import { ERROR_CODE } from '@/shared/constant/error-code/error-code';
import { UserAccountTypeEnum } from '@/shared/enum/user';

import ModifyPassword from './ModifyPassword';

export default async function ModifyPasswordPage() {
  const { success, data, code } = await getUserInfo();

  if (!success && code === ERROR_CODE.UNAUTHORIZED) {
    return <NotAuthView text="비밀번호 변경" />;
  }

  if (!data) {
    return (
      <Card.MAIN text="비밀번호 변경">
        <InternalErrorView />
      </Card.MAIN>
    );
  }

  if (data.userAccountType !== UserAccountTypeEnum.EMAIL) {
    return (
      <Card.MAIN text="비밀번호 변경">
        <Card.SECTION>
          <Text.HEADING text="이메일 회원만 비밀번호 변경이 가능합니다." />
        </Card.SECTION>
      </Card.MAIN>
    );
  }

  return (
    <Card.MAIN text="비밀번호 변경">
      <ModifyPassword />
    </Card.MAIN>
  );
}
