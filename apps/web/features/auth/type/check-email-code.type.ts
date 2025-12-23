export type CheckEmailCodeRequest = {
  email: string;
  code: string;
};

export type CheckEmailCodeResponse = {
  success: boolean;
  message: string;
};
