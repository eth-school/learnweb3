Ethereum accounts.

Accounts play a central role in Ethereum. There are two types of accounts: externally owned accounts (EOAs) and contract accounts.

Ethereum accounts use Elliptic-curve cryptography to create **public** and **private** keys which are used to sign and verify transactions.

Your Ethereum address is generated from you public key. `0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01`. Your public address is shareable, as can be thought of as a public email address - except you get sent crypto collectables and money instead of emails and spam.

Your private key `0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709` needs to be protected since it gives access to the ownership of your crypto -- via being ablet to sign transactions.

We can use the Web3 method `web3.eth.accounts.create()` to generate a new ethereum account, with a public and private key. This method will also
genreate the functions required to signTransacrtions, and encrypt/sign data with our account. We will come back to these methods later in this modules.

```js
{ address: '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01',
  privateKey: '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt] }
```


Your can also restore an Ethereum account object by `privateKeyToAccount(PRIVATE_KEY)` method.

```js
web3.eth.accounts.privateKeyToAccount('0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709');

{ address: '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01',
  privateKey: '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt] }
```


`web3.eth.accounts.wallet` contains all your in memory wallets. These accounts can be used when using web3.eth.sendTransaction().

You can also import an Ethereum into your web3 accounts wallet by using the `wallet.add()` method.


```js
  web3.eth.accounts.wallet.add('0x1d45b28880cbe035d50055046a5dca00d2f10766d1ded0b82693069ab618c55f');
```



## The challenge:

Create a file named `account.js`.

Use the `web3.eth.accounts.privateKeyToAccount()` method to restore the private key:

`0x241092bcf777320c4491cef1cc616784ebc6b7982543fce04051794e288cf4f6`.

Create an variable named **ADDRESS** and assign it to the public address of the above restored account and `console.log()` it.

Check to see if your program is correct by running this command:

  `learnweb3 verify account.js`


## Boilerplate

To get you started, copy the below code into a file called `account.js`

```js
const Web3 = require('Web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'))
```
