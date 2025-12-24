import { z } from 'zod';

import { baseBoardCommentSchema } from './base-board-comment.type';

export const updateBoardCommentRequestSchema = baseBoardCommentSchema.extend({
  boardCommentId: z.number(),
});

export type UpdateBoardCommentRequest = z.infer<typeof updateBoardCommentRequestSchema>;
export type UpdateBoardCommentResponse = {};
