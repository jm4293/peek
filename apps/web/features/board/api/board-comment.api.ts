import { createAxiosInstance } from '@app/web/lib';

import {
  CreateBoardCommentRequest,
  DeleteBoardCommentRequest,
  GetBoardCommentListRequest,
  GetBoardCommentListResponse,
  UpdateBoardCommentRequest,
} from '../type';

const axios = createAxiosInstance();
const BASEURL = '/board';

export const boardCommentApi = {
  getBoardCommentList: async (params: GetBoardCommentListRequest) => {
    const { boardId, page } = params;

    return await axios.get<GetBoardCommentListResponse, Omit<GetBoardCommentListRequest, 'boardId'>>({
      url: `${BASEURL}/${boardId}/comments`,
      params: { page },
    });
  },

  getBoardCommentListMine: async (dto: Omit<GetBoardCommentListRequest, 'boardId'>) => {
    return await axios.get<GetBoardCommentListResponse, Omit<GetBoardCommentListRequest, 'boardId'>>({
      url: `${BASEURL}/mine/comment`,
      params: dto,
    });
  },

  createBoardComment: async (dto: CreateBoardCommentRequest) => {
    const { boardId, ...rest } = dto;

    return await axios.post<null, Omit<CreateBoardCommentRequest, 'boardId'>>({
      url: `${BASEURL}/${boardId}/comment`,
      data: rest,
    });
  },

  updateBoardComment: async (dto: UpdateBoardCommentRequest) => {
    const { boardId, boardCommentId, ...rest } = dto;

    return await axios.put<null, Omit<UpdateBoardCommentRequest, 'boardId' | 'boardCommentId'>>({
      url: `${BASEURL}/${boardId}/comment/${boardCommentId}`,
      data: rest,
    });
  },

  deleteBoardComment: async (dto: DeleteBoardCommentRequest) => {
    const { boardId, boardCommentId } = dto;

    return await axios.delete<null, null>({ url: `${BASEURL}/${boardId}/comment/${boardCommentId}` });
  },
};
