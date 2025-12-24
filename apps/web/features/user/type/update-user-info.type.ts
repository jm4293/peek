import { z } from 'zod';

import { baseUserSchema } from './base-user.type';

export const updateUserInfoRequestSchema = baseUserSchema;

export type UpdateUserInfoRequest = z.infer<typeof updateUserInfoRequestSchema>;

export type UpdateUserInfoResponse = {};
