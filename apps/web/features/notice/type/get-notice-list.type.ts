import { NoticeTypeValue } from '@packages/shared/constant';

import { NoticeModel } from '../model';

export type GetNoticeListRequest = {
  page: number;
  type?: NoticeTypeValue;
};

export type GetNoticeListResponse = {
  noticeList: NoticeModel[];
  total: number;
  nextPage: number | null;
};
