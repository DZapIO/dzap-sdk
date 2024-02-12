import { BigNumber, ethers, Signer } from 'ethers';
import { SWAP_CONTRACTS } from '../config';
import { SwapParamRequest } from '../types';
import { Contract } from 'zksync-web3';
import { fetchSwapParams } from '../api';
import { getChecksumAddress, purgeSwapVersion } from '../utils';

export const estimateGasMultiplier = BigNumber.from(15).div(10);

function useContract({
  chainId,
  provider,
}: {
  chainId: number;
  provider: Signer;
  clientId?: number;
}) {
  const getContractAddress = (version?: string): string => {
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
    return chainId === 324
      ? new Contract(getContractAddress(purgedVersion), abi, provider)
      : new ethers.Contract(getContractAddress(purgedVersion), abi, provider);
  };
  const swap = async ({
    request,
  }: {
    request: SwapParamRequest;
  }): Promise<any> => {
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
  return {
    swap,
    getContractAddress,
    getContract,
  };
}
export default useContract;
