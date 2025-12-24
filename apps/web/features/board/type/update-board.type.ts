import { z } from 'zod';

import { baseBoardSchema } from './base-board.type';

export const updateBoardRequestSchema = baseBoardSchema.extend({
  boardId: z.number(),
});

export type UpdateBoardRequest = z.infer<typeof updateBoardRequestSchema>;
export type UpdateBoardResponse = {};
