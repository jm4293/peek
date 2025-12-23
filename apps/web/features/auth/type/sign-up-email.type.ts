export type SignUpEmailRequest = {
  nickname: string;
  name: string;
  policy: boolean;
  birthdate: string;
  email: string;
  password: string;
};

export type SignUpEmailResponse = {
  email: string;
};
