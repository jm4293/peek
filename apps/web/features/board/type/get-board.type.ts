import { BoardModel } from '../model';

export type GetBoardRequest = {};

export type GetBoardResponse = {
  board: BoardModel;
};
