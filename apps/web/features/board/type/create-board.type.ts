import { z } from 'zod';

import { baseBoardSchema } from './base-board.type';

export const createBoardRequestSchema = baseBoardSchema.extend({
  categoryId: z.number({ message: '카테고리를 선택해주세요.' }).min(1, '카테고리는 필수입니다.'),
});

export type CreateBoardRequest = z.infer<typeof createBoardRequestSchema>;
export type CreateBoardResponse = {};
