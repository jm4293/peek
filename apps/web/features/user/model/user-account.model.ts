import { UserAccountStatusValue, UserAccountTypeValue } from '@packages/shared/constant';

import { BoardCommentModel, BoardModel } from '../../board';
import { InquiryModel } from '../../inquiry';
import { UserNotificationModel } from './user-notification.model';
import { UserStockFavoriteModel } from './user-stock-favorite.model';
import { UserModel } from './user.model';

export interface UserAccountModel {
  id: number;
  uuid: string;
  email: string;
  status: UserAccountStatusValue;
  userAccountType: UserAccountTypeValue;
  createdAt: Date;
  updatedAt: Date | null;

  user: UserModel;
  userNotifications: UserNotificationModel[];
  userStockFavorites: UserStockFavoriteModel[];
  boards: BoardModel[];
  boardComments: BoardCommentModel[];
  boardLikes: BoardModel[];
  inquiries: InquiryModel[];
}
