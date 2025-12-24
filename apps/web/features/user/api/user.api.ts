import { createAxiosInstance } from '@app/web/lib';

import {
  CreateUserPushTokenRequest,
  DeleteUserNotificationRequest,
  GetUserInfoResponse,
  ResetUserPasswordRequest,
  UpdateUserInfoRequest,
  UpdateUserNotificationReadRequest,
  UpdateUserPasswordRequest,
  UpdateUserThumbnailRequest,
} from '../type';

const axios = createAxiosInstance();
const BASEURL = '/user';

const userApi = {
  getMyInfo: async () => {
    return await axios.get<GetUserInfoResponse, null>({ url: BASEURL });
  },

  updateUser: async (dto: UpdateUserInfoRequest) => {
    return await axios.put<null, UpdateUserInfoRequest>({ url: BASEURL, data: dto });
  },

  updateThumbnail: async (dto: UpdateUserThumbnailRequest) => {
    return await axios.patch<null, UpdateUserThumbnailRequest>({ url: `${BASEURL}/thumbnail`, data: dto });
  },

  // checkEmail: async (dto: ICheckEmailDto) => {
  //   return await axios.post<ICheckEmailRes, ICheckEmailDto>({
  //     url: `${BASEURL}/check-email`,
  //     data: dto,
  //   });
  // },

  // checkEmailCode: async (dto: ICheckEmailCodeDto) => {
  //   return await axios.post<ICheckEmailCodeRes, ICheckEmailCodeDto>({
  //     url: `${BASEURL}/check-email-code`,
  //     data: dto,
  //   });
  // },

  updatePassword: async (dto: UpdateUserPasswordRequest) => {
    return await axios.patch<null, UpdateUserPasswordRequest>({ url: `${BASEURL}/password`, data: dto });
  },

  resetPassword: async (dto: ResetUserPasswordRequest) => {
    return await axios.patch<null, ResetUserPasswordRequest>({ url: `${BASEURL}/password/reset`, data: dto });
  },

  withdraw: async () => {
    return await axios.delete<null, null>({ url: BASEURL });
  },

  // getNotificationList: async (page: number) => {
  // return await axios.get<INotificationListRes, { page: number }>({
  //   url: `${BASEURL}/notifications`,
  //   params: { page },
  // });
  // },

  // postRegisterPushToken: async (dto: CreateUserPushTokenRequest) => {
  //   return await axios.post<null, CreateUserPushTokenRequest>({ url: `${BASEURL}/push-token`, data: dto });
  // },

  // postNotificationRead: async (dto: UpdateUserNotificationReadRequest) => {
  //   return await axios.post<null, UpdateUserNotificationReadRequest>({ url: `${BASEURL}/notification/read`, data: dto });
  // },

  // postNotificationReadAll: async () => {
  //   return await axios.post<null, {}>({ url: `${BASEURL}/notification/read-all`, data: {} });
  // },

  // deleteNotification: async (dto: DeleteUserNotificationRequest) => {
  //   const { notificationSeq } = dto;

  //   return await axios.delete<null, null>({ url: `${BASEURL}/notification/${notificationSeq}` });
  // },
};

export default userApi;
