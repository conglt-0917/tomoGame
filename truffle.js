'use strict';
var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = 'catalog seek into isolate tumble happy globe combine use hover spray spot';

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: '8545',
      network_id: '*' // Match any network id
    },
    tomotestnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://testnet.tomochain.com', 0, 1, true),
      network_id: '89',
      gas: 5000000,
      gasPrice: 20000000000000,
      gasLimit: 1500000
    },
    tomomainnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, 'https://rpc.tomochain.com', 0, 1, true, "m/44'/889'/0'/0/"),
      network_id: '88',
      gas: 2000000,
      gasPrice: 10000000000000
    }
  }
};
