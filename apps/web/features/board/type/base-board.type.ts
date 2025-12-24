import { z } from 'zod';

export const baseBoardSchema = z.object({
  title: z.string().min(1, '제목은 최소 1자 이상이어야 합니다.').max(100, '제목은 최대 100자 이하여야 합니다.'),
  content: z.string().min(1, '내용은 최소 1자 이상이어야 합니다.'),
});
