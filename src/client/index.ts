import Axios, { CancelTokenSource } from 'axios';
import { QuoteRateRequest, SwapParamRequest } from '../types';
import { fetchAllSupportedChains, fetchAllTokens, fetchQuoteRate, fetchSwapParams, fetchTokenDetails, fetchTokenPrice, swapTokensApi } from '../api';
import { Signer } from 'ethers';

class DzapClient {
  private static instance: DzapClient;
  private cancelTokenSource: CancelTokenSource | null = null;
  private provider: Signer = null;

  private constructor() { }

  // Static method to control the access to the singleton instance.
  public static getInstance(): DzapClient {
    if (!DzapClient.instance) {
      DzapClient.instance = new DzapClient();
    }
    return DzapClient.instance;
  }

  public async getQuoteRate(request: QuoteRateRequest) {
    if (this.cancelTokenSource) {
      this.cancelTokenSource.cancel('Cancelled due to new request');
    }

    this.cancelTokenSource = Axios.CancelToken.source();
    return await fetchQuoteRate(request, this.cancelTokenSource.token);
  }

  public getSwapParams(request: SwapParamRequest) {
    return fetchSwapParams(request);
  }

  public getAllSupportedChains(chainId: number) {
    return fetchAllSupportedChains(chainId);
  }

  public async getAllTokens(chainId: number, source?: string, account?: string) {
    return await fetchAllTokens(chainId, source, account);
  }

  public async getTokenDetails(tokenAddress: string, chainId: number) {
    return await fetchTokenDetails(tokenAddress, chainId)
  }

  public async getTokenPrice(tokenAddresses: string[], chainId: number) {
    return await fetchTokenPrice(tokenAddresses, chainId)
  }

  public swapTokens = ({ request, provider }: { request: SwapParamRequest; provider: Signer }) => {
    return swapTokensApi({ request, provider });
  };
}

export default DzapClient;
