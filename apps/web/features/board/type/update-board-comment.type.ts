import { z } from 'zod';

import { baseBoardCommentSchema } from './base-board-comment.type';

export const updateBoardCommentReqSchema = baseBoardCommentSchema.extend({
  boardCommentId: z.number(),
});

export type UpdateBoardCommentRequest = z.infer<typeof updateBoardCommentReqSchema>;
export type UpdateBoardCommentResponse = {};
