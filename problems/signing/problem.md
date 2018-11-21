Signing

It's common when building dApps to use account signatures for all types of secure messaging. Address signatures can be used to prove address ownership, such as with sign in / auth, and they work completely off chain.

You can use web3 to sign data with a provided private key by using the sign function.

```js
web3.eth.accounts.sign(data, privateKey);
```

**Parameters**
```
data - String: The data to sign.

privateKey - String: The private key to sign with.
```

## The challenge:

Create a file named `signing.js`.

Add the boilerplate below to the file.

Use the private key ```0x84109d5f70a934923fb8d275aed6979b12a471581c70a7cdfa8eb45b5f95cb1c``` to sign the message **ethschool**

`console.log()` out the signed data object return by the sign function.

`learnweb3 verify signing.js`



## Boilerplate
```js
const Web3 = require('Web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'))
```
