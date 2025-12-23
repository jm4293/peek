import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { Card, InternalErrorView, NotAuthView, Text } from '@app/web/components';
import { getUserInfo } from '@app/web/features';
import { ERROR_CODE } from '@app/web/shared';

import { userAccountTypeDescription } from '@packages/shared/constant';

import UserWithdraw from './Withdraw';

export default async function UserDetailPage() {
  const { success, data, code } = await getUserInfo();

  if (!success && code === ERROR_CODE.UNAUTHORIZED) {
    return <NotAuthView text="유저 상세" />;
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
      <Card.SECTION text="상세">
        <div className="flex items-center gap-2">
          <Text.PARAGRAPH text="가입경로:" />
          <Text.HEADING text={`${userAccountTypeDescription[data.userAccountType]}`} />
        </div>
        <div className="flex items-center gap-2">
          <Text.PARAGRAPH text="이메일:" />
          <Text.HEADING text={`${data.email}`} />
        </div>
        <div className="flex items-center gap-2">
          <Text.PARAGRAPH text="이름:" />
          <Text.HEADING text={`${data.user.name}`} />
        </div>
        <div className="flex items-center gap-2">
          <Text.PARAGRAPH text="닉네임:" />
          <Text.HEADING text={`${data.user.nickname}`} />
        </div>
        {/* <div className="flex items-end gap-2">
            <Text.PARAGRAPH text="생년월일:" />
            <Text.HEADING text={`${my.user.birth || '-'}`} />
          </div> */}
      </Card.SECTION>

      <Card.SECTION text="변경">
        <Link href="/user/detail/modify" className="flex items-center justify-between">
          <Text.HEADING text="유저정보 변경" />
          <ChevronRight />
        </Link>
        {/* <Link href="/user/detail/modify/password" className="flex items-center justify-between">
            <Text.HEADING text="비밀번호 변경" />
            <ChevronRight />
          </Link> */}
      </Card.SECTION>

      <UserWithdraw />
    </Card.MAIN>
  );
}
