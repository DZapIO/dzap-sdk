export enum ConnectorType {
  injected = 'injected',
  walletConnect = 'walletConnect',
}

export enum Erc20PermitFunctions {
  nonces = 'nonces',
  version = 'version',
  PERMIT_TYPEHASH = 'PERMIT_TYPEHASH',
  allowance = 'allowance',
}

export enum Erc20Functions {
  name = 'name',
  allowance = 'allowance',
  approve = 'approve',
  transfer = 'transfer',
  transferFrom = 'transferFrom',
  balanceof = 'balanceOf',
  decimals = 'decimals',
  symbol = 'symbol',
}

export enum PermitType {
  PERMIT,
  PERMIT2_TRANSFER_FROM,
  PERMIT2_APPROVE,
}

export enum TxnStatus {
  pending = 'pending',
  inProgress = 'in-progress',
  success = 'success',
  rejected = 'rejected',
  error = 'error',
  reverted = 'reverted',
  checkOtherPermit = 'checkOtherPermit',
}

export enum Versions {
  V1 = 'v1',
  V1_2 = 'v1.2',
  V2 = 'v2',
}

export enum Services {
  BatchSwap = 'batchSwap',
  CrossChain = 'crossChain',
  Dca = 'dca',
}

export enum StatusCodes {
  UserRejectedRequest = 4001,
  Success = 200,
  FunctionNotFound = 32771, // 0x8003
  CheckOtherPermit = 10801, // Depicts Current Permit Function Selector Failed
  Error = 101, // @TODO update as per need
}

export enum PermitFunctionSelector {
  nativeTokenAndAllowanceCheck = 0,
  checkPermit1 = 1,
  checkPermit2 = 2,
}

export enum PermitSelector {
  DefaultPermit,
  Permit1,
  Permit2,
  Permit2Approve,
}
