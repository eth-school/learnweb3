const Web3 = require('Web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'));

console.log(web3.eth.accounts.sign('ethschool', '0x84109d5f70a934923fb8d275aed6979b12a471581c70a7cdfa8eb45b5f95cb1c'));