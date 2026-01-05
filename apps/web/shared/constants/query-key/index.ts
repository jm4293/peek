import { NoticeTypeValue, StockRankValue } from '@packages/shared/constant';

export const QueryKeys = {
  user: {
    myInfo: () => ['my-info'],
    all: () => ['user'],
  },
  board: {
    detail: (boardId: string) => ['board', 'detail', boardId],
    list: (category?: number, sort?: 'newest' | 'oldest' | 'popular', text?: string) => [
      'board',
      'list',
      category,
      sort,
      text,
    ],
    listPaginated: (category?: string, sort?: string, text?: string, page?: number) => [
      'board',
      'list',
      'paginated',
      category,
      sort,
      text,
      page,
    ],
    commentList: (boardId: string) => ['board', 'comment', boardId],
    mineList: () => ['board', 'list-mine'],
    mineCommentList: () => ['board', 'comment', 'mine'],
  },
  currency: {
    list: () => ['currency', 'list'],
  },
  stock: {
    token: () => ['stock', 'token'],
    stockCategoryList: () => ['stock', 'category-list'],
    stockKorean: (code: string) => ['stock', 'korean', code],
    stockKoreanList: (text?: string) => ['stock', 'korean-list', text],
    stockKoreanRankList: (type: StockRankValue) => ['stock', 'korean-rank-list', type],
    stockKoreanIndexCandleList: (code: string) => ['stock', 'korean-index-candle-list', code],
    stockKoreanFavoriteList: () => ['stock', 'korean-favorite-list'],
  },
  notice: {
    list: (type?: NoticeTypeValue) => ['notice', 'list', type],
  },
  inquiry: {
    list: () => ['inquiry', 'list'],
  },
};
