import { initializeReadOnlyProvider, isTypeSigner, purgeBridgeVersion, purgeSwapVersion } from '../utils';
import { handleTransactionError } from '../utils/errors';
import { decodeFunctionData, WalletClient } from 'viem';
import { SwapParamsRequest, BridgeParamsRequest, HexString, BridgeParamsResponse } from '../types';
import { BRIDGE_ABIS, Chains, SWAP_ABIS } from 'src/config';
import { Signer } from 'ethers';
import { fetchBridgeParams, fetchSwapParams } from 'src/api';

class ContractHandler {
  private static instance: ContractHandler;

  // private constructor() {}

  public static getInstance(): ContractHandler {
    if (!ContractHandler.instance) {
      ContractHandler.instance = new ContractHandler();
    }
    return ContractHandler.instance;
  }

  public async handleSwap({
    chainId,
    rpcProvider,
    signer,
    request,
  }: {
    chainId: number;
    rpcProvider: string;
    signer: WalletClient | Signer;
    request: SwapParamsRequest;
  }) {
    const purgedVersion = purgeSwapVersion();
    const abi = SWAP_ABIS[purgedVersion].abi;
    try {
      const { data: paramResponseData } = await fetchSwapParams(request);
      const {
        transactionRequest: { data, from, to, value, gasLimit },
      } = paramResponseData;
      //simulate transaction
      const publicClient = initializeReadOnlyProvider({
        chainId,
        rpcProvider,
      });
      const { functionName, args } = decodeFunctionData({
        abi: abi,
        data: data,
      });
      await publicClient.simulateContract({
        address: to,
        abi: abi,
        account: from,
        value: value,
        functionName: functionName,
        args: args, //Are compulsory... if input is there.
      });
      if (isTypeSigner(signer)) {
        console.log('Using ethers signer.');
        return await signer.sendTransaction({
          from,
          to,
          data,
          value,
          gasLimit,
        });
      } else {
        console.log('Using viem walletClient.');
        return await signer.sendTransaction({
          chain: Chains[chainId],
          account: from as HexString,
          to: to as HexString,
          data: data as HexString,
          value: value as bigint,
          gasLimit,
        });
      }
    } catch (error: any) {
      handleTransactionError({ abi, error });
    }
  }

  public async handleBridge({
    chainId,
    rpcProvider,
    signer,
    request,
  }: {
    chainId: number;
    rpcProvider: string;
    signer: WalletClient | Signer;
    request: BridgeParamsRequest[];
  }) {
    const purgedVersion = purgeBridgeVersion();
    const abi = BRIDGE_ABIS[purgedVersion].abi;
    try {
      const paramResponseData = (await fetchBridgeParams(request)) as BridgeParamsResponse;
      const { data, from, to, value, gasLimit, additionalInfo } = paramResponseData;
      //simulate transaction
      const publicClient = initializeReadOnlyProvider({
        chainId,
        rpcProvider,
      });
      const { functionName, args } = decodeFunctionData({
        abi: abi,
        data: data,
      });
      await publicClient.simulateContract({
        address: to,
        abi: abi,
        account: from,
        value: value,
        functionName: functionName,
        args: args,
      });
      if (isTypeSigner(signer)) {
        console.log('Using ethers signer.');
        const txResponse = await signer.sendTransaction({
          from,
          to,
          data,
          value,
          gasLimit,
        });
        return {
          txResponse,
          additionalInfo,
        };
      } else {
        console.log('Using viem walletClient.');
        const txHash = await signer.sendTransaction({
          chain: Chains[chainId],
          account: from as HexString,
          to: to as HexString,
          data: data as HexString,
          value: BigInt(value),
          gasLimit,
        });
        return {
          txHash,
          additionalInfo,
        };
      }
    } catch (error: any) {
      console.log({ error });
      handleTransactionError({ abi, error });
    }
  }
}

export default ContractHandler;
