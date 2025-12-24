import { BoardCommentModel } from '../model';

export type GetBoardCommentListRequest = {
  page: number;
  boardId: string;
};

export type GetBoardCommentListResponse = {
  boardCommentList: BoardCommentModel[];
  total: number;
  nextPage: number | null;
};
