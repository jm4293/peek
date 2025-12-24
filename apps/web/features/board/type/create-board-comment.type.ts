import { z } from 'zod';

import { baseBoardCommentSchema } from './base-board-comment.type';

export const createBoardCommentRequestSchema = baseBoardCommentSchema.extend({
  boardCommentId: z.number().optional(),
});

export type CreateBoardCommentRequest = z.infer<typeof createBoardCommentRequestSchema>;
export type CreateBoardCommentResponse = {};
