import { Card } from '@/components/card';

import StockKoreanFavoriteList from './StockKoreanFavoriteList';

export default function UserStockFavoritePage() {
  return (
    <Card.MAIN text="즐겨찾기 종목">
      <StockKoreanFavoriteList />
    </Card.MAIN>
  );
}
