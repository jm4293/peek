import { NoticeModel } from '../model';

export type GetNoticeDetailRequest = {
  noticeId: number;
};

export type GetNoticeDetailResponse = {
  notice: NoticeModel;
};
