import { z } from 'zod';

import { baseBoardCommentSchema } from './base-board-comment.type';

export type createBoardCommentRequest = z.infer<typeof baseBoardCommentSchema>;
export type createBoardCommentResponse = {};
