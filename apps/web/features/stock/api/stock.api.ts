import { createAxiosInstance } from '@app/web/lib';

import {
  GetStockCategoryListResponse,
  GetStockKoreanDetailRequest,
  GetStockKoreanDetailResponse,
  GetStockKoreanFavoriteListRequest,
  GetStockKoreanFavoriteListResponse,
  GetStockKoreanIndexCandleListRequest,
  GetStockKoreanIndexCandleListResponse,
  GetStockKoreanListRequest,
  GetStockKoreanListResponse,
  GetStockKoreanRankListRequest,
  GetStockKoreanRankListResponse,
  UpdateStockKoreanFavoriteRequest,
} from '../type';

const BASEURL = '/stock';
const axios = createAxiosInstance();

const stockApi = {
  // getToken: async () => {
  //   return await axios.get<IStockTokenRes, null>({ url: `${BASEURL}/token` });
  // },

  getStockCategoryList: async () => {
    return await axios.get<GetStockCategoryListResponse, null>({ url: `${BASEURL}/category` });
  },

  getStockKoreanList: async (dto: GetStockKoreanListRequest) => {
    return await axios.get<GetStockKoreanListResponse, GetStockKoreanListRequest>({
      url: `${BASEURL}/korean`,
      params: dto,
    });
  },

  getStockKorean: async (dto: GetStockKoreanDetailRequest) => {
    const { code } = dto;

    return await axios.get<GetStockKoreanDetailResponse, GetStockKoreanDetailRequest>({
      url: `${BASEURL}/korean/detail/${code}`,
    });
  },

  getStockKoreanRank: async (dto: GetStockKoreanRankListRequest) => {
    return await axios.get<GetStockKoreanRankListResponse, GetStockKoreanRankListRequest>({
      url: `${BASEURL}/korean/rank`,
      params: dto,
    });
  },

  getStockKoreanIndexCandleList: async (dto: GetStockKoreanIndexCandleListRequest) => {
    const { code, ...rest } = dto;

    return await axios.get<GetStockKoreanIndexCandleListResponse, Omit<GetStockKoreanIndexCandleListRequest, 'code'>>({
      url: `${BASEURL}/korean/index/candle/${code}`,
      params: rest,
    });
  },

  getStockKoreanFavoriteList: async (dto: GetStockKoreanFavoriteListRequest) => {
    return await axios.get<GetStockKoreanFavoriteListResponse, GetStockKoreanFavoriteListRequest>({
      url: `${BASEURL}/korean/favorite`,
      params: dto,
    });
  },

  toggleStockKoreanFavorite: async (dto: UpdateStockKoreanFavoriteRequest) => {
    return await axios.post<null, UpdateStockKoreanFavoriteRequest>({
      url: `${BASEURL}/korean/favorite`,
      data: dto,
    });
  },
};

export default stockApi;
