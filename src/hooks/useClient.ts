import { QuoteRateRequest, SwapParamRequest } from 'src/types';
import {
  fetchAllSupportedChains,
  fetchQuoteRate,
  fetchSwapParams,
} from '../api';

function useClient({ chainId }: { chainId: number }) {
  const getQuoteRate = async (request: QuoteRateRequest) => {
    return await fetchQuoteRate(request, null);
  };

  const getSwapParams = (request: SwapParamRequest) => {
    return fetchSwapParams(request);
  };

  const getAllSupportedChains = () => {
    return fetchAllSupportedChains(chainId);
  };

  return {
    getQuoteRate,
    getSwapParams,
    getAllSupportedChains,
  };
}
export default useClient;
