import { createAxiosInstance } from '@app/web/lib';

import { GetCurrencyListResponse } from '../type';

const axios = createAxiosInstance();
const BASEURL = '/currency';

const currencyApi = {
  getCurrencyList: async () => {
    return await axios.get<GetCurrencyListResponse, null>({ url: `${BASEURL}/list` });
  },
};

export default currencyApi;
