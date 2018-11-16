const Web3 = require('Web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'))



web3.eth.getBalance("0xf22f00d0b95b1b728078066e5f4410f6b2be8fae")
.then(console.log);
