import { z } from 'zod';

import { baseInquirySchema } from './base-inquiry.type';

export const createInquiryRequestSchema = baseInquirySchema.extend({});
export type CreateInquiryRequest = z.infer<typeof createInquiryRequestSchema>;
