What is hashing?

A hash function is any function that can be used to map data of arbitrary size to data of a fixed size. Ethereum uses KECCAK-256 for its hashing.

There are many uses for hash functions within Ethereum, and alot of the cryptography under the hood will be powered by hashes.

**Futher reading** https://blockgeeks.com/guides/what-is-hashing/


In the next few lessions, we will cover the use of hashing as it relates to signing and recovering messages. We will later apply what we learn here to transactions.


Hashing data with web3 is super simple. The web3 object contains a method **hashMessage** which we can use to hash any data.

```js web3.eth.accounts.hashMessage(message)```

There are many use cases for hashes, but one example could be around on-chain storage. You could hash your novel you've been writing and store the hash on the blockchain. The nice thing about hashing is you get a fixed size result - it doesn't matter how much data you hash, your result will always be the same size.

```js
web3.eth.accounts.hashMessage(SOME_BIG_NOVEL)
> 0x369ae5bf3f62f4d75320fc13260f7e2e6efaa5bf6e22e398076d46ca7919f88b
```

This way you could prove in the future you own the content (since you hashed it) by proving you can re-create the hash.



## The challenge:

Create a file named `hashing.js`.

Add the boilerplate below to the file and  `console.log()` out the hash of the following message **ethschool**.

`learnweb3 verify hashing.js`



## Boilerplate

To get you started, copy the below code into a file called `hashing.js`

```js
const Web3 = require('Web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'))
```
