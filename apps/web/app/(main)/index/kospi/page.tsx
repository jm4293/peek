import { Card } from '@app/web/components';

import KospiChart from './KospiIndex';

export default function KospiIndexPage() {
  return (
    <Card.MAIN text="코스피 상세">
      <KospiChart />
    </Card.MAIN>
  );
}
