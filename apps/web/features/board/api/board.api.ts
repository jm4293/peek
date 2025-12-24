import { createAxiosInstance } from '@app/web/lib';

import {
  CreateBoardRequest,
  DeleteBoardRequest,
  GetBoardListRequest,
  GetBoardListResponse,
  GetBoardResponse,
  UpdateBoardRequest,
} from '../type';

const axios = createAxiosInstance();
const BASEURL = '/board';

export const boardApi = {
  getBoardDetail: async (boardId: number) => {
    return await axios.get<GetBoardResponse, null>({ url: `${BASEURL}/${boardId}` });
  },

  getBoardList: async (dto: GetBoardListRequest) => {
    return await axios.get<GetBoardListResponse, GetBoardListRequest>({
      url: BASEURL,
      params: dto,
    });
  },

  getBoardListMine: async (dto: GetBoardListRequest) => {
    return await axios.get<GetBoardListResponse, GetBoardListRequest>({
      url: `${BASEURL}/mine`,
      params: dto,
    });
  },

  createBoard: async (dto: CreateBoardRequest) => {
    return await axios.post<null, CreateBoardRequest>({ url: BASEURL, data: dto });
  },

  updateBoard: async (dto: UpdateBoardRequest) => {
    const { boardId, ...rest } = dto;

    return await axios.put<null, Omit<UpdateBoardRequest, 'boardId'>>({
      url: `${BASEURL}/${boardId}`,
      data: rest,
    });
  },

  deleteBoard: async (dto: DeleteBoardRequest) => {
    const { boardId } = dto;

    return await axios.delete<null, null>({ url: `${BASEURL}/${boardId}` });
  },

  // boardLike: async (boardSeq: number) => {
  //   return await axios.post<null, {}>({ url: `${BASEURL}/${boardSeq}/like`, data: {} });
  // },
};
