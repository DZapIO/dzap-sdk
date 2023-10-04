### **Installation**

To install the Dzap core SDK, use the following command:

```jsx
npm install @dzap/dzap-sdk
```

or

```jsx
yarn add @dzap/dzap-sdk
```

### **Initialization**

To use the SDK, you need to initialize it using the **`useClient`** and **`useContract`** hooks.

### **`useClient`**

The **`useClient`** hook requires the **`chainId`** parameter and returns two functions:

- **`getQuoteRate(request: QuoteRequest[])`**: Returns a Promise that resolves to an array of quote rates for the provided **`QuoteRequest`** objects.
- **`getAllSupportedChains()`**: Returns a Promise that resolves to an array of all supported chains.

Here's an example of how to use the **`useClient`** hook:

```jsx
import { useClient } from '@dzap/dzap-sdk';

const { getQuoteRate, getAllSupportedChains } = useClient({
    chainId,
});

```

### **`useContract`**

The **`useContract`** hook requires the **`chainId`** and **`provider`** parameters and returns three functions:

- **`swap(request: SwapRequest[], recipient: string)`**: Returns a Promise that resolves to the transaction hash for the swap transaction.
- **`getContract()`**: Returns the Dzap contract instance.
- **`getContractAddress()`**: Returns the Dzap contract address.

Here's an example of how to use the **`useContract`** hook:

```jsx
import { useContract } from '@dzap/dzap-sdk';

const { swap, getContract, getContractAddress } = useContract({
    chainId,
    provider,
});
```

### **Usage**

### **`getQuoteRate`**

To use the **`getQuoteRate`** function, you need to pass an array of **`QuoteRequest`** objects in the following format:

```jsx
const request = [
  {
    amount: "1000000000000000000", // in wei
    fromTokenAddress: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    slippage: 1,
    toTokenAddress: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  },
]

const result = await getQuoteRate(request);
```

This function returns a Promise that resolves to an array of quote rates.

### **`getAllSupportedChains`**

To use the **`getAllSupportedChains`** function, simply call it like this:

```jsx
const result = await getAllSupportedChains();
```

This function returns a Promise that resolves to an array of all supported chains.

### **`swap`**

To use the **`swap`** function, you need to pass an array of **`SwapRequest`** objects and the **`recipient`** address, like this:

```jsx
const result = await swap(request, recipient);
```

This function returns a Promise that resolves to the transaction hash for the swap transaction.

Note that this function requires signing the transaction.

### `getContract`

To get DZap contract

### `getContractAddress`

To get DZap contract address