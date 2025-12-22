import { NoticeTypeValue } from '@packages/shared/constant';

import { NoticeModel } from '../model';

export interface GetNoticeListReq {
  page: number;
  type?: NoticeTypeValue;
}

export interface GetNoticeListRes {
  noticeList: NoticeModel[];
  total: number;
  nextPage: number | null;
}
