export type ResetUserPasswordRequest = {
  email: string;
  code: string;
  password: string;
};

export type ResetUserPasswordResponse = {};
