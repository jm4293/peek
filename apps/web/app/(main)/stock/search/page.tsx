import { Card } from '@app/web/components';

import StockSearch from './StockSearch';

export default function Page() {
  return (
    <Card.MAIN text="종목 검색">
      <StockSearch />
    </Card.MAIN>
  );
}
