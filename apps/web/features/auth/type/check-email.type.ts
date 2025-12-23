export type CheckEmailRequest = {
  email: string;
};

export type CheckEmailResponse = {
  isExist: boolean;
  email: string;
  message: string;
};
