import { NoticeTypeValue } from '@packages/shared/constant';

import { UserAccountModel } from '../../user';
import { NoticeImageModel } from './notice-image.model';

export interface NoticeModel {
  id: number;
  uuid: string;
  type: NoticeTypeValue;
  title: string;
  content: string;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;

  noticeImages: NoticeImageModel[];
  userAccount: UserAccountModel;
}
