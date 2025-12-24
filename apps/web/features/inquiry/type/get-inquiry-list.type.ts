import { InquiryModel } from '../model';

export type GetInquiryListRequest = {
  page: number;
};

export type GetInquiryListResponse = {
  inquiryList: InquiryModel[];
  total: number;
  nextPage: number | null;
};
