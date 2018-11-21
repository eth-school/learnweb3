const Web3 = require('Web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'))

console.log(web3.eth.accounts.hashMessage('ethschool'));