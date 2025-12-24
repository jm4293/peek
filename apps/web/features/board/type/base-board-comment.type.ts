import { z } from 'zod';

export const baseBoardCommentSchema = z.object({
  boardId: z.number(),
  content: z.string().min(1, '댓글 내용은 최소 1자 이상이어야 합니다.'),
});
