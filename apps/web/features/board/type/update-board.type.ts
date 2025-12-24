import { z } from 'zod';

import { baseBoardSchema } from './base-board.type';

export const updateBoardReqSchema = baseBoardSchema.extend({
  boardId: z.number(),
});

export type UpdateBoardRequest = z.infer<typeof updateBoardReqSchema>;
export type UpdateBoardResponse = {};
