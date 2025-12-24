import { UserAccountModel } from '../model';

export type GetUserInfoRequest = {};

export type GetUserInfoResponse = {
  userInfo: UserAccountModel;
};
