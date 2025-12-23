import { Card } from '@app/web/components';
import { getUserInfo } from '@app/web/features';

import InquiryList from './InquiryList';
import { InquiryRegisterButton } from './InquiryRegisterButton';

export default async function UserInquiryPage() {
  const { success } = await getUserInfo();

  return (
    <Card.MAIN>
      <InquiryList />

      <InquiryRegisterButton isAuth={success} />
    </Card.MAIN>
  );
}
