import { UserStockFavoriteModel } from '../../user';

export type GetStockKoreanFavoriteListRequest = {
  page: number;
};

export type GetStockKoreanFavoriteListResponse = {
  favoriteStockList: UserStockFavoriteModel[];
  total: number;
  nextPage: number | null;
};
