import { z } from 'zod';

export const baseUserSchema = z.object({
  nickname: z.string().min(1, '닉네임은 최소 1자 이상이어야 합니다.').max(100, '닉네임은 최대 100자 이하여야 합니다.'),
  // name: z.string().min(1, '이름은 최소 1자 이상이어야 합니다.').max(100, '이름은 최대 100자 이하여야 합니다.'),
  // birthday: z.string().optional(),
  // thumbnail: z.string().optional(),
});
