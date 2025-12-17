import { Card } from '@/components/card';

import { getUserInfo } from '@/services/user';

import InquiryList from './InquiryList';
import { InquiryRegisterButton } from './InquiryRegisterButton';

export default async function UserInquiryPage() {
  const { success } = await getUserInfo();

  return (
    <Card.MAIN text="문의하기">
      <InquiryList />

      <InquiryRegisterButton isAuth={success} />
    </Card.MAIN>
  );
}
