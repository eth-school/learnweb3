```Web3.utils``` provides utility functions for Ethereum dapps and other web3.js packages.


Two of the most common utils you will find yourself using is ```toWei``` and ```fromWei```.


NOTE: “wei” are the smallest ethere unit, and you should always make calculations in wei and convert only for display reasons.


Below are all possible ether value and their amount in wei.

```js
Web3.utils.unitMap

unitMap:
{ noether: '0',
  wei: '1',
  kwei: '1000',
  Kwei: '1000',
  babbage: '1000',
  femtoether: '1000',
  mwei: '1000000',
  Mwei: '1000000',
  lovelace: '1000000',
  picoether: '1000000',
  gwei: '1000000000',
  Gwei: '1000000000',
  shannon: '1000000000',
  nanoether: '1000000000',
  nano: '1000000000',
  szabo: '1000000000000',
  microether: '1000000000000',
  micro: '1000000000000',
  finney: '1000000000000000',
  milliether: '1000000000000000',
  milli: '1000000000000000',
  ether: '1000000000000000000',
  kether: '1000000000000000000000',
  grand: '1000000000000000000000',
  mether: '1000000000000000000000000',
  gether: '1000000000000000000000000000',
  tether: '1000000000000000000000000000000' },
```


## The challenge:

Create a file named `web3-utils.js`.

In that file import the Web3 package.

Have your javascript file log both the below.

```
1) The value "50000000000000000" as wei
2) The value "0.05" as ether
```

Check to see if your program is correct by running this command:

`learnweb3 verify web3-utils.js`
