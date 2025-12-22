import { UserStockFavoriteModel } from '../../user';

export interface GetStockKoreanFavoriteListReq {
  page: number;
}

export interface GetStockKoreanFavoriteListRes {
  favoriteStockList: UserStockFavoriteModel[];
  total: number;
  nextPage: number | null;
}
