import { CancelToken } from 'axios';
import { QuoteRateRequest, SwapParamRequest } from '../types';
import {
  BATCH_SWAP_PARAMS_URL,
  BATCH_SWAP_QUOTE_URL,
  BATCH_SWAP_SUPPORTED_CHAINS_URL,
  GET_ALL_TOKENS_URL,
  GET_TOKEN_DETAILS_URL,
  GET_TOKEN_PRICE,
} from '../constants/urlConstants';
import { GET, POST } from '../constants/httpMethods';
import { invoke } from '../utils/axios';
import { Signer } from 'ethers';

export const fetchQuoteRate = (request: QuoteRateRequest, cancelToken: CancelToken) =>
  invoke(BATCH_SWAP_QUOTE_URL, request, POST, cancelToken);

export const fetchSwapParams = (request: SwapParamRequest) => {
  return invoke(BATCH_SWAP_PARAMS_URL, request);
};

export const fetchAllSupportedChains = (chainId: number) => {
  return invoke(BATCH_SWAP_SUPPORTED_CHAINS_URL, { chainId });
};

export const fetchAllTokens = (chainId: number, source?: string, account?: string) => {
  return invoke(GET_ALL_TOKENS_URL, { chainId, source, account }, GET);
};

export const fetchTokenDetails = (tokenAddress: string,chainId:number) => {
  return invoke(GET_TOKEN_DETAILS_URL, { tokenAddress,chainId}, GET);
}

export const fetchTokenPrice = (tokenAddresses: string[],chainId:number) => {
  return invoke(GET_TOKEN_PRICE,{tokenAddresses,chainId},GET)
}

export const swapTokensApi = async ({ request, provider }: { request: SwapParamRequest, provider: Signer }): Promise<any> => {
  try {
    const { data: paramResponseData } = await fetchSwapParams(request);
    const {
      transactionRequest: { data, from, to, value, gasLimit },
    } = paramResponseData;

    // Add gasPrice : fast, medium, slow
    return await provider.sendTransaction({
      from,
      to,
      data,
      value,
      gasLimit,
    });
  } catch (err) {
    throw { error: err };
  }
};
