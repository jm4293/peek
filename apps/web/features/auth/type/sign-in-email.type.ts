export type SignInEmailRequest = {
  email: string;
  password: string;
};

export type SignInEmailResponse = {
  accessToken: string;
  refreshToken: string;
};
