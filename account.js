const Web3 = require('Web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'))

const ADDRESS = web3.eth.accounts.privateKeyToAccount('0x241092bcf777320c4491cef1cc616784ebc6b7982543fce04051794e288cf4f6').address;

console.log(ADDRESS);
