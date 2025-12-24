import { createAxiosInstance } from '@app/web/lib';

import {
  CreateInquiryRequest,
  DeleteInquiryRequest,
  GetInquiryDetailRequest,
  GetInquiryDetailResponse,
  GetInquiryListRequest,
  GetInquiryListResponse,
  UpdateInquiryRequest,
} from '../type';

const axios = createAxiosInstance();
const BASEURL = '/inquiry';

const inquiryApi = {
  getInquiryDetail: async (dto: GetInquiryDetailRequest) => {
    const { inquiryId } = dto;

    return await axios.get<GetInquiryDetailResponse, null>({ url: `${BASEURL}/${inquiryId}` });
  },

  getInquiryList: async (dto: GetInquiryListRequest) => {
    return await axios.get<GetInquiryListResponse, GetInquiryListRequest>({ url: BASEURL, params: dto });
  },

  createInquiry: async (dto: CreateInquiryRequest) => {
    return await axios.post<null, CreateInquiryRequest>({ url: BASEURL, data: dto });
  },

  modifyInquiry: async (dto: UpdateInquiryRequest) => {
    const { inquiryId, ...rest } = dto;

    return await axios.put<null, Omit<UpdateInquiryRequest, 'inquiryId'>>({
      url: `${BASEURL}/${inquiryId}`,
      data: rest,
    });
  },

  deleteInquiry: async (dto: DeleteInquiryRequest) => {
    const { inquiryId } = dto;

    return await axios.delete<null, null>({ url: `${BASEURL}/${inquiryId}` });
  },
};

export default inquiryApi;
