import Axios, { CancelToken, Method } from 'axios';
import { baseUrl } from '../config';
import { POST , GET} from '../constants/httpMethods';

export const invoke = async (endpoint: string, data: any, method?: Method, cancelToken?: CancelToken): Promise<any> => {
  const url = `${baseUrl}${endpoint}`;
  return Axios({
    method: method || POST,
    url,
    data: method === GET ? undefined : data,
    params: method === GET ? data : undefined,
    cancelToken,
  })
    .then(({ data }) => data)
    .catch((error) => {
      if (Axios.isCancel(error)) {
        return Promise.resolve({});
      }
      return Promise.reject(error);
    });
};
