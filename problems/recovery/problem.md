Recovery

Now that we have signed a message lets go through how to use a signature.

In the previous exercise we signed the message **ethschool** with a provided private key. The below object was returned to us.

```js
> web3.eth.accounts.sign('ethschool', '0x84109d5f70a934923fb8d275aed6979b12a471581c70a7cdfa8eb45b5f95cb1c')
{ message: 'ethschool',
  messageHash: '0xbbdc3eb889ebe2411b86bebe961c85e6b08d6d47428f50d9d284d25ec3f979b7',
  v: '0x1c',
  r: '0x0142fc6fc1e8d0ee77a9367e64914544986bbfada60922fd2adcc53535b02e6c',
  s: '0x3feddd0e0a2faf4e94d91f50d18707394fc2a594a4585cd788656ee858c48f38',
  signature: '0x0142fc6fc1e8d0ee77a9367e64914544986bbfada60922fd2adcc53535b02e6c3feddd0e0a2faf4e94d91f50d18707394fc2a594a4585cd788656ee858c48f381c'
}
```

The values v, r, s basicly are just made up from different parts of the **signature**.

So how do we use this?

If you have access to the data that was signed, and the signature of the data, we can use the web3 mehtod **recover** to recover the Ethereum address which was used to sign the given data.


```js
web3.eth.accounts.recover(message, signature);

// You could also use the v, r, and s values
web3.eth.accounts.recover(message, v, r, s);

```


## The challenge:

Create a file named `signing.js`.

Add the boilerplate below to the file and  `console.log()` out the Ethereum address that owns the signature.

`learnweb3 verify signing.js`



## Boilerplate
```js
const Web3 = require('Web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'));
```
