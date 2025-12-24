import { createAxiosInstance } from '@app/web/lib';

import { GetNoticeDetailRequest, GetNoticeDetailResponse } from '../type/get-notice-detail.type';
import { GetNoticeListRequest, GetNoticeListResponse } from '../type/get-notice-list.type';

const axios = createAxiosInstance();
const BASEURL = '/notice';

const noticeApi = {
  getNoticeDetail: async (dto: GetNoticeDetailRequest) => {
    const { noticeId } = dto;

    return await axios.get<GetNoticeDetailResponse, null>({ url: `${BASEURL}/${noticeId}` });
  },

  getNoticeList: async (dto: GetNoticeListRequest) => {
    return await axios.get<GetNoticeListResponse, GetNoticeListRequest>({ url: BASEURL, params: dto });
  },
};

export default noticeApi;
