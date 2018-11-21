const Web3 = require('Web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'));

console.log(web3.eth.accounts.recover('ethschool', '0x0142fc6fc1e8d0ee77a9367e64914544986bbfada60922fd2adcc53535b02e6c3feddd0e0a2faf4e94d91f50d18707394fc2a594a4585cd788656ee858c48f381c'));