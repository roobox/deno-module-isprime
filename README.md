# isPrime

This module allows you to easily check wether a number is prime or not

## Usage Examples

```sh 
deno run https://deno.land/x/isprime/usage-example.ts
```


```ts

import { isPrime } from "https://deno.land.x/isprime/mod.ts"

// Will return true for a prime number
const primeNumber = 11
console.log(`Is ${primeNumber} a prime number? ${isPrime(primeNumber)}`)

```