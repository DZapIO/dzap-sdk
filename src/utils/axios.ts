import Axios, { CancelToken, Method } from 'axios';
import { getBaseUrl } from 'src/config';
import { GET, POST } from 'src/constants/httpMethods';

export const invoke = async (endpoint: string, data: any, method?: Method, cancelToken?: CancelToken) => {
  const url = `${getBaseUrl()}${endpoint}`;
  console.log('sdk, baseUrl: ', url);
  return Axios({
    method: method || POST,
    url,
    data: method === GET ? undefined : data,
    params: method === GET ? data : undefined,
    cancelToken,
  })
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error);
    });
};
