import { z } from 'zod';

import { baseInquirySchema } from './base-inquiry.type';

export const updateInquiryRequestSchema = baseInquirySchema.extend({
  inquiryId: z.number(),
});
export type UpdateInquiryRequest = z.infer<typeof updateInquiryRequestSchema>;

export type UpdateInquiryResponse = {};
