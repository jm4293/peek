import { IUser } from '../model';

export interface IUserListRes {
  userList: IUser[];
  total: number;
}
