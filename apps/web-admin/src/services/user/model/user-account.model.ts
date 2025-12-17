export interface IUserAccount {
  createdAt: Date;
  deletedAt: Date | null;
  email: string;
  id: number;
  password: string;
  refreshToken: string | null;
  status: number;
  updatedAt: Date;
  userAccountType: number;
  userId: number;
}
