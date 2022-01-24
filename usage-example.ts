import { isPrime } from "https://deno.land/x/isprime/mod.ts"

// Will return true for a prime number
const primeNumber = 11
console.log(`Is ${primeNumber} a prime number? ${isPrime(primeNumber)}`)

// Will return false for non prime numbers
const noPrimeNumber = 24
console.log(`Is ${noPrimeNumber} a prime number? ${isPrime(noPrimeNumber)}`)


