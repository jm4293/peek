import { Suspense } from 'react';

import { Card } from '@/components/card';
import { SkeletonSuspense } from '@/components/skeleton';

import { getInquiryDetail } from '@/services/inquiry/server';

import InquiryDetail from './InquiryDetail';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function UserInquiryDetailPage(props: Props) {
  const { id } = await props.params;

  const inquiry = getInquiryDetail(id);

  return (
    <Card.MAIN text="문의">
      <Suspense fallback={<SkeletonSuspense />}>
        <InquiryDetail inquiry={inquiry} />
      </Suspense>
    </Card.MAIN>
  );
}
