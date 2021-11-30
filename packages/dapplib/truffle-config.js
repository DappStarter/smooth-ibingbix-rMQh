require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard regret meadow column guess battle fun genre'; 
let testAccounts = [
"0x317e94d1bae5510d3a1ccee644bbdd06f40e520dac608d3ee4765a32e8e1fd86",
"0x80ce8a0d501ca53a3d4bdde60ee98682d007f1fe14a19990d946cbccf934cded",
"0x0fea209d4b9d027a15edf123773c9a48634b07e0c60e3a7ccb831c7e30dc7d4a",
"0xbbe0a89f7331b94570701469efe204e57cddf65c288d035e1922ddf9210928a4",
"0xfaa00a58cea4599f6cefe6c3b4a8150f343fadff04f6eb884bb4bff7c7e9aabd",
"0x457419c6d0f8cf88ebb8c88d3d072f9ae72ab55a00e8a52ac1d04f903f1b173e",
"0x39908f664657a244be31ffdb4096da7ffca54ebd4dbc70f9f82d941a2bdd7d8f",
"0xfb98e6fdc9c97c6d16636af03284bfff4eb8aae1d010bca9a42a9b9480400c71",
"0x8705da9d76647f114b34f817c83da04d14a8b58825a5aacae43f6f2b00c8d573",
"0x87e08c558f5406bbedbd0df20747803ec87c1d19848d4f76b7b30741c6f5dc34"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


