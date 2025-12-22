import { Card } from '@app/web/components';

import StockKoreanFavoriteList from './StockKoreanFavoriteList';

export default function UserStockFavoritePage() {
  return (
    <Card.MAIN text="즐겨찾기 종목">
      <StockKoreanFavoriteList />
    </Card.MAIN>
  );
}
