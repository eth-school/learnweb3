A ethereum wallet address or contract address can contain a **balance** of Ether.

To retrieve the value from a address (wallet or smart contract) we can use the web3 function `getBalance`.

```js

// Get the balance of an address at a given block.
// Returns a Promise

web3.eth.getBalance(address [, defaultBlock] [, callback])

```


## The challenge:

For this challenge, create a file named `balance.js`.

In that file create a variable named **balance**. Assign this variable to the balance of the address `0xf22f00d0b95b1b728078066e5f4410f6b2be8fae`.

Use `console.log` to print the variable **balance** to the terminal.

Check to see if your program is correct by running this command:

`web3 verify balance.js`


## Boilerplate

To get you started, copy the below code into a file called `balance.js`

```js
const Web3 = require('Web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'))
```
