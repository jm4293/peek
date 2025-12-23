import { UserAccountTypeValue } from '@packages/shared/constant';

export type SignInOAuthRequest = {
  userAccountType: UserAccountTypeValue;
  token: string;
  tokenType: string | null;
  expire: number | null;
};

export type SignInOAuthResponse = {
  accessToken: string;
  refreshToken: string;
};
