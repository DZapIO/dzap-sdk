// import { createWalletClient, http } from 'viem';
import { Wallet } from 'ethers';
import DzapClient from 'src/client';
// import { ethers } from 'ethers';
// import { privateKeyToAccount } from 'viem/accounts';
import { SwapParamsRequest } from 'src/types';
// Uncomment the following imports to test the getQuoteRate and getSwapParams functions

// const TEST_CHAIN_ID = {
//   chainId: 42161,
// };

// const quoteRequests = {
//   chainId: 137,
//   integrator: 'dzap',
//   request: [
//     {
//       amount: '200000000000000000',
//       fromTokenAddress: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
//       toTokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
//       slippage: 1,
//       globalAmount: '0.2',
//       account: '0x12480616436dd6d555f88b8d94bb5156e28825b1',
//     },
//     {
//       amount: '200000000000000000',
//       fromTokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
//       toTokenAddress: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
//       slippage: 1,
//       globalAmount: '0.2',
//       account: '0x12480616436dd6d555f88b8d94bb5156e28825b1',
//     },
//   ],
// };

const paramRequest: SwapParamsRequest = {
  chainId: 42161,
  data: [
    {
      sourceId: 'paraSwap',
      srcToken: '0x912ce59144191c1204e64559fe8253a0e49e6548',
      destToken: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
      amount: '15000000000000',
      slippage: 1,
      srcDecimals: 18,
      destDecimals: 18,
      // account: '0x5cab52349c051908c1dc621d15eb7f608dc80634',
    },
  ],
  recipient: '0x62414d44AaE1aA532630eDa14Df7F449C475759C',
  integratorId: 'dzap',
  refundee: '0x62414d44AaE1aA532630eDa14Df7F449C475759C',
  sender: '0x62414d44AaE1aA532630eDa14Df7F449C475759C',
  includeSwapCallData: true,
  includeTxData: true,
};

// export async function TestGetQuoteRate() {
//   let response;
//   console.log('TestGetQuoteRate');
//   const { getQuoteRate: getQuoteRateUsingDZapClient } =
//     useClient(TEST_CHAIN_ID);
//   try {
//     response = await getQuoteRateUsingDZapClient(quoteRequests);
//   } catch (e) {
//     console.log(e, 'request error ');
//   }

//   console.log(response);
// }

// export async function TestGetSwapParams() {
//   let response;
//   console.log('TestGetSwapParams');
//   const { getSwapParams: getParamUsingDZapClient } = useClient(TEST_CHAIN_ID);
//   try {
//     response = await getParamUsingDZapClient(paramRequest);
//   } catch (e) {
//     console.log(e, 'request error ');
//   }

//   console.log(response);
// }

// const PRIVATE_KEY: string = '';
// const account = privateKeyToAccount(`0x${PRIVATE_KEY}`);
export async function TestHook() {
  const rpcProvider = 'https://arb1.arbitrum.io/rpc';
  const dzapClient = DzapClient.getInstance();
  try {
    const signer = new Wallet('0x');
    const resp = await dzapClient.swap({ chainId: 42161, rpcProvider, request: paramRequest, signer });
    console.log(resp);
  } catch (e) {
    console.log('Test Error');
    console.log(e);
  }
}
