import { UserAccountTypeValue } from '@packages/shared/constant';

export interface SignInOAuthReq {
  userAccountType: UserAccountTypeValue;
  token: string;
  tokenType: string | null;
  expire: number | null;
}

export interface SignInOAuthRes {
  accessToken: string;
  refreshToken: string;
}
