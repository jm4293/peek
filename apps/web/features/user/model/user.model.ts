import { UserTypeValue } from '@packages/shared/constant';

import { UserAccountModel } from './user-account.model';

export interface UserModel {
  id: number;
  uuid: string;
  nickname: string;
  name: string;
  type: UserTypeValue;
  birth: Date | null;
  thumbnail: string | null;
  createdAt: Date;
  updatedAt: Date | null;

  userAccount: UserAccountModel;
}
