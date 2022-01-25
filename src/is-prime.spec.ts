import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { isPrime } from "./is-prime.ts"

Deno.test("should return true for 17", async () => {
    assertEquals(isPrime(17), true)
})

Deno.test("should return false for 20 and for 4", async () => {
    assertEquals(isPrime(20), false)
    assertEquals(isPrime(4), false)
})
