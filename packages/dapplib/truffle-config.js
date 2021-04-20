require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remain mixture gesture spread fringe team'; 
let testAccounts = [
"0xf442ccf6e81056a239bce2b594c5fe292eaf286200bc5dd9346d38a04146196e",
"0x50d20d8701abb7aa844d104cc67e378a8b69eb9c83fd8da71ca4282c8baade74",
"0xcd5842421d9a01155ef7f6dfbd0b359b1685cee9366c7be2ad9aaf826cbfc43a",
"0xb20073b837a5ca4d72899ffedd9a1f279956fb1ea7e4be1a4b1a7aebff45b570",
"0xe67aeb9ac6988ff1400614dda240d508e36c9b2fadeb41419864faa01f9ad7ad",
"0xb672157ac1742669bdddcfab444e494ca32b984ac21ff33e4a9cf84d8590d92d",
"0x4b0b04205b6e7fe88cc7dd7c480deea470e8b029aa751f3661d365aecebe73bd",
"0x4bc59f61e316ea55d01c7d2749f2185f6f7e91fd6c4eb412aed6439822c942d9",
"0x577d526f1fcfe55dfed42621ea0d06d0f71be27973699610112f6b2febb2bfd6",
"0xf64de6069026ce32893234975db30ae323a712354cde1e4e93c0f2e0571d3dd1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
