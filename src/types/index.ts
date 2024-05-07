export type HexString = `0x${string}`;

export type ChainData = {
  [key in number]: Chain;
};

export type NativeTokenInfo = {
  contract: string;
  symbol: string;
  decimals: number;
  name: string;
  balance: string;
  price?: string;
};

export type Chain = {
  coinKey: string;
  chainId: number;
  chainType: string;
  name: string;
  coin: string;
  dcaContract: string;
  swapBridgeContract: string;
  logo: string;
  tokenlistUrl?: string;
  multicallAddress: string;
  blockExplorerUrl: string;
  nativeToken: NativeTokenInfo;
  rpcProvider: ApiRpcResponse;
  pricingAvailable: boolean;
  supportedAs: {
    source: boolean;
    destination: boolean;
  };
};

export type ApiRpcResponse = {
  url: string;
  keyRequired: boolean;
  keyType?: 'ALCHEMY_KEY';
};

// Swap

export type SwapData = {
  sourceId: string;
  srcToken: string;
  destToken: string;
  amount: string;
  slippage: number;
  gasPrice?: number;
  srcDecimals: number;
  destDecimals: number;
};

export type SwapParamsRequest = {
  chainId: number;
  integratorId: string;
  sender: string;
  refundee: string;
  recipient: string;
  withOutRevert?: boolean; // default true
  includeSwapCallData?: boolean; // default false
  includeTxData?: boolean; // default true
  data: Array<SwapData>;
};

export type SwapQuoteData = {
  amount: string;
  selectedSource?: string;
  account: string;
  srcToken: string;
  srcDecimals: number;
  destToken: string;
  destDecimals: number;
  slippage: number;
};

export type SwapQuoteRequest = {
  chainId: number;
  integratorId: string;
  data: Array<SwapQuoteData>;
  allowedSources?: string[];
  notAllowedSources?: string[];
};

export type GetSwapParamsResponse = {
  value: string;
  ercSwapDetails: {
    executor: string;
    desc: {
      srcToken: string;
      dstToken: string;
      srcReceiver: string;
      dstReceiver: string;
      amount: string;
      minReturnAmount: string;
      flags: number;
      permit: string;
    };
    routeData: string;
    permit: string;
    minReturnAmount: number;
  }[];
};

export type ProviderDetails = {
  name: string;
  icon: string;
};

export type SwapQuoteResponseData = {
  srcToken: string;
  srcAmount: string;
  destToken: string;
  destAmount: string;
  estimatedGas: string;
  priceImpactPercent: string | null;
  srcAmountUSD: string | null;
  destAmountUSD: string | null;
  providerDetails: ProviderDetails;
};

export type SwapQuoteResponse = {
  [key: string]: {
    status: string;
    errorMessage?: string;
    recommendedSource: string;
    recommendedSourceByAmount: string;
    recommendedSourceByGas: string;
    quoteRates: {
      [key: string]: {
        data: SwapQuoteResponseData;
      };
    };
  };
};

// Bridge

export type BridgeQuoteRequest = {
  amount: string;
  account?: string;
  srcToken: string;
  destToken: string;
  slippage: number;
  fromChain: number;
  toChain: number;
};

export type Step = {
  type: string;
  exchange: {
    logo: string;
    name: string;
  };
};

export type Fee = {
  token: {
    address: string;
    decimals: number;
    chainId: number;
    symbol: string;
    logo: string;
  };
  amount: string;
  amountUSD: string;
};
export type BridgeDetails = {
  name: string;
  logo: string;
};

export type BridgeQuoteRate = {
  bridgeDetails: BridgeDetails;
  srcAmount: string;
  srcAmountUSD: string;
  destAmount: string;
  destAmountUSD: string;
  minDestAmount: string;
  swapPerUnit: string;
  srcToken: Token;
  destToken: Token;
  gasFee: Fee;
  protocolFee: Fee;
  duration: string;
  steps: Step[];
  additionalInfo?: BridgeAdditionalInfo;
};

export type BridgeQuotes = {
  [providerAndBridge: string]: BridgeQuoteRate;
};

export type BridgeQuoteResponse = {
  [pair: string]: {
    status?: string;
    message?: string;
    recommendedSource?: string;
    quoteRates?: BridgeQuotes;
  };
};

export type BridgeSource = {
  provider: string;
  bridge: string;
};

export type BridgeAdditionalInfo = {
  [key: string]: unknown;
};

export type Token = {
  address: HexString;
  decimals: number;
  chainId: number;
  logo: string;
  symbol: string;
  price?: string;
};

// Bridge Params

export type BridgeParamsRequest = {
  amount: string;
  account: string;
  recipient: string;
  srcToken: string;
  destToken: string;
  slippage: number;
  fromChain: number;
  toChain: number;
  selectedRoute: string;
  additionalInfo?: BridgeAdditionalInfo;
};

export type BridgeParamsResponse = {
  data: HexString;
  to: HexString;
  from: HexString;
  chainId: number;
  value: string;
  gasLimit: string;
  additionalInfo?: BridgeAdditionalInfo;
};
