import Axios, { CancelTokenSource } from 'axios';
import { QuoteRateRequest, SwapParamRequest } from 'src/types';
import {
  fetchAllSupportedChains,
  fetchQuoteRate,
  fetchSwapParams,
} from '../api';

class DzapClient {
  private static instance: DzapClient;
  private cancelTokenSource: CancelTokenSource | null = null;

  private constructor() {}

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
}

export default DzapClient;