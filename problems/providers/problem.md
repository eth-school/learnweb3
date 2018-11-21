Web3 Providers

Before using web3 we will need to set a provider for it. A provider links to a running Ethereum node. For instance parity or geth. A node has the ability to view and interact with the blockchain.

For these exercise we will be using **https://infura.io** for our providers.

```js
var Web3 = require('web3');
var web3 = new Web3('http://localhost:8545');
// or
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// change provider
web3.setProvider('ws://localhost:8546');
// or
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
```

If you need to verify your current provider, calling

```js
web3.currentProvider
```

will return the currentProvider data.


## The challenge:

Create a file named `providers.js`.

Add the boilerplate below to the file and.

Create a Web3 object using the mainnet infura node **https://mainnet.infura.io/**

`console.log()` out the Web3 current provider host name.

`learnweb3 verify providers.js`



## Boilerplate
```js
const Web3 = require('Web3');
```
