import { Card, CurrentTimeText, Text } from '@app/web/components';

import RecentStockList from './RecentStockList';

export default function Page() {
  return (
    <Card.MAIN
      text={
        <div className="flex justify-end">
          <CurrentTimeText />
        </div>
      }>
      <Card.SECTION>
        <RecentStockList />
      </Card.SECTION>

      {/* <PopularStock /> */}
    </Card.MAIN>
  );
}
