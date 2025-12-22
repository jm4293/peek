'use client';

import { Card } from '@app/web/components';

import KosdaqIndex from './KosdaqIndex';

export default function KosdaqIndexPage() {
  return (
    <Card.MAIN text="코스닥 상세">
      <KosdaqIndex />
    </Card.MAIN>
  );
}
