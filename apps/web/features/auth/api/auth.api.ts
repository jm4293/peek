import { createAxiosInstance } from '@app/web/lib';

import {
  CheckEmailCodeRequest,
  CheckEmailCodeResponse,
  CheckEmailRequest,
  CheckEmailResponse,
  RefreshTokenResponse,
  SignInEmailRequest,
  SignInEmailResponse,
  SignInOAuthRequest,
  SignInOAuthResponse,
  SignUpEmailRequest,
  SignUpEmailResponse,
} from '../type';

const axios = createAxiosInstance();
const BASEURL = '/auth';

export const authApi = {
  signInEmail: async (dto: SignInEmailRequest) => {
    return await axios.post<SignInEmailResponse, SignInEmailRequest>({
      url: `${BASEURL}/login`,
      data: dto,
    });
  },

  signInOauth: async (dto: SignInOAuthRequest) => {
    return await axios.post<SignInOAuthResponse, SignInOAuthRequest>({
      url: `${BASEURL}/login/oauth`,
      data: dto,
    });
  },

  checkEmail: async (dto: CheckEmailRequest) => {
    return await axios.post<CheckEmailResponse, CheckEmailRequest>({
      url: `${BASEURL}/check-email`,
      data: dto,
    });
  },

  checkEmailCode: async (dto: CheckEmailCodeRequest) => {
    return await axios.post<CheckEmailCodeResponse, CheckEmailCodeRequest>({
      url: `${BASEURL}/check-email-code`,
      data: dto,
    });
  },

  signUp: async (dto: SignUpEmailRequest) => {
    return await axios.post<SignUpEmailResponse, SignUpEmailRequest>({
      url: `${BASEURL}/signup`,
      data: dto,
    });
  },

  logout: async () => {
    return await axios.post<{}, {}>({ url: `${BASEURL}/logout`, data: {} });
  },

  refreshToken: async () => {
    return await axios.post<RefreshTokenResponse, null>({
      url: `${BASEURL}/refresh-token`,
      data: null,
    });
  },
};
