import { BoardModel } from '../model';

export type GetBoardListRequest = {
  page: number;
  stockCategory?: number;
  sort?: 'createdAt' | 'viewCount';
  text?: string;
};

export type GetBoardListResponse = {
  boardList: BoardModel[];
  total: number;
  nextPage: number | null;
};
