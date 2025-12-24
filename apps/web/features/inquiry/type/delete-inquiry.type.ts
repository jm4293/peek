import { z } from 'zod';

export const deleteInquiryRequestSchema = z.object({
  inquiryId: z.number(),
});
export type DeleteInquiryRequest = z.infer<typeof deleteInquiryRequestSchema>;

export type DeleteInquiryResponse = {};
