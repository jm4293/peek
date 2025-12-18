import { Card } from '@/components/card';
import { CurrentTimeText, Text } from '@/components/text';

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
