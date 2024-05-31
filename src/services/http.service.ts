//interceptor network (not used cause blocker in unitest)

/* eslint-disable no-param-reassign */
import Axios from 'axios';
import { URL_API } from '../config/keys';
import { getToken } from '../utils/localStorage';

const httpService = Axios.create({
  baseURL: URL_API,
  timeout: 20000,
  headers: {
    'content-type': 'application/json',
    refreshToken: '',
  },
});

httpService.interceptors.request.use(
  // custom handle config
  (config) => {
    const token = getToken() ? `Bearer ${getToken()}` : null;
    const refreshToken = config.headers?.refreshToken;
    return {
      ...config,
      headers: {
        'content-type': 'application/json',
        ...(token && {
          Authorization: refreshToken || token,
        }),
      },
    };
  },
  (error) => Promise.reject(error),
);

httpService.interceptors.response.use(
  // custom handle response success
  async (res : any) => res.data,
  // custom handle response error
  async (error) => {
    if (error?.response) {
      const { status } = error.response;
      if (status === 401) return (window.location.href = '/login');
    }

    return Promise.reject(error);
  },
);

export default httpService;
