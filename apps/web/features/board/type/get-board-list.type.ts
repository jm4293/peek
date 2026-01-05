import { BoardModel } from '../model';

export type BoardSortType = 'newest' | 'oldest' | 'popular';

export type GetBoardListRequest = {
  page: number;
  stockCategory?: string;
  sort?: BoardSortType;
  text?: string;
};

export type GetBoardListResponse = {
  boardList: BoardModel[];
  total: number;
  nextPage: number | null;
};
