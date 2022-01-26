import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { isPrime } from "./is-prime.ts"
// True tests
Deno.test("should return true for 2", async () => {
    assertEquals(isPrime(2), true)
})
Deno.test("should return true for 3", async () => {
    assertEquals(isPrime(3), true)
})
Deno.test("should return true for 17", async () => {
    assertEquals(isPrime(17), true)
})
Deno.test("should return true for 97", async () => {
    assertEquals(isPrime(97), true)
})
// False tests
Deno.test("should return false for 1", async () => {
    assertEquals(isPrime(1), false)
})
Deno.test("should return false for 4", async () => {
    assertEquals(isPrime(4), false)
})
Deno.test("should return false for 120", async () => {
    assertEquals(isPrime(120), false)
})