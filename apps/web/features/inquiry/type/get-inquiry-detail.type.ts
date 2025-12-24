import { InquiryModel } from '../model';

export type GetInquiryDetailRequest = {
  inquiryId: number;
};

export type GetInquiryDetailResponse = {
  inquiry: InquiryModel;
};
