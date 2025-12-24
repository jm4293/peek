import { createAxiosInstance } from '@app/web/lib';

import { GetRecentBoardListResponse } from '../type';

const axios = createAxiosInstance();
const BASEURL = '/home';

const homeApi = {
  getRecentBoardList: async () => {
    return await axios.get<GetRecentBoardListResponse, null>({ url: `${BASEURL}/recent-boards` });
  },
};

export default homeApi;
