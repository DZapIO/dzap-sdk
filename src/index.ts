import {
  ApiRpcResponse,
  BridgeParamsRequest,
  BridgeParamsRequestData,
  BridgeParamsResponse,
  BridgeQuoteRequest,
  BridgeQuoteRequestData,
  BridgeQuoteResponse,
  Chain,
  ChainData,
  DZapTransactionResponse,
  GetSwapParamsResponse,
  HexString,
  PermitSelectorData,
  SwapData,
  SwapParamsRequest,
  SwapQuoteData,
  SwapQuoteRequest,
  SwapQuoteResponse,
  Path,
} from './types';
import { Erc20Functions, PermitFunctionSelector, PermitSelector, PermitType, StatusCodes, TxnStatus } from './enums';
import { OtherAbis, Services } from './constants';

import DzapClient from './client';

// import { TestHook } from './test';
// Test Scripts
// import { TestGetQuoteRate, TestGetSwapParams } from './test';
// TestHook();
// TestGetQuoteRate();
// TestGetSwapParams();
export default DzapClient;

export {
  ApiRpcResponse,
  BridgeParamsRequest,
  BridgeParamsRequestData,
  BridgeParamsResponse,
  BridgeQuoteRequest,
  BridgeQuoteRequestData,
  BridgeQuoteResponse,
  Chain,
  ChainData,
  GetSwapParamsResponse,
  HexString,
  SwapData,
  SwapParamsRequest,
  SwapQuoteData,
  SwapQuoteRequest,
  SwapQuoteResponse,
  Services,
  OtherAbis,
  PermitSelector,
  PermitSelectorData,
  PermitType,
  PermitFunctionSelector,
  TxnStatus,
  StatusCodes,
  Erc20Functions,
  DZapTransactionResponse,
  Path,
};
