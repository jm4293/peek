import { UserTypeEnum } from '@/shared/enum';
import { IUserAccount } from './user-account.model';

// "2025-08-23T19:30:23.000Z"

export interface IUser {
  birthday: Date | null;
  createdAt: Date;
  deletedAt: Date | null;
  id: number;
  name: string;
  nickname: string;
  policy: boolean;
  thumbnail: string | null;
  type: UserTypeEnum;
  updatedAt: Date;
  userAccounts: IUserAccount[];
}
