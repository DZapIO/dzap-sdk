import { BRIDGE_CONTRACTS, Chains, SWAP_CONTRACTS } from 'src/config';
import { SwapParamsRequest, HexString, BridgeParamsRequest, BridgeParamsResponse } from 'src/types';
import { fetchBridgeParams, fetchSwapParams } from '../api';
import { getChecksumAddress, initializeReadOnlyProvider, purgeBridgeVersion, purgeSwapVersion } from '../utils';
import { BaseError, Client, ContractFunctionRevertedError, WalletClient, decodeFunctionData, getContract as fetchContract } from 'viem';
import { Signer } from 'ethers';

export const estimateGasMultiplier = BigInt(15) / BigInt(10); // .toFixed(0);

function isTypeSigner(variable: any): variable is Signer {
  return variable instanceof Signer;
}

function useContract({ chainId, signer }: { chainId: number; signer: WalletClient | Signer; clientId?: number }) {
  const getContractAddress = (version?: string): HexString => {
    try {
      const address = SWAP_CONTRACTS[purgeSwapVersion(version)][chainId];
      return getChecksumAddress(address);
    } catch (err) {
      throw new Error('Unsupported chainId');
    }
  };

  const getContract = (version?: string): any => {
    const purgedVersion = purgeSwapVersion(version);
    const abi = SWAP_CONTRACTS[purgedVersion].abi;
    const contractAddress = getContractAddress(purgedVersion);
    const contract = fetchContract({
      abi,
      address: contractAddress,
      client: signer as Client,
    });

    return contract;
  };

  const swap = async ({ request }: { request: SwapParamsRequest }) => {
    try {
      const { data: paramResponseData } = await fetchSwapParams(request);
      const {
        transactionRequest: { data, from, to, value, gasLimit },
      } = paramResponseData;
      //simulate transaction
      const publicClient = initializeReadOnlyProvider(chainId);
      const purgedVersion = purgeSwapVersion();
      const abi = SWAP_CONTRACTS[purgedVersion].abi;
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
    } catch (err) {
      if (err instanceof BaseError) {
        const revertError = err.walk((error) => error instanceof ContractFunctionRevertedError);
        if (revertError instanceof ContractFunctionRevertedError) {
          const errorName = revertError.data?.errorName ?? '';
          // do something with `errorName`
          console.log('Error Name:', errorName);
        }
      }
      // throw new Error(err);
    }
  };

  const bridge = async ({ request }: { request: BridgeParamsRequest[] }) => {
    try {
      const paramResponseData = (await fetchBridgeParams(request)) as BridgeParamsResponse;
      const { data, from, to, value, gasLimit } = paramResponseData;
      //simulate transaction
      const publicClient = initializeReadOnlyProvider(chainId);
      const purgedVersion = purgeBridgeVersion();
      const abi = BRIDGE_CONTRACTS[purgedVersion].abi;
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
          value: BigInt(value),
          gasLimit,
        });
      }
    } catch (err) {
      if (err instanceof BaseError) {
        const revertError = err.walk((error) => error instanceof ContractFunctionRevertedError);
        if (revertError instanceof ContractFunctionRevertedError) {
          const errorName = revertError.data?.errorName ?? '';
          // do something with `errorName`
          console.log('Error Name:', errorName);
        }
      }
      // throw new Error(err);
    }
  };
  return {
    swap,
    bridge,
    getContractAddress,
    getContract,
  };
}
export default useContract;
