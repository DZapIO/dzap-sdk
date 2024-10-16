import * as viemChains from 'viem/chains';

// @dev kept for reference

// const blast = defineChain({
//   id: 81457,
//   name: 'Blast',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'Ether',
//     symbol: 'ETH',
//   },
//   rpcUrls: {
//     default: { http: ['https://rpc.blast.io'] },
//   },
//   blockExplorers: {
//     default: {
//       name: 'Blastscan',
//       url: 'https://blastscan.io',
//       apiUrl: 'https://api.blastscan.io/api',
//     },
//   },
//   contracts: {
//     multicall3: {
//       address: '0xcA11bde05977b3631167028862bE2a173976CA11',
//       blockCreated: 212929,
//     },
//   },
//   sourceId: 1,
// });

export const viemChainsById: Record<number, viemChains.Chain> = Object.values(viemChains).reduce((acc, chainData) => {
  return chainData.id
    ? {
        ...acc,
        [chainData.id]: chainData,
      }
    : acc;
}, {});
