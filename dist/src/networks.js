"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.networks = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const network_type_1 = require("./network-type");
exports.networks = {
    // LOCAL NETWORKS
    hardhat: {
        type: network_type_1.NetworkType.local,
        key: 'hardhat',
        shortKey: 'hardhat',
        chain: 31337,
        rpc: process.env.HARDHAT_RPC_URL || 'http://localhost:8545',
        holographId: 4294967295,
        tokenName: 'Hardhat',
        tokenSymbol: 'HRD',
        explorer: undefined,
        lzEndpoint: '0x0000000000000000000000000000000000000000'.toLowerCase(),
        lzId: 0,
        active: false,
    },
    localhost: {
        type: network_type_1.NetworkType.local,
        key: 'localhost',
        shortKey: 'localhost',
        chain: 1338,
        rpc: process.env.LOCALHOST_RPC_URL || 'http://localhost:8545',
        holographId: 4294967294,
        tokenName: 'Localhost',
        tokenSymbol: 'LH',
        explorer: undefined,
        lzEndpoint: '0x0000000000000000000000000000000000000000'.toLowerCase(),
        lzId: 65535,
        active: true,
    },
    localhost2: {
        type: network_type_1.NetworkType.local,
        key: 'localhost2',
        shortKey: 'localhost2',
        chain: 1339,
        rpc: process.env.LOCALHOST2_RPC_URL || 'http://localhost:9545',
        holographId: 4294967293,
        tokenName: 'Localhost 2',
        tokenSymbol: 'LH2',
        explorer: undefined,
        lzEndpoint: '0x0000000000000000000000000000000000000000'.toLowerCase(),
        lzId: 65534,
        active: true,
    },
    // TEST NETWORKS
    celoTestneAlfajorest: {
        type: network_type_1.NetworkType.testnet,
        key: 'celoTestneAlfajorest',
        shortKey: 'celoTestnet',
        chain: 44787,
        rpc: process.env.CELO_TESTNET_ALFAJORES_RPC_URL || 'https://alfajores-forno.celo-testnet.org',
        holographId: 4000000018,
        tokenName: 'Celo',
        tokenSymbol: 'CELO',
        explorer: 'https://explorer.celo.org/alfajores',
        lzEndpoint: '0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1'.toLowerCase(),
        lzId: 10125,
        active: false,
    },
    moonbeamTestnet: {
        type: network_type_1.NetworkType.testnet,
        key: 'moonbeamTestnet',
        shortKey: 'moonbeamTestnet',
        chain: 1287,
        rpc: process.env.MOONBEAM_TESTNET_RPC_URL || 'https://rpc.testnet.moonbeam.network',
        holographId: 4000000017,
        tokenName: 'Moonbase Alpha',
        tokenSymbol: 'DEV',
        explorer: 'https://moonbase.moonscan.io',
        lzEndpoint: '0xb23b28012ee92E8dE39DEb57Af31722223034747'.toLowerCase(),
        lzId: 10126,
        active: false,
    },
    harmonyTestnet: {
        type: network_type_1.NetworkType.testnet,
        key: 'harmonyTestnet',
        shortKey: 'harmonyTestnet',
        chain: 1666700000,
        rpc: process.env.HARMONY_TESTNET_RPC_URL || 'https://api.s0.b.hmny.io',
        holographId: 4000000016,
        tokenName: 'Harmony',
        tokenSymbol: 'ONE',
        explorer: 'https://explorer.testnet.harmony.one',
        lzEndpoint: '0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1'.toLowerCase(),
        lzId: 10133,
        active: false,
    },
    optimismTestnetGoerli: {
        type: network_type_1.NetworkType.testnet,
        key: 'optimismTestnetGoerli',
        shortKey: 'optimismGoerli',
        chain: 420,
        rpc: process.env.OPTIMISM_TESTNET_GOERLI_RPC_URL || 'https://goerli.optimism.io',
        holographId: 4000000015,
        tokenName: 'Optimism Goerli',
        tokenSymbol: 'ETH',
        explorer: 'https://goerli-optimism.etherscan.io',
        lzEndpoint: '0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1'.toLowerCase(),
        lzId: 10132,
        active: false,
    },
    arbitrumTestnetGoerli: {
        type: network_type_1.NetworkType.testnet,
        key: 'arbitrumTestnetGoerli',
        shortKey: 'arbitrumGoerli',
        chain: 421613,
        rpc: process.env.ARBITRUM_TESTNET_GOERLI_RPC_URL || 'https://goerli-rollup.arbitrum.io/rpc/',
        holographId: 4000000014,
        tokenName: 'Arbitrum Goerli',
        tokenSymbol: 'AGOR',
        explorer: 'https://goerli.arbiscan.io',
        lzEndpoint: '0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab'.toLowerCase(),
        lzId: 10143,
        active: false,
    },
    auroraTestnet: {
        type: network_type_1.NetworkType.testnet,
        key: 'auroraTestnet',
        shortKey: 'auroraTestnet',
        chain: 1313161555,
        rpc: process.env.AURORA_TESTNET_RPC_URL || 'https://testnet.aurora.dev',
        holographId: 4000000013,
        tokenName: 'Aurora testnet ETH',
        tokenSymbol: 'tETH',
        explorer: 'https://testnet.aurorascan.dev',
        lzEndpoint: '0x0000000000000000000000000000000000000000'.toLowerCase(),
        lzId: 0,
        active: false,
    },
    cronosTestnet: {
        type: network_type_1.NetworkType.testnet,
        key: 'cronosTestnet',
        shortKey: 'cronosTestnet',
        chain: 338,
        rpc: process.env.CRONOS_TESTNET_RPC_URL || 'https://evm-t3.cronos.org',
        holographId: 4000000012,
        tokenName: 'Cronos testnet',
        tokenSymbol: 'tCRO',
        explorer: 'https://testnet.cronoscan.com',
        lzEndpoint: '0x0000000000000000000000000000000000000000'.toLowerCase(),
        lzId: 0,
        active: false,
    },
    ethereumTestnetGoerli: {
        type: network_type_1.NetworkType.testnet,
        key: 'ethereumTestnetGoerli',
        shortKey: 'goerli',
        chain: 5,
        rpc: process.env.ETHEREUM_TESTNET_GOERLI_RPC_URL || 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        holographId: 4000000011,
        tokenName: 'Ethereum Goerli',
        tokenSymbol: 'ETH',
        explorer: 'https://goerli.etherscan.io',
        lzEndpoint: '0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23'.toLowerCase(),
        lzId: 10121,
        active: true,
    },
    ethereumTestnetKovan: {
        type: network_type_1.NetworkType.testnet,
        key: 'ethereumTestnetKovan',
        shortKey: 'kovan',
        chain: 42,
        rpc: process.env.ETHEREUM_TESTNET_KOVAN_RPC_URL || 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        holographId: 4000000010,
        tokenName: 'Ethereum Kovan',
        tokenSymbol: 'KOV',
        explorer: 'https://kovan.etherscan.io',
        lzEndpoint: '0x0000000000000000000000000000000000000000'.toLowerCase(),
        lzId: 0,
        active: false,
    },
    ethereumTestnetRopsten: {
        type: network_type_1.NetworkType.testnet,
        key: 'ethereumTestnetRopsten',
        shortKey: 'ropsten',
        chain: 3,
        rpc: process.env.ETHEREUM_TESTNET_ROPSTEN_RPC_URL || 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        holographId: 4000000009,
        tokenName: 'Ethereum Ropsten',
        tokenSymbol: 'ROP',
        explorer: 'https://ropsten.etherscan.io',
        lzEndpoint: '0x0000000000000000000000000000000000000000'.toLowerCase(),
        lzId: 0,
        active: false,
    },
    gnosisTestnetSokol: {
        type: network_type_1.NetworkType.testnet,
        key: 'gnosisTestnetSokol',
        shortKey: 'gnosisTestnet',
        chain: 77,
        rpc: process.env.GNOSIS_TESTNET_SOKOL_RPC_URL || 'https://sokol.poa.network',
        holographId: 4000000008,
        tokenName: 'Gnosis Chain Sokol',
        tokenSymbol: 'xDAI',
        explorer: undefined,
        lzEndpoint: '0x0000000000000000000000000000000000000000'.toLowerCase(),
        lzId: 0,
        active: false,
    },
    optimismTestnetKovan: {
        type: network_type_1.NetworkType.testnet,
        key: 'optimismTestnetKovan',
        shortKey: 'optimismKovan',
        chain: 69,
        rpc: process.env.OPTIMISM_TESTNET_KOVAN_RPC_URL || 'https://kovan.optimism.io',
        holographId: 4000000007,
        tokenName: 'Optimism Kovan',
        tokenSymbol: 'KOR',
        explorer: 'https://kovan-optimistic.etherscan.io',
        lzEndpoint: '0x72aB53a133b27Fa428ca7Dc263080807AfEc91b5'.toLowerCase(),
        lzId: 10111,
        active: false,
    },
    arbitrumTestnetRinkeby: {
        type: network_type_1.NetworkType.testnet,
        key: 'arbitrumTestnetRinkeby',
        shortKey: 'arbitrumRinkeby',
        chain: 421611,
        rpc: process.env.ARBITRUM_TESTNET_RINKEBY_RPC_URL || 'https://rinkeby.arbitrum.io/rpc',
        holographId: 4000000006,
        tokenName: 'Arbitrum Rinkeby',
        tokenSymbol: 'ARETH',
        explorer: 'https://rinkeby.arbiscan.io',
        lzEndpoint: '0x4D747149A57923Beb89f22E6B7B97f7D8c087A00'.toLowerCase(),
        lzId: 10110,
        active: false,
    },
    fantomTestnet: {
        type: network_type_1.NetworkType.testnet,
        key: 'fantomTestnet',
        shortKey: 'fantomTestnet',
        chain: 4002,
        rpc: process.env.FANTOM_TESTNET_RPC_URL || 'https://rpc.testnet.fantom.network',
        holographId: 4000000005,
        tokenName: 'Fantom Testnet',
        tokenSymbol: 'FTM',
        explorer: 'https://testnet.ftmscan.com',
        lzEndpoint: '0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf'.toLowerCase(),
        lzId: 10112,
        active: false,
    },
    polygonTestnet: {
        type: network_type_1.NetworkType.testnet,
        key: 'polygonTestnet',
        shortKey: 'mumbai',
        chain: 80001,
        rpc: process.env.POLYGON_TESTNET_RPC_URL || 'https://rpc-mumbai.maticvigil.com',
        holographId: 4000000004,
        tokenName: 'Polygon Mumbai',
        tokenSymbol: 'MATIC',
        explorer: 'https://mumbai.polygonscan.com',
        lzEndpoint: '0xf69186dfBa60DdB133E91E9A4B5673624293d8F8'.toLowerCase(),
        lzId: 10109,
        active: true,
    },
    avalancheTestnet: {
        type: network_type_1.NetworkType.testnet,
        key: 'avalancheTestnet',
        shortKey: 'fuji',
        chain: 43113,
        rpc: process.env.AVALANCHE_TESTNET_RPC_URL || 'https://api.avax-test.network/ext/bc/C/rpc',
        holographId: 4000000003,
        tokenName: 'Avalanche Fuji',
        tokenSymbol: 'AVAX',
        explorer: 'https://testnet.snowtrace.io',
        lzEndpoint: '0x93f54D755A063cE7bB9e6Ac47Eccc8e33411d706'.toLowerCase(),
        lzId: 10106,
        active: true,
    },
    binanceSmartChainTestnet: {
        type: network_type_1.NetworkType.testnet,
        key: 'binanceSmartChainTestnet',
        shortKey: 'bscTestnet',
        chain: 97,
        rpc: process.env.BINANCE_SMART_CHAIN_TESTNET_RPC_URL || 'https://data-seed-prebsc-1-s1.binance.org:8545',
        holographId: 4000000002,
        tokenName: 'BNB Testnet',
        tokenSymbol: 'tBNB',
        explorer: 'https://testnet.bscscan.com',
        lzEndpoint: '0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1'.toLowerCase(),
        lzId: 10102,
        active: false,
    },
    ethereumTestnetRinkeby: {
        type: network_type_1.NetworkType.testnet,
        key: 'ethereumTestnetRinkeby',
        shortKey: 'rinkeby',
        chain: 4,
        rpc: process.env.ETHEREUM_TESTNET_RINKEBY_RPC_URL || 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        holographId: 4000000001,
        tokenName: 'Ethereum Rinkeby',
        tokenSymbol: 'RIN',
        explorer: 'https://rinkeby.etherscan.io',
        lzEndpoint: '0x79a63d6d8BBD5c6dfc774dA79bCcD948EAcb53FA'.toLowerCase(),
        lzId: 10101,
        active: true,
    },
    // LIVE NETWORKS
    ethereum: {
        type: network_type_1.NetworkType.mainnet,
        key: 'ethereum',
        shortKey: 'eth',
        chain: 1,
        rpc: process.env.ETHEREUM_RPC_URL || 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        holographId: 1,
        tokenName: 'Ethereum',
        tokenSymbol: 'ETH',
        explorer: 'https://etherscan.io',
        lzEndpoint: '0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675'.toLowerCase(),
        lzId: 101,
        active: true,
    },
    binanceSmartChain: {
        type: network_type_1.NetworkType.mainnet,
        key: 'binanceSmartChain',
        shortKey: 'bsc',
        chain: 56,
        rpc: process.env.BINANCE_SMART_CHAIN_RPC_URL || 'https://bsc-dataseed1.binance.org',
        holographId: 2,
        tokenName: 'BNB',
        tokenSymbol: 'BNB',
        explorer: 'https://bscscan.com',
        lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62'.toLowerCase(),
        lzId: 102,
        active: true,
    },
    avalanche: {
        type: network_type_1.NetworkType.mainnet,
        key: 'avalanche',
        shortKey: 'avax',
        chain: 43114,
        rpc: process.env.AVALANCHE_RPC_URL || 'https://api.avax.network/ext/bc/C/rpc',
        holographId: 3,
        tokenName: 'Avalanche',
        tokenSymbol: 'AVAX',
        explorer: 'https://snowtrace.io',
        lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62'.toLowerCase(),
        lzId: 106,
        active: true,
    },
    polygon: {
        type: network_type_1.NetworkType.mainnet,
        key: 'polygon',
        shortKey: 'matic',
        chain: 137,
        rpc: process.env.POLYGON_RPC_URL || 'https://rpc-mainnet.matic.network',
        holographId: 4,
        tokenName: 'Polygon',
        tokenSymbol: 'MATIC',
        explorer: 'https://polygonscan.com',
        lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62'.toLowerCase(),
        lzId: 109,
        active: true,
    },
    fantom: {
        type: network_type_1.NetworkType.mainnet,
        key: 'fantom',
        shortKey: 'ftm',
        chain: 250,
        rpc: process.env.FANTOM_RPC_URL || 'https://rpc.fantom.network',
        holographId: 5,
        tokenName: 'Fantom',
        tokenSymbol: 'FTM',
        explorer: 'https://ftmscan.com',
        lzEndpoint: '0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7'.toLowerCase(),
        lzId: 112,
        active: false,
    },
    arbitrum: {
        type: network_type_1.NetworkType.mainnet,
        key: 'arbitrum',
        shortKey: 'arbitrum',
        chain: 42161,
        rpc: process.env.ARBITRUM_RPC_URL || 'https://arb1.arbitrum.io/rpc',
        holographId: 6,
        tokenName: 'Arbitrum',
        tokenSymbol: 'ETH',
        explorer: 'https://arbiscan.io',
        lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62'.toLowerCase(),
        lzId: 110,
        active: false,
    },
    optimism: {
        type: network_type_1.NetworkType.mainnet,
        key: 'optimism',
        shortKey: 'optimism',
        chain: 10,
        rpc: process.env.OPTIMISM_RPC_URL || 'https://mainnet.optimism.io',
        holographId: 7,
        tokenName: 'Optimism',
        tokenSymbol: 'ETH',
        explorer: 'https://optimistic.etherscan.io',
        lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62'.toLowerCase(),
        lzId: 111,
        active: false,
    },
    gnosis: {
        type: network_type_1.NetworkType.mainnet,
        key: 'gnosis',
        shortKey: 'gno',
        chain: 100,
        rpc: process.env.GNOSIS_RPC_URL || 'https://rpc.gnosischain.com',
        holographId: 8,
        tokenName: 'Gnosis Chain',
        tokenSymbol: 'GNO',
        explorer: 'https://gnosisscan.io',
        lzEndpoint: '0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4'.toLowerCase(),
        lzId: 145,
        active: false,
    },
    cronos: {
        type: network_type_1.NetworkType.mainnet,
        key: 'cronos',
        shortKey: 'cronos',
        chain: 25,
        rpc: process.env.CRONOS_RPC_URL || 'https://evm.cronos.org',
        holographId: 9,
        tokenName: 'Cronos',
        tokenSymbol: 'CRO',
        explorer: 'https://cronoscan.com',
        lzEndpoint: '0x0000000000000000000000000000000000000000'.toLowerCase(),
        lzId: 0,
        active: false,
    },
    aurora: {
        type: network_type_1.NetworkType.mainnet,
        key: 'aurora',
        shortKey: 'aurora',
        chain: 1313161554,
        rpc: process.env.AURORA_RPC_URL || 'https://mainnet.aurora.dev',
        holographId: 10,
        tokenName: 'Aurora ETH',
        tokenSymbol: 'ETH',
        explorer: 'https://aurorascan.dev',
        lzEndpoint: '0x0000000000000000000000000000000000000000'.toLowerCase(),
        lzId: 0,
        active: false,
    },
    harmony: {
        type: network_type_1.NetworkType.mainnet,
        key: 'harmony',
        shortKey: 'harmony',
        chain: 1666600000,
        rpc: process.env.HARMONY_RPC_URL || 'https://api.s0.t.hmny.io',
        holographId: 11,
        tokenName: 'Harmony',
        tokenSymbol: 'ONE',
        explorer: 'https://explorer.harmony.one',
        lzEndpoint: '0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4'.toLowerCase(),
        lzId: 116,
        active: false,
    },
    moonbeam: {
        type: network_type_1.NetworkType.mainnet,
        key: 'moonbeam',
        shortKey: 'moonbeam',
        chain: 1284,
        rpc: process.env.MOONBEAM_RPC_URL || 'https://rpc.api.moonbeam.network',
        holographId: 12,
        tokenName: 'Moonbeam',
        tokenSymbol: 'GLMR',
        explorer: 'https://moonscan.io',
        lzEndpoint: '0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4'.toLowerCase(),
        lzId: 126,
        active: false,
    },
    celo: {
        type: network_type_1.NetworkType.mainnet,
        key: 'celo',
        shortKey: 'celo',
        chain: 42220,
        rpc: process.env.CELO_RPC_URL || 'https://forno.celo.org',
        holographId: 13,
        tokenName: 'Celo',
        tokenSymbol: 'CELO',
        explorer: 'https://explorer.celo.org/mainnet',
        lzEndpoint: '0x3A73033C0b1407574C76BdBAc67f126f6b4a9AA9'.toLowerCase(),
        lzId: 125,
        active: false,
    },
    swimmer: {
        type: network_type_1.NetworkType.mainnet,
        key: 'swimmer',
        shortKey: 'swimmer',
        chain: 73772,
        rpc: process.env.SWIMMER_RPC_URL || 'https://subnets.avax.network/swimmer/mainnet/rpc',
        holographId: 14,
        tokenName: 'Swimmer Subnet',
        tokenSymbol: 'TUS',
        explorer: 'https://subnets.avax.network/swimmer',
        lzEndpoint: '0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4'.toLowerCase(),
        lzId: 114,
        active: false,
    },
    dfk: {
        type: network_type_1.NetworkType.mainnet,
        key: 'dfk',
        shortKey: 'dfk',
        chain: 53935,
        rpc: process.env.DFK_RPC_URL || 'https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc',
        holographId: 15,
        tokenName: 'DFK Chain',
        tokenSymbol: 'JEWEL',
        explorer: 'https://subnets.avax.network/defi-kingdoms',
        lzEndpoint: '0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4'.toLowerCase(),
        lzId: 115,
        active: false,
    },
};
//# sourceMappingURL=networks.js.map