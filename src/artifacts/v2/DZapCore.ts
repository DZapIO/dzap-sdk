export const abi = [
  {
    inputs: [],
    name: 'AllSwapsFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AlreadyInitialized',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'reason',
        type: 'bytes',
      },
    ],
    name: 'BridgeCallFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CannotAuthorizeSelf',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CannotBridgeToSameNetwork',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ContractCallNotAllowed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FeeTooHigh',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InformationMismatch',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'contractBalance',
        type: 'uint256',
      },
    ],
    name: 'InsufficientBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'IntegratorNotActive',
    type: 'error',
  },
  {
    inputs: [],
    name: 'IntegratorNotAllowed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidContract',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidDestinationChain',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidFee',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidFixedNativeFee',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidReceiver',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidSendingToken',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidSwapDetails',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NativeTokenNotSupported',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NativeTransferFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoSwapFromZeroBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoTransferToNullAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotAContract',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotInitialized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NullAddrIsNotAValidSpender',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NullAddrIsNotAnERC20Token',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyContractOwner',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ShareTooHigh',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'minAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'returnAmount',
        type: 'uint256',
      },
    ],
    name: 'SlippageTooHigh',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'reason',
        type: 'bytes',
      },
    ],
    name: 'SwapCallFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TokenInformationMismatch',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UnAuthorized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UnAuthorizedCallToFunction',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UnauthorizedCaller',
    type: 'error',
  },
  {
    inputs: [],
    name: 'WithdrawFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAddress',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'transactionId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'integrator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct BridgeData',
        name: 'bridgeData',
        type: 'tuple',
      },
    ],
    name: 'BridgeTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'dexAddress',
        type: 'address',
      },
    ],
    name: 'DexAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'dexAddress',
        type: 'address',
      },
    ],
    name: 'DexRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes4',
        name: 'method',
        type: 'bytes4',
      },
    ],
    name: 'ExecutionAllowed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes4',
        name: 'method',
        type: 'bytes4',
      },
    ],
    name: 'ExecutionDenied',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'dex',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes4',
        name: 'functionSignature',
        type: 'bytes4',
      },
      {
        indexed: true,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'FunctionSignatureApprovalChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'transactionId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'integrator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundee',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'dex',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'toToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'leftOverFromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'returnToAmount',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct SwapInfo[]',
        name: 'swapInfo',
        type: 'tuple[]',
      },
    ],
    name: 'MultiSwapped',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'transactionId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'integrator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct BridgeData[]',
        name: 'bridgeData',
        type: 'tuple[]',
      },
    ],
    name: 'MultiTokenBridgeTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'routers',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'bytes4[]',
        name: 'selectors',
        type: 'bytes4[]',
      },
      {
        components: [
          {
            internalType: 'bool',
            name: 'isAvailable',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'offset',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct CallToFunctionInfo[]',
        name: 'info',
        type: 'tuple[]',
      },
    ],
    name: 'SelectorToInfoUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
    ],
    name: 'SetDzapFixedNativeFeeAmount',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
    ],
    name: 'SetDzapTokenFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
    ],
    name: 'SetFixedNativeFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'integrator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'enum FeeType[]',
        name: 'feeType',
        type: 'uint8[]',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'fixedNativeFeeAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'dzapTokenShare',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'dzapFixedNativeShare',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct FeeInfo[]',
        name: 'info',
        type: 'tuple[]',
      },
    ],
    name: 'SetIntegrator',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
    ],
    name: 'SetMaxPlatformFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
    ],
    name: 'SetPlatformFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'transactionId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'integrator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct BridgeData[]',
        name: 'bridgeData',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'dex',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'toToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'leftOverFromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'returnToAmount',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct SwapInfo[]',
        name: 'swapInfo',
        type: 'tuple[]',
      },
    ],
    name: 'SwapBridgeTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'transactionId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'integrator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundee',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'dex',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'toToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'leftOverFromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'returnToAmount',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct SwapInfo',
        name: 'swapInfo',
        type: 'tuple',
      },
    ],
    name: 'Swapped',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_dex',
        type: 'address',
      },
    ],
    name: 'addDex',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: '_selector',
        type: 'bytes4',
      },
      {
        internalType: 'address',
        name: '_executor',
        type: 'address',
      },
    ],
    name: 'addressCanExecuteMethod',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_dexs',
        type: 'address[]',
      },
    ],
    name: 'batchAddDex',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_dexs',
        type: 'address[]',
      },
    ],
    name: 'batchRemoveDex',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_transactionId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        internalType: 'struct BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'callTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'approveTo',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'extraNative',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
        ],
        internalType: 'struct CrossChainData',
        name: '_genericData',
        type: 'tuple',
      },
    ],
    name: 'bridge',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_transactionId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        internalType: 'struct BridgeData[]',
        name: '_bridgeData',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'callTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'approveTo',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'extraNative',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
        ],
        internalType: 'struct CrossChainData[]',
        name: '_genericData',
        type: 'tuple[]',
      },
    ],
    name: 'bridgeMultipleTokens',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'enum FeeType',
        name: '_feeType',
        type: 'uint8',
      },
    ],
    name: 'calcFixedNativeFees',
    outputs: [
      {
        internalType: 'uint256',
        name: 'fixedNativeFeeAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dzapShare',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'enum FeeType',
        name: '_feeType',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'calcTokenFees',
    outputs: [
      {
        internalType: 'uint256',
        name: 'totalFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dzapShare',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'bytes4',
        name: '_selector',
        type: 'bytes4',
      },
    ],
    name: 'getSelectorInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'isAvailable',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'offset',
            type: 'uint256',
          },
        ],
        internalType: 'struct CallToFunctionInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'enum FeeType',
        name: '_feeType',
        type: 'uint8',
      },
    ],
    name: 'integratorFeeInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'fixedNativeFeeAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'dzapTokenShare',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'dzapFixedNativeShare',
            type: 'uint256',
          },
        ],
        internalType: 'struct FeeInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_dex',
        type: 'address',
      },
    ],
    name: 'isContractApproved',
    outputs: [
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_dex',
        type: 'address',
      },
      {
        internalType: 'bytes4',
        name: '_signature',
        type: 'bytes4',
      },
    ],
    name: 'isFunctionApproved',
    outputs: [
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
    ],
    name: 'isIntegratorAllowed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxFixedNativeFeeAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: '_maxFixedNativeFee',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxTokenFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_transactionId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundee',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'callTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'approveTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minToAmount',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'swapCallData',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
        ],
        internalType: 'struct SwapData[]',
        name: '_data',
        type: 'tuple[]',
      },
    ],
    name: 'multiSwap',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_transactionId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundee',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'callTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'approveTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minToAmount',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'swapCallData',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
        ],
        internalType: 'struct SwapData[]',
        name: '_data',
        type: 'tuple[]',
      },
    ],
    name: 'multiSwapWithoutRevert',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocolFeeVault',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_dex',
        type: 'address',
      },
    ],
    name: 'removeDex',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
    ],
    name: 'removeIntegrator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4[]',
        name: '_selector',
        type: 'bytes4[]',
      },
      {
        internalType: 'address[]',
        name: '_executor',
        type: 'address[]',
      },
      {
        internalType: 'bool[]',
        name: '_canExecute',
        type: 'bool[]',
      },
    ],
    name: 'setBatchCanExecute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: '_selector',
        type: 'bytes4',
      },
      {
        internalType: 'address',
        name: '_executor',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_canExecute',
        type: 'bool',
      },
    ],
    name: 'setCanExecute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_dex',
        type: 'address',
      },
      {
        internalType: 'bytes4',
        name: '_signature',
        type: 'bytes4',
      },
      {
        internalType: 'bool',
        name: '_approval',
        type: 'bool',
      },
    ],
    name: 'setFunctionApprovalBySignature',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'enum FeeType[]',
        name: '_feeTypes',
        type: 'uint8[]',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'fixedNativeFeeAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'dzapTokenShare',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'dzapFixedNativeShare',
            type: 'uint256',
          },
        ],
        internalType: 'struct FeeInfo[]',
        name: '_feeInfo',
        type: 'tuple[]',
      },
    ],
    name: 'setIntegratorInfo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_protocolFeeVault',
        type: 'address',
      },
    ],
    name: 'setProtocolFeeVault',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_transactionId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundee',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'callTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'approveTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minToAmount',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'swapCallData',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
        ],
        internalType: 'struct SwapData',
        name: '_data',
        type: 'tuple',
      },
    ],
    name: 'swap',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_transactionId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        internalType: 'struct BridgeData[]',
        name: '_bridgeData',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'callTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'approveTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minToAmount',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'swapCallData',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
        ],
        internalType: 'struct SwapData[]',
        name: '_swapData',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'callTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'approveTo',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'extraNative',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
        ],
        internalType: 'struct CrossChainData[]',
        name: '_genericData',
        type: 'tuple[]',
      },
    ],
    name: 'swapAndBridge',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_routers',
        type: 'address[]',
      },
      {
        internalType: 'bytes4[]',
        name: '_selectors',
        type: 'bytes4[]',
      },
      {
        components: [
          {
            internalType: 'bool',
            name: 'isAvailable',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'offset',
            type: 'uint256',
          },
        ],
        internalType: 'struct CallToFunctionInfo[]',
        name: '_infos',
        type: 'tuple[]',
      },
    ],
    name: 'updateSelectorInfo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'reason',
        type: 'bytes',
      },
    ],
    name: 'BridgeCallFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CannotBridgeToSameNetwork',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ContractCallNotAllowed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InformationMismatch',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'contractBalance',
        type: 'uint256',
      },
    ],
    name: 'InsufficientBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'IntegratorNotAllowed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidContract',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidLength',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidPermit',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidPermitData',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidSwapDetails',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NativeTransferFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoSwapFromZeroBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoTransferToNullAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotAContract',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NullAddrIsNotAValidSpender',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NullAddrIsNotAnERC20Token',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'leftOverAmount',
        type: 'uint256',
      },
    ],
    name: 'PartialSwap',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ReentrancyError',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'minAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'returnAmount',
        type: 'uint256',
      },
    ],
    name: 'SlippageTooHigh',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'reason',
        type: 'bytes',
      },
    ],
    name: 'SwapCallFailed',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    name: 'UnAuthorizedCall',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAddress',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'transactionId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'integrator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'to',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'receiver',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct GenericBridgeData',
        name: 'bridgeData',
        type: 'tuple',
      },
    ],
    name: 'BridgeTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'transactionId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'integrator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'to',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'receiver',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct GenericBridgeData[]',
        name: 'bridgeData',
        type: 'tuple[]',
      },
    ],
    name: 'MultiTokenBridgeTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'transactionId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'integrator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'to',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'receiver',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct GenericBridgeData[]',
        name: 'bridgeData',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'dex',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'toToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'leftOverFromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'returnToAmount',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct SwapInfo[]',
        name: 'swapInfo',
        type: 'tuple[]',
      },
    ],
    name: 'SwapBridgeTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'transactionId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'dex',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'fromAssetId',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'toAssetId',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fromAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'toAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'leftoverFromAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'SwappedTokens',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_transactionId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'to',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'receiver',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        internalType: 'struct GenericBridgeData[]',
        name: '_bridgeData',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'callTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'approveTo',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'extraNative',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
        ],
        internalType: 'struct CrossChainData[]',
        name: '_genericData',
        type: 'tuple[]',
      },
    ],
    name: 'bridgeMultipleTokensToNonEVM',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_transactionId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'to',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'receiver',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        internalType: 'struct GenericBridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'callTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'approveTo',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'extraNative',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
        ],
        internalType: 'struct CrossChainData',
        name: '_genericData',
        type: 'tuple',
      },
    ],
    name: 'bridgeTokensToNonEVM',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_transactionId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'to',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'receiver',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        internalType: 'struct GenericBridgeData[]',
        name: '_bridgeData',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'callTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'approveTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minToAmount',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'swapCallData',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
        ],
        internalType: 'struct SwapData[]',
        name: '_swapData',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'callTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'approveTo',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'extraNative',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
        ],
        internalType: 'struct CrossChainData[]',
        name: '_genericData',
        type: 'tuple[]',
      },
    ],
    name: 'swapAndBridgeToNonEVM',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CannotBridgeToSameNetwork',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ContractCallNotAllowed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InformationMismatch',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'contractBalance',
        type: 'uint256',
      },
    ],
    name: 'InsufficientBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'IntegratorNotAllowed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidContract',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidLength',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidPermit',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidPermitData',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidSwapDetails',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NativeTransferFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoSwapFromZeroBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoTransferToNullAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NullAddrIsNotAValidSpender',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NullAddrIsNotAnERC20Token',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'leftOverAmount',
        type: 'uint256',
      },
    ],
    name: 'PartialSwap',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ReentrancyError',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'minAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'returnAmount',
        type: 'uint256',
      },
    ],
    name: 'SlippageTooHigh',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'reason',
        type: 'bytes',
      },
    ],
    name: 'SwapCallFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAddress',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'transactionId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'integrator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'to',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'receiver',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct GenericBridgeData',
        name: 'bridgeData',
        type: 'tuple',
      },
    ],
    name: 'BridgeTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'transactionId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'integrator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'to',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'receiver',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct GenericBridgeData[]',
        name: 'bridgeData',
        type: 'tuple[]',
      },
    ],
    name: 'MultiTokenBridgeTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'transactionId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'integrator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'to',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'receiver',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct GenericBridgeData[]',
        name: 'bridgeData',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'dex',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'toToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'leftOverFromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'returnToAmount',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct SwapInfo[]',
        name: 'swapInfo',
        type: 'tuple[]',
      },
    ],
    name: 'SwapBridgeTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'transactionId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'dex',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'fromAssetId',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'toAssetId',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fromAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'toAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'leftoverFromAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'SwappedTokens',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_transactionId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'to',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'receiver',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        internalType: 'struct GenericBridgeData[]',
        name: '_bridgeData',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
          {
            internalType: 'address',
            name: 'transferTo',
            type: 'address',
          },
        ],
        internalType: 'struct TransferData[]',
        name: '_transferData',
        type: 'tuple[]',
      },
    ],
    name: 'bridgeMultipleTokensViaTransfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_transactionId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'to',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'receiver',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        internalType: 'struct GenericBridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
          {
            internalType: 'address',
            name: 'transferTo',
            type: 'address',
          },
        ],
        internalType: 'struct TransferData',
        name: '_transferData',
        type: 'tuple',
      },
    ],
    name: 'bridgeViaTransfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_transactionId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_integrator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'bridge',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'to',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'receiver',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasSourceSwaps',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hasDestinationCall',
            type: 'bool',
          },
        ],
        internalType: 'struct GenericBridgeData[]',
        name: '_bridgeData',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
          {
            internalType: 'address',
            name: 'transferTo',
            type: 'address',
          },
        ],
        internalType: 'struct TransferData[]',
        name: '_transferData',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'callTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'approveTo',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minToAmount',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'swapCallData',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'permit',
            type: 'bytes',
          },
        ],
        internalType: 'struct SwapData[]',
        name: '_swapData',
        type: 'tuple[]',
      },
    ],
    name: 'swapAndBridgeViaTransfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CannotAuthorizeSelf',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UnAuthorized',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'bridges',
        type: 'address[]',
      },
    ],
    name: 'BridgeAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'bridges',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'bytes4[]',
        name: 'selectors',
        type: 'bytes4[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'info',
        type: 'uint256[]',
      },
    ],
    name: 'SelectorToInfoUpdated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bridge',
        type: 'address',
      },
      {
        internalType: 'bytes4',
        name: '_selector',
        type: 'bytes4',
      },
    ],
    name: 'getSelectorInfo',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bridge',
        type: 'address',
      },
    ],
    name: 'isWhitelisted',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_bridgeAddresses',
        type: 'address[]',
      },
      {
        internalType: 'bytes4[]',
        name: '_selectors',
        type: 'bytes4[]',
      },
      {
        internalType: 'uint256[]',
        name: '_offset',
        type: 'uint256[]',
      },
    ],
    name: 'updateSelectorInfo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_bridgeAddresses',
        type: 'address[]',
      },
    ],
    name: 'whiteListAggregatorsAndBridges',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
