import { Card, CurrentTimeText, Text } from '@app/web/components';

import RecentStockList from './RecentStockList';

export default function Page() {
  return (
    <Card.MAIN
      text={
        <div className="flex items-center justify-between">
          <Text.TITLE text="주식" />
          <CurrentTimeText />
        </div>
      }
    >
      <Card.SECTION>
        <RecentStockList />
      </Card.SECTION>

      {/* <PopularStock /> */}
    </Card.MAIN>
  );
}
